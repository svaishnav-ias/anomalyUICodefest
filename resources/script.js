  const c1 = {
    name: "The Weather Company",
    timestamp: ["Jan, 23", "Feb, 23", "Mar, 23", "Apr, 23", "May, 23"],
    totalReports: [500, 300, 400, 600, 100],
    failedReports: [100, 10, 40, 20, 50]
  };

  const c2 = {
    name:"Flowers.com",
    timestamp: ["Jan, 23", "Feb, 23", "Mar, 23", "Apr, 23", "May, 23"],
    totalReports: [600, 100, 50, 500, 50],
    failedReports: [100, 4, 40, 120, 50]
  };  

  const c3 = {
    name: "Adidas",
    timestamp: ["Jan, 23", "Feb, 23", "Mar, 23", "Apr, 23", "May, 23"],
    totalReports: [100, 30, 450, 200, 160],
    failedReports: [100, 4, 40, 12, 50]
  };  

  const c4 = {
    name: "Toyota",
    timestamp: ["Jan, 23", "Feb, 23", "Mar, 23", "Apr, 23", "May, 23"],
    totalReports: [500, 300, 400, 600, 100],
    failedReports: [100, 4, 40, 12, 50]
  };

  var selectedTeam=c1;

  function createSeriesForGraph(c)
  {
    var e = [
      {
        name:'Total Reports',
        data: c.totalReports
      },
      {
        name:'Total Reports',
        data: c.failedReports
      }
    ]
    return e;
  }

var barGraph = Highcharts.chart('barGraph', {
    series:createSeriesForGraph(selectedTeam),
    exporting: {
      enabled: false
    },
    chart: {
      type: 'column'
    },
    title: {
      text: 'Total vs Failed reports'
    },
    xAxis: {
      type: 'category',
      categories:selectedTeam.timestamp,
      title: {
        text: 'Timestamp'
      },
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Number of Reports'
      },
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' +
          this.point.y + ' ' + this.point.name.toLowerCase();
      }
    },
    credits: {
      enabled: false
    },
  });


  var lineGraph =  Highcharts.chart('lineGraph', {

    title: {
      text: 'Reports generated',
    },
  
    yAxis: {
      title: {
        text: 'Number of reports'
      }
    },
  
    xAxis: {
      title: {
        text: 'Timestamp'
      },
      accessibility: {
        rangeDescription: 'Range: 2010 to 2020'
      },
      categories:selectedTeam.timestamp,
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    series: [{name:'Total Reports',data:selectedTeam.totalReports}],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    },

    credits: {
      enabled: false
    },
  
  });

  function onSelectTeam(e){
    console.log(e);
  }

  document.getElementById("teamDropDown").addEventListener("change", function() {
    if(this.value=="c1")
    selectedTeam=c1;
    else if(this.value=="c2")
    selectedTeam=c2;
    else if(this.value=="c3")
    selectedTeam=c3;
    else
    selectedTeam=c4;
    updateColumnGraph(selectedTeam);
    updateLineGraph(selectedTeam);
  });

  function updateColumnGraph(c) {
    barGraph.update({
      series: createSeriesForGraph(c),
      xAxis: {
        categories: c.timestamp
      }
    });
  }

  function updateLineGraph(c){
    lineGraph.update({
      series:[{name:'Total Reports',data:selectedTeam.totalReports}],
      xAxis: {
        categories: c.timestamp
      }
    })
  }
