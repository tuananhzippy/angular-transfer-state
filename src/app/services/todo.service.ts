import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// import { isPlatformServer } from '@angular/common';
// import { TransferState, makeStateKey } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(
    // @Inject(PLATFORM_ID) private platformId: object,
    // private transferState: TransferState,
    private httpClient: HttpClient
  ) { }

  // getDoing(): Observable<any> {
  //   const STATE_KEY_ITEMS = makeStateKey('todos');
  //   if (this.transferState.hasKey(STATE_KEY_ITEMS)) {
  //     const items = this.transferState.get(STATE_KEY_ITEMS, null);
  //     if (items) {
  //       return of(items);
  //     }
  //   }
    
  //   return this.httpClient.get('https://jsonplaceholder.typicode.com/todos').pipe(map(response => {
  //     if (isPlatformServer(this.platformId)) {
  //       this.transferState.set(STATE_KEY_ITEMS, <any> response);
  //     }
  //     return response;
  //   }));
  // }

  getDoing(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos').pipe(map(response => response));
  }
  
}
