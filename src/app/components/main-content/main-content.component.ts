import { Component, OnInit } from '@angular/core';
import { CatApiService } from 'src/app/services/cat-api.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  constructor(private capApi: CatApiService) {}
  arrayOfCats: any;
  currentNumber: string | undefined;
  currentBreed: string | undefined;

  ngOnInit(): void {
    this.showCats();
  }

  showCurrent() {
    this.capApi.getCurrentLimit(this.currentNumber).subscribe((data) => {
      this.arrayOfCats = data;      
    });
  }

  showCurrentBreed() {
    this.capApi.getCurrentBreed(this.currentBreed).subscribe((data) => {
      this.arrayOfCats = data;
    });
  }

  getLimitFromParent(limit: string) {
    this.currentNumber = limit;
    this.showCurrent();
  }

  getBreedFromParent(breed: string) {
    this.currentBreed = breed;
    this.showCurrentBreed();
  }

  showCats() {
    this.capApi.getData().subscribe((data) => {
      this.arrayOfCats = data;
    });
  }
}
