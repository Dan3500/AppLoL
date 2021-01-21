import { Injectable } from '@angular/core';
import { Summoner } from '../models/summoner';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  public summoner:Summoner=new Summoner;

  constructor() { 
  }
}
