const Manager = require('../lib/Manager');
const manager = new Manager('paul', '36977369', 'hardwork@gmail.com', 'manager');

Test('if we can get employee object', () => {
   expect(manager.name).toBe('paul');
   expect(manager.id).toBe('36977369');
   expect(manager.email).toBe('hardwork@gmail.com');
   expert(manager.getRole).toBe('manager');
});

test('if we can get the name for the getName() method', () => {
    expect(Manager.getName()).toBe('paul');
});

Test('if we can get the id for the getid() method', () => {
    expect(manager.getid()).toBe('36977369');
});

Test('if we can get the email for the getEmail() method', () => {
    expect(manager.getEmail()).toBe('hardwork@gmail.com');
});

Test('if we can get the id for the getRole() method', () => {
    expect(manager.getRole()).toBe('manager');
});

