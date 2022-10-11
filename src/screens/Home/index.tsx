import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { Participant } from "../../components/Participant"
import { styles } from "./styles"

export function Home() {
	function handleParticipantAdd() {
		console.log("Você clicou no botão de adicionar!")
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do Evento</Text>
			<Text style={styles.eventDate}>Terça, 11/10/2022</Text>
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder='Nome do Participante'
					placeholderTextColor='#6B6B6B'
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={handleParticipantAdd}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
			<Participant />
			<Participant />
			<Participant />
			<Participant />
		</View>
	)
}
