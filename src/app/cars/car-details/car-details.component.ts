import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "../cars.service";
import {Car} from "../models/car";

@Component({
  selector: 'cs-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit {
  car : Car;

  constructor(private carsService : CarsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.loadCar();
  }

  loadCar() {
    const id = +this.route.snapshot.params['id'];

    this.carsService.getCar(id).subscribe((car) => {
      this.car = car;
    });
  }

}
