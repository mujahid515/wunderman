import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faqs = [];

  constructor(
    private httpService: HttpService
  ){}

  ngOnInit() {
    this.httpService.getFAQ().then((data) => {
      this.faqs = data['faqs'];
    })
  }

}
