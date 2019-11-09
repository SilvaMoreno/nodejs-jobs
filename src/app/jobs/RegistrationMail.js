import Mail from '../lib/mail'

export default {
	key: 'RegistrationMail',
	async handle({ data }) {
		const {
			user: { name, email }
		} = data
		await Mail.sendMail({
			from: 'Queue Test <queue@queuetest.cv>',
			to: `${name} <${email}>`,
			subject: 'Cadastro de usuario',
			html: `Óla ${name}, bem-vindo ao sistema de filas da Queue`
		})
	}
}
