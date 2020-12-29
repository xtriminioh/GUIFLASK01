var ctx = document.getElementById('my-infoTables').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Ene 2020', 'Feb 2020', 'Mar 2020', 'Abr 2020'],
        datasets: [{
            label: 'Numero de Usuarios',
            backgroundColor: [
                '#12C9E5',
                '#12C9E5',
                '#12C9E5',
                '#111b54'
            ],
            maxBarThickness: 30,
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 5, 12, 20]
        }]
    },

    // Configuration options go here
    options: {}
});