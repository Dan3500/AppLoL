import { Component, OnInit } from '@angular/core';
import { Summoner } from 'src/app/models/summoner';
import { SummonerInfoService } from '../../services/summonerInfo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

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
  public matches=[];
  public leagues=[];

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
            console.log("Error al encontrar a este invocador");
          }else{
            this.summoner.img=response["profileIconId"];
            this.summoner.lvl=response["summonerLevel"];
            this.summoner.username=response["name"];
            let accountId=response["accountId"];
            let summonerId=response["id"];
            this._summonerInfoService.obtenerSummonerMatches(accountId).subscribe(
              response=>{
                console.log(response)
                this.matches=response;
                this._summonerInfoService.obtenerSummonerLeagues(summonerId).subscribe(
                  response=>{
                    this.leagues=response;
                    console.log(this.leagues)
                  },
                  error=>{
                    console.log(error)
                  }
                )
              },
              error=>{
                console.log(error)
              }
            )
          }
        },
        error=>{
          console.log(error)
          this.summoner.img="error";
          this.summoner.lvl=0;
          this.summoner.username="error";
        }
      )
    })
    
  }

}
