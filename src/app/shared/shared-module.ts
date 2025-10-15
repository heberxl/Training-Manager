import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize/capitalize-pipe';
import { SeparateLettersPipe } from './pipes/separate-letters/separate-letters-pipe';
import { Resaltado } from './directives/resaltado/resaltado';



@NgModule({
  declarations: [
    CapitalizePipe,
    SeparateLettersPipe,
    Resaltado
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe, SeparateLettersPipe, Resaltado
  ]
})
export class SharedModule { }
