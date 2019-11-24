import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { PdfComponent } from './pdf/pdf.component';
import { BookmarkComponent } from './bookmark/bookmark.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'bookmarks', component: BookmarkComponent
  },
  {
    path: 'book/:book_id', component: PdfComponent
  },
  {
    path: 'books/category/:category_id', component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
