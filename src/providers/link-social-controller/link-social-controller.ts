import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LinkSocialControllerProvider {
  private API_REQRES_URL = 'http://127.0.0.1:8080/';

  constructor(public http: Http) { }

  getAllMacs() {
    return new Promise((resolve, reject) => {
      let url = this.API_REQRES_URL + 'getallmacs/';
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json())
        },
          (error) => {
            reject(error.json())
          });
    });
  }

  getSimilaridades(mac:string) {
    return new Promise((resolve, reject) => {
      let url = this.API_REQRES_URL + 'getsimilaridades/' + mac;
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json())
        },
          (error) => {
            reject(error.json())
          });
    });
  }

  getFingerprint(mac:string) {
    return new Promise((resolve, reject) => {
      let url = this.API_REQRES_URL + 'getfingerprint/' + mac;
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json())
        },
          (error) => {
            reject(error.json())
          });
    });
  }

  getAllMacsFromSSID(ssid:string) {
    return new Promise((resolve, reject) => {
      let url = this.API_REQRES_URL + 'getallmacsfromssid/' + ssid;
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json())
        },
          (error) => {
            reject(error.json())
          });
    });
  }

}