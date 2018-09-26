import { TestBed, inject } from '@angular/core/testing';

import { gitapiService } from './git-api.service';

describe('gitapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [gitapiService]
    });
  });

  it('should be created', inject([gitapiService], (service: gitapiService) => {
    expect(service).toBeTruthy();
  }));
});
