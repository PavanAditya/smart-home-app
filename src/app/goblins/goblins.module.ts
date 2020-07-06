import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoblinsPageRoutingModule } from './goblins-routing.module';

import { GoblinsPage } from './goblins.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    GoblinsPageRoutingModule
  ],
  declarations: [GoblinsPage]
})
export class GoblinsPageModule {}
