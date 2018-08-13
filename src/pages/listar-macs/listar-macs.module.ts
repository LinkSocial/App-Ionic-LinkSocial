import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarMacsPage } from './listar-macs';

@NgModule({
  declarations: [
    ListarMacsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarMacsPage),
  ],
})
export class ListarMacsPageModule {}
