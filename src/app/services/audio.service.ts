import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import * as Tone from 'tone'
import {SynthNote} from '../SynthNote'
import {Preset} from '../Preset'
import {PRESETS} from '../mock-preset'
import { PresetService } from './preset.service';
@Injectable({
  providedIn: 'root'
})
export class AudioService {

notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
octaves=['3','4']; //['1','2','3','4']

synthNotes:SynthNote[]=[];
//autoFilter = new Tone.AutoFilter(0.1).toDestination().start()
  constructor(private presetService:PresetService) {}

  createSynthNotes(preset:Preset){
        this.octaves.forEach(octave=>{
          this.notes.forEach(note=>{
            const key=note+octave
            
            
            const envelope =new Tone.AmplitudeEnvelope(preset.adsr).toDestination();
            const autoFilter = new Tone.AutoFilter(0).connect(envelope).start()
            const panner = new Tone.AutoPanner(0).connect(autoFilter).start()
            const oscillator= new Tone.Oscillator(key,preset.waveForm).connect(panner).start()

            const synthNote:SynthNote = {key,oscillator,envelope,panner}
            this.synthNotes.push(synthNote)
          })
        })
      this.setVolume(preset.volume)
  }

  startNote(key:string){
    this.synthNotes.find(note=>note.key==key).envelope.triggerAttack()
  }

  stopNote(key:string){
    this.synthNotes.find(note=>note.key==key).envelope.triggerRelease()
  }

  setRelease(release:number){
    this.synthNotes.forEach(note=>{
      note.envelope.release=release
    })
    console.log(`Release changed to ${release}`)
  }

  setAttack(attack:number){
    this.synthNotes.forEach(note=>{
      note.envelope.attack=attack
    })
    console.log(`Attack changed to ${attack}`)
  }

  setPanner(panner:number){
    this.synthNotes.forEach(note=>{
      note.panner.frequency.value=panner
    })
    console.log(`Panner changed to ${panner}`)
  }

  setVolume(volume:number){
    console.log(`Volume changed to ${volume}`)
    //LINEAR MAPPING FOR VOLUME 0-1 to -60-0 Tone use decibels in LOG10 so maybe change to 10^ mapping
    volume = ((x,x0,y0,x1,y1)=>{return (y0*(x1-x)+y1*(x-x0))/(x1-x0)})(volume,0,-60,1,0)
    this.synthNotes.forEach(note=>{
      note.oscillator.volume.value=volume
    })
  }

  setWaveForm(waveForm){
    this.synthNotes.forEach(note=>{
      note.oscillator.set({type:waveForm})
    })
    console.log(`Waveform changed to ${waveForm}`)
  }



}
