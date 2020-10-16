/**
 * Created by kawanoshinobu on 2016/06/26.
 */
Ext.define('SenchaCRM.view.people.Controller', {
    extend: 'SenchaCRM.view.people.CommonController',
    alias: 'controller.people',

    /**
     * @param button
     */
    onAddButtonClick: function (button) {
        var panel = this.getEditView();
        var created = this.createRecord();

        panel.getViewModel().setData({
            person: created
        });

        panel.show(button);
    },

    /**
     */
    onSaveFormButtonClick: function () {
        var me = this,
            window = Ext.first('people-edit'),
            record = me.getViewModel().getData().person;

        var fields = [
            me.lookup('firstname'),
            me.lookup('lastname')
        ];
        var results = Ext.Array.map(fields, function (f) {
            return f.validate();
        });
        if (Ext.Array.contains(results, false)) {
            Ext.Msg.alert('SenchaCRM', '入力値が不正です。');
            return;
        }

        var store = Ext.getStore('People');
        store.add(record);

        if (store.getModifiedRecords().length === 0 &&
            store.getRemovedRecords().length === 0) {
            Ext.Msg.alert('SenchaCRM', '変更がありません。');
            return;
        }

        window.mask('処理中...');
        store.sync({
            success: function () {
                Ext.Msg.alert('SenchaCRM', '保存しました', function () {
                    window.destroy();
                    store.load();
                });
            }
        });
    },

    /**
     */
    onCloseWindow: function () {
        var me = this,
            vm = me.getViewModel();
        vm.getData().person.reject();
    },

    /**
     */
    onSaveGridButtonClick: function () {
        var view = this.getView(),
            store = Ext.getStore('People');

        Ext.Msg.confirm('SenchaCRM', '保存しますか？', function (btn) {
            if (btn === 'yes') {
                if (store.getModifiedRecords().length === 0 &&
                    store.getRemovedRecords().length === 0) {
                    Ext.Msg.alert('SenchaCRM', '変更がありません。');
                    return;
                }

                view.mask('処理中...');
                store.sync({
                    success: function () {
                        view.unmask();
                        Ext.Msg.alert('SenchaCRM', '保存しました', function () {
                            store.load();
                        });
                    }
                });
            }
        });
    },

    /**
     * @param grid
     * @param index
     */
    onDeleteButtonClick: function (grid, index) {
        grid.getStore().removeAt(index);
        this.onUpdateRecord();
    },

    /**
     * @param grid
     * @param index
     */
    onEditButtonClick: function (grid, index, num, option, e) {
        var panel = this.getEditView();

        var person = grid.getStore().getAt(index);
        panel.getViewModel().setData({
            person: person
        });

        panel.show(e.event.srcElement);
    },

    /**
     * @param {Ext.selection.RowModel} component
     * @param {Ext.data.Model} record
     */
    onSelectRecord: function (component, record) {
        var detail = Ext.first('people-detail'),
            vm = detail.getViewModel();

        vm.setData({
            person: record
        });
    },

    /**
     * @param {Ext.selection.Model} component
     * @param {Ext.data.Model[]} selected
     */
    onSelectionChange: function (component, selected) {
        if (selected.length === 0) {
            return;
        }
        var record = selected[selected.length - 1];

        var detail = Ext.first('people-detail'),
            vm = detail.getViewModel();

        vm.setData({
            person: record
        });
    }

});
