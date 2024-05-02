import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NewVacancyPanel from "./NewVacancyPanel";

describe("<NewVacancyPanel />", () => {

  it("NewVacancyPanel props", () => {
    const wrapper = shallow(<NewVacancyPanel />);
    // for demo logging props:
    //    const props = wrapper.props();
    //    console.log(wrapper.debug());
    //    console.log(wrapper.props().children);
    //    console.log(wrapper.props().children[1].props);

    const panelProps = wrapper.props();
    expect(panelProps.className).toEqual('mt-2 md-0 pt-5 pl-0 pd-0');
  });

});
