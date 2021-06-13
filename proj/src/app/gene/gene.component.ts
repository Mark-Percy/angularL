import { Component, OnInit } from '@angular/core';
import { person
 } from '../person';

@Component({
  selector: 'app-gene',
  templateUrl: './gene.component.html',
  styleUrls: ['./gene.component.css']
})
export class GeneComponent implements OnInit {

  person: person = {
    id: 1,
    name: 'Mark'
  }
  
  constructor() { 


  }

  ngOnInit(): void {
  }

}
