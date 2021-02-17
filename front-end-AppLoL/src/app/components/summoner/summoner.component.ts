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
  public matches:any;
  public leagues:any;
  public cargar:Boolean;

  constructor(public _summonerInfoService:SummonerInfoService,
              private _route:ActivatedRoute,
              private _router:Router) {
    this.summoner=new Summoner();
   }

  ngOnInit(): void {
    this.cargar=false;
    this._route.params.subscribe(params=>{
      let user=params["name"];
      this._summonerInfoService.obtenerInfoSummoner(user).subscribe(
        responseSummoner=>{
          if (responseSummoner["status_code"]){
            console.log("Error al encontrar a este invocador");
          }else{
            let accountId=responseSummoner["accountId"];
            let summonerId=responseSummoner["id"];
            this._summonerInfoService.obtenerSummonerMatches(accountId).subscribe(
              responseMatches=>{
                if (responseMatches){
                  this._summonerInfoService.obtenerSummonerLeagues(summonerId).subscribe(
                    response=>{
                      console.log(responseMatches)
                      this.summoner.img=responseSummoner["profileIconId"];
                      this.summoner.lvl=responseSummoner["summonerLevel"];
                      this.summoner.username=responseSummoner["name"];
                      this.leagues=response;
                      this.matches=responseMatches;
                      this.cargar=true;
                    },
                    error=>{
                      console.log(error)
                    }
                  )
                }
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
