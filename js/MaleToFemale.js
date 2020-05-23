var ctx = document.getElementById('male-to-female__chart').getContext("2d");
var maleToFemaleChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['', ''],
        datasets: [{
        data: [75, 25],
        borderWidth: 0,
        backgroundColor: ['#A819E8', '#F4D5FF']
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