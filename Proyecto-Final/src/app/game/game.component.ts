import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input () juego:string="igwyevoec"
  @Input () fecha:string="eoulvweq"
  @Input () tipoJuego:string="ehfnfjhfuh"
  @Input () barra1:string="hfyr8ee"
  @Input () barra2:string="jdjdhdhd"
  @Input () plataformas:string="hdhdhdh"
  @Input () publishers:string="jviwevywrv"
  @Input () websites:any="ibviwrbgivywgrb"
  @Input () acercaJuego:string="iwlebebqiebqiyrbqivbieqyvbqeiyv"

  constructor() { }

  ngOnInit(): void {
  }

}
