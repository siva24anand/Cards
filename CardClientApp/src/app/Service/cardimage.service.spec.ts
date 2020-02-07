import { TestBed } from '@angular/core/testing';

import { CardimageService } from './cardimage.service';

describe('CardimageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardimageService = TestBed.get(CardimageService);
    expect(service).toBeTruthy();
  });
});
