import bcrypt from 'bcryptjs';
import User from './user';

class Company extends User {
    constructor({name, cnpj, password, aliasName = null, uid}) {
        const emailAlias = aliasName? aliasName: name;
        super({displayName: name, password: password, email: `${emailAlias}@softnew.com`, uid});
        this.name = name;
        this.cnpj = this.validateCNPJ(cnpj);
        this.aliasName = aliasName;
    }

    validateCNPJ(cnpj) {
        if (!cnpj) throw new Error('CNPJ inválido');
        return cnpj;
    }
}

export default Company;
