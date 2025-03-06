import { Component } from '@angular/core';

@Component({
  selector: 'app-click-tracker',
  imports: [],
  templateUrl: './click-tracker.component.html',
  styleUrl: './click-tracker.component.css'
})
export class ClickTrackerComponent {
  timeToClick = 10;
  clickCount = 0;

  onClick(){
    this.countDownHandler;
    this.clickCount++;
  }

  countDownHandler(){
  let countDown = setInterval(() => {
      this.timeToClick--
      if(this.timeToClick < 1){
        let intervalTimer = clearInterval(countDown)
      }
    }, 1000)
  }
}
