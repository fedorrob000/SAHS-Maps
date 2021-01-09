import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Graph} from 'actslib';
import {ShortestPath} from './ShortestPath';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

    constructor() {
    }

    @ViewChild('canvas', {static: true})
    canvas: ElementRef<HTMLCanvasElement>;

    private ctx: CanvasRenderingContext2D;
    out = 'test';

    private gaph = new Graph<string, number>();

    ngOnInit(): void {
        this.gaph.AddVertex(1, 'test1');
        this.gaph.AddVertex(2, 'test2');
        this.gaph.AddVertex(2, 'test3');
        this.gaph.AddVertex(3, 'test3');
        this.gaph.AddVertex(4, 'test4');
        this.gaph.AddVertex(5, 'test5');
        this.gaph.AddEdge(1, 2, 1);
        this.gaph.AddEdge(2, 3, 1);
        this.gaph.AddEdge(4, 2, 1);
        this.gaph.AddEdge(2, 5, 3);
        this.gaph.AddEdge(4, 5, 1);
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx.canvas.width = window.innerWidth - 100;
        this.ctx.canvas.height = window.innerHeight - 100;
    }

    animate(): void {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.drawAdjacencyMatrix(this.gaph, this.ctx);
        const path = new ShortestPath(this.gaph);
        console.log(path.shortestPath(1, 5));
    }

    drawAdjacencyMatrix(graph: Graph<any, number>, canvas: CanvasRenderingContext2D): void {

        const numNodes = graph.Vertexs().length;
        canvas.font = '15px';

        const ctxPosX = 10;
        const ctxPosY = 10;

        for (let i = 0; i < numNodes; i++) {
            canvas.fillText(String(graph.Vertexs()[i].id), ctxPosX + (i * 25) + 25, ctxPosY);
            canvas.fillText(String(graph.Vertexs()[i].id), ctxPosX, ctxPosY + (i * 25) + 25);
        }

        for (let x = 0; x < numNodes; x++) {
            for (let y = 0; y < numNodes; y++) {
                this.ctx.strokeRect(ctxPosX + 15 + (x * 25), ctxPosY + 8 + (y * 25), 25, 25);
            }
        }

        graph.Edges().forEach(e => {
            this.ctx.fillRect(ctxPosX + 15 + ((e.from - 1) * 25), ctxPosY + 8 + ((e.to - 1) * 25), 25, 25);
            this.ctx.fillRect(ctxPosX + 15 + ((e.to - 1) * 25), ctxPosY + 8 + ((e.from - 1) * 25), 25, 25);
        });
    }


}
