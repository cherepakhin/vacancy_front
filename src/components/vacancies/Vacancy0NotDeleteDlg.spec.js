import React from "react";
import { shallow } from "enzyme";
import Vacancy0NotDeleteDlg from "./Vacancy0NotDeleteDlg";

describe("<Vacancy0NotDeleteDlg />", () => {
  it("Vacancy0NotDeleteDlg", () => {
    const props = {
      visible: true,
      fnVacancy0NotDeleteDlgClose: jest.fn()
    };
    const wrapper = shallow(<Vacancy0NotDeleteDlg {...props} />);
    expect(wrapper.find({ id: "vacancy0NotDeleteDlg" })).toHaveLength(1);
  });

  it("Vacancy0NotDeleteDlg header", () => {
    const props = {
      visible: true,
      fnVacancy0NotDeleteDlgClose: jest.fn()
    };

    const wrapper = shallow(<Vacancy0NotDeleteDlg {...props} />);

    expect(wrapper.find({ id: "header" }).text()).toBe("Внимание!");
  });

  it("Vacancy0NotDeleteDlg body", () => {
    const props = {
      visible: true,
      fnVacancy0NotDeleteDlgClose: jest.fn()
    };

    const wrapper = shallow(<Vacancy0NotDeleteDlg {...props} />);

    expect(wrapper.find({ id: "vacancy0NotDeleteDlg" })).toHaveLength(1);
    expect(wrapper.find({ id: "body" }).text()).toBe("Вакансию -1 нельзя удалять.");
  });

  it("Vacancy0NotDeleteDlg footer", () => {
    const props = {
      visible: true,
      fnVacancy0NotDeleteDlgClose: jest.fn()
    };

    const wrapper = shallow(<Vacancy0NotDeleteDlg {...props} />);

    expect(wrapper.find({ id: "vacancy0NotDeleteDlg" })).toHaveLength(1);
    expect(wrapper.find({ id: "ok" }).text()).toBe("Закрыть");
  });

});
