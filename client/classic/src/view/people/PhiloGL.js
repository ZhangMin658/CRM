Ext.define('SenchaCRM.view.people.PhiloGL', {
    extend: 'Ext.Panel',

    alias: 'widget.philogl',

    requires: [
        'Ext.layout.container.Fit'
    ],

    title: 'コンタクト履歴 > リアルタイム3D',

    layout: 'fit',

    items: [
        {
            xtype: 'component',
            html: '<iframe width="100%" height="100%" ' +
                    'src="http://www.senchalabs.org/philogl/PhiloGL/examples/histogram/"></iframe>'
        }
    ]

});

