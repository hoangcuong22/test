import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs" // Thêm import này
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import DetailScreen from "app/screens/DetailScreen"
import { Icon } from "app/components" // Giả sử bạn có một component Icon
import HomeScreen, { Product } from "app/screens/home"

export type AppStackParamList = {
  goBack(): void
  navigate(arg0: string, item?: Product): unknown
  HomeScreen: undefined
  DetailScreen: undefined
}

const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

const Stack = createNativeStackNavigator<AppStackParamList>()
const Tab = createBottomTabNavigator()

const AppStack = observer(function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={MainTabs} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  )
})

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused, color, size, style }: any) => {
          let iconName: any
          switch (route.name) {
            case "Home":
              ;(iconName = "home"), (size = 24)

              break
            case "Tab2":
              ;(iconName = "Contributions"), (size = 40)
              break
            case "Tab3":
              ;(iconName = "cart_home"), (size = 24)
              break
            case "Tab4":
              ;(iconName = "chat"), (size = 24)
              break
            case "Tab5":
              ;(iconName = "bell"), (size = 24)
              break
            case "Tab6":
              ;(iconName = "bell"), (size = 24)
              break
            default:
              ;(iconName = "home"), (size = 24)
          }

          return <Icon icon={iconName} size={size} color={color} style={style} />
        },
        tabBarActiveTintColor: "#3864FF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Tab2" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Tab3" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Tab4" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Tab5" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Tab6" component={HomeScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
