import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
import { IProject } from 'src/app/entities/myInterface';
@Component({
  selector: 'app-fix-prj',
  templateUrl: './fix-prj.component.html',
  styleUrls: ['./fix-prj.component.css']
})
export class FixPrjComponent implements OnInit {
  id= this.activateroute.snapshot.params['id']
  prj:IProject = {
    id:0,
    prj_name:'',
    prj_date:'',
    prj_teamsize:0,
    prj_expense:0,
    prj_spending:0
  }

  check:string=''
  constructor(
    public activateroute: ActivatedRoute,
    public service:MyServiceService
  ) { }

  ngOnInit() {
    this.getPrjbyId()
  }

  getPrjbyId(){
    let endpoin = 'project'
    this.service.getAllPrj(endpoin).subscribe(data=>{
       this.prj = data.find((e:any)=>{
         return e.id == this.id
       })
       
    })
  }

  onFix(id:number){
    let check2=null
    if (this.prj.prj_spending > this.prj.prj_expense) {
        this.check = "Số tiền chi ra cần nhỏ hơn số tiền tổng chi phí"  
        check2 = confirm(this.check)
        
    }else{
      this.check=''
      check2=null
      if (check2==null) {
        console.log(this.prj);
        let endpoin = `project/${id}`;
        this.service.fixPrj(endpoin,this.prj).subscribe(data=>{
          console.log(data);
         
        })
      }
     
      
     
    }
   
  }


  setDate(date:string){
    let arr = date.split("");
     let y = arr.slice(0,4)
     let m= arr.slice(5,7)
     let d = arr.slice(8,10)

     let y2 = y.join("");
     let m2 = m.join("");
     let d2 = d.join("");
     let newDate = m2+'/'+d2+'/'+y2
     return newDate
     
  }

}
