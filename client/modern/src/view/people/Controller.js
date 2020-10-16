/**
 * Created by kawanoshinobu on 2016/06/26.
 */
Ext.define('SenchaCRM.view.people.Controller', {
    extend: 'SenchaCRM.view.people.CommonController',
    alias: 'controller.people',

    /**
     * @param {Ext.dataview.DataView} component
     * @param {Number} index
     * @param {Ext.Element/Ext.dataview.component.DataItem} target
     * @param {Ext.data.Model} record
     * @param {Ext.event.Event} e
     */
    onListItemTap: function (component, index, target, record, e) {
        var me = this,
            page = me.lookup('user');

        me.getViewModel().setData({
            person: record
        });

        page.animateActiveItem(1, {
            type: 'slide',
            direction: 'left'
        });
    },

    /**
     * @param {Ext.Button} component
     * @param {Ext.EventObject} e
     */
    onTapBackButton: function (component, e) {
        this.doBack();
    },

    doBack: function () {
        var me = this,
            vm = me.getViewModel(),
            page = me.lookup('user');

        vm.getData().person.reject();

        page.animateActiveItem(0, {
            type: 'slide',
            direction: 'right'
        });

        var fields = page.query('formpanel textfield');
        Ext.each(fields, function (field) {
            field.ready = false;
        });

        Ext.defer(function () {
            var detail = page.down('people-detail');
            detail.query('container[title!=""]').forEach(function (p) {
                if (p.getScrollable()) {
                    p.getScrollable().scrollTo(0, 0);
                }
            });
            detail.down('tabpanel').setActiveItem(0);
        }, 500);
    },

    /**
     * @param {Ext.Button} component
     * @param {Ext.EventObject} e
     */
    onTapSaveButton: function (component, e) {
        var me = this,
            view = me.getView();

        var store = Ext.getStore('People');

        if (store.getModifiedRecords().length === 0 &&
            store.getRemovedRecords().length === 0) {
            Ext.Msg.alert('SenchaCRM', '変更がありません。');
            return;
        }

        view.setMasked({
            xtype: 'loadmask',
            message: '処理中..'
        });

        store.sync({
            success: function () {
                view.unmask();
                me.doBack();
            }
        });
    }

});

