import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

 // constructor() { }

  // ngOnInit(): void {
  // }

 @Output() featureSelected = new EventEmitter<string>();

onSelect(feature:string){
this.featureSelected.emit(feature);
}

}
