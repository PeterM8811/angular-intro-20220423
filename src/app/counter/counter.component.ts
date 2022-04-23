import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public value = 0
  public text = ' HI '


  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
