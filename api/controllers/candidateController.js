
import { createCandidate } from '../services/candidateService'


const CandidateController = {
    create: async ctx => {
        const { body } = ctx.request
        const candidate = {
            name: body.name,
            email: body.email,
            telephone: body.telephone,
            cpf: body.cpf
        }

        try {
            await createCandidate(candidate)
            ctx.body = {
                message: "Candidato criado com sucesso!"
            }
            ctx.status = 201
        } catch (error) {
            if (error.errno === 19) {
                ctx.body = { message: 'Verifique os campos e tente novamente.' }
                ctx.status = 400
            }
            else {
                ctx.body = { message: error }
                ctx.status = 400
            }
        }
    }
}

export default CandidateController