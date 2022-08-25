import { Component, OnInit } from '@angular/core';
import { MatAccordion,MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class faqComponent implements OnInit {
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
