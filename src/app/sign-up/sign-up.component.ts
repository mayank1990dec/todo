import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  pattern: string;

  constructor() {
    // this.pattern = '^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$';
    // "^^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]{8,}$$"
    // this.pattern = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$');
  }

  ngOnInit() {
  }
  onSubmit(form: ElementRef) {
    console.log(form);
  }
}
