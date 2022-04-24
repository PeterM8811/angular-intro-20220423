import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit , OnDestroy {

  public time = Date.now();
  public intervalId:any;

  constructor() { }
  
  ngOnInit(): void {
    this.intervalId = setInterval(()=>{
      this.time = Date.now();
      console.log(this.time);
    },10)
  }
  
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}