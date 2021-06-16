import { Component, OnInit } from '@angular/core';
import { ADSR,Preset } from 'src/app/Preset';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-settings-area',
  templateUrl: './settings-area.component.html',
  styleUrls: ['./settings-area.component.css']
})
export class SettingsAreaComponent implements OnInit {


preset:Preset;
propSliderRelease;
propSliderVolume;


waveForms=['sine','square','sawtooth','triangle']

  constructor(private audioService:AudioService) { }

  ngOnInit(): void {

    this.preset=this.audioService.getPreset()

    this.propSliderRelease={
      name:'Release',
      min:0,
      max:1,
      step:0.1,
      value:this.preset.adsr.release,
      action:()=> {
        this.audioService.setRelease(this.propSliderRelease.value)
        this.preset.adsr.release=this.propSliderRelease.value
      }
    }

    this.propSliderVolume={
      name:'Volume',
      min:0,
      max:1,
      step:0.1,
      value:this.preset.volume,
      action:()=> {
        this.audioService.setVolume(this.propSliderVolume.value)
        this.preset.volume=this.propSliderRelease.value
      }
    }
  }

  changeWaveForm(waveForm){
    this.preset.waveForm=waveForm
    this.audioService.setWaveForm(waveForm)
  }

  debugPreset(){
    console.log("preset from settings area",this.preset)
    this.audioService.debugAudioPreset()
  }

 


}
