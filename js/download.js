$.ajax({
    url: "http://dev-mv-api.azurewebsites.net/api/v1/basic?callback=?",
    type: "GET",
    dataType: 'json',
    crossDomain: true,
    fail: function(data) {
        alert(data);
    },
    success: function (data) {
        $('#container').highcharts({
            title: {
                text: 'Gold USD',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: BullionMark.com',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: '$'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: data
        });
    }
}).done(function (data) {
        $('#container').highcharts({
            title: {
                text: 'Gold USD',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: BullionMark.com',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: '$'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: data
        })});