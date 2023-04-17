import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Counter from './counter';
import {Provider} from 'react-redux';
import { store } from './store';

export default ({ navigation }) => {
  return (
    <Provider store={store}>
      <View style = { styles.container_1 }>
        <View style = { styles.header_1 }>
            <View style = { styles.top }>
              <TouchableOpacity
                style = { styles.button }
                onPress={ () => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>
              <Text style = { styles.heading }>Pengaturan</Text>
              <FontAwesome5 name="user" size={24} color="white" />
            </View>
        </View>
        <Counter/>
        <Text style = {styles.copyright_1}>Copyright Muhammad Rozin Asy Syaddad - 120140006</Text>
      </View>
   </Provider>
  );
}
