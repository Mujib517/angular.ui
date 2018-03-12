import { browser, element, by } from 'protractor';

describe("Home Page", () => {

    browser.get("/");

    it("Should have title Angular.Ui", () => {

        expect(browser.getTitle()).toBe("Angular.Ui");
    });

    it("Should have Home Page heading", () => {
        let elements = element.all(by.css("h1"));

        let h1 = elements.get(0);

        expect(h1.getText()).toBe("Home Page");
    });

    it("Should navigate to about page", () => {
        let aboutLink = element(by.css('a[href="/about"]'));

        aboutLink.click();

        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/about");
    });

    it("Should navigate to products page", () => {
        let productsLink = element(by.css('a[href="/products"]'));

        productsLink.click();

        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/products");
    });

    it("Should navigate to new product page", () => {
        let newProductLink = element(by.css('a[href="/products/new"]'));

        newProductLink.click();

        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/products/new");
    });

    it("Should have save button disabled when validations fail", () => {
        let btn = element(by.css(".btn.btn-success"));

        expect(btn.isEnabled()).toBe(false);
    });

    it("Should enable the button when validations pass", () => {
        let brand = element(by.css("select"));
        let model = element(by.css('input[placeholder="Model"]'));
        let price = element(by.css('input[placeholder="Price"]'));

        let btn = element(by.css(".btn.btn-success"));

        brand.sendKeys("Apple");
        model.sendKeys("IPhone X");
        price.sendKeys("1000");

        expect(btn.isEnabled()).toBe(true);
    });

    it("Should show validation error messages", () => {
        let brand = element(by.css("select"));
        let model = element(by.css('input[placeholder="Model"]'));
        let price = element(by.css('input[placeholder="Price"]'));

        brand.sendKeys("Apple");
        model.sendKeys("IPhone X");
        price.sendKeys("1000");

        model.clear();
        price.clear();

        browser.sleep(2000);

        let errs = element.all(by.css(".text-danger"));
        let err = errs.get(0);

        expect(err.isDisplayed()).toBe(true);
    });



    // it("Should navigate back to products page", () => {
    //     let btn = element(by.css(".btn.btn-success"));
    //     btn.click();
    //     expect(browser.getCurrentUrl()).toBe("http://localhost:49152/products");
    // });

});