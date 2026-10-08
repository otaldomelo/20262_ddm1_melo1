import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const jasonIdentities = [
  {
    name: 'Jason Todd',
    role: 'O Segundo Robin',
    image: require('@/assets/images/jasontodd.jpg'),
  },
  {
    name: 'Red Hood',
    role: 'O Vigilante de Gotham',
    image: require('@/assets/images/redhood.jpg'),
  },
];

export default function JasonToddScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/redhood_header.jpg')}
          style={styles.headerImage}
          contentFit="cover"
        />

        <View style={styles.headerOverlay} />

        <View style={styles.headerLabel}>
          <ThemedText style={styles.headerLabelText}>
            RED HOOD
          </ThemedText>
        </View>
      </View>

      {/* TÍTULO */}
      <ThemedView style={styles.titleContainer}>
        <View>
          <ThemedText style={styles.kicker}>
            O SEGUNDO ROBIN
          </ThemedText>

          <ThemedText type="title" style={styles.title}>
            JASON TODD
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            O Vigilante de Gotham
          </ThemedText>
        </View>
      </ThemedView>

      {/* IDENTIDADES */}
      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          POR TRÁS DA MÁSCARA
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          De Robin a Red Hood. Um herói marcado pela tragédia
          que encontrou seu próprio caminho.
        </ThemedText>

        <View style={styles.identityGrid}>
          {jasonIdentities.map((identity) => (
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
          O RED HOOD
        </ThemedText>

        <ThemedText style={styles.cardText}>
          Jason Todd foi o segundo personagem a assumir o
          manto de Robin. Após sua morte e posterior retorno,
          ele abandonou a identidade de Robin e passou a
          atuar como Red Hood, adotando métodos muito mais
          agressivos para combater o crime.
        </ThemedText>

      </ThemedView>

      {/* JASON TODD FILES */}
      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          JASON TODD FILES
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
              Jason Todd
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>
              02
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              CODINOME
            </ThemedText>

            <ThemedText style={styles.factText}>
              Red Hood
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>
              03
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              POSIÇÃO
            </ThemedText>

            <ThemedText style={styles.factText}>
              Segundo Robin
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>
              04
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              MENTOR
            </ThemedText>

            <ThemedText style={styles.factText}>
              Batman
            </ThemedText>
          </View>

        </View>
      </ThemedView>

      {/* GOTHAM */}
      <ThemedView style={styles.gothamCard}>

        <ThemedText style={styles.gothamLabel}>
          TERRITÓRIO
        </ThemedText>

        <ThemedText style={styles.gothamTitle}>
          GOTHAM CITY
        </ThemedText>

        <ThemedText style={styles.cardText}>
          Gotham é o território onde Jason enfrenta o crime
          à sua própria maneira. Diferente de Batman, Red Hood
          não segue completamente o mesmo código moral,
          tornando sua abordagem muito mais brutal e direta.
        </ThemedText>

        <Link href="/modal" asChild>
          <View style={styles.button}>
            <ThemedText style={styles.buttonText}>
              CONHEÇA GOTHAM →
            </ThemedText>
          </View>
        </Link>

      </ThemedView>

      {/* LEGADO */}
      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          UM LEGADO MARCADO PELA TRAGÉDIA
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          Jason Todd representa uma das histórias mais
          complexas da Bat-Família.
        </ThemedText>

        <View style={styles.legacyCard}>

          <ThemedText style={styles.legacyTitle}>
            DE ROBIN A RED HOOD
          </ThemedText>

          <ThemedText style={styles.legacyText}>
            A transformação de Jason representa sua luta
            contra o trauma, a raiva e a necessidade de
            encontrar seu próprio lugar. Como Red Hood,
            ele deixou de seguir os passos de Batman e
            passou a construir seu próprio código.
          </ThemedText>

        </View>

      </ThemedView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#080808',
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
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
  },

  headerLabel: {
    position: 'absolute',
    bottom: 25,
    left: 25,
    borderLeftWidth: 3,
    borderLeftColor: '#B3262E',
    paddingLeft: 10,
  },

  headerLabelText: {
    color: '#B3262E',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 3,
  },

  /* TITLE */

  titleContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },

  kicker: {
    color: '#B3262E',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '900',
    letterSpacing: 1,
  },

  subtitle: {
    color: '#777777',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
  },

  /* SECTION */

  section: {
    backgroundColor: 'transparent',
    padding: 20,
    gap: 12,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1.5,
  },

  sectionDescription: {
    color: '#777777',
    fontSize: 14,
    lineHeight: 21,
  },

  /* IDENTITIES */

  identityGrid: {
    flexDirection: 'row',
    gap: 10,
  },

  identityCard: {
    flex: 1,
    height: 240,
    backgroundColor: '#101010',
    borderRadius: 8,
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
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
  },

  identityInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.78)',
  },

  identityName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  identityRole: {
    color: '#B3262E',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 4,
  },

  /* CARD */

  card: {
    backgroundColor: '#101010',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },

  cardTitle: {
    color: '#B3262E',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 10,
  },

  cardText: {
    color: '#A8A8A8',
    fontSize: 15,
    lineHeight: 24,
  },

  /* FACTS */

  factGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  factCard: {
    width: '48%',
    minHeight: 115,
    backgroundColor: '#101010',
    borderRadius: 8,
    padding: 15,
  },

  factNumber: {
    color: '#555555',
    fontSize: 11,
    fontWeight: '800',
    marginBottom: 12,
  },

  factTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },

  factText: {
    color: '#777777',
    fontSize: 14,
    marginTop: 5,
  },

  /* GOTHAM */

  gothamCard: {
    backgroundColor: '#101010',
    borderRadius: 8,
    padding: 20,
    margin: 20,
  },

  gothamLabel: {
    color: '#555555',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 8,
  },

  gothamTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 10,
  },

  button: {
    marginTop: 15,
    backgroundColor: '#B3262E',
    borderRadius: 6,
    paddingVertical: 13,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },

  /* LEGACY */

  legacyCard: {
    backgroundColor: '#101010',
    borderRadius: 8,
    padding: 20,
  },

  legacyTitle: {
    color: '#B3262E',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 10,
  },

  legacyText: {
    color: '#A8A8A8',
    fontSize: 15,
    lineHeight: 24,
  },

});