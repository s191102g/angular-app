import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { IProject,ITask } from 'src/app/entities/myInterface';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  task_name:string=''
  task_des:string=''
  id_prj:number=0

  pp:string=''
  constructor(
    public service:MyServiceService
  ) { }

  ngOnInit() {
    this.getAllPrj()
  }
 
  prj:IProject[]=[]
  getAllPrj(){
    let endpoin = 'project'
    this.service.getAllPrj(endpoin).subscribe(data=>{
      this.prj = data

    })
  }

  onAdd(){

    if (this.id_prj === 0) {
       this.pp = 'Hãy lựa chọn Dự Án cho Task'
    }else{
      this.pp = ''
      let id_user = localStorage.getItem("idUser")
      let endpoin = 'tasks'
      let formData = {
        task_name: this.task_name,
        task_des: this.task_des,
        id_prj: this.id_prj,
        id_user: Number(id_user)
      }
  
     this.service.addTask(endpoin,formData).subscribe(data=>{
       console.log(data);
      
     })
    }

   
    
  }


}
