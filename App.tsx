import { Text, View, StyleSheet } from "react-native"

export default function App() {
	return (
		<View style={styles.container}>
			<Text
				style={styles.eventName}
			>
				Aula de PDM
			</Text>
			<Text
				style={styles.eventDate}
			>
				Segunda, 10/10/2022
			</Text>
      <Text style={styles.eventInfo}>
        Aplicação para gerenciar os participantes presentes em eventos , como palestras, workshops
      </Text>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#131016",
      padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  eventInfo: {
    color: '#f0cd06'
  }
})



