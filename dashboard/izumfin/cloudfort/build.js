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
  // request = {scriptParams={lastRefresh=1591703635693}, fields=[{name=date}, {name=l_count}], dateRange={endDate=2020-06-09, startDate=2020-06-01}, configParams={api_url=http://izumfin.com}};
  tmp = {"query": {"date_s": "2020-06-01", "date_e": 20200609, "data": [{"index": 0, "date": "20200601", "comission": 5111592, "release_g": 32, "portfolio": 1100000 }, {"index": 1, "date": "20200602", "comission": 16987608, "release_g": 100, "portfolio": 1144909 }, {"index": 2, "date": "20200603", "comission": 13247355, "release_g": 14, "portfolio": 1119469 }, {"index": 3, "date": "20200604", "comission": 13579001, "release_g": 4, "portfolio": 1302723 }, {"index": 4, "date": "20200605", "comission": 8808627, "release_g": 35, "portfolio": 1318621 }, {"index": 5, "date": "20200606", "comission": 4804038, "release_g": 99, "portfolio": 1455083 }, {"index": 6, "date": "20200607", "comission": 14220530, "release_g": 72, "portfolio": 1269863 }, {"index": 7, "date": "20200608", "comission": 13631621, "release_g": 16, "portfolio": 1573488 }, {"index": 8, "date": "20200609", "comission": 19452070, "release_g": 34, "portfolio": 1256241 } ] }, "fields": [{"name": "date"}, {"name": "sum_g"}, {"name": "count_g"}, {"name": "count_unique_winner"}, {"name": "avg_sum_g"} ] };
  var requestedFieldIds = request.fields.map(function(field) { return field.name; });
  var requestedFields = getCustomFields(tmp.query).forIds(requestedFieldIds); 
  var customRows = responseToData(requestedFields, tmp.query);
  return {
    schema: requestedFields.build(),
    rows: customRows
  };
}