import { classNames } from "./classNames";

describe("ClassNames", () => {
    test("with only first param", () => {
        expect(classNames("some-class")).toBe("some-class");
    });

    test("with additional classes", () => {
        const expected = "some-class class1 class2";
        expect(classNames("some-class", {}, ["class1", "class2"])).toBe(
            expected
        );
    });

    test("with mode", () => {
        const expected = "some-class mode1 mode2 class1 class2";
        expect(
            classNames("some-class", { mode1: true, mode2: true }, [
                "class1",
                "class2",
            ])
        ).toBe(expected);
    });

    test("with mode false", () => {
        const expected = "some-class mode2 class1 class2";
        expect(
            classNames("some-class", { mode1: false, mode2: true }, [
                "class1",
                "class2",
            ])
        ).toBe(expected);
    });

    test("with mode undefined", () => {
        const expected = "some-class mode2 class1 class2";
        expect(
            classNames("some-class", { mode1: undefined, mode2: true }, [
                "class1",
                "class2",
            ])
        ).toBe(expected);
    });
});
