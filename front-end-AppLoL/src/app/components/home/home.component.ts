import { Component, OnInit } from '@angular/core';
import { SummonerInfoService } from '../../services/summonerInfo.service';
import { Summoner } from '../../models/summoner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[
    SummonerInfoService
  ]
})
export class HomeComponent implements OnInit {

  
  public summoner: Summoner;

  constructor(private _summonerInfoService: SummonerInfoService) {
    this.summoner=new Summoner();
  }

  ngOnInit(): void {

  }

  

}
