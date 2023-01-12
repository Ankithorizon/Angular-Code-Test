import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalDataService } from '../services/local-data.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public Random_User_Api = 'https://randomuser.me/api';

  constructor(
    private http: HttpClient,
    public localDataService: LocalDataService)
  { }

  getAnyRandomUser(): Observable<any> {
    return this.http.get<any>(this.Random_User_Api);
  }

  nextPageDataFromRemoteApi(nextPage): Observable<any> {
    return this.http.get<any>(this.Random_User_Api+"?page="+nextPage);
  }
}
