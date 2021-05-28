export interface User {
	data: {
		name: string,
		email: string,
		createdAt: string,
		updatedAt: string
	},
	errors: {
		message: string,
		field: string
	}
}
