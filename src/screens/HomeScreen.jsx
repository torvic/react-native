import { View, Text, StyleSheet, Button } from 'react-native'

const HomeScreen = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title='Go to Details' onPress={() => props.navigation.navigate('Detail', { id: 1, name: "Torvic" })}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
