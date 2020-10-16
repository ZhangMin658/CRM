/**
 * SenchaCRM.view.main.Controller
 */
Ext.define('SenchaCRM.view.main.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    /**
     * @param {Ext.view.View} component
     */
    onMenuItemClick: function (component, selection) {
        var node = selection.node;
        if (!node.isLeaf()) {
            return;
        }

        //var panel = this.lookup('menu-panel');
        //panel.setCollapsed(true);

        var view = this.lookup('application-panel');
        view.mask('画面読込中...');

        var target;
        if (node.id === 'contact-summary') {
            target = Ext.first('contact-summary');
            if (Ext.isEmpty(target)) {
                target = Ext.create('SenchaCRM.view.people.Summary');
                view.add(target);
            }
        }
        else if (node.id === 'philogl') {
            target = Ext.first('philogl');
            if (Ext.isEmpty(target)) {
                target = Ext.create('SenchaCRM.view.people.PhiloGL');
                view.add(target);
            }
        }
        else {
            target = 0;
        }

        Ext.defer(function () {
            view.setActiveItem(target);
            view.unmask();
        }, 300);
    },

    /**
     *
     */
    onSearchTriggerClick: function () {
        var search = this.lookup('search');
        Ext.Msg.alert('SenchaCRM', search.getValue());
    },

    /**
     * @param {Ext.form.field.Base} component
     * @param {Ext.event.Event} e
     */
    onSearchFieldEnter: function (component, e) {
        var search = this.lookup('search');

        if (e.getKey() == e.ENTER) {
            Ext.Msg.alert('SenchaCRM', search.getValue());
        }
    },

    onResizeTreeList: function () {
        var panel = this.lookup('menu-panel');
        var treeList = panel.down('treelist');
        treeList.setMicro(panel.getWidth() < 50);
    },

    onAfterRenderMenu: function (panel) {
        var list = panel.down('treelist');
        var node = list.getStore().findNode('id', 'contact-list');
        list.setSelection(node);
    }

});
