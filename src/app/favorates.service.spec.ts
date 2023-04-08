import { TestBed } from '@angular/core/testing';

import { FavoratesService } from './favorates.service';

describe('FavoratesService', () => {
  let service: FavoratesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoratesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
