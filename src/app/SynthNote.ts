import * as Tone from 'tone'

export interface SynthNote{
    key:String,
    oscillator:Tone.Oscillator
    envelope:Tone.Envelope
    panner:Tone.AutoPanner
}