import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import { StoreFrontComponent } from './store-front.component';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    AccessoriesRoutingModule
  ],
  declarations: [StoreFrontComponent, CartComponent]
})
export class AccessoriesModule { }
