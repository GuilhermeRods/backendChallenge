import database from '../database/connect'

const createVacancy = async vacancy => {
    const { name, skills, description } = vacancy

    if (!name || !skills || !description) {
        throw "Preencha os campos e tente novamente."
    }
    await database('Vacancy').insert({ date: database.raw('current_date'), name, skills, description })
}


const getVacancyById = async idVacancy => {
    const vacancy = await database('Vacancy').select('*').where({ idVacancy })
    if (vacancy.length === 0) {
        throw "Vaga não cadastrada."
    }
    return vacancy
}

const getAllVacancys = async () => {
    const id = await database('Vacancy').select('*')
    if (id.length === 0) {
        throw "Não há vaga cadastrada"
    }
    return id
}

module.exports = { createVacancy, getVacancyById, getAllVacancys }