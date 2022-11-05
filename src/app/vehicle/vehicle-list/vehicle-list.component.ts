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
  brands: string = 'hola'

  getVehiclesList(): void {
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles
    })
    this.brands = this.vehicles[0].marca
    // for (let vehicle of this.vehicles) {
    //   this.brands = vehicle.marca
    // }
  }

  ngOnInit(): void {
    this.getVehiclesList()
  }
}
