import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/entities/myInterface';
import { HttpClient } from '@angular/common/http';
import { MyServiceService } from 'src/app/my-service.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  myPrj:IProject[]=[]
  constructor(
    public http:HttpClient,
    public service: MyServiceService
  ) { }

  ngOnInit() {
    this.getProject()
  }

  getProject(){
     let endpoin = 'project'
     this.service.getAllPrj(endpoin).subscribe(data=>{
       this.myPrj = data
     })
  }

  setDate(date:string){
    let arr = date.split("");
     let y = arr.slice(0,4)
     let m= arr.slice(5,7)
     let d = arr.slice(8,10)

     let y2 = y.join("");
     let m2 = m.join("");
     let d2 = d.join("");
     let newDate = d2+"-"+m2+"-"+y2
     return newDate 
     
  }

  onDelete(id:number){
    let endpoin = `project/${id}`
    

    let a =  confirm("Bạn có chắc muốn xóa Dự Án này")
     console.log(a);
     if (a) {
      this.service.deletePrj(endpoin).subscribe(data=>{
        console.log(data);
        this.getProject()
      })
     }
  }
}
