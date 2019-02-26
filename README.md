### Running

Install .json credentials for google cloud in the main directory

Run `yarn install`

Run `yarn run dev-server`

Open `localhost:3000`




### To add to the data

Edit `fakedata.csv`

Run `bq load --source_format=CSV testdata.testtable  ./fakedata.csv name:STRING,age:INTEGER`


### Note

Moved to bit bucket repo under /research