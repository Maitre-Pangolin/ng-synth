import { Component, OnInit } from '@angular/core';
import { ADSR } from 'src/app/Preset';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-settings-area',
  templateUrl: './settings-area.component.html',
  styleUrls: ['./settings-area.component.css']
})
export class SettingsAreaComponent implements OnInit {

adsr:ADSR;

propSlider;


  constructor(private audioService:AudioService) { }

  ngOnInit(): void {
    this.adsr=this.audioService.getASDR();

    this.propSlider={
      name:'Test',
      min:0,
      max:1,
      step:0.1,
      value:this.adsr.release,
      action:()=> this.audioService.setRelease(this.propSlider.value)
    }
  }

 


}
