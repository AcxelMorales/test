import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otpcelular',
  templateUrl: './otpcelular.component.html',
  styleUrls: ['./otpcelular.component.css']
})
export class OtpcelularComponent implements OnInit {
  public msjSuccess:boolean = false;
  public msjError:boolean = false;

  public color = '#00405F';
  public seconds:number = 200;
  
  constructor() { }

  ngOnInit(): void {
    this.counter();
  }

  private counter(): void {
    setInterval(() => {
      if(this.seconds === 0) return this.seconds = 0;
      this.seconds--;
    }, 1000);
  }
  
  onCodeCompleted(event){

  }

  renviarOtp(){
    this.msjSuccess = true;
    setInterval(()=>{
      this.msjSuccess = false;
    },5000);
  }

}
