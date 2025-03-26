import { View, StyleSheet, Text } from "react-native"
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const Card = ({ data }: any) => {
    return (
			<View style={styles.card}>
				<View>
					<Text style={styles.title}>{data.title}</Text>
					<Text style={styles.description}>
						{data.description}
					</Text>
					<Text style={styles.author}>Criado por: {data.author} - {data.dateCreate}</Text>
					<Text style={styles.description}>Feito em 20/03/2025</Text>
					<Text style={styles.status}>{data.status}</Text>
				</View>
				<View style={{ marginRight: 10 }}>
					<SimpleLineIcons name="arrow-right" size={22} color="#737373" />
				</View>
			</View>
    )
}

const styles = StyleSheet.create({
	card: {
		width: '100%',
		marginTop: 10,
		paddingHorizontal: 12,
		paddingVertical: 10,
		gap: 2,
		backgroundColor: 'white',
		borderRadius: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2,  
		elevation: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
	},
	description: {
			fontSize: 14,
			fontWeight: '400'
	},
	author: {
		fontSize: 14,
		fontWeight: '600',
		marginTop: 2
	},
	status: {
		fontSize: 14,
		color: 'orange'
	}
})

export default Card