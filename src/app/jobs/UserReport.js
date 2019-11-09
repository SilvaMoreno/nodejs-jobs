import Mail from '../lib/mail'

export default {
	key: 'UserReport',
	options: {
		delay: 5000
	},
	async handle({ data }) {
		console.log('From user report', data)
	}
}
