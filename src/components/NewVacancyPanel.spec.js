import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NewVacancyPanel from "./NewVacancyPanel";
import AddNewVacancy from "./vacancies/AddNewVacancy";

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

  it("NewVacancyPanel included 6 columns", () => {
    const wrapper = shallow(<NewVacancyPanel visible={true}/>);
    const panel = toJson(wrapper);

    expect(wrapper.props().children[1].props.xs).toEqual(6);
  });

  it("showed className NewVacancyPanel", () => {
    const wrapper = shallow(<NewVacancyPanel visible={true}/>);
    const panel = toJson(wrapper);

    expect(wrapper.props().children[1].type.displayName).toEqual('Col');
    expect(wrapper.props().children[1].props.className).toEqual('');
  });

  it("hided className NewVacancyPanel", () => {
    const wrapper = shallow(<NewVacancyPanel visible={false}/>);
    const panel = toJson(wrapper);

    expect(wrapper.props().children[1].props.className).toEqual('d-none');
  });

  it("h4 in NewVacancyPanel", () => {
    const wrapper = shallow(<NewVacancyPanel visible={false}/>);
    const panel = toJson(wrapper);
    console.log(wrapper.props().children);
    console.log(wrapper.props().children[0]);
    console.log(wrapper.props().children[1]);

    console.log(wrapper.props().children[1].props.children);
    expect(wrapper.props().children[1].props.children[1].type).toEqual('h4');
  });

  it("'Новая вакансия' in NewVacancyPanel", () => {
    const wrapper = shallow(<NewVacancyPanel visible={false}/>);

    expect(wrapper.props().children[1].props.children[1].props.children).toEqual('Новая вакансия');
  });

  it("NewVacancyPanel contains AddNewVacancy", () => {
    const wrapper = shallow(<NewVacancyPanel />);

    expect(wrapper.props().children.length).toEqual(2);
    console.log(wrapper.props().children);
    console.log(wrapper.props().children[1].props);
    expect(wrapper.find(AddNewVacancy).length).toBe(1);
  });

  it("find idNewVacancyPanel in NewVacancyPanel", () => {
    const wrapper = shallow(<NewVacancyPanel />);
    const newVacancyPanel = wrapper.find('#idNewVacancyPanel');
    expect(newVacancyPanel.length).toBe(1);
  });

});
