import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const damianIdentities = [
  {
    name: 'Damian Wayne',
    role: 'O Quarto Robin',
    image: require('@/assets/images/damianwayne.jpg'),
  },
  {
    name: 'Robin',
    role: 'O Herdeiro do Morcego',
    image: require('@/assets/images/robin.jpg'),
  },
];

export default function DamianWayneScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.headerContainer}>

        <Image
          source={require('@/assets/images/robin_header.jpg')}
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


      {/* TÍTULO */}
      <ThemedView style={styles.titleContainer}>

        <View>

          <ThemedText style={styles.kicker}>
            O QUARTO ROBIN
          </ThemedText>

          <ThemedText
            type="title"
            style={styles.title}
          >
            DAMIAN WAYNE
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            O Herdeiro do Morcego
          </ThemedText>

        </View>

      </ThemedView>


      {/* IDENTIDADES */}
      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          POR TRÁS DA MÁSCARA
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          Filho de Bruce Wayne e criado entre assassinos,
          Damian precisou aprender a ser Robin e herói.
        </ThemedText>

        <View style={styles.identityGrid}>

          {damianIdentities.map((identity) => (

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
          O HERDEIRO DO MORCEGO
        </ThemedText>

        <ThemedText style={styles.cardText}>
          Damian Wayne é filho de Bruce Wayne e Talia
          al Ghul. Criado pela Liga dos Assassinos, ele
          recebeu treinamento desde muito jovem para se
          tornar um guerreiro excepcional. Ao conhecer
          seu pai, passou a assumir o manto de Robin e
          iniciou sua difícil jornada para se tornar um herói.
        </ThemedText>

      </ThemedView>


      {/* DAMIAN WAYNE FILES */}
      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          DAMIAN WAYNE FILES
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
              Damian Wayne
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
              Quarto Robin
            </ThemedText>

          </View>


          <View style={styles.factCard}>

            <ThemedText style={styles.factNumber}>
              04
            </ThemedText>

            <ThemedText style={styles.factTitle}>
              PAI
            </ThemedText>

            <ThemedText style={styles.factText}>
              Bruce Wayne
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
          Gotham se tornou o principal território de Damian
          após sua entrada na Bat-Família. Ao lado de Batman
          e dos outros Robins, ele aprendeu que proteger a
          cidade exige mais do que força: exige disciplina,
          responsabilidade e controle.
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
          UM LEGADO EM CONSTRUÇÃO
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          Damian representa a nova geração da Bat-Família
          e o desafio de transformar um passado sombrio
          em um novo futuro.
        </ThemedText>

        <View style={styles.legacyCard}>

          <ThemedText style={styles.legacyTitle}>
            DE ASSASSINO A ROBIN
          </ThemedText>

          <ThemedText style={styles.legacyText}>
            Damian começou sua vida sendo treinado para
            matar e conquistar. Sob a influência de Bruce
            Wayne e da Bat-Família, começou a compreender
            o verdadeiro significado de ser um herói.
            Sua jornada é marcada pelo conflito entre sua
            natureza agressiva e o código de Batman.
          </ThemedText>

        </View>

      </ThemedView>


      {/* RELAÇÃO COM BATMAN */}
      <ThemedView style={styles.section}>

        <ThemedText style={styles.sectionTitle}>
          O FILHO DO BATMAN
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          Uma relação marcada por conflitos, respeito
          e uma constante tentativa de provar seu valor.
        </ThemedText>

        <View style={styles.relationCard}>

          <View style={styles.relationNumber}>
            <ThemedText style={styles.relationNumberText}>
              01
            </ThemedText>
          </View>

          <View style={styles.relationContent}>

            <ThemedText style={styles.relationTitle}>
              BRUCE WAYNE
            </ThemedText>

            <ThemedText style={styles.relationText}>
              Para Damian, Bruce não é apenas o Batman.
              Ele é seu pai e a pessoa que representa
              o maior desafio de sua vida.
            </ThemedText>

          </View>

        </View>

      </ThemedView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  /* =========================
     CONTAINER
  ========================= */

  container: {
    flex: 1,
    backgroundColor: '#080808',
  },


  /* =========================
     HEADER
  ========================= */

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
    borderLeftColor: '#8FAF45',
    paddingLeft: 10,
  },

  headerLabelText: {
    color: '#8FAF45',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 3,
  },


  /* =========================
     TÍTULO
  ========================= */

  titleContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },

  kicker: {
    color: '#8FAF45',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '900',
    letterSpacing: 1,
  },

  subtitle: {
    color: '#777777',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
  },


  /* =========================
     SEÇÃO
  ========================= */

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


  /* =========================
     IDENTIDADES
  ========================= */

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
    color: '#8FAF45',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 4,
  },


  /* =========================
     CARD
  ========================= */

  card: {
    backgroundColor: '#101010',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },

  cardTitle: {
    color: '#8FAF45',
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


  /* =========================
     FATOS
  ========================= */

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


  /* =========================
     GOTHAM
  ========================= */

  gothamCard: {
    backgroundColor: '#101010',
    borderRadius: 8,
    padding: 20,
    margin: 20,
    borderTopWidth: 2,
    borderTopColor: '#8FAF45',
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
    backgroundColor: '#8FAF45',
    borderRadius: 6,
    paddingVertical: 13,
    alignItems: 'center',
  },

  buttonText: {
    color: '#080808',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },


  /* =========================
     LEGADO
  ========================= */

  legacyCard: {
    backgroundColor: '#101010',
    borderRadius: 8,
    padding: 20,
  },

  legacyTitle: {
    color: '#8FAF45',
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


  /* =========================
     RELAÇÃO COM BATMAN
  ========================= */

  relationCard: {
    flexDirection: 'row',
    backgroundColor: '#101010',
    borderRadius: 8,
    padding: 18,
    alignItems: 'flex-start',
  },

  relationNumber: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#8FAF45',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  relationNumberText: {
    color: '#080808',
    fontSize: 11,
    fontWeight: '900',
  },

  relationContent: {
    flex: 1,
  },

  relationTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 6,
  },

  relationText: {
    color: '#888888',
    fontSize: 14,
    lineHeight: 21,
  },

});