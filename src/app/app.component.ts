import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Graph} from 'actslib';
import {Room} from './room';
import {ROOMS} from './rooms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SAHS Maps';

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private graph = new Graph<Room, number>();

  // VERTEX(ID, DATA)
  // EDGE(FROM, TO, WEIGHT)

  ngOnInit(): void {
    // draw map
    const img = document.getElementById('SAHS_MAP_UP.png');

    this.graph.AddVertex(1,ROOMS[0]);
    this.graph.AddVertex(2,ROOMS[1]);
    this.graph.AddEdge(1, 2, 1);

  }

}
