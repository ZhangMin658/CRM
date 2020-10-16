Ext.define('SenchaCRM.store.People', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Rest',
        'SenchaCRM.model.Person'
    ],

    model: 'SenchaCRM.model.Person',

    autoLoad: {
        page: 1,
        limit: 20
    },

    pageSize: 20,

    // From Database
    proxy: {
       type: 'rest',
       // url: 'http://localhost:8088/people',
       url: '/people',
       limitParam: 'size',
       reader: {
           type: 'json',
           rootProperty: 'content',
           totalProperty: 'totalElements'
       },
       writer: {
           writeAllFields: true,
           writeRecordId: false
       }
    },

    listeners: {
        /**
         * @param store
         * @param operation
         * @returns {boolean}
         */
        'beforeload': function (store, operation) {
            var current = operation.getPage();
            operation.setPage(current - 1);
            return true;
        }
    }

});
