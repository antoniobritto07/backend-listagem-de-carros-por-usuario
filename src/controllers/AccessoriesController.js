const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { brand, model, motor, hp, version_year, launch_price,
            urban_consumption, road_consumption } = request.body;
        const car_id = request.headers.authorization;

        const [id] = await connection('accessories').insert({
            brand,
            model,
            motor,
            hp,
            version_year,
            launch_price,
            urban_consumption,
            road_consumption,
            car_id,
        });
        return response.send('Dados do veículo adicionados com sucesso!');
    },

    async index(request, response) {
        const result = await connection('accessories')
            .select('*')

        return response.json(result);
    }
}