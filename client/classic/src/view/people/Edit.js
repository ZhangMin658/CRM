Ext.define('SenchaCRM.view.people.Edit', {
    extend: 'Ext.window.Window',
    xtype: 'people-edit',

    requires: [
        'Ext.container.Container',
        'Ext.form.FieldSet',
        'Ext.form.Panel',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.layout.container.Fit',
        'Ext.layout.container.Form',
        'Ext.plugin.Responsive',
        'Ext.tab.Panel',
        'SenchaCRM.view.people.Controller',
        'SenchaCRM.view.people.Model'
    ],

    controller: 'people',
    viewModel: 'people',
    modelValidation: true,

    title: '担当者',
    glyph: 'xf007@FontAwesome',
    height: '80%',
    plugins: 'responsive',
    responsiveConfig: {
        'width < 800': {
            width: '80%'
        },
        'width >= 1000': {
            width: '50%'
        }
    },
    //width: '50%',
    layout: 'fit',
    modal: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'footer',
            layout: {
                pack: 'end'
            },
            items: [
                {
                    text: '保存',
                    glyph: 'xf0c7@FontAwesome',
                    handler: 'onSaveFormButtonClick',
                    width: 100,
                    bind: {
                        disabled: '{saveButtonDisabled}'
                    }
                }
            ]
        }
    ],

    items: [
        {
            xtype: 'tabpanel',
            tabPosition: 'bottom',
            items: [
                {
                    xtype: 'form',
                    title: '基本',
                    layout: 'form',
                    scrollable: true,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'container',
                            padding: '10 20',
                            items: [
                                {
                                    xtype: 'component',
                                    style: 'width: 630px; margin: 10px 0;',
                                    bind: {
                                        html: [
                                            '<img src="resources/images/photos/{person.photo}"',
                                            ' height="100px"',
                                            ' style="box-shadow: #c7cdcf 0 1px 0 0;',
                                            ' border-radius: 3px;',
                                            ' margin-left: 6px;',
                                            '"/>'
                                        ].join('')
                                    }
                                },
                                {
                                    xtype: 'fieldset',
                                    //padding: '0',
                                    //layout: 'form',
                                    defaults: {
                                        width: '100%'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            reference: 'lastname',
                                            fieldLabel: '名前（姓）<b style="color:red"> * </b>',
                                            msgTarget: 'side',
                                            bind: '{person.lastName}'
                                        },
                                        {
                                            xtype: 'textfield',
                                            reference: 'firstname',
                                            fieldLabel: '名前（名）<b style="color:red"> * </b>',
                                            msgTarget: 'side',
                                            bind: '{person.firstName}'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '会社',
                                            bind: '{person.company}'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '肩書き',
                                            bind: '{person.title}'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    //padding: '0',
                                    //layout: 'form',
                                    defaults: {
                                        width: '100%'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '電話番号',
                                            bind: '{person.phone}'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Eメール',
                                            bind: '{person.email}'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'IM',
                                            bind: '{person.im}'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'Webサイト',
                                            bind: '{person.websites}'
                                        },
                                        {
                                            xtype: 'textareafield',
                                            fieldLabel: '特記事項',
                                            bind: '{person.info}'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'form',
                    title: '最近の活動',
                    layout: 'fit',
                    //scrollable: true,
                    items: [
                        {
                            xtype: 'htmleditor',
                            margin: 10
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        change: {
            fn: 'onUpdateField',
            delegate: 'textfield'
        },
        close: {
            fn: 'onCloseWindow'
        }
    }
});
