import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
  standalone: false
})
export class ProjectPageComponent implements OnInit {

  index = 0 ;
  items: indexItem[] = [
  {id:1 , class :"project1"},
  {id:2 , class :"project2"},
  {id:3 , class :"project3"},
  {id:4 , class :"project4"}
  ]





  constructor() { }

  ngOnInit() {
  }

  onclickFunction(e:any){
    // console.log(e);
    this.index = e ;

  }

}

interface indexItem{
  id:number | undefined
  class: string | undefined

}
