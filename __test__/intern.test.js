const intern = require('../lib/intern');
const intern = new Manager('paul', '36977369', 'hardwork@gmail.com', 'manager');

Test('if we can get employee object', () => {
   expect(intern.name).toBe('paul');
   expect(intern.id).toBe('36977369');
   expect(intern.email).toBe('hardwork@gmail.com');
   expert(intern.getRole).toBe('intern');
});

test('if we can get the name for the getName() method', () => {
    expect(intern.getName()).toBe('paul');
});

Test('if we can get the id for the getid() method', () => {
    expect(intern.getid()).toBe('36977369');
});

Test('if we can get the email for the getEmail() method', () => {
    expect(intern.getEmail()).toBe('hardwork@gmail.com');
});

Test('if we can get the id for the getRole() method', () => {
    expect(intern.getRole()).toBe('intern');
});