import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private Beer: BeerService) {}

  beer = [];

  ngOnInit(): void {
    this.Beer.fetchBeer().subscribe((data: []) => {
      this.beer = data;
    });
  }
}
