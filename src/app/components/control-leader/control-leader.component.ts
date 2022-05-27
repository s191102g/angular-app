import { Component, OnInit } from '@angular/core';
import { IUser,IProject,ITask } from 'src/app/entities/myInterface';
import { MyServiceService } from 'src/app/my-service.service';
@Component({
  selector: 'app-control-leader',
  templateUrl: './control-leader.component.html',
  styleUrls: ['./control-leader.component.css']
})
export class ControlLeaderComponent implements OnInit {

  myUser:IUser[]=[]
  myPrj:IProject[]=[]
  totalPrj:number = 0
  totalUser:number = 0
  totalTask:number = 0

  totalExpense:number = 0
  totalSpending:number = 0

  user_East:number = 0
  user_West:number = 0
  user_South:number = 0
  user_North:number = 0

  leader:string=''
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
      this.totalUser = this.myUser.length

      let ue = this.myUser.filter(e=> e.user_area === 'east')
      this.user_East = ue.length

      let uw = this.myUser.filter(e=> e.user_area === 'west')
      this.user_West = uw.length

      let us = this.myUser.filter(e=> e.user_area === 'south')
      this.user_South = us.length

      let un = this.myUser.filter(e=> e.user_area === 'north')
      this.user_North = un.length
   
      let ld = this.myUser.filter(e=> e.id == Number(myid))
      this.leader = ld[0].full_name
      
    })
  }
  getPrj(){
    let enpoin = 'project'
    this.service.getAllPrj(enpoin).subscribe(data=>{
      this.myPrj = data
      this.totalPrj = this.myPrj.length
      for (let i = 0; i < this.myPrj.length; i++) {
        this.totalExpense += this.myPrj[i].prj_expense
        
      }

      for (let i = 0; i < this.myPrj.length; i++) {
        this.totalSpending += this.myPrj[i].prj_spending
        
      }
    })
  }

  getTask(){
    let endpoin = 'tasks'
    this.service.getAllTask(endpoin).subscribe(data=>{
           this.totalTask = data.length
    })
  }
 
}
