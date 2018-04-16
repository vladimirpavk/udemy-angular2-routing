import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onServersClicked(serverNum: number){
    this.router.navigate(['servers', serverNum, 'edit'], { "queryParams" : {allowEdit:true}, "fragment":"loading"});
  }

  onLoginClicked(){
    console.log("onLoginClicked");
    this.authService.login();
    //this.authService.isAuthenticated().then((data:boolean)=>console.log(data));
  }


  onLogoutClicked(){
    this.authService.logout();
    //this.authService.isAuthenticated().then((data:boolean)=>console.log(data));
  }

}
