import { View, StyleSheet, Text } from "react-native"

const Card = ({ data }: any) => {
    return (
			<View style={styles.card}>
				<Text style={styles.title}>{data.title}</Text>
				<Text style={styles.description}>
					{data.description}
				</Text>
				<Text style={styles.author}>Criado por: {data.author}- {data.dateCreate}</Text>
				<Text style={styles.description}>Feito em 20/03/2025</Text>
				<Text style={styles.status}>{data.status}</Text>
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