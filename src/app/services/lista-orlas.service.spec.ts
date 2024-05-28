import { TestBed } from '@angular/core/testing';

import { ListaOrlasService } from './lista-orlas.service';

describe('ListaOrlasService', () => {
  let service: ListaOrlasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaOrlasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
