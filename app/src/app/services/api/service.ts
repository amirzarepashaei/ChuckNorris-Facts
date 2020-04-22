import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { map, tap, catchError, filter } from 'rxjs/operators';

import { ICategories, IFacts } from '../model';
import { Router, NavigationStart } from '@angular/router';

@Injectable({  
  providedIn: "root"  
})

export class FactService {
  public id: any = 'animal';
  private API_BASE_URL = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/';
  private categoriesURL = `${this.API_BASE_URL}jokes/categories`;
  private factURL = `${this.API_BASE_URL}jokes/search?query=`;
  private headers = {
    'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com', 
    'x-rapidapi-key': '53a61af534mshea943f753441ac9p1a9f6ejsnd6468530352c', 
    accept: 'application/json'
  };  
  constructor(private http: HttpClient, private router: Router) { 
    router.events.pipe(
      filter(event => event instanceof NavigationStart)  
    ).subscribe((event: NavigationStart) => {
      console.log('event url is ', event.url.slice(1, 10));
      this.id = event.url.slice(1, 10);
      console.log('id is: ', this.id);
      this.getFacts();
    });
  }

  getCategories() {
    return this.http
      .get<ICategories[]>(this.categoriesURL, { headers: new HttpHeaders( this.headers )})
      .pipe(map(categories => categories), 
      tap(categories => console.log('categories from api: ', categories)), catchError(this.handleError)
    );
  }

  getFacts() {
    return this.http
      .get<IFacts[]>(`${this.factURL}${this.id}`, { headers: new HttpHeaders( this.headers )})
      .pipe(map(facts => facts), 
      tap(facts => console.log('facts from api: ', facts)), catchError(this.handleError)
    );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
