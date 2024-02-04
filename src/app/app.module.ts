import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { VerificationComponent } from './verification/verification.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CollectComponent } from './collect/collect.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule( {
  declarations: [
    AppComponent,
    HomeComponent,
    VerificationComponent,
    CollectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    ZXingScannerModule,
    MatCardModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent],
  exports: [VerificationComponent]
} )
export class AppModule { }