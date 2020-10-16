describe("Person", function() {
    it("FirstNameとLastNameが空の場合、保存を許可しないこと", function() {
        var person = Ext.create('SenchaCRM.model.Person');
        expect(person.canSave()).toBe(false);
    });

    it("FirstNameとLastNameが空でない場合、保存を許可すること", function() {
        var person = Ext.create('SenchaCRM.model.Person', {
            firstName: 'Shinobu',
            lastName: 'Kawano'
        });
        expect(person.canSave()).toBe(true);
    });
});
