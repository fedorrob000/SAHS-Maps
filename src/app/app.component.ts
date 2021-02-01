/*
AUTHORS
Robert Michael Fedor
Noah Michael Ritter
 */
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Graph, GraphEdge, GraphVertex} from 'actslib';
import {Room} from './room';
import {ROOMS} from './rooms';
import {EDGES} from './edges';
import {CLASSREFERENCES} from './classreferences';
import {ShortestPath} from './ShortestPath';

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
  private route: number[] = [];

  ngOnInit(): void {
    // run only on first load of app ------------------------------------------------------------------------------
    if (this.firstRun) {

      // draw map
      this.ctx = this.canvas.nativeElement.getContext('2d');
      this.img.src = 'assets/SAHS_MAP.png';

      this.img.onload = () => {
        this.ctx.clearRect(0, 0, 3000, 2000);
        this.ctx.scale(this.scale, this.scale);
        this.ctx.drawImage(this.img, 0, 0);
        this.ctx.strokeStyle = '#ff0000';

        // draw all edges
        if (this.currentlySelectedUpstairs) {
          this.ctx.lineWidth = 10;
        } else {
          this.ctx.lineWidth = 9;
        }
        this.drawLines();

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

  onSubmit(form: NgForm): void {
    let StartID: number;
    let EndID: number;
    console.log('Your form data : ', form.value);
    StartID = this.formToID(form.value.start);
    EndID = this.formToID(form.value.end);
    this.makePath(StartID, EndID);
  }

  formToID(room: string): number{
    for (let i = 0; i < CLASSREFERENCES.length; i++)
    {
      if (room.toUpperCase() === CLASSREFERENCES[i].RealRoom)
      {
        return this.roomToID(CLASSREFERENCES[i].RefRoom);
      }
      // Add error if room doesn't exist
    }
    this.route = null;
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

  makePath(start: number, end: number): void {
    // shortest path stuff
    const path = new ShortestPath(this.graph);
    this.route = path.shortestPath(start, end);
    this.drawLines();
  }

  drawLines(): void {
    this.ctx.drawImage(this.img, 0, 0);
    this.ctx.beginPath();
    for (let i = 0; i < this.route.length - 1; i++) {
      if (!(ROOMS[this.route[i] - 1].roomNumber.charAt(0) === 'S' && ROOMS[this.route[i + 1] - 1].roomNumber.charAt(0) === 'S')) {
        if ((ROOMS[this.route[i] - 1].roomNumber.charAt(3) === 'U' && this.currentlySelectedUpstairs) ||
          ROOMS[this.route[i] - 1].roomNumber.charAt(3) === 'D' && !this.currentlySelectedUpstairs) {
          this.ctx.moveTo(ROOMS[this.route[i] - 1].xPosition * this.scale, ROOMS[this.route[i] - 1].yPosition * this.scale);
          this.ctx.lineTo(ROOMS[this.route[i + 1] - 1].xPosition * this.scale, ROOMS[this.route[i + 1] - 1].yPosition * this.scale);
          this.ctx.stroke();
        }
      }
    }
  }
}
