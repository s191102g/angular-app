import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/entities/myInterface';
import { MyServiceService } from 'src/app/my-service.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  myTask:ITask[]=[]
 
  constructor(
    public service:MyServiceService
  ) { }

  ngOnInit() {
    this.getAllTask()
    this.getPrj()
  }

  getAllTask(){
    let enpoin = 'tasks'
    this.service.getAllTask(enpoin).subscribe(data=>{
      this.myTask = data
    })
  }

  onDelete(id:number){
    let enpoin = `tasks/${id}`
     let a =  confirm("Bạn có chắc muốn xóa Task này")
     console.log(a);
     if (a) {
       this.service.deleteTask(enpoin).subscribe(data=>{
         console.log(data);
         this.getAllTask()
       })
     }
  }


  allprj = []
  getPrj(){
     let endpoin = `project`
    this.service.getAllPrj(endpoin).subscribe(data => {
          this.allprj = data;
         
   })

    
  }

  prj_name:string=''
  setNamePrj(id:number){
       let prj:any
       prj = this.allprj.find((e:any)=>{
        return e.id===id
      }) 
      return prj.prj_name
  }
}
