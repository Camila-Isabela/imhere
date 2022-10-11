import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from "react-native"
import { Participant } from "../../components/Participant"
import { styles } from "./styles"

export function Home() {
	const participants = [
		"Rodrigo",
		"Vini",
		"Diego",
		"Biro",
		"Joana",
		"Ana",
		"Isa",
		"Jack",
		"Kevin",
		"Maik",
		"Juan",
	]

	function handleParticipantAdd() {
		console.log("Você clicou no botão de adicionar!")
	}

	function handleParticipantRemove(name: string) {
		console.log(`Você clicou em remover o participante ${name}`)
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

			<ScrollView showsHorizontalScrollIndicator={false}>
				{participants.map((participant) => (
					<Participant
						key={participant}
						name={participant}
						onRemove={() => handleParticipantRemove("Rodrigo")}
					/>
				))}
			</ScrollView>
		</View>
	)
}
