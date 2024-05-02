import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("Title List vacancies", () => {

  it("Check props", () => {
    const wrapper = shallow(<App />);
    const props = wrapper.props();
    // children[3] - Container - index 1, Toolbar Row - index 2, Toolbar Row Col - index 3
    const className = wrapper.props().children[2].props.className;
    expect(className).toEqual("mt-0 pt-0");
  });

  it("Check content", () => {
    const wrapper = mount(<App />);
//    const content = wrapper.props().children[2];
//     <ForwardRef className="mt-0 pt-0" noGutters={false}><ForwardRef><h4>Список вакансий</h4></ForwardRef></ForwardRef>
//    const content = wrapper.props().children[3];
//     <ForwardRef noGutters={false}><ForwardRef xs={12}><VacancyList vacancies={[]} /></ForwardRef></ForwardRef>
    // children[3] - Container - index 1, Toolbar Row - index 2, Toolbar Row Col - index 3
    const label = wrapper.find("#label_list_vacancies").text();
    expect(label).toEqual("Список вакансий");
  });

});
