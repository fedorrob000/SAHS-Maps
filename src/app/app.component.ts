import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Graph, GraphEdge, GraphVertex} from 'actslib';
import {Room} from './room';
import {ROOMS} from './rooms';
import {EDGES} from './edges';
import {ShortestPath} from "./canvas/ShortestPath";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SAHS Maps';
  private scale = 1;

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private graph = new Graph<Room, number>();

  private img = new Image();

  private firstRun = true;
  private firstRun2 = true;
  ngOnInit(): void {
    // run only on first load of app ----------------------------------------------------
    if (this.firstRun) {

      // draw map
      this.ctx = this.canvas.nativeElement.getContext('2d');
      this.img.src = 'assets/SAHS_MAP.png';

      this.img.onload = () => {
        this.ctx.scale(this.scale, this.scale);
        this.ctx.drawImage(this.img, 0, 0);

        //draw all edges
       if (this.firstRun2) {
          this.ctx.strokeStyle = '#ff0000';
          this.ctx.lineWidth = 3;
          for (let i = 0; i < this.graph.EdgeNumber(); i++) {
            this.drawEdge(this.graph.Edges()[i]);
          }
          this.firstRun2 = false;
       }
        //shortest path stuff
        // const path = new ShortestPath(this.graph);
        // console.log(path.shortestPath(this.roomToID('C11U'), this.roomToID('D24U')));
      };

      this.ctx.canvas.width = 2200;
      //this.ctx.canvas.height = 1500;                      1500 default for up, 1650 default for down
      this.ctx.canvas.height = 1650;
      this.ctx.drawImage(this.img, 10, 10);
      this.firstRun = false;

      // add all rooms as vertices
      ROOMS.forEach(room => this.graph.AddVertex(this.graph.Vertexs().length + 1, room));
      console.log('hello');

      // add all edges to graph
      EDGES.forEach(edge => {
          try {
            this.graph.AddEdge(this.roomToID(edge.roomOne), this.roomToID(edge.roomTwo), edge.weight);
          } catch (e) {
            console.error(e);
            this.ctx.font = '30px Arial';
            this.ctx.fillText(e + ' in method AddEdge with rooms: ' + edge.roomOne + ' and ' + edge.roomTwo, 50, 50);
          }
        }
      );

    }
    // end first run block -------------------------------------------------------------------------------------------------------

  }

  drawEdge(edge: GraphEdge<any>): void {
    const room1: Room = this.graph.Vertexs().find(v => v.id === edge.to).value;
    const room2: Room = this.graph.Vertexs().find(v => v.id === edge.from).value;

    this.ctx.beginPath();
    this.ctx.moveTo(room1.xPosition * this.scale, room1.yPosition * this.scale);
    this.ctx.lineTo(room2.xPosition * this.scale, room2.yPosition * this.scale);
    this.ctx.stroke();
  }

  roomToID(roomNum: string): number {
    return this.graph.Vertexs().find(v => v.value.roomNumber === roomNum).id;
  }

  private switchMapNum = 1;
  switchMap(): void {
    if (this.switchMapNum % 2 === 1) {
      // this.ctx.canvas.width = 1400;
      // this.ctx.canvas.height = 1500;
      this.ctx.canvas.height = 1500;
      this.img.src = 'assets/SAHS_MAP_UP.png';
    } else {
      this.ctx.canvas.height = 1650;
      this.img.src = 'assets/SAHS_MAP.png';
      for (let i = 0; i < this.graph.EdgeNumber(); i++) {
    }
    this.switchMapNum++;
  }
}
}
