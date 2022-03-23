import { expect, it, test } from "vitest"
import { createAppDiv } from "./main"

test("createAppDiv", () => {
    it("should return div#app", () => {
        expect(createAppDiv()).toBeInstanceOf(HTMLDivElement)
    })
})
