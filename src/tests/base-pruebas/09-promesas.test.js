import { describe, test, expect } from "@jest/globals";
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
describe("09-promesas", () => {
  test("should return a heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("should return an error if hero isnt exists", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      console.log(error);
      done();
    });
  });
});
