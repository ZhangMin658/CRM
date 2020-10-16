/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('SenchaCRM.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'SenchaCRM.view.main.Controller',
        'SenchaCRM.view.main.Model',
        'SenchaCRM.view.people.List'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'fit',

    items: [
        {
            xtype: 'people-list'
        }
    ]

});