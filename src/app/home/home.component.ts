import { Component } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  public showVerificationPage = false;

  constructor(private router: Router) {

  }

  public goToVerification() {
    this.showVerificationPage = true;
    this.router.navigate(['/verification']);
  }
}
