import axios from 'axios';
import cors from 'cors';

export const getGeoid = (req, res) => {

	let street = req.body.street.split(" ").join("+");
	let city = req.body.city.split(" ").join("+");
	let state = req.body.state.split(" ").join("+");
	let url = `https://geocoding.geo.census.gov/geocoder/geographies/address?street=${street}&city=${city}&state=${state}&benchmark=Public_AR_Census2010&vintage=Census2010_Census2010&layers=14&format=json`;


	axios.get(url)
	.then(data => {
		res.send(data.data.result.addressMatches[0].geographies["Census Blocks"][0].GEOID)
		
	})
	.catch(function (err) {
  		res.send(err);
	});

	
};