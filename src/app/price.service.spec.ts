import {TestBed} from '@angular/core/testing';

import {PriceService} from './price.service';

describe('PriceService', () => {

    let service: PriceService;
    beforeEach(() => TestBed.configureTestingModule({}));
    beforeEach(() => service = TestBed.inject(PriceService));

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
