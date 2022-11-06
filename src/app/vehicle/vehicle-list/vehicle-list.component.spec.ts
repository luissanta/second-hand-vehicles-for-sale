import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleListComponent } from './vehicle-list.component';
import { HttpClientModule } from "@angular/common/http";
import { VehicleService } from "../vehicle.service";
import { DebugElement } from "@angular/core";
import { Vehicle } from "../vehicle";
import { By } from "@angular/platform-browser";

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehicleListComponent ],
      providers: [ VehicleService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const vehicle = new Vehicle(
        i,
        'Renault',
        'TY34',
        'Sedan',
        2000 + i,
        2000 * i,
        'Verde',
        'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg'
      );
      component.vehicles.push(vehicle);
      component.getBrands()
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have thead"', () =>{
    expect(fixture.debugElement.nativeElement.querySelector('#theadVehicleId').textContent).toContain('#');
    expect(fixture.debugElement.nativeElement.querySelector('#theadVehicleBrand').textContent).toContain('Marca');
    expect(fixture.debugElement.nativeElement.querySelector('#theadVehicleLine').textContent).toContain('Línea');
    expect(fixture.debugElement.nativeElement.querySelector('#theadVehicleModel').textContent).toContain('Modelo');
  });

  it('should have table with 3 elements', () => {
    expect(debug.queryAll(By.css('tr.trbody'))).toHaveSize(component.vehicles.length)
  });

  it('should have td table with the vehicle ids', () => {
    debug.queryAll(By.css('dd.id')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.vehicles[i].id)
    });
  });

  it('should have td table with the vehicle brands', () => {
    debug.queryAll(By.css('dd.brand')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.vehicles[i].marca)
    });
  });

  it('should have td table with the vehicle lines', () => {
    debug.queryAll(By.css('dd.line')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.vehicles[i].linea)
    });
  });

  it('should have td table with the vehicle models', () => {
    debug.queryAll(By.css('dd.model')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.vehicles[i].modelo)
    });
  });

  it('should have h6 with the total brand names', () => {
    debug.queryAll(By.css('h6.total')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.brands[i].name)
    });
  });

  it('should have h6 with the total brand amount', () => {
    debug.queryAll(By.css('h6.total')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.brands[i].amount)
    });
  });

  it('should have footer', () =>{
    expect(fixture.debugElement.nativeElement.querySelector('#footer').textContent).toContain('Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo');
  });
});
