import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input () gameName:string=""
  @Input () gameImage:string=""
  @Input () gameId:string=""
 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irADetalles(){
    this.router.navigate(["details",this.gameId])
  }
}
