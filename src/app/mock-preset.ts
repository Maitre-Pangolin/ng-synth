
import {Preset} from './Preset'

export const PRESETS:Preset[]=[
    {
    adsr:{
        attack:0.1,
        decay:0.1,
        sustain:0.8,
        release:1
    },
    volume:1,
    waveForm:'square',
    panner:0
    },
    {
    adsr:{
        attack:0.1,
        decay:0.1,
        sustain:0.8,
        release:0.2
    },
    volume:0.8,
    waveForm:'triangle',
    panner:0
    },
]