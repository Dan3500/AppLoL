import { Component, OnInit } from '@angular/core';
import { Summoner } from 'src/app/models/summoner';
import { SummonerInfoService } from '../../services/summonerInfo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css'],
  providers:[
    SummonerInfoService
  ]
})
export class SummonerComponent implements OnInit {

  public summoner: Summoner;
  constructor(public _summonerInfoService:SummonerInfoService,
              private _route:ActivatedRoute,
              private _router:Router) {
    this.summoner=new Summoner();
   }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let user=params["name"];
      this._summonerInfoService.obtenerInfoSummoner(user).subscribe(
        response=>{
          if (response["status_code"]){
            console.log("MAL");
          }else{
            console.log("BIEN");
            this.summoner.img=response["profileIconId"];
            this.summoner.lvl=response["summonerLevel"];
            this.summoner.username=response["name"];
          }
        },
        error=>{
          console.log(error)
        }
      )
    })
    
  }

}
