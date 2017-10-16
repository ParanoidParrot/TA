import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    header: string = "TA Management";

    constructor(private router: Router, private sharedService: SharedService) {  }

    ngOnInit() {
      this.sharedService.changeHeader(this.header);
    }

    onLogin(user: string){
      this.router.navigate([user]);
    }

    btnclick(user: string) {
      //set user(value) {}
      //user = new EventEmitter();

      //this.sharedService.propagateUser(this.user);
      this.router.navigateByUrl('../login2');
    }

    @Input()
    user: string;
    @Output()
    sendUser = new EventEmitter();
}
