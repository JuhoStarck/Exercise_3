import { Appbar } from "react-native-paper";
import { getHeaderTitle } from '@react-navigation/elements';
import type { StackHeaderProps } from "@react-navigation/stack";

export default function CustomNavigationBar({ 
  navigation, 
  route, 
  options, 
  back 
}: StackHeaderProps) {
  const title = getHeaderTitle(options, route.name)
  const isHome = route.name === 'Home'

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {isHome && (
        <Appbar.Action 
          icon='arrow-right'
          onPress={() => navigation.navigate('SecondScreen')}
        />
      )}
    </Appbar.Header>
  )
}