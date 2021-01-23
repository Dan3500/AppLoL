import { Component, NgModule, OnInit } from '@angular/core';
import { SummonerInfoService } from '../../services/summonerInfo.service';
import { BuscadorService } from '../../services/buscador.service';
import { FormsModule } from "@angular/forms";
import { Summoner } from '../../models/summoner';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[
    SummonerInfoService, BuscadorService
  ]
})
export class HeaderComponent implements OnInit {

  public summoner: Summoner;
  public search="";

  constructor(private _summonerInfoService: SummonerInfoService,
              private _buscadorService: BuscadorService,
              private _route:ActivatedRoute,
              private _router:Router) {
    this.summoner=new Summoner();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this._router.navigate(['/summoner/'+this.search])
    //form.reset();
  }

}
