import {
  Component,
  OnDestroy,
  HostListener,
  Inject,
  ChangeDetectorRef
} from '@angular/core';
import { CheckForUpdateService } from './services/check-for-update.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'event2019';
  windowScrolled: boolean;
  private prevWindowScrolled: boolean;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
    if (this.windowScrolled !== this.prevWindowScrolled) {
      this.prevWindowScrolled = this.windowScrolled;
      this.cd.detectChanges();
    }
  }
  constructor(
    private check: CheckForUpdateService,
    @Inject(DOCUMENT) private document: Document,
    private cd: ChangeDetectorRef
  ) {
    check.registe();
  }

  scrollToTop() {
    (function smoothscroll(prevScroll) {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0 && currentScroll <= prevScroll) {
        window.requestAnimationFrame(smoothscroll.bind(null, currentScroll));
        window.scrollTo(0, currentScroll - currentScroll / 12);
      }
    })(document.documentElement.scrollTop || document.body.scrollTop);
  }

  ngOnDestroy() {
    this.check.unregiste();
  }
}
