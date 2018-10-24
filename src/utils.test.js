import * as utils from "./utils";

describe("utils", () => {
  describe("browserSupports", () => {
    it("should be defined", () => {
      expect(utils).toBeDefined();
    });

    it("should validate that support exist or not", () => {
      expect(utils.browserSupports()).toEqual(false);
      expect(utils.browserSupports("donotexist")).toEqual(false);
      expect(utils.browserSupports("window")).toEqual(true);
      expect(utils.browserSupports("window.navigator")).toEqual(true);
    });
  });
});
