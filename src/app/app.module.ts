import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { KeyComponent } from './components/key/key.component';
import { SettingsAreaComponent } from './components/settings-area/settings-area.component';
import { PresetsComponent } from './components/presets/presets.component';
import { SynthetizerComponent } from './components/synthetizer/synthetizer.component';
import { SliderComponent } from './components/settings-area/slider/slider.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    KeyboardComponent,
    KeyComponent,
    SettingsAreaComponent,
    PresetsComponent,
    SynthetizerComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
