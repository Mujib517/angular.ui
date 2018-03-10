import { ContactComponent } from './contact.component';


describe("Contact Component", () => {

    let comp;
    let logger;

    beforeEach(() => {
        logger = jasmine.createSpyObj("svc", ["warn"]);
        //arrange 
        comp = new ContactComponent(logger);
    });

    it("should call logger.warn()", () => {
        comp.ngOnInit();
        expect(logger.warn).toHaveBeenCalledWith("Test Logging"); 
    });

    afterEach(() => {
        comp = null;
    });

});