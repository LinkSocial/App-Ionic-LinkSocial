import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListarMacsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-macs',
  templateUrl: 'listar-macs.html',
})
export class ListarMacsPage {

  similaridades = JSON['body'];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    this.similaridades = this.navParams.get('similaridades');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarMacsPage');
  }

  getMacs(){
    if(this.similaridades.length == 0){
      return true;
    }
    else{
      this.similaridades.forEach(item => {
        if ((item.similaridade <= 0.7)){
          item["status"] = "Frequentam os mesmos lugares";
        }
        else{
          item["status"] = "Podem ser conhecidas";
        }
      });
    }
  }

}
