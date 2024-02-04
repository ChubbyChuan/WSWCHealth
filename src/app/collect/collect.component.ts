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

  numberOfDrugs = 2;
  completeCollection = false;

  ngOnInit() {
    console.log( 'CollectComponent ngOnInit!' );
    this.autoCollectDrugs();
  }
  patient= Patient
  drug = drug

  // private showNextItem() {
  //   if ( this.itemIndex < 2 ) {
  //     this.itemIndex++;
  //   }
  // }

  // private showPreviousItem() {
  //   if ( this.itemIndex > 1 ) {
  //     this.itemIndex--;
  //   }
  // }

  private collectDrug( index: number ) {
    switch ( index ) {
      case 1:
        this.drug1 = true;
        break;
      case 2:
        this.drug2 = true;
        break;
    }
  }

  private async autoCollectDrugs() {
    for ( let i = 1; i <= this.numberOfDrugs; i++ ) {
      await new Promise( ( resolve ) => {
        this.itemIndex = i;
       
        setTimeout( () => {
          this.collectDrug( i );
          if ( this.itemIndex === 2 ) {
            this.completeCollection = true;
          }
          resolve('done');

        }, 4000 );
        
      })

    }
  }
}
