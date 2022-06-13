import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startDate: Date = new Date();
  endDate: Date = new Date();
  schedule: Schedule = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  };
  weekDays: WeekDay[] = [
    { name: 'Lunes', value: 'monday' },
    { name: 'Martes', value: 'tuesday' },
    { name: 'Miércoles', value: 'wednesday' },
    { name: 'Jueves', value: 'thursday' },
    { name: 'Viernes', value: 'friday' },
    { name: 'Sábado', value: 'saturday' },
    { name: 'Domingo', value: 'sunday' }
  ];
  tournaments: string[] = [
    'FIFAe',
    'Liga_Master_Flow',
    'RLCS_2021-22',
    'VALORANT_Challengers',
    'VALORANT_Masters',
    'VALORANT_Champions',
    'VALORANT_Game_Changers',
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onStartDateChange(startDate: Date): void {
    this.startDate = new Date(startDate);
    this.startDate.setDate(this.startDate.getDate() + 1);
  }
  onEndDateChange(endDate: Date): void {
    this.endDate = new Date(endDate);
    this.endDate.setDate(this.endDate.getDate() + 1);
  }

  eventForm = this.formBuilder.group({
    day: 'monday',
    tournament: 'FIFAe',
    opponent: '',
    date: new Date()
  });

  onSubmit(): void {
    const value = this.eventForm.value;
    this.schedule[value.day].push({ tournament: value.tournament, opponent: value.opponent, date: new Date(value.date) });
  }
}

type Schedule = {
  [key: string]: Event[];
  monday: Event[];
  tuesday: Event[];
  wednesday: Event[];
  thursday: Event[];
  friday: Event[];
  saturday: Event[];
  sunday: Event[];
}

type Event = {
  tournament: string;
  opponent: string;
  date: Date;
}

type WeekDay = {
  name: string;
  value: string;
}
