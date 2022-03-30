import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private store: Storage;

  constructor() {
    this.store = (window as any)[`localStorage`];
  }

  /** set local storage */
  setStorage<T>(key: string, value: T): void {
    this.store.setItem(key, JSON.stringify(value));
  }

  /** get local storage */
  getStorage<T>(key: string): T | undefined {
    const value = this.store.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
    return undefined;
  }

  get length(): number {
    return this.store.length;
  }

  /** remove from local storge */
  removeStorage(key: string): void {
    this.store.removeItem(key);
  }

  /** clear local storage */
  clearStorage(): void {
    this.store.clear();
  }
}
