import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor() {}

  applyLimit() {
    this.limit.emit(this.selectedLimit);
  }

  applyBreed() {
    this.breed.emit(this.selectedBreed);
  }

  ngOnInit(): void {}
}
