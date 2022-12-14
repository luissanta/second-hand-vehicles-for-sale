import { Component, OnInit } from '@angular/core';
import { Vehicle } from "../vehicle";
import { VehicleService } from "../vehicle.service";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  vehicles: Array<Vehicle> = []
  brands: Array<{name: string, amount: number}>  = []

  getBrands(vehicles: Array<Vehicle> = []): void {
    for (let vehicle of vehicles) {
      if (this.brands.find(brand => brand.name === vehicle.marca )) {
        let brandFind = this.brands.find(brand => brand.name === vehicle.marca) || {name: '', amount: 0}
        brandFind.amount ++
      }
      else {
        this.brands.push({name: vehicle.marca, amount: 1})
      }
    }
  }

  getVehiclesList(): void {
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles
      this.getBrands(vehicles)
    })
  }

  ngOnInit(): void {
    this.getVehiclesList()
  }
}
