import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { SummonerInfoService } from '../../services/summonerInfo.service';
import { ChampionInfoService } from '../../services/championService';
import { Summoner } from '../../models/summoner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[
    SummonerInfoService, ChampionInfoService
  ]
})
export class HomeComponent implements OnInit {

  public summoner: Summoner;
  public version="";
  public championList=[];

  constructor(private _summonerInfoService: SummonerInfoService,
              private _championInfoService: ChampionInfoService) {
    this.summoner=new Summoner();
  }

  ngOnInit(): void {
    this._championInfoService.obtenerInfoChampions().subscribe(
      response=>{
        console.log(response);
        this.championList=response["data"];
        this.version=response["version"];
        console.log(this.championList);
      },
      error=>{
        console.log(error)
      }
    )
  }

  

}
