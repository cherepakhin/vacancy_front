import reducerVacancy from './reducerVacancy';

describe("reducerVacancy tests", () => {
  it("init", () => {
    let state0 = reducerVacancy();
    expect(state0).toEqual([
      {"completed": false, "id": -1, "title": "не показывать -1"},
      {"completed": false, "id": -2, "title": "не показывать -2"},
      {"completed": false, "id": -3, "title": "не показывать -3"}
    ]);
  });
});