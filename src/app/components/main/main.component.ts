import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    @Input("role") role = {
      role:1,
      id:0 
    }
  constructor() { }

  ngOnInit() {
  }

}
