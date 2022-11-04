import { Vehicle } from './vehicle';

describe('Vehicle', () => {
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
