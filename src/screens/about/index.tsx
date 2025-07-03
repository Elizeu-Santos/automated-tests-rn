import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/button/button';
import { useRouter } from 'expo-router';

export function AboutScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About the app</Text>
      <Text style={styles.subtitle}>Automated testing with React Native.</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
  },
});