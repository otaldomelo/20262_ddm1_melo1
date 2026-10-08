import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function JasonToddScreen() {
  return (
    <ScrollView style={styles.container}>

      <Image
        source={require('@/assets/images/redhood.jpg')}
        style={styles.header}
        contentFit="cover"
      />

      <View style={styles.content}>

        <ThemedText style={styles.kicker}>
          SEGUNDO ROBIN
        </ThemedText>

        <ThemedText style={styles.title}>
          JASON TODD
        </ThemedText>

        <ThemedText style={styles.subtitle}>
          O Robin que se tornou Red Hood
        </ThemedText>

        <View style={styles.card}>

          <ThemedText style={styles.cardTitle}>
            QUEM É JASON TODD?
          </ThemedText>

          <ThemedText style={styles.text}>
            Jason Todd foi o segundo personagem a assumir
            o manto de Robin. Após acontecimentos
            traumáticos, retornou como o vigilante conhecido
            como Red Hood.
          </ThemedText>

        </View>

        <View style={styles.info}>

          <ThemedText style={styles.infoTitle}>
            IDENTIDADE
          </ThemedText>

          <ThemedText style={styles.infoText}>
            Jason Todd
          </ThemedText>

          <ThemedText style={styles.infoTitle}>
            CODINOME
          </ThemedText>

          <ThemedText style={styles.infoText}>
            Red Hood
          </ThemedText>

          <ThemedText style={styles.infoTitle}>
            POSIÇÃO
          </ThemedText>

          <ThemedText style={styles.infoText}>
            Segundo Robin
          </ThemedText>

        </View>

        <Link href="/" asChild>
          <View style={styles.button}>
            <ThemedText style={styles.buttonText}>
              ← VOLTAR PARA BATMAN
            </ThemedText>
          </View>
        </Link>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },

  header: {
    width: '100%',
    height: 300,
  },

  content: {
    padding: 20,
  },

  kicker: {
    color: '#F5C518',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 3,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '900',
    marginTop: 8,
  },

  subtitle: {
    color: '#888888',
    fontSize: 16,
    marginTop: 5,
  },

  card: {
    backgroundColor: '#111111',
    borderLeftWidth: 4,
    borderLeftColor: '#F5C518',
    padding: 20,
    marginTop: 25,
  },

  cardTitle: {
    color: '#F5C518',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 12,
  },

  text: {
    color: '#B8B8B8',
    fontSize: 16,
    lineHeight: 25,
  },

  info: {
    backgroundColor: '#111111',
    padding: 20,
    marginTop: 15,
  },

  infoTitle: {
    color: '#F5C518',
    fontSize: 12,
    fontWeight: '900',
    marginTop: 8,
  },

  infoText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 4,
  },

  button: {
    backgroundColor: '#F5C518',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

  buttonText: {
    color: '#050505',
    fontWeight: '900',
    letterSpacing: 1,
  },
});