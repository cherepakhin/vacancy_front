import React from "react";
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import renderer from 'react-test-renderer';
import EnzymeToJson from 'enzyme-to-json';

import AboutVacancyDlg from "./AboutVacancyDlg";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("AboutVacancyDlg test", () => {
  it("AboutVacancyDlg check structure with MOUNT", () => {
    const vacancy = {
      id: 100,
      title: "Vacancy 1"
    };
//      const wrapper = shallow(<DeleteConfirmDlg id='100' title="Vacancy 1"/>);
    const wrapper = mount(<AboutVacancyDlg vacancy={{id: 100, title: "Vacancy 1"}} visible={true} fnClose={() => jest.fn()}/>);
    const dlg = toJson(wrapper);
    // demo log
    //    console.log(dlg);
    //    console.log(dlg.node.props);
    expect(dlg.children[0].type).toBe("Modal");
    expect(dlg.children[0].props.show).toBe(true);
//    expect(dlg.children[0].props.className).toBe("rounded-0");

    expect(dlg.node.props.vacancy).toEqual(vacancy);

  });
});