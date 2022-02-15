import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  @Input("curso1") curso1Cnt2:any;
  @Input("contador") contadorCnt2:any;

  
  constructor() { }

  ngOnInit(): void {
  }

}
