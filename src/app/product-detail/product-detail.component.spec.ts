import { ProductDetailComponent } from './product-detail.component';
import { Observable } from 'rxjs/Observable';

describe("Product Detail Component", () => {

    let comp;
    let svc;
    let route;

    beforeEach(() => {
        svc = jasmine.createSpyObj("svc", ["getById"]);

        let obs = new Observable(o => {
            o.next(10),
                o.next(20),
                o.next(30)
        });

        svc.getById = jasmine.createSpy("getById").and.returnValue(obs);

        route = {
            snapshot: {
                params: {
                    id: 1
                }
            }
        };

        comp = new ProductDetailComponent(svc, route);
    });

    it("should have product undefined", () => {
        expect(comp.product).toBeUndefined();
    });

    it('should call getById of product service', () => {
        comp.ngOnInit();

        expect(svc.getById).toHaveBeenCalled();
    });


    afterEach(() => {
        comp = null;
        svc = null;
        route = null;
    });

});