import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from "./global";

@Injectable()
export class ChampionInfoService{
    public api:String;

    constructor(private http:HttpClient) {
        this.api=global.url;
     }

    obtenerInfoChampions():Observable<any>{
        return this.http.get(this.api+"/champions");
    }

    obtenerInfoChamp(champ:string):Observable<any>{
        return this.http.get(this.api+"/champion/"+champ);
    }
}