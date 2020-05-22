var ctx = document.getElementById('demography__chart').getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#8888EA');
gradient.addColorStop(0.3, 'rgba(66, 118, 196, 0.15)');
gradient.addColorStop(0.5, 'rgba(66, 118, 196, 0.05)');
gradient.addColorStop(0.7, 'rgba(66, 118, 196, 0)');
var demographyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1990', '2000', '',],
        datasets: [{
            label: '# of Votes',
            data: [0, 3, 4, 3.8, 4.6, 5.2, 6, 6.2, 6.8, ],
            backgroundColor: gradient,
            borderColor: [
                '#8888EA',

            ],
            borderWidth: 5
        },
        ]
    },
    options: {
        scales: {
           xAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }],
            yAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }]
        },
        maintainAspectRatio: false,
        elements: {
                    point:{
                        radius: 0
                    }
                },
        responsive: true,
        legend: {
           display: false,
        },
    }
});


var ctx = document.getElementById('electricity__chart').getContext("2d");
    var firstGradient = ctx.createLinearGradient(0, 0, 0, 400);
    var secondGradient = ctx.createLinearGradient(0, 0, 0, 400);
firstGradient.addColorStop(0, '#76EFFF');
secondGradient.addColorStop(0, '#2772FF');
var electricityChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1990', '2000', '',],
        datasets: [
        {
            label: '# of Votes',
            data:  [0, 1.5, 2, 1.9, 2.3, 2.6, 3, 3.1, 3.4],
            backgroundColor: secondGradient,
            borderColor: [
                '#8888EA',
            ],
            borderWidth: 1},
        {
            label: '# of Votes',
            data: [0, 3, 4, 3.8, 4.6, 5.2, 6, 6.2, 6.8 ],
            backgroundColor: firstGradient,
            borderColor: [
                '#8888EA',
            ],
            borderWidth: 1
        },
        ]
    },
    options: {
        scales: {
           xAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }],
            yAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }]
        },
        maintainAspectRatio: false,
        elements: {
                    point:{
                        radius: 0
                    }
                },
        responsive: true,
        legend: {
           display: false,
        },
    }
});

var ctx = document.getElementById('el-consumption__chart').getContext("2d");
    var thirdGradient = ctx.createLinearGradient(0, 0, 0, 400);
    var fourthGradient = ctx.createLinearGradient(0, 0, 0, 400);
thirdGradient.addColorStop(0, 'rgba(252, 119, 48, 1)');
thirdGradient.addColorStop(0.2, 'rgba(252, 119, 48, 0.3)');
thirdGradient.addColorStop(0.4, 'rgba(252, 119, 48, 0.15)');
fourthGradient.addColorStop(0, 'rgba(55, 204, 147, 1)');
fourthGradient.addColorStop(0.2, 'rgba(55, 204, 147, 0.7)');
fourthGradient.addColorStop(0.3, 'rgba(55, 204, 147, 0.4)');
fourthGradient.addColorStop(0.4, 'rgba(55, 204, 147, 0.2)');
var elConsumptionChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1990', '2000', '',],
        datasets: [
        {
            label: '# of Votes',
            data:  [0, 1.5, 2, 1.9, 2.3, 2.6, 3, 3.1, 3.4],
            backgroundColor: fourthGradient,
            borderColor: [
                'rgba(55, 204, 147, 1)',
            ],
            borderWidth: 5},
        {
            label: '# of Votes',
            data: [0, 3, 4, 3.8, 4.6, 5.2, 6, 6.2, 6.8 ],
            backgroundColor: thirdGradient,
            borderColor: [
                'rgba(252, 119, 48, 1)',
            ],
            borderWidth: 5
        },
        ]
    },
    options: {
        scales: {
           xAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }],
            yAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }]
        },
        maintainAspectRatio: false,
        elements: {
                    point:{
                        radius: 0
                    }
                },
        responsive: true,
        legend: {
           display: false,
        },
    }
});

var ctx = document.getElementById('gaz-emmisions__chart').getContext("2d");
    var fifthGradient = ctx.createLinearGradient(0, 0, 0, 400);
fifthGradient.addColorStop(0, '#8888EA');
fifthGradient.addColorStop(0.3, 'rgba(66, 118, 196, 0.15)');
fifthGradient.addColorStop(0.5, 'rgba(66, 118, 196, 0.05)');
fifthGradient.addColorStop(0.7, 'rgba(66, 118, 196, 0)');
var gazEmmisionChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1990', '2000', '',],
        datasets: [{
            label: '# of Votes',
            data: [0, 3, 4, 3.8, 4.6, 5.8, 6, 9, 9.2, ],
            backgroundColor: fifthGradient,
            borderColor: [
                '#8888EA',

            ],
            borderWidth: 5
        },
        ]
    },
    options: {
        scales: {
           xAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }],
            yAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }]
        },
        maintainAspectRatio: false,
        elements: {
                    point:{
                        radius: 0
                    }
                },
        responsive: true,
        legend: {
           display: false,
        },
    }
});

var ctx = document.getElementById('el-source__chart').getContext("2d");
    var sixthGradient = ctx.createLinearGradient(0, 0, 0, 400);
    var seventhGradient = ctx.createLinearGradient(0, 0, 0, 400);
sixthGradient.addColorStop(0, 'rgba(244, 213, 255, 0.37)');
seventhGradient.addColorStop(0, '#F5D66B');
var elSourceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1990', '2000', '',],
        datasets: [
        {
            label: '# of Votes',
            data:  [0, 1.5, 2, 1.9, 2.3, 2.6, 3, 3.1, 3.4],
            backgroundColor: seventhGradient,
            borderColor: [
                'rgba(244, 213, 255, 1)',
            ],
            borderWidth: 2},
        {
            label: '# of Votes',
            data: [0, 3, 4, 3.8, 4.6, 5.2, 6, 6.2, 6.8 ],
            backgroundColor: sixthGradient,
            borderColor: [
                'rgba(244, 213, 255, 1)',
            ],
            borderWidth: 5
        },
        ]
    },
    options: {
        scales: {
           xAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }],
            yAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }]
        },
        maintainAspectRatio: false,
        elements: {
                    point:{
                        radius: 0
                    }
                },
        responsive: true,
        legend: {
           display: false,
        },
    }
});


var ctx = document.getElementById('co2__chart').getContext("2d");
    var eighthGradient = ctx.createLinearGradient(0, 0, 0, 400);
    var ninethGradient = ctx.createLinearGradient(0, 0, 0, 400);
eighthGradient.addColorStop(0, 'rgba(244, 213, 255, 0.37)');
ninethGradient.addColorStop(0, '#F5D66B');
var co2Chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1990', '2000', '',],
        datasets: [
        {
            label: '# of Votes',
            data:  [0, 1.5, 2, 1.9, 2.3, 2.6, 3, 3.1, 3.4],
            backgroundColor: ninethGradient,
            borderColor: [
                'rgba(244, 213, 255, 1)',
            ],
            borderWidth: 2},
        {
            label: '# of Votes',
            data: [0, 3, 4, 3.8, 4.6, 5.2, 6, 6.2, 6.8 ],
            backgroundColor: eighthGradient,
            borderColor: [
                'rgba(244, 213, 255, 1)',
            ],
            borderWidth: 5
        },
        ]
    },
    options: {
        scales: {
           xAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }],
            yAxes: [{
               gridLines: {
                  drawOnChartArea: false,
                  color: 'rgba(255, 255, 255, 0.2)',
                  zeroLineColor: 'rgba(255, 255, 255, 0.2)',
               },
               ticks: {
                    fontSize: 16,
                    fontFamily: 'Lato',
                    fontColor: "#fff",
               }
            }]
        },
        maintainAspectRatio: false,
        elements: {
                    point:{
                        radius: 0
                    }
                },
        responsive: true,
        legend: {
           display: false,
        },
    }
});


var ctx = document.getElementById('methan__chart').getContext("2d");
    var tenthGradient = ctx.createLinearGradient(0, 0, 0, 400);
    var eleventhGradient = ctx.createLinearGradient(0, 0, 0, 400);
tenthGradient.addColorStop(0, 'rgba(244, 213, 255, 0.37)');
eleventhGradient.addColorStop(0, '#F5D66B');
var co2Chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [75, 25],
        borderWidth: 0,
        backgroundColor: ['#F5D66B', 'rgba(252, 119, 48, 1)']
        }],
        
    },
    options: {
        maintainAspectRatio: false,
        elements: {
                    point:{
                        radius: 0
                    }
                },
        responsive: true,
        legend: {
           display: false,
        },
        rotation: -1 * Math.PI,
        cutoutPercentage: 37.5,
    }
});