import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private readonly http: HTTP) {
    this.http
      .get('https://data.covid19india.org/v4/min/data.min.json', {}, {})
      .then((data) => console.log(data));
  }
}
