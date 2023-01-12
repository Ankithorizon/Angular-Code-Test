import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter() {
    this.counter = this.counter + 1;
  }
  
  decrementCounter() {
    this.counter = this.counter - 1;
  }
  resetCounter() {
    this.counter = 0;
  }
}

