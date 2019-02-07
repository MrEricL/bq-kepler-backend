const {BigQuery} = require('@google-cloud/bigquery');
const credential = require('../../rf-erictest-f610a7c71c30.json');
const bigquery = new BigQuery({
  projectId: "rf-erictest",
  credentials: credential
});
exports.syncQuery = function(sqlQuery) {
    // Query options list: https://cloud.google.com/bigquery/docs/reference/v2/jobs/query
    const options = {
      query: sqlQuery,
      timeoutMs: 10000, // Time out after 10 seconds.
      useLegacySql: false, // Use standard SQL syntax for queries.
    };
  
    // Runs the query
    return bigquery
      .query(options)
      .then(results => {
        const rows = results[0];
        // console.log(rows);
        return rows;
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
    // [END bigquery_sync_query]
  
  }
  
exports.asyncQuery = function (sqlQuery) {
    // Query options list: https://cloud.google.com/bigquery/docs/reference/v2/jobs/query
    const options = {
      query: sqlQuery,
      useLegacySql: false, // Use standard SQL syntax for queries.
    };
  
    let job;
  
    // Runs the query as a job
    return bigquery
      .createQueryJob(options)
      .then(results => {
        job = results[0];
        console.log(`Job ${job.id} started.`);
        return job.promise();
      })
      .then(() => {
        // Get the job's status
        return job.getMetadata();
      })
      .then(metadata => {
        // Check the job's status for errors
        const errors = metadata[0].status.errors;
        if (errors && errors.length > 0) {
          throw errors;
        }
      })
      .then(() => {
        console.log(`Job ${job.id} completed.`);
        return job.getQueryResults();
      })
      .then(results => {
        const rows = results[0];
        // console.log(rows); 
        return rows;
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  }
