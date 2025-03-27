import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Página Inicial</Text>
      <Link
        href="/about"
      >
        Ir para About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({

})