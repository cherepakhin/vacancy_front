import reducerVacancy from './reducerVacancy';

describe("reducerVacancy tests", () => {
  it("init reducerVacancy", () => {
    let state0 = reducerVacancy({vacancies: [
                                               {"completed": false, "id": -1, "title": "не показывать -1"},
                                               {"completed": false, "id": -2, "title": "не показывать -2"},
                                               {"completed": false, "id": -3, "title": "не показывать -3"}
                                             ]});
    console.log(state0);
    expect(state0).toEqual({vacancies: [
      {"completed": false, "id": -1, "title": "не показывать -1"},
      {"completed": false, "id": -2, "title": "не показывать -2"},
      {"completed": false, "id": -3, "title": "не показывать -3"}
    ]});
  });
});