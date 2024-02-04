import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrl: './collect.component.scss' // Use styleUrls with an 's'
})
export class CollectComponent implements OnInit {
  personName: string = 'John Doe'; // Replace with the actual person's name
  constructor() {
    console.log('CollectComponent instantiated!');
  }

  itemIndex = 1;

  ngOnInit() {
    console.log('CollectComponent ngOnInit!');
  }
  // Array of drugs with information
  drugs = [
    { name: 'Aspirin', quantity: 20, dose: '1 tablet', uses: 'Pain relief' },
    { name: 'Paracetamol', quantity: 30, dose: '1 tablet', uses: 'Fever reducer' },
    // Add more drugs as needed
  ];

  showNextItem() {
    if ( this.itemIndex < 2) {
      this.itemIndex++;
    }
  }

  showPreviousItem() {
    if ( this.itemIndex > 1) {
      this.itemIndex--;
    }
  }
}
