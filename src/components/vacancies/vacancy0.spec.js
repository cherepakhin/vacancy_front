import moment from 'moment';

import vacancy0 from "./vacancy0";

describe("vacancy0", () => {

  it("structure vacancy0", () => {
    expect(vacancy0).toEqual({"id": -1,
                                             "title": "Не удалять",
                                             "company": "-",
                                             "date_created": moment().format('DD.MM.YYYY'),
                                             "date_changed": moment().format('DD.MM.YYYY'),
                                             "salary": "0",
                                             "source": "-",
                                             "contact": "-",
                                             "comment": "-",
                                             "completed": false});
  });
});