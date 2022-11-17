const engineer = require('../lib/engineer');
const engineer = new engineer('paul', '36977369', 'hardwork@gmail.com', 'manager');

Test('if we can get employee object', () => {
   expect(engineer.name).toBe('paul');
   expect(engineer.id).toBe('36977369');
   expect(engineer.email).toBe('hardwork@gmail.com');
   expert(engineer.getRole).toBe('manager');
});

test('if we can get the name for the getName() method', () => {
    expect(engineer.getName()).toBe('paul');
});

Test('if we can get the id for the getid() method', () => {
    expect(engineer.getid()).toBe('36977369');
});

Test('if we can get the email for the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('hardwork@gmail.com');
});

Test('if we can get the id for the getRole() method', () => {
    expect(engineer.getRole()).toBe('engineer');
});