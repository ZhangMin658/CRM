Ext.define('SenchaCRM.view.people.Detail', {
    extend: 'Ext.Container',
    xtype: 'people-detail',

    requires: [
        'Ext.field.Text',
        'Ext.field.TextArea',
        'Ext.form.FieldSet',
        'Ext.tab.Panel'
    ],

    layout: 'vbox',

    items: [
        {
            xtype: 'titlebar',
            docked: 'top',
            cls: 'header',
            title: '担当者',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-chevron-left',
                    ui: 'action',
                    listeners: {
                        tap: 'onTapBackButton'
                    }
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-floppy-o',
                    align: 'right',
                    ui: 'action',
                    bind: {
                        disabled: '{saveButtonDisabled}'
                    },
                    listeners: {
                        tap: 'onTapSaveButton'
                    }
                }
            ]
        },
        {
            xtype: 'tabpanel',
            flex: 1,
            tabBar: {
                layout: {
                    pack: 'center'
                }
            },
            items: [
                {
                    title: '基本情報',
                    scrollable: 'vertical',

                    items: [
                        {
                            xtype: 'component',
                            style: 'width: 630px; margin: 20px 0;',
                            bind: {
                                html: [
                                    '<img src="resources/images/photos/{person.photo}"',
                                    ' height="100px"',
                                    ' style="box-shadow: #c7cdcf 0 1px 0 0;',
                                    ' border-radius: 3px;',
                                    ' margin-left: 20px;',
                                    '"/>'
                                ].join('')
                            }
                        },
                        {
                            xtype: 'fieldset',
                            items: [

                                {
                                    xtype: 'textfield',
                                    label: '姓',
                                    bind: '{person.lastName}'
                                },
                                {
                                    xtype: 'textfield',
                                    label: '名',
                                    bind: '{person.firstName}'
                                },
                                {
                                    xtype: 'textfield',
                                    label: '会社',
                                    bind: '{person.company}'
                                },
                                {
                                    xtype: 'textfield',
                                    label: '肩書き',
                                    bind: '{person.title}'
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '詳細',
                    scrollable: 'vertical',

                    items: [
                        {
                            xtype: 'fieldset',
                            items: [
                                {
                                    xtype: 'textfield',
                                    label: '電話',
                                    bind: '{person.phone}'
                                },
                                {
                                    xtype: 'textfield',
                                    label: 'Eメール',
                                    bind: '{person.email}'
                                },
                                {
                                    xtype: 'textfield',
                                    label: 'IM',
                                    bind: '{person.im}'
                                },
                                {
                                    xtype: 'textfield',
                                    label: 'Webサイト',
                                    bind: '{person.websites}'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: '特記事項',
                                    bind: '{person.info}'
                                }
                            ]
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
        }
    }
});
