import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { NotesComponent } from './components/notes/notes.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { KeyComponent } from './components/key/key.component';
import { SettingsAreaComponent } from './components/settings-area/settings-area.component';
import { PresetsComponent } from './components/presets/presets.component';



@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesComponent,
    AddNoteComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    KeyboardComponent,
    KeyComponent,
    SettingsAreaComponent,
    PresetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
