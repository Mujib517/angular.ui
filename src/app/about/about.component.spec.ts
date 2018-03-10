import { AboutComponent } from './about.component';

describe("About Component", () => {
    let comp;

    beforeEach(() => {
        //Arrange
        comp = new AboutComponent();
    });

    it("should have counter defined", () => {
        expect(comp.counter).toBeDefined();
    });

    it("should have counter set to 10", () => {
        expect(comp.counter).toBe(10);
    });

    it("should increment the value of counter by 1", function () {
        comp.inc();

        expect(comp.counter).toBe(11);
    });


    afterEach(() => {
        comp = null;
    });
});