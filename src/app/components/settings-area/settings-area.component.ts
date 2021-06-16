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

propSliderRelease;
propSliderVolume;

selectedWaveForm='square'
waveForms=['sine','square','sawtooth']

  constructor(private audioService:AudioService) { }

  ngOnInit(): void {
    this.adsr=this.audioService.getASDR();

    this.propSliderRelease={
      name:'Release',
      min:0,
      max:1,
      step:0.1,
      value:this.adsr.release,
      action:()=> this.audioService.setRelease(this.propSliderRelease.value)
    }

    this.propSliderVolume={
      name:'Volume',
      min:0,
      max:1,
      step:0.1,
      value:1,
      action:()=> this.audioService.setVolume(this.propSliderVolume.value)
    }
  }

  changeWaveForm(waveForm){
    this.selectedWaveForm=waveForm
    this.audioService.setWaveForm(waveForm)
  }

 


}
