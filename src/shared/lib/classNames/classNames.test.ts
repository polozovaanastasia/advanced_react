import { classNames } from "./classNames";

describe("ClassNames", () => {
    test("test", () => {
        expect(classNames("some-class")).toBe("some-class");
    });
});
