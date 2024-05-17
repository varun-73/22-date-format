import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {DateTime} from 'luxon';
import * as dayjs from 'dayjs';
import * as moment from 'moment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  input_date = new Date();
  
  formatDate(inputDate: Date) {
    return moment(inputDate).format('YYYY-MM-DD ddd HH:mm ');
  }
  //pipe
  d = new Date();

  title = 'Date-formats';
  //Moment
  currentDate= moment();
 currentTime: string = this.currentDate.format('MM/DD/YYYY hh:mm:ss a');
  format1: string = moment().format(' dddd M/D/YYYY');
  format2: string = moment().format(' MMMM D, YYYY');
  futureSecond: moment.Moment = this.currentDate.add(45, 'seconds');
  format3: string = moment().format('YYYY-MM-DD hh:mm:ss A');
  futureDate = this.currentDate.add(3, 'days');
  fulltime = this.currentDate.format('HH:mm:ss.SSS');

  //Luxon 
  date = DateTime.now()
  dateISO = this.date.toISODate();
  dateRFC = this.date.toRFC2822();
  short = this.date.toLocaleString(DateTime.DATE_SHORT);
  medium = this.date.toLocaleString(DateTime.DATE_MED);
  timeShort = this.date.toLocaleString(DateTime.TIME_SIMPLE);
  timelong = this.date.toLocaleString(DateTime.TIME_24_SIMPLE);
  dateTimeShort = this.date.toLocaleString(DateTime.DATETIME_SHORT);
  dateTimeFull = this.date.toLocaleString(DateTime.DATETIME_FULL);
  customFormat1: string = this.date.toFormat('MMMM dd, yyyy HH:mm:ss'); 
  customFormat2: string = this.date.toFormat('dd/MM/yyyy'); 
  customFormat3: string = this.date.toFormat('d-M-yyyy'); 
  customFormat7: string = this.date.toFormat('EEE EEEE yy d dd d HH:mm:ss a'); 
  customFormat8: string = this.date.toFormat('hh:mm:ss a '); 
  customFormat4: string = this.date.toFormat('yyyy-MM-dd HH:mm:ss'); 
  customFormat5: string = this.date.toFormat('EEE, dd MMM yyyy HH:mm:ss'); 
  customFormat6: string = this.date.toFormat('HH:mm:ss.SSS'); 
  

  //day.js

  current = dayjs();
  
  dateControl = new FormControl(new Date());  
  datetimeControl = new FormControl();
// Custom Formats
 customF1 = this.current.format('MMMM DD, YYYY HH:mm:ss'); 
 customF2 = this.current.format('DD/MM/YYYY'); 
 customF3 = this.current.format('DD-MM-YYYY'); 
 customF4 = this.current.format('YYYY-MM-DD HH:mm:ss'); 
 customF5 = this.current.format('ddd, DD MMM YYYY HH:mm:ss'); 
 customF6 = this.current.format('HH:mm:ss.SSS'); 
 customF7 = this.current.format(' dd hh:mm A'); 
 customF8 = this.current.format('h:mm:ss A'); 
}
