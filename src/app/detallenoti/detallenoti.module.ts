import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallenotiPageRoutingModule } from './detallenoti-routing.module';

import { DetallenotiPage } from './detallenoti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallenotiPageRoutingModule
  ],
  declarations: [DetallenotiPage]
})
export class DetallenotiPageModule {}
