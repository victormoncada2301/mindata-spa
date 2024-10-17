import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddHeroDialogComponent } from './components/add-hero-dialog/add-hero-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { UppercaseDirective } from './core/directives/uppercase.directive';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinnerComponent } from './components/loading/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    AddHeroDialogComponent,
    ConfirmDialogComponent,
    UppercaseDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
