import {Pipe,PipeTransform} from '@angular/core';



@Pipe({name:"durationPipe"})
export class DurationPipe implements PipeTransform{
    transform(value: any):string {
       return this.showDiff(new Date(value), new Date());
    }

     showDiff(date1 :any, date2 :any){

        var diff = (date2 - date1)/1000;
       diff = Math.abs(Math.floor(diff));
       
        var days = Math.floor(diff/(24*60*60));
       var leftSec = diff - days * 24*60*60;
       
        var hrs = Math.floor(leftSec/(60*60));
       var leftSec = leftSec - hrs * 60*60;
       
        var min = Math.floor(leftSec/(60));
       var leftSec = leftSec - min * 60;
      return "Last Updated " + days + " days " + hrs + " hours " + min + " minutes and " + leftSec + " seconds";
      
       }

    

}