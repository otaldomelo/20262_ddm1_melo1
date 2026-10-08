import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#F5C518',
        tabBarInactiveTintColor: '#666666',

        tabBarStyle: {
          backgroundColor: '#080808',
          borderTopColor: '#222222',
          borderTopWidth: 1,
          height: 68,
          paddingTop: 6,
          paddingBottom: 8,
          elevation: 0,
          shadowOpacity: 0,
        },

        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '700',
          marginTop: 2,
        },
      }}
    >

      {/* =========================
          BATMAN
      ========================= */}

      <Tabs.Screen
        name="index"
        options={{
          title: 'Batman',

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="mask"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* =========================
          DICK GRAYSON
      ========================= */}

      <Tabs.Screen
        name="dickgrayson"
        options={{
          title: 'Dick',

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="star"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* =========================
          JASON TODD
      ========================= */}

      <Tabs.Screen
        name="jasontodd"
        options={{
          title: 'Jason',

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="skull-crossbones"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* =========================
          TIM DRAKE
      ========================= */}

      <Tabs.Screen
        name="timdrake"
        options={{
          title: 'Tim',

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="search"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* =========================
          DAMIAN WAYNE
      ========================= */}

      <Tabs.Screen
        name="damianwayne"
        options={{
          title: 'Damian',

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="bolt"
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Tabs>
  );
}