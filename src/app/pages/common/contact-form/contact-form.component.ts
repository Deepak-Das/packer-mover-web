import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [DatePipe], // Add the DatePipe as a provider in your component
})
export class ContactFormComponent {
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private datePipe: DatePipe,
  ) {}

  date = new Date(); // Replace this with your date object or string

  formattedDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');

  info = false;
  fail = false;

  contact = this.fb.group({
    fullName: ['', [Validators.required]],
    location: ['', [Validators.required]],
    phoneNo: ['', [Validators.required, this.indianPhoneNumberValidator]],
    message: ['', [Validators.required]],
    date: [this.formattedDate],
  });

  get name() {
    return this.contact.get('fullName') as FormControl;
  }

  get location() {
    return this.contact.get('location') as FormControl;
  }

  get phone() {
    return this.contact.get('phoneNo') as FormControl;
  }
  get msg() {
    return this.contact.get('message') as FormControl;
  }

  onSubmit() {
    this.contact.markAllAsTouched();

    if (this.contact.valid) {
      this.apiService.saveContact(this.contact.value).subscribe({
        next: (res) => {
          if (res.status === 200) {
            this.contact.reset();
            this.contact.patchValue({date:this.formattedDate})
            this.info = true;
            setTimeout(() => {
              this.info = false;
            }, 1500);
          }
        },
        error:()=>{
          this.fail = true;
            setTimeout(() => {
              this.fail = false;
            }, 1500);
        }
        
      });
    }
  }

  indianPhoneNumberValidator(
    control: AbstractControl,
  ): ValidationErrors | null {
    const indianPhoneNumberRegExp: RegExp =
      /^(?:(?:\+91)|(?:0)|(?:91))?[6789]\d{9}$/;

    if (control.value && !indianPhoneNumberRegExp.test(control.value)) {
      return { indianPhoneNumber: true };
    }

    return null;
  }
}
