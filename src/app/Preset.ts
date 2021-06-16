export interface ADSR{
    attack:number,
    decay:number,
    sustain:number,
    release:number
}

export interface Preset{
    id?:number,
    adsr:ADSR,
    volume:number,
    waveForm,


}