import bcrypt from 'bcryptjs';
import User from './user';

class Colaborador extends User {
    constructor({ nome, sobrenome, cpf, username, dominio, password, empresa, uid }) {
        super({ displayName: `${nome} ${sobrenome}`, password, uid })
        this.cpf = this.validateCpf(cpf);
        this.email = `${this.username}@${this.dominio}`
        this.empresa = empresa;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    validateCpf(cpf) {
        if (!cpf) throw new Error('CPF inválido');
        return cpf;
    }
}

export default Colaborador;
