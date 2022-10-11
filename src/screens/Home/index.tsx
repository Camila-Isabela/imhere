import { Text, View } from "react-native"
import { styles } from "./styles"

export function Home() {
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
        Aplicação para gerenciar os participantes presentes em eventos, como palestras, workshops, debates...
      </Text>
      <Text style={styles.eventRed}>
        (Em construção)
      </Text>
		</View>
	)
}