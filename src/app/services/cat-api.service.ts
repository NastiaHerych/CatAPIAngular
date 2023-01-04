import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatApiService {
  publicKey =
    'live_0ngX7royH4mGvUnSLvahYMzUgFE9j9BoTIbuOLB0axp2YDk2UzDu7WN0J8QCJ5ez';
  endpointUrl: string = 'https://api.thecatapi.com/v1/images/search?limit=10';
  clearUrl: string = 'https://api.thecatapi.com/v1/images/search?limit=';
  generatedUrl: string | undefined;
  breedUrl: string | undefined;

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.endpointUrl);
  }

  getCurrentLimit(numberOfLimits: string | undefined) {
    this.generatedUrl = this.clearUrl + numberOfLimits;
    console.log('Url for limits:');
    console.log(this.generatedUrl);
    return this.http.get(this.generatedUrl);
  }

  getCurrentBreed(breedName: string | undefined) {
    this.breedUrl =
      this.endpointUrl +
      '&breed_ids=' +
      breedName +
      '&api_key=' +
      this.publicKey;
    return this.http.get(this.breedUrl);
  }
}
