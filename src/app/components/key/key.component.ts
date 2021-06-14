import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit,Input } from '@angular/core';
import * as Tone from 'tone'

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
@Input() note:string
osc:Tone.Oscillator;
isPlaying=false;

  constructor() { }

  ngOnInit(): void {

    this.osc = new Tone.Oscillator(this.note,'sine').toDestination()
  }

  play(){
    this.osc.start()
    this.isPlaying=true
  }

stop(){
  this.osc.stop()
  this.isPlaying=false
}


  

}
