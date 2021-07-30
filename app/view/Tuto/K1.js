Ext.define('MyAppName.view.Tuto.K1',{
    extend: 'Ext.tree.Panel',
    xtype: 'k1',
    title: 'Tree Demo',
    store: {
        type: 'tree',
        root: {
            text: 'All',
            children: [
                {text: 'A'
            },
                {text: 'A'},
            ]

        }

    }

});

