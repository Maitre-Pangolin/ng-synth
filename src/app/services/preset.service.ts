import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from'rxjs'
import { Preset } from '../Preset';

@Injectable({
  providedIn: 'root'
})
export class PresetService {

private apiURL='http://localhost:3000/presets'

  constructor(private http:HttpClient) { }

  getPreset(id:number):Observable<Preset>{
    return this.http.get<Preset>(`${this.apiURL}/${id}`)
  }

  //ADD PUT METHOD TO CHANGE PRESETS

}

