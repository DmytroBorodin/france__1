var ctx = document.getElementById('co2__chart-mini').getContext("2d");
    var eighthGradientMini = ctx.createLinearGradient(0, 0, 0, 400);
    var ninethGradientMini = ctx.createLinearGradient(0, 0, 0, 400);
eighthGradientMini.addColorStop(0, 'rgba(244, 213, 255, 0.37)');
ninethGradientMini.addColorStop(0, '#F5D66B');
var co2Chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1910', '1920', '1930', '1940', '1950', '1960', '1990', '2000', '',],
        datasets: [
        {
            label: '# of Votes',
            data:  [0, 1.5, 2, 1.9, 2.3, 2.6, 3, 3.1, 3.4],
            backgroundColor: ninethGradientMini,
            borderColor: [
                'rgba(244, 213, 255, 1)',
            ],
            borderWidth: 2},
        {
            label: '# of Votes',
            data: [0, 3, 4, 3.8, 4.6, 5.2, 6, 6.2, 6.8 ],
            backgroundColor: eighthGradientMini,
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
                    fontSize: 8,
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
                    fontSize: 8,
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