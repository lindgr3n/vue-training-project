import * as utils from "./utils";

describe("utils", () => {
  describe("browserSupports", () => {
    it("should be defined", () => {
      expect(utils).toBeDefined();
    });

    it("should validate that support exist or not", async () => {
      const { supported, data } = await utils.browserSupports({
        browser: "chrome",
        version: "75",
        caniuse: "geolocation"
      });

      expect(supported).toEqual("y #1");
      expect(data.title).toEqual("Geolocation");

      const response = await utils.browserSupports({
        browser: "ie",
        version: "5.5",
        caniuse: "geolocation"
      });

      expect(response.supported).toEqual("n");
    });
  });
});
