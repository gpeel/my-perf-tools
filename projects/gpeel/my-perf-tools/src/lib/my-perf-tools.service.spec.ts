import { TestBed } from '@angular/core/testing';

import { MyPerfToolsService } from './my-perf-tools.service';

describe('MyPerfToolsService', () => {
  let service: MyPerfToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPerfToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
