import firebaseAdmin from '../config/database-firebase';

 class UserService {
    constructor() {
        this.auth = firebaseAdmin.defaultAuth();
        this.database = firebaseAdmin.defaultDatabase();
    }

    insertUserInFirebase(user) {
        return this.auth.createUser(user);
    }

    //method to take user from auth list
     getUserFromFirebaseAuth(userId) {
        return this.auth.getUser(userId);
    }

}

export default UserService;
