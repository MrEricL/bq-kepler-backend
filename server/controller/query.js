const {syncQuery, asyncQuery} = require("../model/basebq.js")


export const getAll = (req, res) => {
	const query = "SELECT * FROM `rf-erictest.testdata.testtable`"
	asyncQuery(query)
    .then(resp => res.send(resp));
};


