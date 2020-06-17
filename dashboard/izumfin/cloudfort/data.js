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
      .setId('comission')
      .setName('Заработанная комиссия')
      .setType(types.NUMBER)
      .setAggregation(aggregations.SUM);
  
  fields.newMetric()
      .setId('release_g')
      .setName('Выдано гарантий')
      .setType(types.NUMBER)
      .setAggregation(aggregations.SUM);
  
  fields.newMetric()
      .setId('portfolio')
      .setName('Портфель')
      .setType(types.NUMBER)
      .setAggregation(aggregations.SUM);
  
  return fields;
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
        case 'comission': return row.push(item.l_count);
        case 'release_g': return row.push(item.r_req_count);
        case 'portfolio': return row.push(item.mrk_req_count);
      }
    });
    
    return {values: row};
  });
}