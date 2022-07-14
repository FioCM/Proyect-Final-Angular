import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input () game:string="blablabla"
  // AQUI AGREGO OTRO INPUT PARA LA IMAGEN DE LAS TARJETAS

  constructor() { }

  ngOnInit(): void {
  }

}
