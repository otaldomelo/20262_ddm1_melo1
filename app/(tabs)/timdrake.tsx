import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function TimDrakeScreen() {
  return (
    <ScrollView style={styles.container}>

      <Image
        source={require('@/assets/images/redrobin.jpg')}
        style={styles.header}
        contentFit="cover"
      />

      <View style={styles.content}>

        <ThemedText style={styles.kicker}>
          TERCEIRO ROBIN
        </ThemedText>

        <ThemedText style={styles.title}>
          TIM DRAKE
        </ThemedText>

        <ThemedText style={styles.subtitle}>
          O Robin detetive
        </ThemedText>

        <View style={styles.card}>

          <ThemedText style={styles.cardTitle}>
            QUEM É TIM DRAKE?
          </ThemedText>

          <ThemedText style={styles.text}>
            Tim Drake é conhecido por sua inteligência e
            capacidade de investigação. Ele assumiu o
            manto de Robin e tornou-se um dos principais
            parceiros do Batman.
          </ThemedText>

        </View>

        <View style={styles.info}>

          <ThemedText style={styles.infoTitle}>
            IDENTIDADE
          </ThemedText>

          <ThemedText style={styles.infoText}>
            Tim Drake
          </ThemedText>

          <ThemedText style={styles.infoTitle}>
            CODINOME
          </ThemedText>

          <ThemedText style={styles.infoText}>
            Red Robin
          </ThemedText>

          <ThemedText style={styles.infoTitle}>
            POSIÇÃO
          </ThemedText>

          <ThemedText style={styles.infoText}>
            Terceiro Robin
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