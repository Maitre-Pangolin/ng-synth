import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import * as Tone from 'tone'
import {SynthNote} from '../SynthNote'

@Injectable({
  providedIn: 'root'
})
export class AudioService {

notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
octaves=['3','4']; //['1','2','3','4']

synthNotes:SynthNote[]=[];

ADSR = {
  attack:0.1,
  decay:0.8,
  sustain:0.5,
  release:0.2
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
    const envelope =new Tone.AmplitudeEnvelope(this.ADSR).toDestination();
    const oscillator= new Tone.Oscillator(key,'sine').connect(envelope).start()
    const synthNote:SynthNote = {key,oscillator,envelope}
    this.synthNotes.push(synthNote)
    return synthNote
  }


}
