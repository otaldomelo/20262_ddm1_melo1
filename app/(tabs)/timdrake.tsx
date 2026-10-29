import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const timIdentities = [
  {
    name: 'Tim Drake',
    role: 'O Terceiro Robin',
    image: require('@/assets/images/timdrake.jpg'),
  },
  {
    name: 'Robin',
    role: 'O Detetive da Bat-Família',
    image: require('@/assets/images/redrobin.jpg'),
  },
];

export default function TimDrakeScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/redrobin_header.jpg')}
          style={styles.headerImage}
          contentFit="cover"
        />

        <View style={styles.headerOverlay} />

        <View style={styles.headerLabel}>
          <ThemedText style={styles.headerLabelText}>
            ROBIN
          </ThemedText>
        </View>
      </View>

      <ThemedView style={styles.titleContainer}>
        <View>
          <ThemedText style={styles.kicker}>
            O TERCEIRO ROBIN
          </ThemedText>

          <ThemedText type="title" style={styles.title}>
            TIM DRAKE
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            O Detetive da Bat-Família
          </ThemedText>
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          POR TRÁS DA MÁSCARA
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          Um jovem prodígio que descobriu a identidade do
          Batman e provou ser digno do manto de Robin.
        </ThemedText>

        <View style={styles.identityGrid}>
          {timIdentities.map((identity) => (
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

      <ThemedView style={styles.card}>

        <ThemedText style={styles.cardTitle}>
          🐦 O DETETIVE
        </ThemedText>

        <ThemedText style={styles.cardText}>
          Tim Drake é um dos membros mais inteligentes da
          Bat-Família. Diferente de outros Robins, ele
          percebeu por conta própria que Bruce Wayne era
          o Batman. Convencido de que o Cavaleiro das
          Trevas precisava de um parceiro, Tim assumiu
          o manto de Robin.
        </ThemedText>

      </ThemedView>

      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          TIM DRAKE FILES
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
              Tim Drake
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
              Robin
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
              Terceiro Robin
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

      <ThemedView style={styles.gothamCard}>

        <ThemedText style={styles.gothamLabel}>
          TERRITÓRIO
        </ThemedText>

        <ThemedText style={styles.gothamTitle}>
          GOTHAM CITY
        </ThemedText>

        <ThemedText style={styles.cardText}>
          Gotham é o principal território da Bat-Família.
          Foi nas ruas da cidade que Tim começou sua
          jornada como Robin e passou a lutar ao lado
          do Batman contra alguns dos maiores criminosos
          do universo DC.
        </ThemedText>

        <Link href="/modal" asChild>
          <View style={styles.button}>
            <ThemedText style={styles.buttonText}>
              CONHEÇA GOTHAM →
            </ThemedText>
          </View>
        </Link>

      </ThemedView>

      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          UM LEGADO INTELIGENTE
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          Tim Drake representa uma nova geração de heróis,
          usando inteligência, estratégia e determinação
          para continuar o legado do Batman.
        </ThemedText>

        <View style={styles.legacyCard}>

          <ThemedText style={styles.legacyTitle}>
            O ROBIN DETETIVE
          </ThemedText>

          <ThemedText style={styles.legacyText}>
            Tim não possui superpoderes. Sua maior arma é
            sua inteligência. Como Robin, ele se destacou
            por sua capacidade de investigação, estratégia
            e raciocínio, tornando-se um dos maiores
            detetives da Bat-Família.
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
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },

  headerLabel: {
    position: 'absolute',
    bottom: 25,
    left: 25,
    borderLeftWidth: 3,
    borderLeftColor: '#3A9D68',
    paddingLeft: 10,
  },

  headerLabelText: {
    color: '#3A9D68',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 3,
  },

  titleContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },

  kicker: {
    color: '#3A9D68',
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
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },

  identityInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },

  identityName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  identityRole: {
    color: '#3A9D68',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#101010',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },

  cardTitle: {
    color: '#3A9D68',
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
    backgroundColor: '#3A9D68',
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

  legacyCard: {
    backgroundColor: '#101010',
    borderRadius: 8,
    padding: 20,
  },

  legacyTitle: {
    color: '#3A9D68',
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
