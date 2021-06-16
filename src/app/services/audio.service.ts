import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import * as Tone from 'tone'
import {SynthNote} from '../SynthNote'
import {ADSR} from '../Preset'

@Injectable({
  providedIn: 'root'
})
export class AudioService {

notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
octaves=['3','4']; //['1','2','3','4']

synthNotes:SynthNote[]=[];

adsr:ADSR = {
  attack:0.1,
  decay:0.1,
  sustain:1,
  release:0.4
}



  constructor() {}


  initializeKeys():string[]{
    const keys = []
    this.octaves.forEach(octave=>{
      this.notes.forEach(note=>{
        keys.push(note+octave)
      })
    })
    return keys
  }

    createSynthNote(key:string):SynthNote{
    const envelope =new Tone.AmplitudeEnvelope(this.adsr).toDestination();
    const oscillator= new Tone.Oscillator(key,'sawtooth').connect(envelope).start()
    const synthNote:SynthNote = {key,oscillator,envelope}
    this.synthNotes.push(synthNote)
    return synthNote
  }

  getASDR(){
    return this.adsr;
  }

  setRelease(release:number){
    this.synthNotes.forEach(note=>{
      note.envelope.release=release
    })
    console.log(`Release changed to ${release}`)
  }

  setVolume(volume:number){
    console.log(`Volume changed to ${volume}`)
    //LINEAR MAPPING FOR VOLUME 0-1 to -60-0 Tone use decibels in LOG10 so maybe change to exponential mapping
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

  /*
  changeEnvelope(ADSR:ADSR):void{
    this.synthNotes.forEach(note=>{
      note.envelope.release=ADSR.release
      note.envelope.sustain=ADSR.sustain
      note.envelope.decay=ADSR.decay
      note.envelope.attack=ADSR.attack
    })
  }
*/


}
