import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { UppercaseDirective } from './core/directives/uppercase.directive';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeroDialogComponent } from './core/components/add-hero-dialog/add-hero-dialog.component';
import { ConfirmDialogComponent } from './core/components/confirm-dialog/confirm-dialog.component';
import { LoadingSpinnerComponent } from './core/components/loading/loading-spinner.component';
import { HeaderComponent } from './core/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    AddHeroDialogComponent,
    ConfirmDialogComponent,
    UppercaseDirective,
    LoadingSpinnerComponent,
    HeaderComponent
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
