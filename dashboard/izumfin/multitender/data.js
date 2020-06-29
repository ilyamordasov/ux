function getCustomFields(parsedResponse) {
  var cc = DataStudioApp.createCommunityConnector();
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields.newDimension()
      .setId('date')
      .setName('Дата')
      .setType(types.YEAR_MONTH_DAY);
  
  fields.newMetric()
      .setId('date_text')
      .setName('Период')
      .setType(types.TEXT);
  
  fields.newMetric()
      .setId('sum_g')
      .setName('Сумма гарантий')
      .setType(types.NUMBER)
      .setAggregation(aggregations.SUM);
  
  fields.newMetric()
      .setId('count_g')
      .setName('Количество гарантий')
      .setType(types.NUMBER)
      .setAggregation(aggregations.SUM);
  
  fields.newMetric()
      .setId('count_unique_winner')
      .setName('Количество уникальных победителей')
      .setType(types.NUMBER)
      .setAggregation(aggregations.SUM);

  fields.newMetric()
      .setId('avg_sum_g')
      .setName('Средняя сумма гарантий')
      .setType(types.NUMBER)
      .setAggregation(aggregations.SUM);
  
  return fields;
}

function getDataFromAPI(url) {
  var response = UrlFetchApp.fetch(url);
  var jsn = JSON.parse(response.getContentText());
  return jsn;
}

function addLabel(data, value) {
  data.forEach(element => {
     element.date_text = value;
  });
}

function responseToData(requestedFields, response) {
  response.data = response.data.filter(function (el) {
    return el.sum != 0;
  });
  
  return response.data.map(function(item) {
    var row = [];
    requestedFields.asArray().forEach(function(field) {
      switch (field.getId()) {
        case 'date': return row.push(item.date);
        case 'date_text': return row.push(item.date_text);
        case 'sum_g': return row.push(item.sum_g);
        case 'count_g': return row.push(item.count_g);
        case 'count_unique_winner': return row.push(item.count_unique_winner);
        case 'avg_sum_g': return row.push(item.avg_sum_g);
      }
    });
    
    return {values: row};
  });
}