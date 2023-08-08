import { DatePipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { RecordI } from 'src/app/model/records.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[DatePipe]
})
export class DashboardComponent implements OnInit {

  curDate = new Date(); // Replace this with your date object or string

  formattedDate = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');

  list:RecordI[]=[]

  constructor(private fb:FormBuilder,private apiService:ApiService,private datePipe:DatePipe,private router:Router){}

  ngOnInit(): void {
    this.apiService.getRecordByDate(this.formattedDate).subscribe({
      next:(res)=>{
        this.list=res
        console.log(res)
      }
    })
  }



  form=this.fb.group({
    date:[this.formattedDate,Validators.required]
  })

  get date(){
    return this.form.get('date') as FormControl
  }

  onSubmit(){
    console.log("click")
    this.apiService.getRecordByDate(this.date.value).subscribe({
      next:(res)=>{
        this.list=res
        console.log(res)
      }
    })
    
  }

  logOut(){
    localStorage.setItem("pmToken","")
    this.router.navigate(['/cLogin'])
    
  }
}
