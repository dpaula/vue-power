export default class FotoService {

    constructor(resource) {

        //definindo meu end point para o recurso fotos, com o id que será usado como chave
        this._resource = resource('v1/fotos{/id}');
    }

    /**
     * @returns promise
     */
    lista() {

        return this._resource
            .query()
            // como retorna uma promise, busco resposta, que é um json
            .then(res => res.json())
    }

    cadastra(foto) {
        return this._resource
            .save(foto);
    }

    apaga(id) {

        return this._resource
            .delete({ id });
    }

    busca(id) {
        return this._resource
            .get({ id })
            .then(res => res.json());
    }
}