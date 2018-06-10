import { TestBed, inject } from '@angular/core/testing';

import { FavourService } from './favour.service';

describe('FavourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavourService]
    });
  });

  it('should be created', inject([FavourService], (service: FavourService) => {
    expect(service).toBeTruthy();
  }));
});
