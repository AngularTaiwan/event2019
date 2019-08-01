import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AgendaDataSet } from './AgendaDataSet';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {
  agendas$ = this.route.paramMap.pipe(
    map(params => params.get('day')),
    map(day => AgendaDataSet[day])
  );
  constructor(private route: ActivatedRoute, private meta: Meta) {}
}
