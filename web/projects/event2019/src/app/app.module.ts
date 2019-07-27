import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AgendaComponent } from './agenda/agenda.component';
import { AppComponent } from './app.component';
import { CocComponent } from './coc/coc.component';
import { MainComponent } from './main/main.component';
import { RedirectGuard } from './services/redirect.guard';
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  { path: 'coc', component: CocComponent },
  { path: 'agenda/:day', component: AgendaComponent },
  {
    path: 'agenda',
    pathMatch: 'full',
    children: [],
    canActivate: [RedirectGuard]
  }
];

@NgModule({
  declarations: [AppComponent, CocComponent, MainComponent, AgendaComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
