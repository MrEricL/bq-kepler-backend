const {syncQuery, asyncQuery} = require("../model/basebq.js")


export const getAll = (req, res) => {
	const query = "SELECT * FROM `rf-erictest.testdata.testtable` LIMIT 3"
	asyncQuery(query)
    .then(resp => res.send(resp));
}