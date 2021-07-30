Ext.define('MyAppName.view.Test.K1',{
    extend: 'Ext.tree.Panel',
    xtype: 'test1',
    title: 'Реализация дерева папок',
    height: '100%',
    root: {
        text: 'Root',
        expanded: false,
        children: [
            {
                text: 'Child 1',
                leaf: true
            },
            {
                text: 'Child 2',
                leaf: true
            },
            {
                text: 'Child 3',
                expanded: false,
                children: [
                    {
                        text: 'Grandchild',
                        leaf: true
                    }
                ]
            }
        ]
    }
});

