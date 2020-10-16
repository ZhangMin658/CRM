/**
 * Created by kawanoshinobu on 2015/11/28.
 */
Ext.define('SenchaCRM.store.Menus', {
    extend: 'Ext.data.TreeStore',

    root: {
        text: 'MENUS',
        expanded: true,
        children: [
            {
                text: '最近の活動',
                iconCls: "x-fa fa-tachometer",
                leaf: true
            },
            {
                text: 'コンタクト履歴',
                iconCls: "x-fa fa-user",
                expanded: true,
                children: [
                    {
                        id: 'contact-list',
                        text: '一覧',
                        iconCls: "x-fa fa-list-alt",
                        leaf: true
                    },
                    {
                        id: 'contact-summary',
                        text: '集計処理',
                        iconCls: "x-fa fa-pie-chart",
                        leaf: true
                    }
                ]
            },
            {
                text: '案件',
                iconCls: "x-fa fa-briefcase",
                children: [
                    {
                        text: '一覧',
                        iconCls: "x-fa fa-list-alt",
                        leaf: true
                    },
                    {
                        text: '集計処理',
                        iconCls: "x-fa fa-pie-chart",
                        leaf: true
                    }
                ]
            },
            {
                text: '取引',
                iconCls: "x-fa fa-money",
                children: [
                    {
                        text: '一覧',
                        iconCls: "x-fa fa-list-alt",
                        leaf: true
                    },
                    {
                        text: '集計処理',
                        iconCls: "x-fa fa-pie-chart",
                        leaf: true
                    }
                ]
            },
            {
                text: 'マスタメンテナンス',
                iconCls: "x-fa fa-cogs",
                children: [
                    {
                        text: '会社',
                        iconCls: "x-fa fa-building-o",
                        leaf: true
                    },
                    {
                        text: '担当者',
                        iconCls: "x-fa fa-users",
                        leaf: true
                    },
                    {
                        text: '商品',
                        iconCls: "x-fa fa-table",
                        leaf: true
                    }
                ]
            },
            {
                text: 'ごみ箱',
                iconCls: "x-fa fa-trash",
                leaf: true
            }
        ]
    }

});