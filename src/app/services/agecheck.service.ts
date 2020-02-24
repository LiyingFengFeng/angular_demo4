import { Injectable } from '@angular/core';
import * as moment from "moment";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class AgecheckService {

  constructor(private snackBar: MatSnackBar) { }

  validateUnderAge(model, ageCheckFlag){
    let dobDate = new Date(model.dob);
    const today = moment();
    const delta = today.diff(dobDate, "years", false);
    if (delta < 18) {
      console.log("less than !")
      let snackBarRef = this.snackBar.open("Registrant must be at least 18 yrs old.", "Done");
      ageCheckFlag = true;
    }else{
      ageCheckFlag = false;
    }
  }
}
