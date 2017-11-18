import SalerBook from '../models/saler-book';
import firebaseAdmin from '../config/database-firebase';

class SalerBookService {
    constructor() {
        this.auth = firebaseAdmin.defaultAuth();
        this.database = firebaseAdmin.defaultDatabase();
    }
    //call the father method saveUser and make a copy into database with companyInformations
    async addSalerBookIntoFirebase(salerBook, idEmpresa, idCobrador) {
        const refDatabase = this.database.ref(`softnew/companies/${idEmpresa}/salers/${idCobrador}/saler-books/`);
        return await refDatabase.set(salerBook)
            .then(() => `Carteira(s) criada com sucesso!`)
    };

    async removeSalerBookFromFirebase(idCarteira, idEmpresa, idCobrador) {
        const refDatabase = this.database.ref(`softnew/companies/${idEmpresa}/salers/${idCobrador}/saler-books/`);
        let found = false;
        let salerBookList = null;
        
        await refDatabase.once("value", snapshot => {
            salerBookList = snapshot.val();
            if (salerBookList) {
                Object.keys(salerBookList).forEach((index) => {
                    if(salerBookList[index].idCarteira === Number(idCarteira)){
                        const salerBookNameRemove = salerBookList[index].name
                        found = true;
                        refDatabase.child(index).remove();
                        return `Carteira ${salerBookNameRemove} removida com sucesso!`;                            
                    }
                })

                if(!found){
                    return new Error('Carteira não encontrada');
                }
            }else {
                return new Error('Cobrador sem carteiras cadastradas');                
            }
        }, errorObject => {
            return new Error("The read failed: " + errorObject.code);
        });
        
        return 'Carteira removida com sucesso';
    }
}


export default SalerBookService;