import React from "react";
import { shallow } from "enzyme";
import VacancyList from "./VacancyList";

/**
* This test only for VacancyList component. Tests content item of Vacancy testing in VacancyList.spec.js
*/
describe("<VacancyList />", () => {

  it("VacancyList renders id correctly", () => {
    const props = {
        vacancies: [
        {id: 0, title: "vacancy0", completed: false},
        {id: 1, title: "vacancy1", completed: true},
        ]
    };

    const wrapper = shallow(<VacancyList {...props} />);

    expect(wrapper.find({ id: "vacancyId0" })).toHaveLength(1);
    expect(wrapper.find({ id: "vacancyId1" })).toHaveLength(1);
  });

  it("count children VacancyList", () => {
    const props = {
        vacancies: [
        {id: 0, title: "vacancy0", completed: false},
        {id: 1, title: "vacancy1", completed: true},
        ]
    };

    const wrapper = shallow(<VacancyList {...props} />);

    expect(wrapper.find({ id: "vacancyList" })).toHaveLength(1);
    const vacancies = wrapper.find({ id: "vacancyList" }).children();
    expect(vacancies).toHaveLength(2);
  });

  it("exists ListGroup in VacancyList", () => {
    const props = {
        vacancies: [
        {id: 0, title: "vacancy0", completed: false},
        {id: 1, title: "vacancy1", completed: true},
        ]
    };

    const wrapper = shallow(<VacancyList {...props} />);

    expect(wrapper.find({ id: "vacancyList" })).toHaveLength(1);
    const vacancyList = wrapper.find({ id: "vacancyList" });
    expect(vacancyList).toHaveLength(1);
  });

});
