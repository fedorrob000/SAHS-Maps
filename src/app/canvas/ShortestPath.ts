import {Graph, GraphEdge, GraphVertex} from 'actslib';
import {Room} from '../room';

class GraphContainer {
  constructor(visited: number, visitedfrom: GraphContainer, num: number) {
    this.graphID = visited;
    this.visitedfrom = visitedfrom;
    this.dist = num;
  }

  visitedfrom: GraphContainer;
  graphID: number;
  dist: number;
}

export class ShortestPath {

  private graph: Graph<Room, any>;

  constructor(graphIn: Graph<Room, any>) {
    this.graph = graphIn;
  }

  roomToID(roomNum: string): number {
    return this.graph.Vertexs().find(v => v.value.roomNumber === roomNum).id;
  }

  shortestPathRooms(roomOne: Room, roomTwo: Room): Room[] {
    const roomOrder: number[] = this.shortestPath(this.roomToID(roomOne.roomNumber), this.roomToID(roomTwo.roomNumber));
    const roomsOut: Room[] = [];

    roomOrder.forEach(vertexID => {
      roomsOut.push(this.graph.Vertexs().find(room => room.id === vertexID).value);
    });

    return roomsOut;
  }

  shortestPath(startNode: number, stopNode: number): number[] {

    console.log('Starting shortest path');

    const visited: GraphContainer[] = [];
    let unvisited: GraphContainer[] = [];

    this.graph.Vertexs().forEach(value => {
      if (value.id === startNode) {
        unvisited.push(new GraphContainer(value.id, null, 0));
      }
    });

    while (unvisited.length > 0) {
      console.log('unvisited length: ' + unvisited.length);
      unvisited.sort((e, b) => b.dist - e.dist);
      unvisited.forEach(node => console.log(' { id : ' + this.graph.Vertexs()[node.graphID - 1].value.roomNumber + ', dist: ' + node.dist + ' } '));
      const currentNode = unvisited.pop();

      if (currentNode.graphID === stopNode) {
        return this.getPath(currentNode);
      }
      console.log('current node id: ' + this.graph.Vertexs()[currentNode.graphID - 1].value.roomNumber);
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
                unvisited.push(new GraphContainer(edge.to, currentNode, currentNode.dist + edge.weight));
              } else {
                unvisited.push(new GraphContainer(edge.to, currentNode, currentNode.dist + edge.weight));
              }
            }
          } else {
            if (visited.some(e => e.graphID === edge.from)) {
            } else {
              if (unvisited.some(e => e.graphID === edge.from)) {
                unvisited = unvisited.filter(obj => obj.graphID !== edge.from);
                unvisited.push(new GraphContainer(edge.from, currentNode, currentNode.dist + edge.weight));
              } else {
                unvisited.push(new GraphContainer(edge.from, currentNode, currentNode.dist + edge.weight));
              }
            }
          }
        }
      );
    }

    return [];
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async shortestPathDEBUG(startNode: number, stopNode: number, canvas: CanvasRenderingContext2D, sleepTime: number): Promise<number[]> {

    console.log('Starting shortest path');
    canvas.font = "30px Arial";


    const visited: GraphContainer[] = [];
    let unvisited: GraphContainer[] = [];

    this.graph.Vertexs().forEach(value => {
      if (value.id === startNode) {
        unvisited.push(new GraphContainer(value.id, null, 0));
        canvas.fillText('0', value.value.xPosition, value.value.yPosition);
      }
    });

    while (unvisited.length > 0) {
      console.log('unvisited length: ' + unvisited.length);
      unvisited.sort((e, b) => b.dist - e.dist);
      unvisited.forEach(node => console.log(' { id : ' + this.graph.Vertexs()[node.graphID - 1].value.roomNumber + ', dist: ' + node.dist + ' } '));
      const currentNode = unvisited.pop();

      if (currentNode.graphID === stopNode) {
        return this.getPath(currentNode);
      }
      console.log('current node id: ' + this.graph.Vertexs()[currentNode.graphID - 1].value.roomNumber);
      visited.push(currentNode);
      canvas.fillText(currentNode.dist + '', this.graph.Vertexs()[currentNode.graphID-1].value.xPosition, this.graph.Vertexs()[currentNode.graphID-1].value.yPosition);
      await this.sleep(sleepTime);
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
                // unvisited = unvisited.filter(obj => obj.graphID !== edge.to);
                // unvisited.push(new GraphContainer(edge.to, currentNode, currentNode.dist + edge.weight));
              } else {
                unvisited.push(new GraphContainer(edge.to, currentNode, currentNode.dist + edge.weight));
              }
            }
          } else {
            if (visited.some(e => e.graphID === edge.from)) {
            } else {
              if (unvisited.some(e => e.graphID === edge.from)) {
                // unvisited = unvisited.filter(obj => obj.graphID !== edge.from);
                // unvisited.push(new GraphContainer(edge.from, currentNode, currentNode.dist + edge.weight));
              } else {
                unvisited.push(new GraphContainer(edge.from, currentNode, currentNode.dist + edge.weight));
              }
            }
          }
        }
      );
    }

    return [];
  }

  private getPath(currentNode: GraphContainer): number[] {

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
