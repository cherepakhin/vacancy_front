import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NewVacancyPanel from "./NewVacancyPanel";
import EditVacancyDlg from "./vacancies/EditVacancyDlg";

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

    expect(wrapper.props().children[1].props.xs).toEqual(12);
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
//    console.log(wrapper.props().children);
//    console.log(wrapper.props().children[0]);
//    console.log(wrapper.props().children[1]);

    // console.log(wrapper.props().children[1].props.children); // DON`T DELETE COMMENT
    expect(wrapper.props().children[1].props.children[1].type).toEqual('h4');
  });

  it("h4 in NewVacancyPanel with find by id", () => {
    const wrapper = shallow(<NewVacancyPanel visible={true}/>);
    const headerNewVacancyPanel = wrapper.find('#headerNewVacancyPanel');

    expect(headerNewVacancyPanel.props().id).toEqual('headerNewVacancyPanel');
    expect(headerNewVacancyPanel.props().children).toEqual('Новая вакансия');
    expect(headerNewVacancyPanel.type()).toEqual('h4');
  });

  it("check id headerNewVacancyPanel in NewVacancyPanel with find by id", () => {
    const wrapper = shallow(<NewVacancyPanel visible={true}/>);
    const headerNewVacancyPanel = wrapper.find('#headerNewVacancyPanel');

    expect(headerNewVacancyPanel.props().id).toEqual('headerNewVacancyPanel');
  });

  it("check text in NewVacancyPanel with find by id", () => {
    const wrapper = shallow(<NewVacancyPanel visible={true}/>);
    const headerNewVacancyPanel = wrapper.find('#headerNewVacancyPanel');

    expect(headerNewVacancyPanel.props().children).toEqual('Новая вакансия');
  });

  it("check caption in NewVacancyPanel with methods children->props->children...", () => {
    const wrapper = shallow(<NewVacancyPanel visible={false}/>);

    expect(wrapper.props().children[1].props.children[1].props.children).toEqual('Новая вакансия');
  });

  it("check caption in headerNewVacancyPanel of NewVacancyPanel", () => {
    const wrapper = shallow(<NewVacancyPanel visible="true"/>);
    const headerNewVacancyPanel = wrapper.find('#headerNewVacancyPanel');
    expect(headerNewVacancyPanel.text()).toEqual('Новая вакансия');
  });

  it("NewVacancyPanel contains EditVacancyDlg", () => {
    const wrapper = shallow(<NewVacancyPanel />);

    expect(wrapper.props().children.length).toEqual(2);
//    console.log(wrapper.props().children);
//    console.log(wrapper.props().children[1].props);
    expect(wrapper.find(EditVacancyDlg).length).toBe(1);
  });

  it("find idNewVacancyPanel in NewVacancyPanel", () => {
    const wrapper = shallow(<NewVacancyPanel />);
    const newVacancyPanel = wrapper.find('#idNewVacancyPanel');
    expect(newVacancyPanel.length).toBe(1);
  });

  it("find colNewVacancyPanel in NewVacancyPanel", () => {
    const wrapper = shallow(<NewVacancyPanel />);
    const colNewVacancyPanel = wrapper.find('#colNewVacancyPanel');
    expect(colNewVacancyPanel.length).toBe(1);
  });

  it("find headerNewVacancyPanel in NewVacancyPanel", () => {
    const wrapper = shallow(<NewVacancyPanel />);
    const headerNewVacancyPanel = wrapper.find('#headerNewVacancyPanel');
    expect(headerNewVacancyPanel.length).toBe(1);
  });

  it("check xs colNewVacancyPanel in NewVacancyPanel", () => {
    const wrapper = shallow(<NewVacancyPanel />);
    const colNewVacancyPanel = wrapper.find('#colNewVacancyPanel');
    expect(colNewVacancyPanel.props().xs).toEqual(12);
  });

  it("check className for hidden colNewVacancyPanel in NewVacancyPanel with default props", () => {
    const wrapper = shallow(<NewVacancyPanel />);
    const colNewVacancyPanel = wrapper.find('#colNewVacancyPanel');
    expect(colNewVacancyPanel.props().className).toEqual('d-none');
  });

  it("check className for hidden colNewVacancyPanel in NewVacancyPanel visible={false}", () => {
    const wrapper = shallow(<NewVacancyPanel visible={false}/>);
    const colNewVacancyPanel = wrapper.find('#colNewVacancyPanel');
    expect(colNewVacancyPanel.props().className).toEqual('d-none');
  });

  it("check className for showed colNewVacancyPanel in NewVacancyPanel visible={true}", () => {
    const wrapper = shallow(<NewVacancyPanel visible={true}/>);
    const colNewVacancyPanel = wrapper.find('#colNewVacancyPanel');
    expect(colNewVacancyPanel.props().className).toEqual('');
  });

  it("check className '' for showed colNewVacancyPanel in NewVacancyPanel visible=\"true\"", () => {
    const wrapper = shallow(<NewVacancyPanel visible="true"/>);
    const colNewVacancyPanel = wrapper.find('#colNewVacancyPanel');
    expect(colNewVacancyPanel.props().className).toEqual('');
  });

});
