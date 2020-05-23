var ctx = document.getElementById('methan__chart').getContext("2d");
var co2Chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['', ''],
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