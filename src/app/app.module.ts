import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { DataService, JwtService } from './core/services';
import { BookComponent } from './book/book.component';
import { PdfComponent } from './pdf/pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './core/services/user.service';
import { ApiService } from './core/services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    PdfComponent,
    BookmarkComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [
    UserService,
    ApiService,
    JwtService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
