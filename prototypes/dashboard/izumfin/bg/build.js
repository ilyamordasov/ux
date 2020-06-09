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
  tmp = {"query": {"date_s": "20200601", "date_e": 20200609, "data": [{"index": 0, "date": "20200601", "l_count": 542, "r_req_count": 12, "mrk_req_count": 17 }, {"index": 1, "date": "20200602", "l_count": 330, "r_req_count": 12, "mrk_req_count": 19 }, {"index": 2, "date": "20200603", "l_count": 940, "r_req_count": 19, "mrk_req_count": 17 }, {"index": 3, "date": "20200604", "l_count": 734, "r_req_count": 16, "mrk_req_count": 9 }, {"index": 4, "date": "20200605", "l_count": 753, "r_req_count": 13, "mrk_req_count": 17 }, {"index": 5, "date": "20200606", "l_count": 596, "r_req_count": 9, "mrk_req_count": 17 }, {"index": 6, "date": "20200607", "l_count": 252, "r_req_count": 11, "mrk_req_count": 11 }, {"index": 7, "date": "20200608", "l_count": 637, "r_req_count": 2, "mrk_req_count": 19 }, {"index": 8, "date": "20200609", "l_count": 704, "r_req_count": 11, "mrk_req_count": 12 } ] }, "fields": [{"name": "date"}, {"name": "l_count"}, {"name": "r_req_count"}, {"name": "mrk_req_count"} ] };
  var requestedFieldIds = request.fields.map(function(field) { return field.name; });
  Logger.log("requestedFieldIds: " + requestedFieldIds);
  var requestedFields = getCustomFields(tmp.query).forIds(requestedFieldIds); 
  Logger.log("requestedFields: " + requestedFields);
  var customRows = responseToData(requestedFields, tmp.query);
  Logger.log("customRows" + customRows);
  return {
    schema: requestedFields.build(),
    rows: customRows
  };
}