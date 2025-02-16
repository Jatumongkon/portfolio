import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
  standalone: false
})
export class ProjectPageComponent implements OnInit {

  index = 0 ;
  _class :string |undefined
  items: indexItem[] = [
  {id:1 , class :"project1"},
  {id:2 , class :"project2"},
  {id:3 , class :"project3"},
  {id:4 , class :"project4"},
  {id:5 , class :"project5"}
  ]





  constructor() { }

  ngOnInit() {
  }

  onclickFunction(e:any){
    // console.log(e);
    this.index = e ;
    this.items.forEach(element => {


      if(element.id == e){

        this._class = element.class
        // console.log(this._class);
      }
    });

  }

}

interface indexItem{
  id:number | undefined
  class: string | undefined

}
