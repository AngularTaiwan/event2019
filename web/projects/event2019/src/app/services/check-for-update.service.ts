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
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true)
    );
    const everySixHours$ = timer(6 * 60 * 60 * 1000);

    const whenAppIsStable$ = appIsStable$.pipe(takeUntil(this.destory$));
    whenAppIsStable$.subscribe(() => {
      if (this.updates.isEnabled) {
        this.updates.checkForUpdate();
      }
    });

    this.updateListener();
  }

  private updateListener() {
    this.updates.available.subscribe(() => {
      window.location.reload();
    });
  }

  unregiste() {
    this.destory$.next();
    this.destory$.complete();
  }
}
