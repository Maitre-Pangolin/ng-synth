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

  constructor(public audioService:AudioService) { }

  ngOnInit(): void {
  }

  startNote(){
    Tone.start()
    this.audioService.startNote(this.key)
  }

  stopNote(){
      this.audioService.stopNote(this.key)
  }

  mouseEntering(event){
    if(event.buttons) this.startNote()
  }
}


  
