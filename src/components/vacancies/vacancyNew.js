import moment from 'moment';

let vacancyNew = {"id": -1,
                "title": "",
                "company": "",
                "date_created": moment().format('DD.MM.YYYY'),
                "date_changed": moment().format('DD.MM.YYYY'),
                "salary": "0",
                "source": "",
                "contact": "",
                "comment": "",
                "completed": false};

export default vacancyNew;