import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  valorDelLink:string=""
  informacionRecibida:any=""

  constructor(private ruta:ActivatedRoute, private service:DataServiceService) {
    this.ruta.params.subscribe((data:any)=>{
      this.valorDelLink=data.id
      this.service.getInformationDetallada(this.valorDelLink).subscribe((info:any)=>{
        this.informacionRecibida=info
      })
    })
   }

  ngOnInit(): void {
  }

}
