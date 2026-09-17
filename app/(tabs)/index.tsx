import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const batmanIdentities = [
  {
    name: 'Bruce Wayne',
    role: 'Bilionário • Empresário',
    image: require('@/assets/images/bruce-wayne.jpg'),
  },
  {
    name: 'Batman',
    role: 'O Cavaleiro das Trevas',
    image: require('@/assets/images/batman.jpg'),
  },
];

const robins = [
  {
    name: 'Dick Grayson',
    role: 'Primeiro Robin',
    image: require('@/assets/images/nightwing.jpg'),
  },
  {
    name: 'Jason Todd',
    role: 'Segundo Robin',
    image: require('@/assets/images/redhood.jpg'),
  },
  {
    name: 'Tim Drake',
    role: 'Terceiro Robin',
    image: require('@/assets/images/redrobin.jpg'),
  },
  {
    name: 'Damian Wayne',
    role: 'Quarto Robin',
    image: require('@/assets/images/robin.jpg'),
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* CABEÇALHO */}
      <View style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/batman_header.jpg')}
          style={styles.batmanHeader}
          contentFit="cover"
        />

        <View style={styles.headerOverlay} />

        <View style={styles.batSignal}>
          <ThemedText style={styles.batSignalText}>
            BAT-SIGNAL
          </ThemedText>
        </View>
      </View>

      {/* TÍTULO */}
      <ThemedView style={styles.titleContainer}>
        <View>
          <ThemedText style={styles.kicker}>
            BEM VINDO A GOTHAM
          </ThemedText>

          <ThemedText type="title" style={styles.title}>
            BATMAN
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            O Cavaleiro das Trevas
          </ThemedText>
        </View>

        <HelloWave />
      </ThemedView>

      {/* BRUCE WAYNE / BATMAN */}
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>
          POR TRÁS DA MÁSCARA
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          Duas faces. Uma única missão.
        </ThemedText>

        <View style={styles.identityGrid}>
          {batmanIdentities.map((identity) => (
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

      {/* INTRO */}
      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>
          🦇 O CAVALEIRO DE GOTHAM
        </ThemedText>

        <ThemedText style={styles.cardText}>
          Batman é o lendário protetor de Gotham City.
          Por trás da máscara está Bruce Wayne,
          um bilionário que dedicou sua vida a combater o crime.
        </ThemedText>
      </ThemedView>

      {/* FATOS */}
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>
          BATMAN FILES
        </ThemedText>

        <View style={styles.factGrid}>
          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>
              01
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              IDENTIDADE
            </ThemedText>

            <ThemedText style={styles.factText}>
              Bruce Wayne
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>
              02
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              CIDADE
            </ThemedText>

            <ThemedText style={styles.factText}>
              Gotham City
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>
              03
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              SÍMBOLO
            </ThemedText>

            <ThemedText style={styles.factText}>
              O Batman
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>
              04
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              MISSÃO
            </ThemedText>

            <ThemedText style={styles.factText}>
              Justiça
            </ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* GOTHAM */}
      <ThemedView style={styles.gothamCard}>
        <ThemedText style={styles.gothamLabel}>
          LOCALIZAÇÃO
        </ThemedText>

        <ThemedText style={styles.gothamTitle}>
          GOTHAM CITY
        </ThemedText>

        <ThemedText style={styles.cardText}>
          A cidade que nunca dorme. Crime, corrupção e
          mistério fazem de Gotham o território do Cavaleiro
          das Trevas.
        </ThemedText>

        <Link href="/modal" asChild>
          <View style={styles.button}>
            <ThemedText style={styles.buttonText}>
              Conheça Gotham →
            </ThemedText>
          </View>
        </Link>
      </ThemedView>

      {/* ROBINS */}
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>
          OS ROBINS
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          Os quatro principais personagens que carregaram
          o símbolo do Robin ao lado do Batman.
        </ThemedText>

        <View style={styles.rid}>
          {robins.map((robin) => (
            <View
              key={robin.name}
              style={styles.allyCard}
            >
              <Image
                source={robin.image}
                style={styles.allyImage}
                contentFit="cover"
              />

              <View style={styles.allyOverlay} />

              <View style={styles.allyInfo}>
                <ThemedText style={styles.allyName}>
                  {robin.name}
                </ThemedText>

                <ThemedText style={styles.allyRole}>
                  {robin.role}
                </ThemedText>
              </View>
            </View>
          ))}
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

  headerContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
  },

  batmanHeader: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
  },

  batSignal: {
    position: 'absolute',
    bottom: 25,
    left: 25,
    borderLeftWidth: 4,
    borderLeftColor: '#F5C518',
    paddingLeft: 12,
  },

  batSignalText: {
    color: '#F5C518',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 3,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20,
  },

  kicker: {
    color: '#F5C518',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 4,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 42,
    lineHeight: 46,
    fontWeight: '900',
    letterSpacing: 3,
  },

  subtitle: {
    color: '#888888',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 4,
  },

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
    borderTopColor: '#F5C518',
  },

  identityName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },

  identityRole: {
    color: '#F5C518',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#292929',
    borderLeftWidth: 4,
    borderLeftColor: '#F5C518',
    borderRadius: 4,
    padding: 20,
    margin: 20,
  },

  cardTitle: {
    color: '#F5C518',
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
    color: '#F5C518',
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

  gothamCard: {
    backgroundColor: '#161616',
    borderRadius: 4,
    padding: 22,
    margin: 20,
    borderTopWidth: 3,
    borderTopColor: '#F5C518',
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
    backgroundColor: '#F5C518',
    paddingVertical: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#050505',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  rid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },

  allyCard: {
    width: '48%',
    height: 210,
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#292929',
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
  },

  allyImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  allyOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },

  allyInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderTopWidth: 2,
    borderTopColor: '#F5C518',
  },

  allyName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  allyRole: {
    color: '#F5C518',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 3,
  },
});
