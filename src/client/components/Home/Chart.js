import React, { useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export const Chart = (props) => {
  am4core.useTheme(am4themes_animated);

  function createChart() {
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [
      {
        date: new Date(2018, 3, 20),
        value: 90,
      },
      {
        date: new Date(2018, 3, 21),
        value: 102,
      },
      {
        date: new Date(2018, 3, 22),
        value: 65,
      },
      {
        date: new Date(2018, 3, 23),
        value: 62,
      },
      {
        date: new Date(2018, 3, 24),
        value: 55,
      },
      {
        date: new Date(2018, 3, 25),
        value: 81,
      },
    ];

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;

    // Add simple bullet
    var circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    var labelBullet = lineSeries.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = "{value}";
  }
  createChart();
  return <div id="chartdiv"></div>;
};

export default Chart;
