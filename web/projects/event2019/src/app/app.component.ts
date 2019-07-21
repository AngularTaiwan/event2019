import { Component } from '@angular/core';
import { CheckForUpdateService } from './services/check-for-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event2019';

  constructor(check: CheckForUpdateService) {
    check.registe();
  }
}
