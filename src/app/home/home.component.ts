import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onServersClicked(serverNum: number){
    this.router.navigate(['servers', serverNum, 'edit'], { "queryParams" : {allowEdit:true}, "fragment":"loading"});
  }

}
