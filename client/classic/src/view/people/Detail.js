Ext.define('SenchaCRM.view.people.Detail', {
    extend: 'Ext.Panel',

    xtype: 'people-detail',

    requires: [
        'Ext.container.Container',
        'Ext.form.Label',
        'SenchaCRM.view.people.Controller',
        'SenchaCRM.view.people.Model'
    ],

    title: '詳細',

    controller: 'people',
    viewModel: 'people',

    cls: 'people-detail',

    glyph: 'xf007@FontAwesome',
    scrollable: 'vertical',

    items: [
        {
            xtype: 'container',
            margin: 10,
            padding: '0 20',
            cls: 'detail-container',
            height: '97%',
            items: [
                {
                    xtype: 'label',
                    bind: {
                        html: '<h2 class="caption">{person.lastName} {person.firstName}</h2>'
                    }
                },
                {
                    xtype: 'component',
                    style: 'width: 630px; margin: 20px 0;',
                    bind: {
                        html: [
                            '<img src="resources/images/photos/{person.photo}"',
                            ' height="100px"',
                            ' style="box-shadow: #c7cdcf 0 1px 0 0;',
                            ' border-radius: 3px;',
                            ' margin-right: 3px;',
                            '"/>'
                        ].join('')
                    }
                },
                {
                    xtype: 'label',
                    bind: {
                        html: '<h3 class="caption">会社</h3> {person.company}'
                    }
                },
                {
                    xtype: 'label',
                    bind: {
                        html: '<h3 class="caption">役職</h3> {person.title}'
                    }
                },
                {
                    xtype: 'label',
                    bind: {
                        html: '<h3 class="caption">電話番号</h3> {person.tel}'
                    }
                },
                {
                    xtype: 'label',
                    bind: {
                        html: '<h3 class="caption">メールアドレス</h3> {person.email}'
                    }
                },
                {
                    xtype: 'label',
                    bind: {
                        html: '<h3 class="caption">特記事項</h3> {person.info}<br><br>'
                    }
                }
                //{
                //    xtype: 'component',
                //    style: 'width: 600px',
                //    tpl: [
                //        '<h3 class="caption">みんなのコメント</i></h3>',
                //        '<tpl for=".">',
                //        '"{.}"<br><br>',
                //        '</tpl>'
                //    ].join(''),
                //    bind: {
                //        data: '{record.comments}'
                //    }
                //},
                //{
                //    xtype: 'label',
                //    margin: '10 0',
                //    bind: {
                //        html: '{site_url}'
                //    }
                //}
            ]
        }
    ]
});