import { Component } from '@angular/core';

@Component({
  selector: 'search',
  template: `
      <input type = "text"  #txt>
      <button (click) = "getTextBoxVal(txt)">Search</button>
    `
})
export class SearchButtonComponent {
    // clickMessage = '';
    //
    // onClickMe() {
    //   this.clickMessage = 'You are my hero!';
    // }
    getTextBoxVal(item){
      
      alert(item.value)
    }
}


// <button (click)="onClickMe()">Click me!</button>
// {{clickMessage}}
