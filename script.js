google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Balance', 'Balance'],
        ['0', 0],
        ['1', 34],
        ['2', 270],
        ['3', 200],
        ['4', 290],
        ['5', 290],
        ['6', 160],
        ['7', 290],
        ['8', 290],
        ['9', 90],
        ['10', 290]
    ]);

    var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}