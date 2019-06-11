import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient
  ){}

  getFAQ() {
    return new Promise<any>((resolve, reject) => {
      var data = this.http.get('https://api.myjson.com/bins/jw3rg');
      data.pipe(take(1)).subscribe((faqs) => {
        resolve(faqs);
      })
    })
  }
}
