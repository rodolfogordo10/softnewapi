import bcrypt from 'bcryptjs';

class User {
    constructor({displayName, email, password, uid = null}) {
        this.displayName = displayName;
        this.password = password;
        this.email = email;
        this.emailVerified = false;
        this.uid = uid;
    }

    comparePassword(password) {
        bcrypt.compare(password, this.password);
    }
}

export default User;
