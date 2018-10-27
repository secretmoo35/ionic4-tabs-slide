import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ion4TabsSlideComponent } from './ion4-tabs-slide/ion4-tabs-slide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  declarations: [Ion4TabsSlideComponent],
  exports: [Ion4TabsSlideComponent]
})
export class ComponentsModule { }
