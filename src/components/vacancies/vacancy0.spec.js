import vacancy0 from "./vacancy0";

describe("vacancy0", () => {

  it("structure vacancy0", () => {
    expect(vacancy0).toEqual({"id": -1,
                                             "title": "Не удалять",
                                             "company": "-",
                                             "source": "-",
                                             "contact": "-",
                                             "comment": "-",
                                             "completed": false});
  });
});