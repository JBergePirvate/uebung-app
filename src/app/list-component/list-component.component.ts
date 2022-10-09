import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  //Diese variable soll die gewählte Person speichern
  selectedPerson = {};

  //Dieses Array soll in HTML ausgegeben werden
  personen:Person[] = [
    {
      name: "Manfred",
      nachname: "Müller",
      alter:70,
      ort:"Gera",
    },
    {
      name: "Sabine",
      nachname: "Schmidt",
      alter:42,
      ort:"Leipzig",
    },
    {
      name: "Max",
      nachname: "Mustermann",
      alter:23,
      ort:"Dresden",
    },
    {
      name: "Maxi",
      nachname: "Musterfrau",
      alter:10,
      ort:"Erfurt",
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }



}
