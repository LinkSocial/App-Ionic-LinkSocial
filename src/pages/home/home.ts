import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LinkSocialControllerProvider } from '../../providers/link-social-controller/link-social-controller';
import { ListarMacsPage } from '../listar-macs/listar-macs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista = [];
  similaridades: any;
  // mac: any;
  macs:any = {"mac":null};

  constructor(
    public navCtrl: NavController,
    public linkSocialController: LinkSocialControllerProvider) {
      this.showAllMacs()
  }

  showAllMacs(){
    this.linkSocialController.getAllMacs()
      .then((res: any) => {
        this.lista = res.data;
      })
      .catch(e => console.error(e));
  }

  getSimilaridadesApp(){
    console.log(this.macs)
    this.linkSocialController.getSimilaridades(this.macs.mac)
      .then((res:any) => {
        this.similaridades = res.data;
        console.log(this.similaridades);
        this.navCtrl.push(ListarMacsPage, {similaridades: this.similaridades})
      })
      .catch(e => console.error(e));
  }

}
