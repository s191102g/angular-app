import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ps15394_CaoQuangSang_ASM';
  check:number = 0

  constructor(){}

  getUser(value:any){
    
    if (value.role === 1) {
      this.check = 1
      localStorage.setItem("idUser", value.id)
    }else if (value.role === 0){
      this.check = 2
      localStorage.setItem("idUser", value.id)
    }else{
      this.check = 0
    }
    
  }

  Out(value:number){
     this.check=value
  }
}
