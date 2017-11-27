import bcrypt from 'bcryptjs';
import User from './user';

class Empresa extends User {
    constructor({nome, cnpj, password, username, nomeFantasia = null, uid}) {
        super({displayName: nome, password: password, uid});
        this.email = `${username}@softnew.com`;
        this.nome = nome;
        this.cnpj = this.validateCNPJ(cnpj);
        this.nomeFantasia = nomeFantasia;
    }

    validateCNPJ(cnpj) {
        if (!cnpj) throw new Error('CNPJ inválido');
        return cnpj;
    }
}

export default Empresa;
