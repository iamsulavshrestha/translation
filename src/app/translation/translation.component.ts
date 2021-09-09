import {Component, OnInit} from '@angular/core';
import {GoogleObj, GoogleService} from '../service/google.services';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
  providers: [GoogleService]
})
export class TranslationComponent implements OnInit {
  public googleObj: GoogleObj = new GoogleObj();
  public key: string = "";
  public sendText: string = "";
  public result = '';

  constructor(private _google: GoogleService) {
  }

  ngOnInit() {
  }

  check(value: string) {
    this.key = value;
  }


  send() {
    // this.sendText = (<HTMLInputElement>document.getElementById('textSend')).value;
    this.sendText = (<HTMLInputElement>document.getElementById('textSend')).value;
    this.googleObj.setValue(this.sendText, 'ne-t-i0-und');
    this._google.translate(this.googleObj).subscribe(
      (res: any) => {
        if (res[0] == 'SUCCESS') {
          this.result = res[1][0][1][0];
          this.sendText = '';
          this.sendText = res[1][0][1][0];
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
