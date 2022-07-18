import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  valorDelLink:string=""
  informationApiSearch:any=""

  constructor(private route:ActivatedRoute, private servicio:DataServiceService) { 
    this.route.params.subscribe((data:any)=>{
      this.valorDelLink=data.value
      this.servicio.getInformationSearch(this.valorDelLink).subscribe((info:any)=>{
        this.informationApiSearch=info
      })
    })
  }

  ngOnInit(): void {
  }

}
