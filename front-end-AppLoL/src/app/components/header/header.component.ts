import { Component, NgModule, OnInit } from '@angular/core';
import { SummonerInfoService } from '../../services/summonerInfo.service';
import { ChampionInfoService } from '../../services/championService';
import { Form, FormsModule } from "@angular/forms";
import { Summoner } from '../../models/summoner';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from "../../services/global";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[
    SummonerInfoService, ChampionInfoService
  ]
})
export class HeaderComponent implements OnInit {

  public summoner: Summoner;
  public search="";
  public version: String;

  constructor(private _summonerInfoService: SummonerInfoService,
              private _route:ActivatedRoute,
              private _router:Router) {
    this.summoner=new Summoner();
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    this._router.navigate(['/summoner/'+this.search])
    form.reset();
  }

}
