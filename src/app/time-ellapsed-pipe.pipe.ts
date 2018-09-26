import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time-ellapsed'
})
export class timeellapsedPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date=new Date(); //get the current date and time
    let todayDateOnly:any = new Date(today.getFullYear(),today.getMonth(), today.getDate())//get date without time
    var timeMilliseconds= Math.abs(value-todayDateOnly) //get time passed since joined github posted in Milliseconds
    const fullDaySeconds = 86400; //the number of seconds that make up a full day
    var timePassedSeconds= timeMilliseconds*0.001; //converting milliseconds to fullDaySeconds
    var daysAfterJoining = timePassedSeconds/fullDaySeconds;

     if (daysAfterJoining>=1){
    return daysAfterJoining;
      }
      else {

       return 0;
       }
      }
  }
