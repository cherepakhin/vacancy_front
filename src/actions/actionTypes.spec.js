import actionTypes from "./actionTypes";

describe("check list of actionTypes", () => {
  it("check actionTypes.VACANCY_ADD", () => {
    const actionTypes = require("./actionTypes");
    expect("VACANCY_ADD").toEqual(actionTypes.VACANCY_ADD);
  });

  it("check actionTypes.VACANCY_TOGGLE", () => {
    const actionTypes = require("./actionTypes");
    expect("VACANCY_TOGGLE").toEqual(actionTypes.VACANCY_TOGGLE);
  });

  it("check actionTypes.VACANCY_REMOVE", () => {
    const actionTypes = require("./actionTypes");
    expect("VACANCY_REMOVE").toEqual(actionTypes.VACANCY_REMOVE);
  });

  it("check actionTypes.SHOW_DELETE_CONFIRM_DLG", () => {
    const actionTypes = require("./actionTypes");
    expect("SHOW_DELETE_CONFIRM_DLG").toEqual(actionTypes.SHOW_DELETE_CONFIRM_DLG);
  });

});
