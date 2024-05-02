import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import ListVacanciesHeader from "./ListVacanciesHeader";

describe("List vacancies. Header.", () => {

  it("Check props", () => {
    const wrapper = shallow(<ListVacanciesHeader />);
    const props = wrapper.props();
    expect(props.className).toEqual("mt-0 pt-0");
  });

  it("List vacancies. Check content.", () => {
    const wrapper = mount(<ListVacanciesHeader />);
    const label = wrapper.find("#label_list_vacancies").text();
    expect(label).toEqual("Список вакансий");
  });

});
