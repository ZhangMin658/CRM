/**
 * Created by kawanoshinobu on 2016/06/23.
 */
Ext.define('SenchaCRM.view.people.Summary', {
    extend: 'Ext.Panel',

    xtype: 'contact-summary',

    requires: [
        'Ext.container.Container',
        'Ext.form.field.ComboBox',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'SenchaCRM.view.people.Chart'
    ],

    title: 'コンタクト履歴 > 集計処理',

    tbar: [
        {
            xtype: 'combobox',
            fieldLabel: '集計項目',
            value: '訪問回数',
            store: [
                '訪問回数',
                'その他',
                'てすと'
            ]
        }
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'mybarchart',
                    flex: 1,
                    store: 'People'
                },
                {
                    flex: 1
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1
        }
    ]

});