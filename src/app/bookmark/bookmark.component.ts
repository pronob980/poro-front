import { Component, OnInit } from '@angular/core';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  books: any;

  constructor() { }

  ngOnInit() {
    let bookmarks = StorageService.get('bookmarks')

    this.books = bookmarks
    console.log(bookmarks);

    if (!bookmarks) {
      StorageService.set([
        {
          "id": 1,
          "cat_id": 5,
          "title": "A Love Hate Thing",
          "description": "a love hate thing book for read",
          "author": "Anwarul Islam",
          "url": "20191123203431.pdf",
          "thumbnail": "20191123203431.png",
          "created_at": "2019-11-23 20:34:32",
          "updated_at": "2019-11-23 20:34:32"
        },
        {
          "id": 2,
          "cat_id": 7,
          "title": "Free English Grammar E-Book Level 2",
          "description": "Free EnglishGrammar E-Book Level 2",
          "author": "Sufi Ahmed",
          "url": "20191123214241.pdf",
          "thumbnail": "20191123214242.jpg",
          "created_at": "2019-11-23 21:42:42",
          "updated_at": "2019-11-23 21:42:42"
        },
        {
          "id": 3,
          "cat_id": 7,
          "title": "Basic Accounting",
          "description": "Basic Accounting",
          "author": "Sufi Ahmed",
          "url": "20191123214607.pdf",
          "thumbnail": "20191123214607.jpg",
          "created_at": "2019-11-23 21:46:07",
          "updated_at": "2019-11-23 21:46:07"
        }
      ], 'bookmarks')
    }
  }

}
