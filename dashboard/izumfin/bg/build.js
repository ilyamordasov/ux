/**
 * Gets the Auth type.
 * @return {object} The auth type.
 */
function getAuthType() {
  var response = {type: 'NONE'};
  return response;
}

function isAdminUser(){ return true; }

/**
 * Builds the Community Connector schema.
 * @param {object} request The request.
 * @return {object} The schema.
 */
function getSchema(request) {
  var customFields = getCustomFields().build();
  return {'schema': customFields};
}

function hasField(name, array) {
  for (var field in array) {
    if (array[field] == name)
      return true;
  }
  return false;
}

function getData(request) {
  Logger.log("Request: " + JSON.stringify(request));
  //request = {"configParams":{"api_url":"https://bg.izumfin.com/api/dashboard/leads?apiKey=97cd8a7f-063f-4f9c-8641-b972f1653bdc"},"scriptParams":{"lastRefresh":"1592902647148"},"dateRange":{"endDate":"2020-06-24","startDate":"2020-06-24"},"fields":[{"name":"count_g"},{"name":"date_text"}]};
  //tmp = {"query": {"date_s": "20200601", "date_e": 20200609, "data": [{"index": 0, "date": "20200601", "sum_g": 3989577, "count_g": 88, "count_unique_winner": 2, "avg_sum_g": 2335897 }, {"index": 1, "date": "20200602", "sum_g": 19959906, "count_g": 76, "count_unique_winner": 7, "avg_sum_g": 3150738 }, {"index": 2, "date": "20200603", "sum_g": 1645284, "count_g": 57, "count_unique_winner": 16, "avg_sum_g": 1935095 }, {"index": 3, "date": "20200604", "sum_g": 12856146, "count_g": 64, "count_unique_winner": 5, "avg_sum_g": 3635016 }, {"index": 4, "date": "20200605", "sum_g": 6726664, "count_g": 30, "count_unique_winner": 7, "avg_sum_g": 8388890 }, {"index": 5, "date": "20200606", "sum_g": 5478937, "count_g": 75, "count_unique_winner": 18, "avg_sum_g": 1902103 }, {"index": 6, "date": "20200607", "sum_g": 16223204, "count_g": 83, "count_unique_winner": 4, "avg_sum_g": 2631093 }, {"index": 7, "date": "20200608", "sum_g": 18021695, "count_g": 63, "count_unique_winner": 11, "avg_sum_g": 9394195 }, {"index": 8, "date": "20200609", "sum_g": 11944505, "count_g": 15, "count_unique_winner": 5, "avg_sum_g": 8590982 } ] }, "fields": [{"name": "date"}, {"name": "sum_g"}, {"name": "count_g"}, {"name": "count_unique_winner"}, {"name": "avg_sum_g"} ] };
  var data = getDataFromAPI(request.configParams.api_url + "&min_sum=" + request.configParams.min_sum + "&max_sum=" + request.configParams.max_sum + "&date_s=" + request.dateRange.startDate.replace(/-/gi, "") + "&date_e=" + request.dateRange.endDate.replace(/-/gi, ""));
  var requestedFieldIds = request.fields.map(function(field) { return field.name; });
  var requestedFields = getCustomFields(data).forIds(requestedFieldIds); 
  var customRows = responseToData(requestedFields, data);
  Logger.log(customRows);
  return {
    schema: requestedFields.build(),
    rows: customRows
  };
}