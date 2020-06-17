const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { name } = request.body; 
        const user_id = request.headers.authorization;

         const [id] = await connection('cars').insert({
            name,
            user_id,
        });
        return response.send(`Veículo ${name} adicionado!`);
    },

    async index(request, response) {
        const result = await connection('cars')
            .select('*')

        return response.json(result);
    }
}