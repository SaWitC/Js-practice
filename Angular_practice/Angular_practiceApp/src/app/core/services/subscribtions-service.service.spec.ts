import { TestBed } from '@angular/core/testing';

import { SubscriptionsServiceService } from './subscriptions-service.service';

describe('SubscribtionsServiceService', () => {
  let service: SubscriptionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
