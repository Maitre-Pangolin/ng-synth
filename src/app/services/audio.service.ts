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
  attack:0.2,
  decay:0.5,
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
    const oscillator= new Tone.Oscillator(key,'sine').connect(envelope).start()
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
    console.log("Release changed")
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
