// JavaScript Document

// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Cielo: 2666,
            UseRede: null,
            Bin: 2647,
			Banese: 1000
        }, {
            period: '2010 Q2',
            Cielo: 2778,
            UseRede: 2294,
            Bin: 2441,
			Banese: 2018
        }, {
            period: '2010 Q3',
            Cielo: 4912,
            UseRede: 1969,
            Bin: 2501,
			Banese: 1027
        }, {
            period: '2010 Q4',
            Cielo: 3767,
            UseRede: 3597,
            Bin: 5689,
			Banese: null
        }, {
            period: '2011 Q1',
            Cielo: 6810,
            UseRede: 1914,
            Bin: 2293,
			Banese: 3017
        }, {
            period: '2011 Q2',
            Cielo: 5670,
            UseRede: 4293,
            Bin: 1881,
			Banese: 2016
        }, {
            period: '2011 Q3',
            Cielo: 4820,
            UseRede: 3795,
            Bin: 1588,
			Banese: 1099
        }, {
            period: '2011 Q4',
            Cielo: 15073,
            UseRede: 5967,
            Bin: 5175,
			Banese: 999
        }, {
            period: '2012 Q1',
            Cielo: 10687,
            UseRede: 4460,
            Bin: 2028,
			Banese: 5049
        }, {
            period: '2012 Q2',
            Cielo: 8432,
            UseRede: 5713,
            Bin: 1791,
			Banese: 4000
        }],
        xkey: 'period',
        ykeys: ['Cielo', 'UseRede', 'Bin', 'Banese'],
        labels: ['Cielo', 'UseRede', 'Bin', 'Banese'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Cielo",
            value: 50
        }, {
            label: "UseRede",
            value: 5
        }, {
            label: "Bin",
            value: 5
        }, {
            label: "Banese",
            value: 10
        }, {
            label: "Global",
            value: 10
        }, {
            label: "FirstData",
            value: 20
        }, {
            label: "GetNet",
            value: 20
        }, {
            label: "Elavon",
            value: 20
        }],
        resize: true
    });

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2012-10-01',
            visits: 802
        }, {
            d: '2012-10-02',
            visits: 783
        }, {
            d: '2012-10-03',
            visits: 820
        }, {
            d: '2012-10-04',
            visits: 839
        }, {
            d: '2012-10-05',
            visits: 792
        }, {
            d: '2012-10-06',
            visits: 859
        }, {
            d: '2012-10-07',
            visits: 790
        }, {
            d: '2012-10-08',
            visits: 1680
        }, {
            d: '2012-10-09',
            visits: 1592
        }, {
            d: '2012-10-10',
            visits: 1420
        }, {
            d: '2012-10-11',
            visits: 882
        }, {
            d: '2012-10-12',
            visits: 889
        }, {
            d: '2012-10-13',
            visits: 819
        }, {
            d: '2012-10-14',
            visits: 849
        }, {
            d: '2012-10-15',
            visits: 870
        }, {
            d: '2012-10-16',
            visits: 1063
        }, {
            d: '2012-10-17',
            visits: 1192
        }, {
            d: '2012-10-18',
            visits: 1224
        }, {
            d: '2012-10-19',
            visits: 1329
        }, {
            d: '2012-10-20',
            visits: 1329
        }, {
            d: '2012-10-21',
            visits: 1239
        }, {
            d: '2012-10-22',
            visits: 1190
        }, {
            d: '2012-10-23',
            visits: 1312
        }, {
            d: '2012-10-24',
            visits: 1293
        }, {
            d: '2012-10-25',
            visits: 1283
        }, {
            d: '2012-10-26',
            visits: 1248
        }, {
            d: '2012-10-27',
            visits: 1323
        }, {
            d: '2012-10-28',
            visits: 1390
        }, {
            d: '2012-10-29',
            visits: 1420
        }, {
            d: '2012-10-30',
            visits: 1529
        }, {
            d: '2012-10-31',
            visits: 1892
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            device: 'iPhone',
            geekbench: 136
        }, {
            device: 'iPhone 3G',
            geekbench: 137
        }, {
            device: 'iPhone 3GS',
            geekbench: 275
        }, {
            device: 'iPhone 4',
            geekbench: 380
        }, {
            device: 'iPhone 4S',
            geekbench: 655
        }, {
            device: 'iPhone 5',
            geekbench: 1571
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
