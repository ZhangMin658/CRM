/**
 * SenchaCRM.view.main.Main
 */
Ext.define('SenchaCRM.view.main.Main', {
    extend: 'Ext.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.form.field.Text',
        'Ext.layout.container.Absolute',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.layout.container.Fit',
        'Ext.layout.container.VBox',
        'Ext.list.Tree',
        'Ext.panel.Panel',
        'Ext.plugin.Responsive',
        'SenchaCRM.view.main.Controller',
        'SenchaCRM.view.main.Model',
        'SenchaCRM.view.people.Detail',
        'SenchaCRM.view.people.List'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'box',
            height: 3,
            style: 'background-color: #fc9a7c;'
        },
        {
            xtype: 'container',
            height: 44,
            layout: 'absolute',
            cls: 'header',
            items: [
                {
                    xtype: 'label',
                    html: 'SENCHA CRM',
                    cls: 'app-title',
                    x: 20,
                    y: 13
                },
                {
                    xtype: 'image',
                    src: 'resources/images/senchacrm.png',
                    alt: 'senchacrm-logo',
                    width: 26,
                    x: 185,
                    y: 10
                },
                {
                    xtype: 'textfield',
                    reference: 'search',
                    style: 'right:20',
                    width: 450,
                    style: 'top:6px;right:10px;',
                    //emptyText: 'Jump to a contact, case, deal, tag, or search...',
                    emptyText: 'コンタクト履歴、案件、取引などデータ全体を検索します ...',
                    triggers: {
                        search: {
                            cls: 'x-form-search-trigger',
                            handler: 'onSearchTriggerClick'
                        }
                    },
                    listeners: {
                        specialkey: 'onSearchFieldEnter'
                    }
                }
            ]
        },
        {
            layout: 'border',
            flex: 1,
            cls: 'main',
            reference: 'main-panel',
            items: [
                {
                    title: 'メニュー',
                    reference: 'menu-panel',
                    region: 'west',
                    plugins: 'responsive',
                    responsiveConfig: {
                        'width < 800': {
                            width: 44
                        },
                        'width >= 1000': {
                            width: 220
                        }
                    },
                    //width: 220,
                    glyph: 'xf0c9@FontAwesome',
                    split: true,
                    //collapsed: true,
                    floatable: false,
                    layout: 'fit',
                    listeners: {
                        afterrender: 'onAfterRenderMenu'
                    },
                    items: [
                        {
                            xtype: 'treelist',
                            //rootVisible: false,
                            ui: 'nav',
                            cls: 'treelist-with-nav',
                            store: 'Menus',
                            listeners: {
                                itemclick: 'onMenuItemClick',
                                afterrender: 'onAfterRenderMenu',
                                // TODO: This handler breaks the application on IE8...
                                resize: {
                                    fn: 'onResizeTreeList',
                                    element: 'element',
                                    scope: 'controller'
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    reference: 'application-panel',
                    layout: 'card',
                    flex: 1,
                    items: [
                        {
                            xtype: 'container',
                            layout: 'border',
                            items: [
                                {
                                    xtype: 'people-list',
                                    region: 'center',
                                    flex: 2
                                },
                                {
                                    xtype: 'people-detail',
                                    region: 'east',
                                    split: true,
                                    collapsed: false,
                                    flex: 1,
                                    plugins: 'responsive',
                                    responsiveConfig: {
                                        'width < 800': {
                                            region: 'south',
                                            flex: 2
                                        },
                                        'width >= 1000': {
                                            region: 'east',
                                            flex: 1
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'footer',
            height: 33,
            items: [
                {
                    xtype: 'label',
                    html: '<div align="center" style="margin-top:.6em;">© 2017 SenchaCRM</div>'
                }
            ]
        }
    ]
});

