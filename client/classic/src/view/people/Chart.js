/**
 * Created by kawanoshinobu on 2016/06/23.
 */
Ext.define('SenchaCRM.view.people.Chart', {
    extend: 'Ext.chart.CartesianChart',

    alias: 'widget.mybarchart',

    requires: [
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.interactions.CrossZoom',
        'Ext.chart.series.Bar'
    ],

    colors: [
        '#e74c3c'
    ],
    insetPadding: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
    },
    store: 'People',

    axes: [
        {
            type: 'category',
            position: 'bottom'
        },
        {
            type: 'numeric',
            grid: {
                odd: {
                    fill: '#e8e8e8'
                }
            },
            majorTickSteps: 5,
            position: 'left'
        }
    ],
    series: [
        {
            type: 'bar',
            style: {
                opacity: 0.8
            },
            xField: 'lastName',
            yField: [
                'visited'
            ]
        }
    ],
    interactions: [
        {
            type: 'crosszoom'
        }
    ]

});