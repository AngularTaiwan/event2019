import { Injectable, ApplicationRef, Optional } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { timer, concat, Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckForUpdateService {
  destory$ = new Subject();

  constructor(
    private appRef: ApplicationRef,
    @Optional() private updates: SwUpdate
  ) {}

  registe() {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
  }

  unregiste() {
    this.destory$.next();
    this.destory$.complete();
  }
}
