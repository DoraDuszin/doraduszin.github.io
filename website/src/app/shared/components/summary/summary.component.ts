import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit {

  activeServiceIndex = 0; // Track which service is active
  services: HTMLElement[] = []; // To hold the service elements

  ngOnInit() {
    this.initializeCarousel();
  }

  initializeCarousel() {
    this.services = Array.from(document.querySelectorAll('.service'));
    this.showService(this.activeServiceIndex);

    // Set up the interval for switching services
    setInterval(() => {
      this.activeServiceIndex = (this.activeServiceIndex + 1) % this.services.length;
      this.showService(this.activeServiceIndex);
    }, 2000); // Change service every 2 seconds
  }

  showService(index: number) {
    this.services.forEach((service, i) => {
      service.classList.toggle('active', i === index); // Add 'active' class to the visible service
    });
  }

}
