import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit,Input } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import * as Tone from 'tone'
import {SynthNote} from '../../SynthNote'
@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
@Input() key:string

isPlaying=false
synthNote:SynthNote;





  constructor(private audioService:AudioService) { }

  ngOnInit(): void {
  this.synthNote=this.audioService.createSynthNote(this.key)
  }

  startNote(){
    Tone.start()
    this.synthNote.envelope.triggerAttack()
    this.isPlaying=true
    //console.log(`playing note : ${this.synthNote.key}`)
    //should emit event to give keyboard the note played
  }

  stopNote(){
      this.synthNote.envelope.triggerRelease()
      this.isPlaying=false
      //console.log(`stopping note : ${this.synthNote.key}`)
  }

  mouseEntering(event){
    if(event.buttons) this.startNote()
  }
}


  
