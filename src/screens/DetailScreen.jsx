import { Text, Button } from 'react-native'

const DetailScreen = (props) => {
  console.log(props)
  return (
    <>
      <Text>Detail Screen</Text>
      <Button title='Go to Back' onPress={() => props.navigation.goBack()}/>
    </>
  )
}

export default DetailScreen
