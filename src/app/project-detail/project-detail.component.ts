import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  standalone: false
})
export class ProjectDetailComponent implements OnInit {

  @Input() index: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
