/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SenchaCRM.view.people.List', {
    extend: 'Ext.tab.Panel',
    xtype: 'people-list',

    requires: [
        'Ext.dataview.List',
        'Ext.field.Text',
        'Ext.plugin.ListPaging',
        'SenchaCRM.view.people.Controller',
        'SenchaCRM.view.people.Detail',
        'SenchaCRM.view.people.Model'
    ],

    controller: 'people',
    viewModel: 'people',

    tabBar: {
        layout: {
            pack : 'center',
            align: 'center'
        },
        docked: 'bottom',
        defaults: {
            iconAlign: 'middle'
        }
    },

    items: [

        {
            iconCls: 'x-fa fa-user',
            layout: 'card',
            reference: 'user',
            items: [
                {
                    xtype: 'list',
                    flex: 1,
                    plugins: [
                        {
                            xclass: 'Ext.plugin.ListPaging',
                            autoPaging: true,
                            loadMoreText: 'さらに表示...',
                            noMoreRecordsText: '全て表示しました'
                        }
                    ],
                    store: 'People',
                    itemTpl: '{lastName} {firstName}',
                    listeners: {
                        itemtap: 'onListItemTap'
                    },
                    items: [
                        {
                            xtype: 'titlebar',
                            docked: 'top',
                            cls: 'header',
                            items: [
                                {
                                    xtype: 'textfield',
                                    align: 'center',
                                    placeHolder: '全体を検索します ...'
                                    //placeHolder: 'Jump to a contact, case, deal, tag, or search..'
                                },
                                {
                                    xtype: 'button',
                                    align: 'right',
                                    ui: 'action',
                                    iconCls: 'x-fa fa-search'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'people-detail',
                    flex: 1
                }
            ]
        },
        {
            iconCls: 'x-fa fa-phone',
            items: [
                {
                    xtype: 'titlebar',
                    title: '連絡先',
                    cls: 'header'
                }

            ]
        },
        {
            iconCls: 'x-fa fa-suitcase',
            items: [
                {
                    xtype: 'titlebar',
                    title: '案件',
                    cls: 'header'
                }

            ]
        },
        {
            iconCls: 'x-fa fa-money',
            items: [
                {
                    xtype: 'titlebar',
                    title: '取引',
                    cls: 'header'
                }

            ]
        },
        {
            iconCls: 'x-fa fa-list',
            items: [
                {
                    xtype: 'titlebar',
                    title: 'その他',
                    cls: 'header'
                }

            ]
        }
    ]

});
