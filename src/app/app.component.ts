import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Graph, GraphEdge, GraphVertex} from 'actslib';
import {Room} from './room';
import {ROOMS} from './rooms';


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
      this.ctx.strokeStyle = '#ff0000';
      this.ctx.lineWidth += 3;

      // add all rooms as vertices
      ROOMS.forEach(room => this.graph.AddVertex(this.graph.Vertexs().length + 1, room));
      // console.log(this.roomToID('H212'));

      // hall C north upstairs test
      this.graph.AddEdge(this.roomToID('C11U'), this.roomToID('C12U'), 1); // main hall to C202
      this.graph.AddEdge(this.roomToID('C12U'), this.roomToID('C13U'), 1); // C202 to C203/C204
      this.graph.AddEdge(this.roomToID('C13U'), this.roomToID('C14U'), 1); // C203/C204 to C205
      this.graph.AddEdge(this.roomToID('C14U'), this.roomToID('C15U'), 1); // C205 to C206/C207
      this.graph.AddEdge(this.roomToID('C15U'), this.roomToID('C16U'), 1); // C206/C207 to C208
      this.graph.AddEdge(this.roomToID('C16U'), this.roomToID('C17U'), 1); // C208 to C209/C210
      this.graph.AddEdge(this.roomToID('C17U'), this.roomToID('C18U'), 1); // C209/C210 to C211/C212/hallway
      this.graph.AddEdge(this.roomToID('C18U'), this.roomToID('C19U'), 1); // C211/C212 to stairs

      //hall C east upstairs 1 test
      this.graph.AddEdge(this.roomToID('C18U'), this.roomToID('C28U'), 1); // C211/C212/hallway to C222/hallway/C221/C224

      //hall C east upstairs 2 test
      this.graph.AddEdge(this.roomToID('C30U'), this.roomToID('C31U'), 1);  //C222/C220 to C230
      this.graph.AddEdge(this.roomToID('C31U'), this.roomToID('C32U'), 1);  //C230 to C232/C235
      this.graph.AddEdge(this.roomToID('C32U'), this.roomToID('C33U'), 1);  //C232/C235 to C237
      this.graph.AddEdge(this.roomToID('C33U'), this.roomToID('C34U'), 1);  //C237 to C234
      this.graph.AddEdge(this.roomToID('C34U'), this.roomToID('C35U'), 1);  //C234 to hallway

      // hall C south upstairs test
      this.graph.AddEdge(this.roomToID('C21U'), this.roomToID('C22U'), 1); // main hall to C214/C215
      this.graph.AddEdge(this.roomToID('C22U'), this.roomToID('C23U'), 1); // C214/C215 to C216
      this.graph.AddEdge(this.roomToID('C23U'), this.roomToID('C24U'), 1); // C216 to C217/C218
      this.graph.AddEdge(this.roomToID('C24U'), this.roomToID('C25U'), 1); // C217/C218 to C220
      this.graph.AddEdge(this.roomToID('C25U'), this.roomToID('C26U'), 1); // C220 to hallway
      this.graph.AddEdge(this.roomToID('C26U'), this.roomToID('C27U'), 1); // hallway to C219
      this.graph.AddEdge(this.roomToID('C27U'), this.roomToID('C28U'), 1); // C219 to C222/hallway/C221/C224
      this.graph.AddEdge(this.roomToID('C28U'), this.roomToID('C29U'), 1); // C222/hallway/C221/C224 to stairs

      // hall E north upstairs test
      this.graph.AddEdge(this.roomToID('E11U'), this.roomToID('E12U'), 1); // main hall to E202/E203
      this.graph.AddEdge(this.roomToID('E12U'), this.roomToID('E13U'), 1); // E202/E203 to E204
      this.graph.AddEdge(this.roomToID('E13U'), this.roomToID('E14U'), 1); // E204 to E205
      this.graph.AddEdge(this.roomToID('E14U'), this.roomToID('E15U'), 1); // E205 to E207
      this.graph.AddEdge(this.roomToID('E15U'), this.roomToID('E16U'), 1); // E207 to E206
      this.graph.AddEdge(this.roomToID('E16U'), this.roomToID('E17U'), 1); // E206 to E208
      this.graph.AddEdge(this.roomToID('E17U'), this.roomToID('E18U'), 1); // E208 to E209/E210/E211/E212/hallway
      this.graph.AddEdge(this.roomToID('E18U'), this.roomToID('E19U'), 1); // E209/E210/E211/E212/hallway to stairs

      // hall E south upstairs test
      this.graph.AddEdge(this.roomToID('E21U'), this.roomToID('E22U'), 1); // main hall/E214 to E216/E215
      this.graph.AddEdge(this.roomToID('E22U'), this.roomToID('E23U'), 1); // E216/E215 to E218
      this.graph.AddEdge(this.roomToID('E23U'), this.roomToID('E24U'), 1); // E218 to E217
      this.graph.AddEdge(this.roomToID('E24U'), this.roomToID('E25U'), 1); // E217 to E220
      this.graph.AddEdge(this.roomToID('E25U'), this.roomToID('E26U'), 1); // E220 to E222
      this.graph.AddEdge(this.roomToID('E26U'), this.roomToID('E27U'), 1); // E222 to E223/E224/E225/E226/hallway
      this.graph.AddEdge(this.roomToID('E27U'), this.roomToID('E28U'), 1); // E223/E224/E225/E226/hallway to stairs

      // hall E east upstairs test
      this.graph.AddEdge(this.roomToID('E29U'), this.roomToID('E30U'), 1); // E223/E224/E225/E226/hallway to E209/E210/E211/E212/hallway
      this.graph.AddEdge(this.roomToID('E30U'), this.roomToID('E31U'), 1); // E209/E210/E211/E212/hallway to E230/E232
      this.graph.AddEdge(this.roomToID('E31U'), this.roomToID('E32U'), 1); // E230/E232 to E235
      this.graph.AddEdge(this.roomToID('E32U'), this.roomToID('E33U'), 1); // E235 to E234/E236
      this.graph.AddEdge(this.roomToID('E33U'), this.roomToID('E34U'), 1); // E236 to stairwell

      // hall D north upstairs test
      this.graph.AddEdge(this.roomToID('D11U'), this.roomToID('D12U'), 1); // E-Hall-North to D208
      this.graph.AddEdge(this.roomToID('D12U'), this.roomToID('D13U'), 1); // D208 to D212
      this.graph.AddEdge(this.roomToID('D13U'), this.roomToID('D14U'), 1); // D212 to D214/D216

      // hall D south upstairs test
      this.graph.AddEdge(this.roomToID('D21U'), this.roomToID('D22U'), 1); // E-Hall-South to D220
      this.graph.AddEdge(this.roomToID('D22U'), this.roomToID('D23U'), 1); // D220 to D218
      this.graph.AddEdge(this.roomToID('D23U'), this.roomToID('D24U'), 1); // D218 to above stairs
      this.graph.AddEdge(this.roomToID('D24U'), this.roomToID('D25U'), 1); // above stairs to stairs

      //main hall upstairs test
      this.graph.AddEdge(this.roomToID('C11U'), this.roomToID('C21U'), 1); // C-Hall-North to C-Hall-South
      this.graph.AddEdge(this.roomToID('C21U'), this.roomToID('M1U'), 1); // C-Hall-South to right of D206
      this.graph.AddEdge(this.roomToID('M1U'), this.roomToID('D11U'), 1); // right of D206 to D-Hall-North
      this.graph.AddEdge(this.roomToID('D11U'), this.roomToID('M2U'), 1); // D-Hall-North to center of main hall
      this.graph.AddEdge(this.roomToID('M2U'), this.roomToID('M0U'), 1); // center of main hall to D203/D204/D205/D206
      this.graph.AddEdge(this.roomToID('M2U'), this.roomToID('D21U'), 1); // center of main hall to D-Hall-South
      this.graph.AddEdge(this.roomToID('D21U'), this.roomToID('M3U'), 1); // D-Hall-South to right of D204
      this.graph.AddEdge(this.roomToID('M3U'), this.roomToID('E11U'), 1); // right of D204 to E-Hall-North
      this.graph.AddEdge(this.roomToID('E11U'), this.roomToID('E21U'), 1); // E-Hall-North to E-Hall-South


      for (let i = 0; i < this.graph.EdgeNumber(); i++) {
        this.connectRooms(this.graph.Edges()[i]);
      }
    };

    this.ctx.canvas.width = 1400;
    this.ctx.canvas.height = 1500;
    this.ctx.drawImage(img, 10, 10);

  }

  connectRooms(edge: GraphEdge<any>): void {
    const room1: Room = this.graph.Vertexs().find(v => v.id === edge.to).value;
    const room2: Room = this.graph.Vertexs().find(v => v.id === edge.from).value;

    this.ctx.moveTo(room1.xPosition * this.scale, room1.yPosition * this.scale);
    this.ctx.lineTo(room2.xPosition * this.scale, room2.yPosition * this.scale);
    this.ctx.stroke();
  }

  roomToID(roomNum: string): number {
    return this.graph.Vertexs().find(v => v.value.roomNumber === roomNum).id;
  }


}
