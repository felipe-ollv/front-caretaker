import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderDto } from "./dto/headerDto";

const Header = (data: HeaderDto) => {
	return (
		<View>
			<View style={styles.header}>
				<Text>Olá,</Text>
				<Text style={styles.username}>{data.userName}</Text>
			</View>
			<Text style={styles.useractivities}>{data.headerText}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		paddingVertical: 30,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	username: {
		fontSize: 18,
		fontWeight: '600',
		marginLeft: 10
	},
	useractivities: {
		fontSize: 18,
		fontWeight: '300',
		textAlign: 'center'
	}
})

export default Header