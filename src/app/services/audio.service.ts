import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

ADSR = {
  attack:0.1,
  decay:0.21,
  sustain:0.5,
  release:1.2
}

  constructor() { }

  getADSR(){
    return this.ADSR
  }

}
