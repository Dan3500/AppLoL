import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { SummonerInfoService } from '../../services/summonerInfo.service';
import { ChampionInfoService } from '../../services/championService';
import { Summoner } from '../../models/summoner';
import { global } from "../../services/global";

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
  public mostrarChamps:string;
  public version:string;
  public championList:any;
  public mostrarChampList:any;
  public cargar:boolean;
  public cargarGrid:boolean;

  constructor(private _summonerInfoService: SummonerInfoService,
              private _championInfoService: ChampionInfoService) {
    this.summoner=new Summoner();
    this.cargar=false;
    this.mostrarChamps="Fill";
  }

  ngOnInit(): void {
    this.mostrarChamps="Fill"
    this.recogerInfo();
  }

  buscarChamps(rol:string){
    this.cargarGrid=false;
    this.mostrarChamps=rol;
    this.recogerInfo();
  }

  recogerInfo(){
    this._championInfoService.obtenerInfoChampions(this.mostrarChamps).subscribe(
      response=>{
        console.log(response);
        this.championList=response["data"];
        this.version=response["version"];
        this._championInfoService.version=this.version;
        console.log(this.championList);
        this.cargar=true;
        this.cargarGrid=true;
      },
      error=>{
        console.log(error)
      }
    )
  }
  

  

}
