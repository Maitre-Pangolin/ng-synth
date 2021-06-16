import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

@Input() sliderParam={
  name:'default',
  min:0,
  max:1,
  step:0.1,
  value:0.5,
  action:()=>console.log('Default')
}

  ngOnInit(): void {
  }

}
