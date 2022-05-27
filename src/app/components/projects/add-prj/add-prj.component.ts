import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-prj',
  templateUrl: './add-prj.component.html',
  styleUrls: ['./add-prj.component.css']
})
export class AddPrjComponent implements OnInit {
  prj_name:string =''
  prj_date:string=''
  prj_teamsize:number=0
  prj_expense:number=0
  constructor(
    public http:HttpClient,
    public service:MyServiceService
  ) { }

  ngOnInit() {
  }

  onAdd(){
    let endpoin = 'project'
    let formData = {
      prj_name:this.prj_name,
      prj_date:this.prj_date,
      prj_teamsize:this.prj_teamsize,
      prj_expense:this.prj_expense
    }
     
   this.service.addPrj(endpoin,formData).subscribe(data=>{
     console.log(data);
    
   })
     
  }
}
