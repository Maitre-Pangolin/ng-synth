import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

authors=['Melanie Desrochers','Eleanor Hébert','Martin Wasselet']
title = "Made with 💙 by "

  constructor() { }

  ngOnInit(): void {
  }

}
