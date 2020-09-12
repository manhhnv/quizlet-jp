interface Customer {
    email: string,
    firstName: string,
    lastName?: string,
    birthDay?: Date
}

class Account implements Customer{
    email: string;
    firstName: string;
    birthDay: Date;
    constructor(email: string, firstName: string, birthDay: Date) {
        this.email = email;
        this.firstName = firstName;
        this.birthDay = birthDay;
    }
    checkEmail = (otherCustomer: Customer): boolean => {
        if (this.email === otherCustomer.email) {
            return true;
        }
        return false;
    }
}

const account_test = new Account('test@gmail.com', 'John', new Date('2020-11-07'));
const otherCustomer: Customer = new Account('test@gmail.com', 'Nguyen Van Manh', new Date('2020-07-11'));

console.log(account_test.checkEmail(otherCustomer))
const a: Account = new Account('test@gmail.com', 'John', new Date('2020-11-07'));

console.log(account_test)
console.log('ACCOUNT', a)