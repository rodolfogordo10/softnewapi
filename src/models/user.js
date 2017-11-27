import bcrypt from 'bcryptjs';

class User {
    constructor({displayName, password, uid}) {
        this.displayName = displayName;
        this.password = password;
        this.emailVerified = false;
        this.disabled = false;
        this.uid = uid;
    }

    comparePassword(password) {
        bcrypt.compare(password, this.password);
    }
}

export default User;
