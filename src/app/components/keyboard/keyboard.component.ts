import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  notes = this.audioService.notes
  octaves = this.audioService.octaves

keys:string[]=[];


  constructor(public audioService:AudioService) { }

  ngOnInit(): void {
    this.octaves.forEach(octave=>{
      this.notes.forEach(note=>{
        this.keys.push(note+octave)
      })
    })
  }

}
