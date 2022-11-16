const Employee = Require('../lib/Employee');
const Employee = new Employee('paul', '36977369', 'hardwork@gmail.com');

Test('if we can get employee object', () => {
    export(Employee.name).toBe('paul');
    export(Employee.id).toBe('36977369');
    export(employee.email).toBe('hardwork@gmail.com');
});

Test('if we can get the name for the getName() method', () => {
    expect(employee.getName()).toBe('paul');
});

Test('if we can get the id for the getid() method', () => {
    expect(employee.getid()).toBe('36977369');
});

Test('if we can get the  for the getEmail() method', () => {
    expect(employee.getEmail()).toBe('hardwork@gmail.com');
});

Test('if we can get h id for the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});
