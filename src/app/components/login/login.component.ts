import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/entities/myInterface';
import { MyServiceService } from 'src/app/my-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  un:any=null
  pw:any=null
  checkun:any=null
 
  @Output('accout') accout = new EventEmitter<any>()

  Users:IUser[] =[]
  constructor(
    public http:HttpClient,
    public service:MyServiceService
  ) { }

  ngOnInit() {
    this.getUsers()
   
    
  }
 
  check(){
    let rs = this.Users.find((e)=>{
      return e.user_name === this.un && e.pass_word === this.pw
    })
  
    
    if(rs?.user_name == undefined || rs?.pass_word == undefined){
        this.checkun = 'Thông tin đăng nhập không chính xác'
    }else{
      this.checkun = null
      let a = {
       role: rs.user_role,
       id: rs.id
      }
      this.accout.emit(a)
    }
    
    
    
  
  }

  getUsers(){
    let endpoin = 'user/list'
    this.service.getAllUsers(endpoin).subscribe(data=>{
      this.Users = data
    })
  }
}
