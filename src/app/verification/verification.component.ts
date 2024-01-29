import { Component, EventEmitter, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent {

  constructor(private router: Router) { 
  }

  @ViewChild('scanner', { static: true }) scanner: ZXingScannerComponent | undefined;

  onScanSuccess(result: string) {
    // Process the scanned result (you might want to implement authentication logic)
    console.log('Scanned result:', result);
    // Navigate to the second page on successful scan
    this.router.navigate(['/collect']);
    console.log('catch navigate');

  }
}
