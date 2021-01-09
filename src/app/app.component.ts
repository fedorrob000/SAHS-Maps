import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Graph} from 'actslib';
import {Room} from './room';
import {ROOMS} from './rooms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SAHS Maps';
  private scale = .25;

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private graph = new Graph<Room, number>();

  // VERTEX(ID, DATA)
  // EDGE(FROM, TO, WEIGHT)

  ngOnInit(): void {
    // draw map
    this.ctx = this.canvas.nativeElement.getContext('2d');
    const img = new Image();
    img.src = 'assets/SAHS_MAP_UP.png';
    img.onload = () => {
      this.ctx.scale(this.scale, this.scale);
      this.ctx.drawImage(img, 0, 0);
      this.ctx.strokeStyle = '#FF0000';
      this.ctx.lineWidth += 3;
    };

    this.ctx.canvas.width = 1400;
    this.ctx.canvas.height = 1500;
    this.ctx.drawImage(img, 10, 10);

    ROOMS.forEach(room => this.graph.AddVertex(this.graph.Vertexs().length + 1, room));
    console.log(this.roomToID('H212'));

  }

  connectRooms(room1: Room, room2: Room): void {
    this.ctx.moveTo(room1.xPosition * this.scale, room1.yPosition * this.scale);
    this.ctx.lineTo(room2.xPosition * this.scale, room2.yPosition * this.scale);
    this.ctx.stroke();
  }

  roomToID(roomNum: string): number {
    return this.graph.Vertexs().find(v => v.value.roomNumber === roomNum).id;
  }

}
