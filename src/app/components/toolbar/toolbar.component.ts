//import { Component, EventEmitter, Output,OnInit } from '@angular/core';
//
//
//@Component({
//  selector: 'app-toolbar',
//  templateUrl: './toolbar.component.html',
//  styleUrls: ['./toolbar.component.css']
//})
//export class ToolbarComponent implements OnInit {
//
//  constructor() { }
//
//  ngOnInit(): void {
//  }
//
//  @Output() SideNavToggle = new EventEmitter();  
//
//  openSidenav() {
//   this.SideNavToggle.emit();
//
//}
//}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

 @Output() SideNavToggle = new EventEmitter();  

  openSidenav() {
   this.SideNavToggle.emit();
}

}
