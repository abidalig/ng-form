import { Component } from '@angular/core';
//import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  userData:any = {};
  getData(data:any){
    console.warn(data);
    this.userData = data;
  }
  list:any[]=[];
  addTask(item:string){
    //console.log(item);
    this.list.push({id:this.list.length, name:item});
    console.log(this.list);
  }
  remove(ids:number){
   console.log(ids);
   this.list = this.list.filter(abc => abc.id !== ids);
   
  }
  userlogin(item:any){
    console.log(item);
    
  }
}
