import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { useState } from 'react'

const LoginScreen = () => {
  const [form, setForm] = useState({})
  console.log(form)

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async () => {
		// await fetch
  }

  return (
    <View style={styles.viewPage}>
      <Text>Login Form</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange('email', text)}
        autoComplete='on'
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange('password', text)}
        autoComplete='on'
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
})

export default LoginScreen
