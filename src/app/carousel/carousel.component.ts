import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  carouselImages = [
    {
      url: 'https://images.freeimages.com/images/large-previews/e7c/recipe-1538714.jpg',
      name: 'Explore recipe 1',
    },
    {
      url: 'https://images.freeimages.com/images/large-previews/d27/cooking-chicken-1520344.jpg',
      name: 'Explore recipe 2',
    },
    {
      url: 'https://images.freeimages.com/images/large-previews/4e6/food-1329024.jpg',
      name: 'Explore recipe 3',
    },
  ];

  ngOnInit() {}
}
