import { Component, OnInit } from '@angular/core';
import { IUser,IProject,ITask } from 'src/app/entities/myInterface';
import { MyServiceService } from 'src/app/my-service.service';
@Component({
  selector: 'app-control-emloyer',
  templateUrl: './control-emloyer.component.html',
  styleUrls: ['./control-emloyer.component.css']
})
export class ControlEmloyerComponent implements OnInit {
  myUser:IUser[]=[]
  myPrj:IProject[]=[]
  myTask:ITask[]=[]
  totalPrj:number=0
  totalTask:number=0

  emloyer:string=''
  constructor(
    public service:MyServiceService
  ) { }

  ngOnInit() {
    this.getUsers()
    this.getPrj()
    this.getTask()
  }
  getUsers(){

    let myid = localStorage.getItem("idUser")
   
    
    let enpoin = 'user/list'
    this.service.getAllUsers(enpoin).subscribe(data=>{
      this.myUser = data
      let ld = this.myUser.filter(e=> e.id === Number(myid))
      this.emloyer = ld[0].full_name
    })
  }

  
  getPrj(){
    let enpoin = 'project'
    this.service.getAllPrj(enpoin).subscribe(data=>{
      this.myPrj = data
      this.totalPrj = this.myPrj.length
      
    })
  }

  getTask(){
    let myid = localStorage.getItem("idUser")
    let enpoin = 'tasks'
    this.service.getAllTask(enpoin).subscribe(data=>{
      this.myTask = data
      let a = this.myTask.filter((e:any)=>{
        return  e.id_user === Number(myid)
      })

      console.log(this.myTask );
      
      this.totalTask = a.length

     
    })
  }


  getTaskofPrj(id:number){
      let a:any
      a= this.myTask.filter((e:any)=>{
        return e.id_prj === id
      })

      return a.length
      
  }
}
