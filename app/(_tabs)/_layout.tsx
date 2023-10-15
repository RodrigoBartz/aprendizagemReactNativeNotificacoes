import { Tabs, useRouter } from 'expo-router'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

const MenuInferior = () => {
  const router = useRouter()

  return (

    <Tabs
      initialRouteName="(dashboard)"
      screenOptions={{
        headerLeft: () => (
          <View style={styles.titleContainer}>
            <Text style={styles.titleSistema}>SISTEMA</Text>
            <Text style={styles.titleSenac}>SENAC</Text>
          </View>
        ),
        headerRight: () => (
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => router.push("/mensagens")}
              style={styles.icon}>
              <Ionicons name="chatbubbles-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/Notificacoes")}
              style={styles.icon}>
              <Ionicons name="md-notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          backgroundColor: '#00408D',
          height: 100
        },
        headerLeftContainerStyle: {
          paddingLeft: 20
        },
        headerRightContainerStyle: {
          paddingRight: 20
        },
        headerTitleStyle: {
          fontFamily: 'Poppins',
          color: '#fff'
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen name="(dashboard)"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen name="Calendario"
        options={{
          title: 'Calendário',
          tabBarLabel: 'Calendário',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="calendar-today" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen name="badges"
        options={{
          title: 'Badges',
          tabBarLabel: 'Badges',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ios-trophy" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen name="(arquivos)/index"
        options={{
          title: 'Arquivos',
          tabBarLabel: 'Arquivos',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="folder" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen name="Notificacoes"
        options={{
          title: "Notificações",
          href: null,
          tabBarBadge: 3,
          //tabBarLabel: 'Notificações',

          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="notifications" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen name="mensagens"
        options={{
          href: null,
          tabBarBadge: 3,
          //tabBarLabel: 'Notificações',

          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="notifications" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen name="(menu)"
        options={{
          headerShown: true,
          title: "Menu",
          tabBarLabel: 'Menu',
          tabBarIcon: ({ size, color  }) => (
            <MaterialIcons name="menu" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}

export default MenuInferior

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00408D',
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleSistema: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins',
  },
  titleSenac: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'PoppinsBold',
  },
  infoText: {
    color: 'white',
  },
  infoValue: {
    fontWeight: '700',
    color: '#F7941D'
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    width: 30,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#F59E0B'
  }
})