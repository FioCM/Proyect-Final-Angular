import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  informacionRecibida:any=""

  constructor(private servicio:DataServiceService) { 
    servicio.getInformationGames().subscribe((data:any)=>{
      this.informacionRecibida=data
    })
  }

  ngOnInit(): void {
  }

}
