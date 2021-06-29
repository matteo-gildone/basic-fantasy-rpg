import { getModifier, isRolled } from "../attributes";

describe("Attributes", () => {
    describe("getModifier", () => {
        it("Should return a negative modifier", () => {
            expect(getModifier(7)).toEqual(-1);
        });
        it("Should return a posite modifier", () => {
            expect(getModifier(18)).toEqual(3);
        });
        it("Should return a 0 modifier", () => {
            expect(getModifier(1)).toEqual(0);
            expect(getModifier(10)).toEqual(0);
        });
    });
    describe("isRolled", () => {
        it("Should return true when score is lower than zero", () => {
            expect(isRolled(0)).toBeFalsy();
        });
        it("Should return true when score is bigger than zero", () => {
            expect(isRolled(7)).toBeTruthy();
        });
    });
});
