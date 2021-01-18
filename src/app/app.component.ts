import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Graph, GraphEdge, GraphVertex} from 'actslib';
import {Room} from './room';
import {ROOMS} from './rooms';
import {EDGES} from './edges';
import {CLASSREFERENCES} from './classreferences'
import {ShortestPath} from './canvas/ShortestPath';


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
  private currentlySelectedUpstairs = false;

  ngOnInit(): void {
    // run only on first load of app ------------------------------------------------------------------------------
    if (this.firstRun) {

      // draw map
      this.ctx = this.canvas.nativeElement.getContext('2d');
      this.img.src = 'assets/SAHS_MAP.png';

      this.img.onload = () => {
        this.ctx.scale(this.scale, this.scale);
        this.ctx.drawImage(this.img, 0, 0);
        this.ctx.strokeStyle = '#ff0000';

        // draw all edges
        if (this.currentlySelectedUpstairs) {
          this.ctx.lineWidth = 10;
          for (let i = 0; i < this.graph.EdgeNumber(); i++) {
            if (i < 58) {
              this.drawEdge(this.graph.Edges()[i]);
            }
          }
        } else {
          this.ctx.lineWidth = 9;
          for (let i = 0; i < this.graph.EdgeNumber(); i++) {
            if (i >= 58) {
              this.drawEdge(this.graph.Edges()[i]);
            }
          }
        }

      };

      this.ctx.canvas.width = 2200;
      // this.ctx.canvas.height = 1500;                      1500 default for up, 1650 default for down
      this.ctx.canvas.height = 1650;
      this.ctx.drawImage(this.img, 10, 10);
      this.firstRun = false;

      // add all rooms as vertices
      ROOMS.forEach(room => {
        this.graph.AddVertex(this.graph.Vertexs().length + 1, room);
      });

      // add all edges to graph
      EDGES.forEach(edge => {
          try {
            this.graph.AddEdge(this.roomToID(edge.roomOne), this.roomToID(edge.roomTwo), edge.weight);
          } catch (e) {
            console.error(e);
            this.ctx.font = '30px Arial';
            this.ctx.fillText(e + ' in method AddEdge with rooms: ' + edge.roomOne + ' and ' + edge.roomTwo, 50, 50);
            console.log(e + ' in method AddEdge with rooms: ' + edge.roomOne + ' and ' + edge.roomTwo, 50, 50);
          }
        }
      );
    }
    // end first run block -------------------------------------------------------------------------------------------------------

  }

  onSubmit(form: NgForm, StartID: number, EndID: number) {
    console.log('Your form data : ', form.value);
  }

  formToID(room: string) {
    console.log('Passed string: ' + room)

  }

  drawEdge(edge: GraphEdge<any>): void {
    // const room1: Room = this.graph.Vertexs().find(v => v.id === edge.to).value;
    // const room2: Room = this.graph.Vertexs().find(v => v.id === edge.from).value;

    // this.ctx.beginPath();
    // this.ctx.moveTo(room1.xPosition * this.scale, room1.yPosition * this.scale);
    // this.ctx.lineTo(room2.xPosition * this.scale, room2.yPosition * this.scale);
    // this.ctx.stroke();
  }

  roomToID(roomNum: string): number {
    return this.graph.Vertexs().find(v => v.value.roomNumber === roomNum).id;
  }

  switchMap(): void {
    if (this.currentlySelectedUpstairs) {
      this.ctx.canvas.height = 1650;
      this.img.src = 'assets/SAHS_MAP.png';
      this.currentlySelectedUpstairs = false;
    } else {
      this.ctx.canvas.height = 1500;
      this.img.src = 'assets/SAHS_MAP_UP.png';
      this.currentlySelectedUpstairs = true;
    }
  }


  async drawLines(start: number, end: number): Promise<void> {
    // shortest path stuff
    const path = new ShortestPath(this.graph);
    let route: number[] = [];
    //route = path.shortestPath(this.roomToID('E33U'), this.roomToID('C33U'));
    route = path.shortestPath(start,end);
    for (let i = 0; i < route.length - 1; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(ROOMS[route[i] - 1].xPosition * this.scale, ROOMS[route[i] - 1].yPosition * this.scale);
      this.ctx.lineTo(ROOMS[route[i + 1] - 1].xPosition * this.scale, ROOMS[route[i + 1] - 1].yPosition * this.scale);
      this.ctx.stroke();
      console.log(ROOMS[route[i]]);
      console.log(ROOMS[route[i + 1]]);
    }
  }
}
