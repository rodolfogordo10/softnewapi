class SalerBook {
    constructor({ idEmpresa, idCobrador, idCarteira, nomeCarteira, devedores, templateMessageByUser, templateMessageCarteira }) {
        this.idCarteira = idCarteira;
        this.nomeCarteira = nomeCarteira;
        this.devedores = devedores;
        this.templateMessageByUser = templateMessageByUser;
        this.templateMessageCarteira = templateMessageCarteira;
    }
}

export default SalerBook;
