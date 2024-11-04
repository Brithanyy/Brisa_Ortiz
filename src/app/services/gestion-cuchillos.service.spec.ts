import { TestBed } from '@angular/core/testing';

import { GestionCuchillosService } from './gestion-cuchillos.service';

describe('GestionCuchillosService', () => {
  let service: GestionCuchillosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCuchillosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
