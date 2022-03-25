const { buildTower,numberOfBricks,getOffset } = require("./index");

describe("build a tower", () => {
    describe("what is a valid floor", () => {
        it('floor has to be integer', () => {
            expect(buildTower('abc')).toEqual({message: 'Input is not a whole number'});
            expect(buildTower(true)).toEqual({message: 'Input is not a whole number'});
            expect(buildTower(2.5)).toEqual({message: 'Input is not a whole number'});
            expect(buildTower([2])).toEqual({message: 'Input is not a whole number'});
        });
        it('floor has to be positive', () => {
            expect(buildTower(-2)).toEqual({message: 'Input is not positive number'});
            expect(buildTower(0)).toEqual({message: 'Input is not positive number'});
            const res = buildTower(2)
            expect(res["message"]).toEqual(undefined);
        });
    });
    describe("tower building blocks", () => {
      test("floor width equal (number of floors * 2) - 1", () => {
        expect(numberOfBricks(1)).toBe(1);
        expect(numberOfBricks(2)).toBe(3);
        expect(numberOfBricks(3)).toBe(5);
        expect(numberOfBricks(6)).toBe(11);
      });
      test("get brick offset given floor", () => {
        expect(getOffset(5,1)).toBe(2);
        expect(getOffset(5,3)).toBe(1);
        expect(getOffset(5,5)).toBe(0);
      });
    });
    describe('building a tower', () => {
        test('build tower with single floor', () => {
            expect(buildTower(1)).toEqual(["*"]);
        });
        test('build tower with two floors', () => {
            expect(buildTower(2)).toEqual([" * ", "***"]);
        });
        test('build tower with 3 floors', () => {
          expect(buildTower(3)).toEqual(["  *  ", " *** ", "*****"]);
      });
      test('build tower with 6 floors', () => {
        expect(buildTower(6)).toEqual([
          "     *     ", 
          "    ***    ", 
          "   *****   ", 
          "  *******  ", 
          " ********* ", 
          "***********"
        ]
        );
    });

    })
});
