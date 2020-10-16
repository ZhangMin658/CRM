/**
 * SenchaCRM.view.main.MainController
 */
Ext.define('SenchaCRM.view.people.CommonController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'SenchaCRM.model.Person'
    ],

    createRecord: function () {
        return Ext.create('SenchaCRM.model.Person', {
            visited: 0,
            photo: 'no-image.png'
        });
    },

    getEditView: function () {
        return Ext.widget('people-edit');
    },

    /**
     * @param field
     * @param newValue
     * @param oldValue
     */
    onUpdateField: function (field, newValue, oldValue) {
        var vm = this.getViewModel(),
            record = vm.getData().person;

        vm.set('saveButtonDisabled', !record.dirty);
    },

    onUpdateRecord: function () {
        var vm = this.getViewModel(),
            store = Ext.getStore('People');

        var targets = Ext.Array.merge(store.getModifiedRecords(), store.getRemovedRecords());
        vm.set('storeEditing', targets.length === 0);
    }

});
