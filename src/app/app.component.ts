import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Graph, GraphEdge, GraphVertex} from 'actslib';
import {Room} from './room';
import {ROOMS} from './rooms';
import {EDGES} from './edges';
import {CLASSREFERENCES} from './classreferences';
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
        this.ctx.clearRect(0,0,3000,2000);
        this.ctx.scale(this.scale, this.scale);
        this.ctx.drawImage(this.img, 0, 0);
        this.ctx.strokeStyle = '#ff0000';

        // draw all edges
        if (this.currentlySelectedUpstairs) {
          this.ctx.lineWidth = 10;
          // for (let i = 0; i < this.graph.EdgeNumber(); i++) {
          //   if (i < 63) {
          //     this.drawEdge(this.graph.Edges()[i]);
          //   }
          // }
        } else {
          this.ctx.lineWidth = 9;
          // for (let i = 0; i < this.graph.EdgeNumber(); i++) {
          //   if (i >= 63) {
          //     this.drawEdge(this.graph.Edges()[i]);
          //   }
          // }
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
    StartID = this.formToID(form.value.start);
    EndID = this.formToID(form.value.end);
    this.makePath(StartID,EndID);
  }

  formToID(room: string): number{
    for (let i = 0; i < CLASSREFERENCES.length; i++)
    {
      if (room === CLASSREFERENCES[i].RealRoom)
      {
        return this.roomToID(CLASSREFERENCES[i].RefRoom)
      }
      // Add error if room doesn't exist
    }
  }

  drawEdge(edge: GraphEdge<any>): void {
    // const room1: Room = this.graph.Vertexs().find(v => v.id === edge.to).value;
    // const room2: Room = this.graph.Vertexs().find(v => v.id === edge.from).value;
    //
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

  // plan for keeping lines when switching map
  // 1. make class variable number array
  // 2. when calling shortest path update this array
  // 3. split makePath method into makePath and drawLines
  // 4. drawLines will take array as input
  // 5. have onload call drawLines
  makePath(start: number, end: number): void {
    // shortest path stuff
    this.ctx.drawImage(this.img, 0, 0);
    const path = new ShortestPath(this.graph);
    let route: number[] = [];
    route = path.shortestPath(start, end);
    this.ctx.beginPath();
    for (let i = 0; i < route.length - 1; i++) {
      if (!(ROOMS[route[i] - 1].roomNumber.charAt(0) === 'S' && ROOMS[route[i + 1] - 1].roomNumber.charAt(0) === 'S')) {
        if ((ROOMS[route[i] - 1].roomNumber.charAt(3) === 'U' && this.currentlySelectedUpstairs) ||
          ROOMS[route[i] - 1].roomNumber.charAt(3) === 'D' && !this.currentlySelectedUpstairs) {
            this.ctx.moveTo(ROOMS[route[i] - 1].xPosition * this.scale, ROOMS[route[i] - 1].yPosition * this.scale);
            this.ctx.lineTo(ROOMS[route[i + 1] - 1].xPosition * this.scale, ROOMS[route[i + 1] - 1].yPosition * this.scale);
            this.ctx.stroke();
        }
      }
    }
  }
}


/*
  RANDOM ROOM CONNECTOR
  drawLines(): void {
    // shortest path stuff
    this.ctx.clearRect(0,0,3000,2000);
    this.ctx.drawImage(this.img, 0, 0);
    const path = new ShortestPath(this.graph);
    let route: number[] = [];
    route = path.shortestPath(start,end);
    let randomNumber: number;
    let randomNumber2: number;
    randomNumber = Math.floor(Math.random() * 58 + 1);
    randomNumber2 = Math.floor(Math.random() * 58 + 1);
    // route = path.shortestPath(this.roomToID('E33U'), this.roomToID('C33U'));
    route = path.shortestPath(randomNumber, randomNumber2);
    console.log('\x1b[31m%s\x1b[0m', ROOMS[randomNumber].roomNumber);
    console.log('\x1b[31m%s\x1b[0m', ROOMS[randomNumber2].roomNumber);
    for (let i = 0; i < route.length - 1; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(ROOMS[route[i] - 1].xPosition * this.scale, ROOMS[route[i] - 1].yPosition * this.scale);
      this.ctx.lineTo(ROOMS[route[i + 1] - 1].xPosition * this.scale, ROOMS[route[i + 1] - 1].yPosition * this.scale);
      this.ctx.stroke();
    }
  }
*/


// broken paths
// E11U to C35U
// E30U to E25U
// E32U to E11U
// E11U to C35U
// E33U to E27U
