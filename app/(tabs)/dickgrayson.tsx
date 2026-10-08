import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const dickIdentities = [
  {
    name: 'Dick Grayson',
    role: 'O Primeiro Robin',
    image: require('@/assets/images/dickgrayson.jpg'),
  },
  {
    name: 'Nightwing',
    role: 'O Herói de Blüdhaven',
    image: require('@/assets/images/nightwing.jpg'),
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/nightwing_header.jpg')}
          style={styles.headerImage}
          contentFit="cover"
        />

        <View style={styles.headerOverlay} />

        <View style={styles.headerLabel}>
          <ThemedText style={styles.headerLabelText}>
            NIGHTWING
          </ThemedText>
        </View>
      </View>

      {/* TÍTULO */}
      <ThemedView style={styles.titleContainer}>
        <View>
          <ThemedText style={styles.kicker}>
            O PRIMEIRO ROBIN
          </ThemedText>

          <ThemedText type="title" style={styles.title}>
            DICK GRAYSON
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            O Herói de Blüdhaven
          </ThemedText>
        </View>
      </ThemedView>

      {/* IDENTIDADES */}
      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          POR TRÁS DA MÁSCARA
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          De Robin a Nightwing. Um herói que encontrou seu
          próprio caminho.
        </ThemedText>

        <View style={styles.identityGrid}>
          {dickIdentities.map((identity) => (
            <View
              key={identity.name}
              style={styles.identityCard}
            >
              <Image
                source={identity.image}
                style={styles.identityImage}
                contentFit="cover"
              />

              <View style={styles.identityOverlay} />

              <View style={styles.identityInfo}>
                <ThemedText style={styles.identityName}>
                  {identity.name}
                </ThemedText>

                <ThemedText style={styles.identityRole}>
                  {identity.role}
                </ThemedText>
              </View>
            </View>
          ))}
        </View>
      </ThemedView>

      {/* INTRODUÇÃO */}
      <ThemedView style={styles.card}>

        <ThemedText style={styles.cardTitle}>
          🦅 O HERÓI DE BLÜDHAVEN
        </ThemedText>

        <ThemedText style={styles.cardText}>
          Dick Grayson foi o primeiro Robin e um dos maiores
          aliados do Batman. Após anos ao lado do Cavaleiro
          das Trevas, ele deixou a identidade de Robin para
          construir seu próprio legado como Nightwing.
        </ThemedText>

      </ThemedView>

      {/* NIGHTWING FILES */}
      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          NIGHTWING FILES
        </ThemedText>

        <View style={styles.factGrid}>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>
              01
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              NOME
            </ThemedText>

            <ThemedText style={styles.factText}>
              Dick Grayson
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>
              02
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              IDENTIDADE
            </ThemedText>

            <ThemedText style={styles.factText}>
              Nightwing
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>
              03
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              CIDADE
            </ThemedText>

            <ThemedText style={styles.factText}>
              Blüdhaven
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>
              04
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              MESTRE
            </ThemedText>

            <ThemedText style={styles.factText}>
              Batman
            </ThemedText>
          </View>

        </View>
      </ThemedView>

      {/* BLÜDHAVEN */}
      <ThemedView style={styles.gothamCard}>

        <ThemedText style={styles.gothamLabel}>
          TERRITÓRIO
        </ThemedText>

        <ThemedText style={styles.gothamTitle}>
          BLÜDHAVEN
        </ThemedText>

        <ThemedText style={styles.cardText}>
          Uma cidade marcada pelo crime e pela corrupção.
          Blüdhaven se tornou o território de Nightwing,
          onde Dick Grayson luta para proteger aqueles que
          precisam de um herói.
        </ThemedText>

        <Link href="/modal" asChild>
          <View style={styles.button}>
            <ThemedText style={styles.buttonText}>
              CONHEÇA BLÜDHAVEN →
            </ThemedText>
          </View>
        </Link>

      </ThemedView>

      {/* LEGADO */}
      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          UM NOVO LEGADO
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          Dick Grayson deixou de ser apenas o parceiro do
          Batman e se tornou um dos maiores heróis do
          universo DC.
        </ThemedText>

        <View style={styles.legacyCard}>

          <ThemedText style={styles.legacyTitle}>
            DE ROBIN A NIGHTWING
          </ThemedText>

          <ThemedText style={styles.legacyText}>
            A evolução de Dick Grayson representa sua busca
            por independência, identidade e liderança.
            Nightwing não vive mais à sombra do Batman.
            Ele construiu seu próprio símbolo.
          </ThemedText>

        </View>

      </ThemedView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#050505',
  },

  /* HEADER */

  headerContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
  },

  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },

  headerLabel: {
    position: 'absolute',
    bottom: 25,
    left: 25,
    borderLeftWidth: 4,
    borderLeftColor: '#1687FF',
    paddingLeft: 12,
  },

  headerLabelText: {
    color: '#1687FF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 3,
  },

  /* TITLE */

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20,
  },

  kicker: {
    color: '#1687FF',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 4,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '900',
    letterSpacing: 2,
  },

  subtitle: {
    color: '#888888',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 4,
  },

  /* SECTION */

  section: {
    backgroundColor: 'transparent',
    padding: 20,
    gap: 14,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 2,
  },

  sectionDescription: {
    color: '#777777',
    fontSize: 14,
    lineHeight: 20,
  },

  /* IDENTITIES */

  identityGrid: {
    flexDirection: 'row',
    gap: 12,
  },

  identityCard: {
    flex: 1,
    height: 260,
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#292929',
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
  },

  identityImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  identityOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },

  identityInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderTopWidth: 2,
    borderTopColor: '#1687FF',
  },

  identityName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },

  identityRole: {
    color: '#1687FF',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 4,
  },

  /* CARD */

  card: {
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#292929',
    borderLeftWidth: 4,
    borderLeftColor: '#1687FF',
    borderRadius: 4,
    padding: 20,
    margin: 20,
  },

  cardTitle: {
    color: '#1687FF',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 12,
  },

  cardText: {
    color: '#B8B8B8',
    fontSize: 16,
    lineHeight: 25,
  },

  /* FACTS */

  factGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  factCard: {
    width: '48%',
    minHeight: 125,
    backgroundColor: '#0D0D0D',
    borderWidth: 1,
    borderColor: '#292929',
    borderRadius: 4,
    padding: 15,
  },

  factNumber: {
    color: '#1687FF',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 15,
  },

  factTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  factText: {
    color: '#777777',
    fontSize: 14,
    marginTop: 5,
  },

  /* BLÜDHAVEN */

  gothamCard: {
    backgroundColor: '#161616',
    borderRadius: 4,
    padding: 22,
    margin: 20,
    borderTopWidth: 3,
    borderTopColor: '#1687FF',
  },

  gothamLabel: {
    color: '#777777',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 3,
    marginBottom: 10,
  },

  gothamTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 10,
  },

  button: {
    marginTop: 15,
    backgroundColor: '#1687FF',
    paddingVertical: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#050505',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  /* LEGACY */

  legacyCard: {
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#292929',
    borderRadius: 5,
    padding: 20,
    borderLeftWidth: 3,
    borderLeftColor: '#1687FF',
  },

  legacyTitle: {
    color: '#1687FF',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 10,
  },

  legacyText: {
    color: '#B8B8B8',
    fontSize: 15,
    lineHeight: 24,
  },

});