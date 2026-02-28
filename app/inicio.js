import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>Pantalla Inicio</Text>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={() => router.push('/inicio')}>
          <Text style={styles.btnText}>Inicio</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => router.push('/perfil')}>
          <Text style={styles.btnText}>Perfil</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => router.push('/buscar')}>
          <Text style={styles.btnText}>Buscar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 24, fontWeight: 'bold' },
  footer: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});