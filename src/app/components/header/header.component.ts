import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input("role")  role = 0
@Output('outapp') outapp = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }
  outApp(){
    window.location.href = 'http://localhost:4200/'
    let num = 0
    this.outapp.emit(num)
  }
}
