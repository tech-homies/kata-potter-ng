import {TestBed} from '@angular/core/testing';

import {PriceService} from './price.service';

describe('PriceService', () => {

    let service: PriceService;
    beforeEach(() => TestBed.configureTestingModule({}));
    beforeEach(() => service = TestBed.inject(PriceService));

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('testBasics', () => {
        expect(service.computePrice([])).toBe(0);
        expect(service.computePrice([1])).toBe(8);
        expect(service.computePrice([2])).toBe(8);
        expect(service.computePrice([3])).toBe(8);
        expect(service.computePrice([4])).toBe(8);
        expect(service.computePrice([5])).toBe(8);
        expect(service.computePrice([1, 1, 1])).toBe(8 * 3);
    });

    it('testSimpleDiscounts', () => {
        expect(service.computePrice([1, 2])).toBe(8 * 2 * 0.95);
        expect(service.computePrice([1, 3, 5])).toBe(8 * 3 * 0.9);
        expect(service.computePrice([1, 2, 3, 5])).toBe(8 * 4 * 0.8);
        expect(service.computePrice([1, 2, 3, 4, 5])).toBe(8 * 5 * 0.75);
    });

    it('testSeveralDiscounts', () => {
        expect(service.computePrice([1, 1, 2])).toBe(8 + (8 * 2 * 0.95));
        expect(service.computePrice([1, 1, 2, 2])).toBe(2 * (8 * 2 * 0.95));
        expect(service.computePrice([1, 1, 2, 3, 3, 4])).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95));
        expect(service.computePrice([1, 2, 2, 3, 4, 5])).toBe(8 + (8 * 5 * 0.75));
    });

    it('testEdgeCases', () => {
        expect(service.computePrice([1, 1, 2, 2, 3, 3, 4, 5])).toBe(2 * (8 * 4 * 0.8));
        expect(service.computePrice([
            1, 1, 1, 1, 1,
            2, 2, 2, 2, 2,
            3, 3, 3, 3,
            4, 4, 4, 4, 4,
            5, 5, 5, 5
        ])).toBe(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
    });

});
