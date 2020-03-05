import React from "react";
import { shallow } from "enzyme";

import ExampleComponent from "../ExampleComponent/ExampleComponent";
import { makeServer } from "__mocks__/server";

describe("ExampleComponnt", () => {
    beforeAll(() => {
        makeServer();
    });

    it("should render example component", () => {
        const props = {
            itemList: [
                {
                    id: "1",
                    data: "Test Data 1"
                },
                {
                    id: "2",
                    data: "Test Data 2"
                }
            ],
            updateItemList: () => undefined
        };
        const wrapper = shallow(<ExampleComponent {...props} />);
        expect(wrapper.render().text()).toMatch(
            "Hello World!Here's a little example to get you started.Some Example ItemsTest Data 1Test Data 2"
        );
    });
});
