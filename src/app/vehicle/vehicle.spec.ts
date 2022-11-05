import { Vehicle } from './vehicle';
import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

describe('Vehicle', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [  HttpClientModule ]
    }).compileComponents();
  });
  it('should create an instance', () => {
    expect(new Vehicle(
      1,
      'Renault',
      'TY34',
      'Sedan',
      2010,
      2000,
      'Verde',
      'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg'
    )).toBeTruthy();
  });
});
