import React from "react";
import { shallow } from "enzyme";
import VacancyList from "./VacancyList";

/**
* This test only for VacancyList component. Tests content item of Vacancy testing in Vacancy.spec.js
*/
describe("<VacancyList />", () => {

  it("VacancyList renders id correctly", () => {
    const props = {
        vacancies: [
           {
               id: 100,
               title: "Vacancy 100",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: false
           },
           {
               id: 101,
               title: "Vacancy 101",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: true
           },
        ]
    };

    const wrapper = shallow(<VacancyList {...props} />);

    expect(wrapper.find({ id: "vacancyId100" })).toHaveLength(1);
    expect(wrapper.find({ id: "vacancyId101" })).toHaveLength(1);
  });

  it("Vacancy 0 in VacancyList renders id correctly", () => {
    const props = {
        vacancies: [
           {
               id: 100,
               title: "Vacancy 100",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: false
           },
           {
               id: 101,
               title: "Vacancy 101",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: true
           },
        ]
    };

    const wrapper = shallow(<VacancyList {...props} />);

    expect(wrapper.find({ id: "vacancyId100" })).toHaveLength(1);
    let vacancy0 = wrapper.find({ id: "vacancyId100" });

    expect(vacancy0.prop("id")).toEqual("vacancyId100");
  });

  it("prop 'vacancy' correctly in Vacancy0 in VacancyList", () => {
    const props = {
        vacancies: [
           {
               id: 100,
               title: "Vacancy 100",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: false
           },
           {
               id: 101,
               title: "Vacancy 101",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: true
           },
        ]
    };

    const wrapper = shallow(<VacancyList {...props} />);

    expect(wrapper.find({ id: "vacancyId101" })).toHaveLength(1);
    let vacancy0 = wrapper.find({ id: "vacancyId101" });

    expect(vacancy0.prop("vacancy")).toEqual({
               id: 101,
               title: "Vacancy 101",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: true
    });
  });

  it("key Vacancy0 in VacancyList renders id correctly", () => {
    const props = {
        vacancies: [
           {
               id: 100,
               title: "Vacancy 100",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: false
           },
           {
               id: 101,
               title: "Vacancy 101",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: true
           },
        ]
    };

    const wrapper = shallow(<VacancyList {...props} />);

    expect(wrapper.find({ id: "vacancyId101" })).toHaveLength(1);
    let vacancy101 = wrapper.find({ id: "vacancyId101" });

    expect(vacancy101.key()).toEqual("101");
  });

  it("count children VacancyList", () => {
    const props = {
        vacancies: [
           {
               id: 100,
               title: "Vacancy 100",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: false
           },
           {
               id: 101,
               title: "Vacancy 101",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: true
           },
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
           {
               id: 100,
               title: "Vacancy 100",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: false
           },
           {
               id: 101,
               title: "Vacancy 101",
               company: "Company 1",
               source: "Source 1",
               contact: "Contact 1",
               comment: "Comment 1",
               completed: true
           },
        ]
    };

    const wrapper = shallow(<VacancyList {...props} />);

    expect(wrapper.find({ id: "vacancyList" })).toHaveLength(1);
    const vacancyList = wrapper.find({ id: "vacancyList" });
    expect(vacancyList).toHaveLength(1);
  });

});
