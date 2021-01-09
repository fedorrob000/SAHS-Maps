import {Graph, GraphEdge, GraphVertex} from 'actslib';

class GraphContainer<T> {
    constructor(visited: number, visitedfrom: GraphContainer<any>, num: number) {
        this.graphID = visited;
        this.visitedfrom = visitedfrom;
        this.dist = num;
    }

    visitedfrom: GraphContainer<any>;
    graphID: number;
    dist: number;
}

export class ShortestPath<T> {

    private graph: Graph<T, any>;

    constructor(graphIn: Graph<T, any>) {
        this.graph = graphIn;
    }


    shortestPath(startNode: number, stopNode: number): number[] {

        console.log('Starting shortest path');

        const visited: GraphContainer<T>[] = [];
        let unvisited: GraphContainer<T>[] = [];

        this.graph.Vertexs().forEach(value => {
            if (value.id === startNode) {
                unvisited.push(new GraphContainer<T>(value.id, null, 0));
            }
        });

        while (unvisited.length > 0) {
            console.log('unvisited length: ' + unvisited.length);
            unvisited.sort((e, b) => b.dist - e.dist);
            unvisited.forEach(node => console.log(' { id : ' + node.graphID + ', dist: ' + node.dist + ' } '));
            const currentNode = unvisited.pop();

            if (currentNode.graphID === stopNode) {
                return this.getPath(currentNode);
            }
            console.log('current node id: ' + currentNode.graphID);
            visited.push(currentNode);
            const edges = this.getNodesEdges(currentNode.graphID);

            // Check to see if the edges are in visited or unvisited.
            edges.forEach(edge => {

                    let edgeStartIsFrom = false;
                    // Testing if current node is on the from or to side
                    if (currentNode.graphID === edge.from) {
                        edgeStartIsFrom = true;
                    }

                    if (edgeStartIsFrom) {
                        if (visited.some(e => e.graphID === edge.to)) {
                        } else {
                            if (unvisited.some(e => e.graphID === edge.to)) {
                                unvisited = unvisited.filter(obj => obj.graphID !== edge.to);
                                unvisited.push(new GraphContainer<T>(edge.to, currentNode, currentNode.dist + edge.weight));
                            } else {
                                unvisited.push(new GraphContainer<T>(edge.to, currentNode, currentNode.dist + edge.weight));
                            }
                        }
                    } else {
                        if (visited.some(e => e.graphID === edge.from)) {
                        } else {
                            if (unvisited.some(e => e.graphID === edge.from)) {
                                unvisited = unvisited.filter(obj => obj.graphID !== edge.from);
                                unvisited.push(new GraphContainer<T>(edge.from, currentNode, currentNode.dist + edge.weight));
                            } else {
                                unvisited.push(new GraphContainer<T>(edge.from, currentNode, currentNode.dist + edge.weight));
                            }
                        }
                    }
                }
            );
        }

        return [];
    }

    private getPath(currentNode: GraphContainer<T>): number[] {

        const out: number[] = [];
        let current = currentNode;

        while (current != null) {
            out.push(current.graphID);
            current = current.visitedfrom;
        }

        return out;
    }

    private getNodesEdges(node: number): GraphEdge<any>[] {

        const edgesOut: GraphEdge<any> [] = [];

        this.graph.Edges().forEach(e => {
            if (e.from === node || e.to === node) {
                edgesOut.push(e);
            }
        });

        return edgesOut;
    }

}
