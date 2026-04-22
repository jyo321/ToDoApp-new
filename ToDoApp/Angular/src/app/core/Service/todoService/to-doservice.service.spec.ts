import { TestBed } from '@angular/core/testing';

import { ToDOServiceService } from './to-doservice.service';

describe('ToDOServiceService', () => {
  let service: ToDOServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDOServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
