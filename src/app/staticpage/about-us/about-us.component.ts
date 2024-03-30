import { Component, OnInit } from '@angular/core';
import 'owl.carousel'; // Importing the jQuery Owl Carousel library
import 'owl.carousel/dist/assets/owl.carousel.css'; // Importing Owl Carousel CSS

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'], // Corrected property name to styleUrls
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
      loop: false, // Disable infinite looping
      margin: 10,
      nav: true,
      items: 3, // Display 3 items at a time
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
    });
  }
}
