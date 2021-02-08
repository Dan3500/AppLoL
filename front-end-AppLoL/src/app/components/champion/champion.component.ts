import { Component, OnInit } from '@angular/core';
import { ChampionInfoService } from '../../services/championService';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css'],
  providers:[
    ChampionInfoService
  ]
})
export class ChampionComponent implements OnInit {

  public champ:any;
  public ability:any;
  public indexAb=0;
  public cargar:boolean;
  
  constructor(private _championInfoService:ChampionInfoService,
              private _router:Router, private _route:ActivatedRoute,
              private _config: NgbCarouselConfig) {
    //Datos para configurar los carruseles
    _config.interval=0;
    _config.pauseOnHover=true;
    _config.wrap=true;
    this.cargar=false;
  }

  changeAbility(index=5){
    if (index==5){
      this.ability=this.champ['passive']
    }else{
      this.ability=this.champ["spells"][index];
    }
    this.indexAb=index;
    console.log(this.ability)
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      var champ=params["champName"];
      this._championInfoService.obtenerInfoChamp(champ).subscribe(
        response=>{
          this.champ=response["data"][champ];
          this.changeAbility();
          this.cargar=true;
        },
        error=>{
          console.log(error);
        });
    }); 
    

    
  }

}
