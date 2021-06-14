import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];;
  octaves=['1','2','3','4'];

  constructor(private audioService:AudioService) { }

  ngOnInit(): void {
    
  }

}
