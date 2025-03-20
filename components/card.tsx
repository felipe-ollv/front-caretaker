import { View, StyleSheet, Text } from "react-native"

const Card = () => {
    return (
			<View style={styles.card}>
				<Text style={styles.title}>Título do card</Text>
				<Text style={styles.description}>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
				</Text>
				<Text style={styles.author}>Criado por: Felipe - 19/03/2025</Text>
				<Text style={styles.description}>Fazer até 20/03/2025</Text>
				<Text style={styles.status}>Pendente</Text>
			</View>
    )
}

const styles = StyleSheet.create({
	card: {
		width: '100%',
		marginTop: 20,
		paddingHorizontal: 12,
		paddingVertical: 10,
		gap: 2,
		backgroundColor: 'white',
		borderRadius: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2,  
		elevation: 5
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
	},
	description: {
			fontSize: 11
	},
	author: {
		fontSize: 11,
		fontWeight: '600',
		marginTop: 2
	},
	status: {
		fontSize: 11,
		color: 'orange'
	}
})

export default Card