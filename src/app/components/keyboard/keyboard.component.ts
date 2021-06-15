import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

keys:string[];
selectedKey:string

  constructor(private audioService:AudioService) { }

  ngOnInit(): void {
    this.keys=this.audioService.initializeKeys()
  }

}
