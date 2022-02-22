const  {helloWorld}  = require("./index");

describe("hello world", () => {
     it("it shold return Hello World martin", () => {
       helloWorld("martin")
     });
});
