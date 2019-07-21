import { Component, OnDestroy } from '@angular/core';
import { CheckForUpdateService } from './services/check-for-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'event2019';

  constructor(private check: CheckForUpdateService) {
    check.registe();
  }

  ngOnDestroy() {
    this.check.unregiste();
  }
}
