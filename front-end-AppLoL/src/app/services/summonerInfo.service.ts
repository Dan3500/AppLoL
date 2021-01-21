import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from "./global";

@Injectable()
export class SummonerInfoService{
    public api:String;

    constructor(private http:HttpClient) {
        this.api=global.url;
     }

    obtenerInfoSummoner(summoner:string):Observable<any>{
        let headers= new HttpHeaders();
            
        return this.http.get(this.api+"/prueba/"+summoner);
    }
}