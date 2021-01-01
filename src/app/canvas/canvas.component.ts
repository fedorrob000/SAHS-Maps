import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

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

    ngOnInit(): void {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx.strokeStyle = 'rgb(200, 0, 0)';
        this.ctx.moveTo(10, 10);
        this.ctx.lineTo(20, 20);
        this.ctx.stroke();
    }

    animate(): void {

    }


}
