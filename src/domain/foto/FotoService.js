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
            .then(res => res.json(), err => {
                console.log('LISTAGEM', err);
                // carrega a mensagem em err.message
                throw new Error('Não foi possível carregar as fotos!');
            })
        }
        
        cadastraOuAltera(foto) {
            
            if (foto._id) {
                return this._resource
                // equivalente ao PUT
                .update({ id: foto._id }, foto);
            }
            
            return this._resource
            // equivalente ao POST
            .save(foto);
        }
        
        apaga(id) {
            
            return this._resource
            .delete({ id })
            .then(null, err => {
                console.log(err);
                // carrega a mensagem em err.message
                throw new Error('Não foi possível remover a foto!');
            });
    }

    busca(id) {
        return this._resource
            .get({ id })
            .then(res => res.json());
    }
}