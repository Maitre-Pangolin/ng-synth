import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from'rxjs'
import { Preset } from '../Preset';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class PresetService {

private apiURL='http://localhost:3000/presets'

  constructor(private http:HttpClient) { }

  getPreset(id:number):Observable<Preset>{
    return this.http.get<Preset>(`${this.apiURL}/${id}`)
  }

  setPreset(id:number,preset:Preset):Observable<Preset>{
    return this.http.put<Preset>(`${this.apiURL}/${id}`,preset,httpOptions)
  }

  //ADD PUT METHOD TO CHANGE PRESETS

}

