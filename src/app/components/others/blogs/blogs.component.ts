import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  showDiv = {
    previous : false,
    current : false,
    next : false
  }
  showDiv1 = {
    previous : false,
    current : false,
    next : false
  }
  panelOpenState= false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
