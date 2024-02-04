import { Component, OnInit } from '@angular/core';
import { drug, Patient } from '../util/constants';



@Component( {
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrl: './collect.component.scss' // Use styleUrls with an 's'
} )
export class CollectComponent implements OnInit {
  personName: string = 'John Doe'; // Replace with the actual person's name
  constructor() {
    console.log( 'CollectComponent instantiated!' );
  }

  itemIndex = 1;
  drug1 = false;
  drug2 = false;

  ngOnInit() {
    console.log( 'CollectComponent ngOnInit!' );
  }
  patient= Patient
  drug = drug

  showNextItem() {
    if ( this.itemIndex < 2 ) {
      this.itemIndex++;
    }
  }

  showPreviousItem() {
    if ( this.itemIndex > 1 ) {
      this.itemIndex--;
    }
  }

  collectDrug( index: number ) {
    switch ( index ) {
      case 1:
        this.drug1 = true;
        break;
      case 2:
        this.drug2 = true;
        break;
    }
  }
}
