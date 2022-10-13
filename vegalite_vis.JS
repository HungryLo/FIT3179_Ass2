var vg_1 = "Map.JSON";
vegaEmbed("#choro_map", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "LineChart.JSON";
vegaEmbed("#line_chart", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "BubbleChart.JSON";
vegaEmbed("#bubble_chart", vg_3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "StackedBarChart.JSON";
vegaEmbed("#stack_bar_chart", vg_4).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);