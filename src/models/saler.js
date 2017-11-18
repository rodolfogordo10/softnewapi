import bcrypt from 'bcryptjs';
import User from './user';

class Saler extends User {
    constructor({ name, lastName, cpf, bornDate, password, company, uid }) {
        super({ displayName: `${name} ${lastName}`, password, email: null, uid })
        this.cpf = this.validateCpf(cpf);
        this.email = `${this.cpf}@softnew.com`
        this.bornDate = bornDate;
        this.company = company;
        this.name = name;
        this.lastName = lastName;
    }

    validateCpf(cpf) {
        if (!cpf) throw new Error('CPF inválido');
        return cpf;
    }

}

export default Saler;
