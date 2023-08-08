import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
    // This code will be executed when the component is initialized
    let tk=localStorage.getItem("pmToken");
    if(tk!==""){
      this.router.navigate(['/dashboard'])
    }
  }
  
  

  constructor(private fb:FormBuilder,private apiService:ApiService,private router:Router){}

  login=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })

  get email() {
    return this.login.get('email') as FormControl
  }
  get password() {
    return this.login.get('password') as FormControl
  }

 

  onSubmit(){
    this.login.markAllAsTouched()
    if(this.login.valid){
      this.apiService.login(this.login.value).pipe(tap((res:any)=>{
        if(res.status===200){
          localStorage.setItem("pmToken",res.body.token);
        }
      })).subscribe({
        next:(res:any)=>{console.log(res.body.token)
        this.router.navigate(['/dashboard'])
        },
        error:(error)=>{console.log(error)}
      })
    }
  }

}
