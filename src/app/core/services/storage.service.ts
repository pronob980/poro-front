import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static set(data, key, remember?: boolean) {
    data = data || null;
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(key, JSON.stringify(data));
  }

  static get(key, remember?: boolean) {
    const storage = remember ? localStorage : sessionStorage;
    let data = storage.getItem(key)
    return JSON.parse(data)
  }

  static remove(key, remember?: boolean) {
    const storage = remember ? localStorage : sessionStorage;
    let data = storage.removeItem(key)
  }
}
