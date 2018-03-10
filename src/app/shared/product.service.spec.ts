import { ProductService } from './product.service';


describe("Product Service", () => {

    let svc;
    let http;

    beforeEach(() => {
        http = jasmine.createSpyObj("http", ["get", "post", "delete"]);

        svc = new ProductService(http);
    });

    it("should call logger.warn()", () => {
        svc.delete();

        expect(http.delete).toHaveBeenCalled();
    });

    afterEach(() => {
        svc = null;
        http = null;
    });

});