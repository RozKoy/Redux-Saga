import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const Home = ({ navigation }) => {
const [ departure, set_departure ] = useState("");
const [ location, set_location ] = useState("");
const [ date, set_date ] = useState("");

  return(
    <View style = { styles.container }>
      <View style={ styles.header }>
        <Feather name="menu" size={24} color="white" />
        <Text style = { styles.title }>Hiling.id</Text>
        <FontAwesome5 name="user" size={24} color="white" />
      </View>
      
      <ScrollView style = { styles.card }>
        <Text style = { styles.head_sec }>Lokasi Keberangkatan</Text>
        <View style = { styles.input_place }>
          <MaterialIcons name="flight-takeoff" size={24} color="#5CA454" />
          <TextInput
            style = { styles.input }
            onChangeText = { set_departure }
            value = { departure }
            placeholder = "Masukan lokasi keberangkatan"
            selectTextOnFocus = { false }
          />
        </View>

        <Text style = { styles.head_sec }>Lokasi Tujuan</Text>
        <View style = { styles.input_place }>
          <MaterialIcons name="flight-land" size={24} color="#5CA454" />
          <TextInput
            style = { styles.input }
            onChangeText = { set_location }
            value = { location }
            placeholder = "Masukkan Lokasi Tujuan"
          />
        </View>

        <Text style = { styles.head_sec }>Tanggal Keberangkatan</Text>
          <View style = { styles.input_place }>
              <Fontisto name="date" size={24} color="#5CA454" />
            <TextInput
              style = { styles.input }
              onChangeText = { set_date }
              value = { date }
              placeholder = "Masukan Tanggal Keberangkatan"
            />
          </View>

        <TouchableOpacity onPress = {() => navigation.navigate('Detail')}><Text style = { styles.search }
        >Cari</Text></TouchableOpacity>

        <TouchableOpacity onPress = {() => navigation.navigate('Edit')}><Text style = { styles.search }
        >Pengaturan</Text></TouchableOpacity>
      </ScrollView>
      
      <View style = { styles.footer }>
        <Text style = { styles.copyright }>Copyright Muhammad Rozin Asy Syaddad - 120140006</Text>
      </View>
    </View>
  );
}

import styles from './style';

export default Home;