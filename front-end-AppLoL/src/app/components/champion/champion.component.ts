import { Component, OnInit } from '@angular/core';
import { ChampionInfoService } from '../../services/championService';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css'],
  providers:[
    ChampionInfoService
  ]
})
export class ChampionComponent implements OnInit {

  public champ=[];
  public ability=[];
  
  constructor(private _championInfoService:ChampionInfoService,
              private _router:Router, private _route:ActivatedRoute) { }

  changeAbility(index=5){
    if (index==5){
      this.ability=this.champ['passive']
    }else{
      this.ability=this.champ["spells"][index];
    }
    
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      var champ=params["champName"];
      console.log(champ)
      this._championInfoService.obtenerInfoChamp(champ).subscribe(
        response=>{
          this.champ=response["data"][champ];
          console.log(this.champ)
          this.changeAbility();
        },
        error=>{
          console.log(error);
        });
    }); 
    

    
  }

}
