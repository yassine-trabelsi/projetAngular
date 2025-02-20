import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Residence } from 'src/core/models/Residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  id!: number;
  residence!: Residence | undefined;
    listResidences: Residence[] = [
      { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/img/1.jpg", status: "Disponible" },
      { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/img/2.jpg", status: "Disponible" },
      { id: 3, name: "El Arij", address: "Rades", image: "../../assets/img/3.jpg", status: "Vendu" },
      { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/img/4.jpg", status: "En Construction" }
    ];
  constructor(private ar: ActivatedRoute) {}

  ngOnInit() {
    //this.id = this.ar.snapshot.params['id'];
    //console.log(this.id);
    this.ar.params.subscribe(params => {
      this.id = +params['id']; // Conversion en nombre
      this.residence = this.listResidences.find(res => res.id === this.id);
      console.log(this.id);
    });
    }
   }
