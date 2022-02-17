const  {atm}  = require("./atm");

describe('atm', () => {
     it("should return -1 if amount is bigger than 1500", () => {
         expect(atm(1501)).toEqual(-1);
     })

     it("should return valid amount of bank notes if amount is 1500", () => {
          expect(atm(1500)).not.toEqual(-1);
      });

     it("should return -1 if amount is lower than 1", () => {
          expect(atm(0)).toEqual(-1);
      })
      
     it("should return -1 if amount is not divisible by 10", () => {
          expect(atm(5)).toEqual(-1);
      });

     it("should return 3 if requested amount is 1500", () => {
         expect(atm(1500)).toEqual(3);
      });
      
     it("should return 4 if requested amount is 1300", () => {
         expect(atm(1300)).toEqual(4);
      });
     

})
