import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CatApiService } from 'src/app/services/cat-api.service';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})
export class FilterMenuComponent implements OnInit {
  @Input() selectedLimit: string | undefined;
  @Output() limit: EventEmitter<string> = new EventEmitter();

  @Input() selectedBreed: string | undefined;
  @Output() breed: EventEmitter<string> = new EventEmitter();

  limitForm = new FormGroup({});
  breedForm = new FormGroup({});

  constructor() {}

  applyLimit() {
    this.limit.emit(this.selectedLimit);
  }

  applyBreed() {
    if (this.selectedBreed === 'all') {
      this.selectedLimit = '10';
      this.limit.emit(this.selectedLimit);
    }
    this.breed.emit(this.selectedBreed);
  }

  ngOnInit(): void {}
}
