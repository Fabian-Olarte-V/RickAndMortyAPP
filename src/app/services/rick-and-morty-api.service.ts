import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {
  
    constructor(private httpClient: HttpClient) { }

    baseUrl: string = "https://rickandmortyapi.com/api/";
  
  
    getCharacterList(): Observable<any> {
      return this.httpClient.get<any>(this.baseUrl + "character");
    }
  
    getEpisodeList(): Observable<any> {
      return this.httpClient.get<any>(this.baseUrl + "/episode");
    }
  
    getLocationList(): Observable<any> {
      return this.httpClient.get<any>(this.baseUrl + "/location");
    }
  
  
    getCharacterById(id: string): Observable<any> {
      return this.httpClient.get<any>(this.baseUrl + "character/" + id);
    }
  
    getEpisodeById(id: string): Observable<any> {
      return this.httpClient.get<any>(this.baseUrl + "episode/" + id);
    }
  
    getLocationById(id: string): Observable<any> {
      return this.httpClient.get<any>(this.baseUrl + "location/" + id);
    }
  

    getCharactersByName(name: string): Observable<any> {
      return this.httpClient.get<any>(this.baseUrl + "character/?name=" + name);
    }
}
