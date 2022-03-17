const  {helloWorld}  = require("./index");

describe("hello world", () => {
     it("it shold return Hello World martin", () => {
       res = helloWorld("martin")
       expect(res).toEqual("Hello World martin")
     });
});
