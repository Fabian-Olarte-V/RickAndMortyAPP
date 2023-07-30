import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {

  constructor(private httpClient: HttpClient) { }

  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public dataSearch$ = this.dataSubject.asObservable();

  setData(dataSearch: any) {
    this.dataSubject.next(dataSearch);
  }

  baseUrl: string = "https://rickandmortyapi.com/api/"

  getCharachterList(pageNumber: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "character/?page=" + pageNumber);
  }

  getEpisodeList(pageNumber: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/episode?page=" + pageNumber);
  }

  getLocationList(pageNumber: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/location?page=" + pageNumber);
  }

  getCharachterById(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "character/" + id);
  }

  getEpisodeById(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "episode/" + id);
  }

  getLocationById(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "location/" + id);
  }






  getCharachtersByName(name: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "character/?name=" + name);
  }
}
