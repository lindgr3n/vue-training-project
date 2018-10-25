import { render } from "vue-testing-library";
import NotFound from "./NotFound";

test("should render NotFound", () => {
  const { queryByTestId } = render(NotFound);
  expect(queryByTestId("test-link").textContent).toBe("what-web-can-do-in-vue");
});
