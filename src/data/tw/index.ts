import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AddressDataTWService } from "./data.service";

export * from './data.service';

@NgModule({
  providers: [ AddressDataTWService ]
})
export class AddressDataTWModule {

}
