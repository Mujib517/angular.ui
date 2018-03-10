import { Math } from './math';
//jasmine

describe("Math ", function () {

    var math;

    beforeEach(function () {
        math = new Math();
    });
    //fast
    //simple
    //db calls web svc calls: fakes
    //independent
    //red green refactor

    describe("add()", function () {

        it("should add two numbers and return result", function () {
            //AAA
            //Arrange
            //Act
            //Assert

            var result = math.add(10, 20);
            expect(result).toBe(30);

        });

        it("should return zero when first parameter is zero", function () {

            var result = math.add(0, 1000);

            expect(result).toBe(0);
        });

        it("should return -1 when second parameter is zero", function () {

            var result = math.add(1000, 0);

            expect(result).toBe(-1);
        });
    });

    describe('sub()', function () {

        it("should subtract two numbers and return result", () => {

            var result = math.sub(20, 10);
            expect(result).toBe(10);
        });

        it("should return zero when second parameter is greater", () => {

            var result = math.sub(10, 20);
            expect(result).toBe(0);
        });

        it('should return -1 when first parameter is zero', () => {

            var result = math.sub(0, 20);
            expect(result).toBe(-1);
        });
    });

    afterEach(function () {
        math = null;
    });
});