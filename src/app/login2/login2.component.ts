import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onLogin(user : string) {
    this.router.navigate([user]);
  }
}
