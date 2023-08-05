import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  constructor(private fb: FormBuilder) { }

  // contact=new FormGroup(
  //   {
  //     name:new FormControl('',),
  //     location:new FormControl(''),
  //     phone:new FormControl(''),
  //     msg:new FormControl(''),
  //   }
  // )
 

  


 

  contact = this.fb.group({
    name: ['',[Validators.required]],
    location: ['',[Validators.required]],
    phone: ['',[Validators.required,,this.indianPhoneNumberValidator]],
    msg: ['',[Validators.required]],
  });


  get name(){
    return this.contact.get("name")
  }

  get location(){
    return this.contact.get("location")
  }

  get phone(){
    return this.contact.get("phone")
  }
  get msg(){
    return this.contact.get("msg")
  }


  onSubmit(){
    console.log(this.contact);
  }

  indianPhoneNumberValidator(control: AbstractControl): ValidationErrors | null {
    const indianPhoneNumberRegExp: RegExp = /^(?:(?:\+91)|(?:0)|(?:91))?[789]\d{9}$/;
  
    if (control.value && !indianPhoneNumberRegExp.test(control.value)) {
      return { indianPhoneNumber: true };
    }
  
    return null;
  }
}
