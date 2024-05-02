import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import VacanciesHeader from "./VacanciesHeader";

describe("Vacancies header.", () => {

  it("Check props", () => {
    const wrapper = shallow(<VacanciesHeader />);
    const props = wrapper.props();
    expect(props.className).toEqual("mt-0 pt-0");
  });

  it("Check content.", () => {
    const wrapper = mount(<VacanciesHeader />);
    const label = wrapper.find("#label_list_vacancies").text();
    expect(label).toEqual("Список вакансий");
  });

});
