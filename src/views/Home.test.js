import { render } from "vue-testing-library";
import Home from "./Home";

const routes = [{ path: "/", component: Home }];

describe("Home component", () => {
  it("should render Home", () => {
    const { queryByTestId } = render(Home, {
      routes
    });
    expect(queryByTestId("header").textContent).toEqual(
      "What Web Can Do In Vue"
    );

    // const wrapper = shallowMount(Home, {
    //   localVue,
    //   router
    // });
    // expect(wrapper.find("[data-testid=header]").text()).toEqual(
    //   "What Web Can Do In Vue"
    // );
    // expect(queryByTestId("test-link").textContent).toBe("what-web-can-do-in-vue");
  });
});
