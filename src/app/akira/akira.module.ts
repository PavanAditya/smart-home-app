import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkiraPageRoutingModule } from './akira-routing.module';

import { AkiraPage } from './akira.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    AkiraPageRoutingModule
  ],
  declarations: [AkiraPage]
})
export class AkiraPageModule {}
