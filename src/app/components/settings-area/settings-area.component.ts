import { Component, OnInit } from '@angular/core';
import { ADSR,Preset } from 'src/app/Preset';
import { AudioService } from 'src/app/services/audio.service';
import { PresetService } from 'src/app/services/preset.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-settings-area',
  templateUrl: './settings-area.component.html',
  styleUrls: ['./settings-area.component.css']
})
export class SettingsAreaComponent implements OnInit {


preset:Preset;
propSliderAttack;
propSliderDecay;
propSliderSustain;
propSliderRelease;
propSliderVolume;
propSliderPanner;
propSliderFilter;


waveForms=[{name:'sine',symbol:String.fromCharCode(0x223F)},{name:'square',symbol:String.fromCharCode(0x03A0)},{name:'sawtooth',symbol:String.fromCharCode(0x1D0E)},{name:'triangle',symbol:String.fromCharCode(0x02C4)}]

  constructor(private audioService:AudioService, private presetService:PresetService,private router:Router) { }

  ngOnInit(): void {

    //this.preset=this.audioService.getPreset()
    this.presetService.getPreset(1).subscribe(preset=>{
      this.audioService.createSynthNotes(preset)
      this.preset=preset

      this.propSliderAttack={
        name:'Attack',
        min:0,
        max:1,
        step:0.1,
        value:this.preset.adsr.attack,
        action:()=> {
          this.audioService.setAttack(this.propSliderAttack.value)
          this.preset.adsr.attack=this.propSliderAttack.value
        }
      }

      this.propSliderDecay={
        name:'Decay',
        min:0.1,
        max:2,
        step:0.1,
        value:this.preset.adsr.decay,
        action:()=> {
          this.audioService.setDecay(this.propSliderDecay.value)
          this.preset.adsr.decay=this.propSliderDecay.value
        }
      }

      this.propSliderSustain={
        name:'Sustain',
        min:0,
        max:1,
        step:0.1,
        value:this.preset.adsr.sustain,
        action:()=> {
          this.audioService.setSustain(this.propSliderSustain.value)
          this.preset.adsr.sustain=this.propSliderSustain.value
        }
      }
  
      this.propSliderRelease={
        name:'Release',
        min:0.1,
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

      this.propSliderPanner={
        name:'Panner',
        min:0,
        max:10,
        step:1,
        value:this.preset.panner,
        action:()=> {
          this.audioService.setPanner(this.propSliderPanner.value)
          this.preset.volume=this.propSliderPanner.value
        }
      }

      this.propSliderFilter={
        name:'Filter',
        min:0,
        max:10,
        step:1,
        value:this.preset.filter,
        action:()=> {
          this.audioService.setFilter(this.propSliderFilter.value)
          this.preset.volume=this.propSliderFilter.value
        }
      }

    },
    (error)=>{
      console.log('Not Loaded')
      this.router.navigate(['/about']) //SHOULD BE ROUTED TO A PAGE SAYING THAT SERVER IS NOT REACHABLE (START JSON-SERVER)
    }
    )

  }

  changeWaveForm(waveForm){
    this.preset.waveForm=waveForm.name
    this.audioService.setWaveForm(waveForm.name)
  }
}
