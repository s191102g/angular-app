import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from 'src/app/my-service.service';
import { IProject,ITask } from 'src/app/entities/myInterface';
@Component({
  selector: 'app-fix-task',
  templateUrl: './fix-task.component.html',
  styleUrls: ['./fix-task.component.css']
})
export class FixTaskComponent implements OnInit {
  id= this.activateroute.snapshot.params['id']
  

  task:ITask = {
    id:0,
    task_name:'',
    task_des:'',
    id_prj:0,
    id_user:0,
  }
  pp:string=''
  constructor(
    public service:MyServiceService,
    public activateroute:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getTaskbyId()
    this.getAllPrj()
  }
 
  prj:IProject[]=[]
  getAllPrj(){
    let endpoin = 'project'
    this.service.getAllPrj(endpoin).subscribe(data=>{
      this.prj = data

    })
  }
  getTaskbyId(){
    let endpoin = 'tasks'
    this.service.getAllPrj(endpoin).subscribe(data=>{
       this.task = data.find((e:any)=>{
         return e.id == this.id
       })
       
    })
  }
  onFix(id:number){

    console.log(this.task);
    
       let endpoin = `tasks/${id}`
       this.service.fixTask(endpoin,this.task).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/danh-sach-task'])
      })
  }

}
