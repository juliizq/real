import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    var typed = new Typed('.auto-type', {
    strings : ["PEOPLE" , "PICTURES", "REVIEWS"],
    typeSpeed : 100, 
    backSpeed : 70, 
    loop : true
  });
  
  }

}
