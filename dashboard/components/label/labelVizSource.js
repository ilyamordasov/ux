function drawViz(data) {
    let rowData = data.tables.DEFAULT;
    var titleElement = document.createElement('div');
    titleElement.id = 'myVizTitle';
    document.body.appendChild(titleElement);

    titleElement.innerText = rowData[0]["barDimension"][0];
}
// subscribe to data and style changes
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });