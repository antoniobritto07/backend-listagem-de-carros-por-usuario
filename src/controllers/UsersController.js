const connection = require('../database/connection')
const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        const { name, surname, email, password } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert({
            id,
            name,
            surname,
            email,
            password,
        });
        return response.send(`Usuário criado com sucesso!Seu id é:${id}`);
    },

    async index(request, response) {
        const result = await connection('users')
            .select('*')

        return response.json(result);
    }
}