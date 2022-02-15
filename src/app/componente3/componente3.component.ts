import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  @Input("curso2") curso2Cnt3:any;
  @Input("contador") contadorCnt3:any;

  constructor() { }

  ngOnInit(): void {
  }

}
