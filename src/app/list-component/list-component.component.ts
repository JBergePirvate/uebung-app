import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  //Dieses Array soll in HTML ausgegeben werden
  personen = [
    {
      name: "Manfred",
      nachname: "Müller",
    },
    {
      name: "Sabine",
      nachname: "Schmidt",
    },
    {
      name: "Max",
      nachname: "Mustermann",
    },
    {
      name: "Maxi",
      nachname: "Musterfrau",
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }


}
