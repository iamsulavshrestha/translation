import {Component, OnInit} from '@angular/core';
import {GoogleObj, GoogleService} from "../service/google.services";
import {AbstractControl, FormBuilder, FormControl, FormControlName, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-translate-input',
  templateUrl: './translate-input.component.html',
  styleUrls: ['./translate-input.component.scss']
})
export class TranslateInputComponent implements OnInit {

  textarea: any;
  public googleObj: GoogleObj = new GoogleObj();
  public key: string = "";
  public sendText: string = "";
  public result = '';
  form: FormGroup = new FormGroup({});


  constructor(
    private _google: GoogleService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      textarea: [''],
      textarea1: [''],
    });
  }


  translate(formControl: any) {
    console.log(formControl);
// this.sendText = (<HTMLInputElement>document.getElementById('textSend')).value;
    const sourceTxt = formControl;
    this.googleObj.setValue(sourceTxt.value, 'ne-t-i0-und');
    this._google.translate(this.googleObj).subscribe(
      (res: any) => {
        if (res[0] == 'SUCCESS') {
          formControl.patchValue(res[1][0][1][0]);
          // sourceTxt = '';
          // sourceTxt = res[1][0][1][0];
          // sourceTxt = this.result;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
