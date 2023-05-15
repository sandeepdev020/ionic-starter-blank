import { Component } from '@angular/core';
import { addDays, addYears, format, formatISO, parseISO } from 'date-fns';
import { DateDataType } from '../interfaces/dateData.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  today: any;
  yesterday: any;
  nextDay: any;
  nextFiveYear: any;
  chosenDate = '';

  tenDayPastSelectedDate: any;
  oneYearPastSelectedDate: any;
  dates: DateDataType[] = [];

  constructor() {
    const currentDate = new Date();
    this.nextDay = formatISO(addDays(currentDate, 1));
    this.yesterday = format(addDays(currentDate, -1), 'dd MMM yyyy');
    this.nextFiveYear = formatISO(addYears(currentDate, 5));
    this.today = format(currentDate, 'dd MMM yyyy');
  }

  handleDateSelect(e: any) {
    const selectedDate = new Date(e);
    this.chosenDate = `Selectd Date: ${format(parseISO(e), 'dd MMM yyyy')}`;
    this.tenDayPastSelectedDate = format(
      addDays(selectedDate, -10),
      'dd MMM yyyy'
    );
    this.oneYearPastSelectedDate = format(
      addYears(selectedDate, -1),
      'dd MMM yyyy'
    );

    const today: DateDataType = {
      label: 'Today',
      date: this.today
    }

    const yesterday: DateDataType = {
      label: 'Yesterday',
      date: this.yesterday
    }

    const tenDayPastSelectedDate: DateDataType = {
      label: 'Ten Days Past Selected Date',
      date: this.tenDayPastSelectedDate
    }

    const oneYearPastSelectedDate: DateDataType = {
      label: 'One Year Pas Selected Date',
      date: this.oneYearPastSelectedDate
    }

    this.dates = [today, yesterday, tenDayPastSelectedDate, oneYearPastSelectedDate];
    console.log(this.dates);
  }
}
