/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('SenchaCRM.Application', {
    extend: 'Ext.app.Application',

    name: 'SenchaCRM',

    stores: [
        'Menus',
        'People'
    ],

    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('アプリケーションの更新', 'アップデートがあります。再読み込みしますか？',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
