import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from "./global";

@Injectable()
export class ChampionInfoService{
    public api:String;
    public version:String;

    constructor(private http:HttpClient) {
        this.api=global.url;
     }

    obtenerInfoChampions(show:string):Observable<any>{
        return this.http.get(this.api+"/champions/"+show);
    }

    obtenerInfoChamp(champ:string):Observable<any>{
        return this.http.get(this.api+"/champion/"+champ);
    }
}