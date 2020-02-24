import { Component, OnInit } from '@angular/core';
import { Registration } from '../../models/Register';
import { AgecheckService } from '../../services/agecheck.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: Registration;
  nationalities = [
    { name: "Singaporean", code: "SG"},
    { name: "Indonesian", code: "IN"},
    { name: "Indian", code: "ID"},
    { name: "China Chinese", code: "CN"},
  ]

  gender = [
    {name:'Male', value:'M'}, 
    {name:'Female', value:'F'}
  ];

  ageCheckFlag: boolean = false;

  constructor(private ageCheckSvc : AgecheckService) {
    this.model = new Registration('','','M','','','SG','','');
  }

  checkAge() {
    this.ageCheckSvc.validateUnderAge(this.model, this.ageCheckFlag);
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submit!");
    console.log(this.model.name);
    console.log(this.model.email);
    console.log(this.model.password);
    console.log(this.model.address);
    console.log(this.model.country);
    console.log(this.model.contactNo)
  }

  resetForm(){
    this.model = new Registration('','','F','','','','','');
  }

}
