import React from 'react';
import {  View, Text, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {connect} from 'react-redux';

const renderItem = ({ item }) => (
  <View style = { styles.item }>
    <View>
      <Text>{ item.from_loc } - { item.to_loc }</Text>
    </View>
    <View>
      <MaterialIcons name = "flight" size={24} color="#5CA454" style={styles.plane} />
    </View>
    <View style = { styles.info }>
      <Text style = { styles.plane_type }>{ item.plane_type }</Text>
      <Text style = { styles.date_info }>{ item.time }</Text>
    </View>    
  </View>
);

class Counter extends React.Component{
    render(){
        return (
            <View style={styles.card}>
              <FlatList
                data={this.props.counter}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
  console.log('State:');
  console.log(state);

  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxIncreaseCounter: () => dispatch({
      type: 'INCREASE_COUNTER',
      value: 1,
    }),
    reduxDecreaseCounter: () => dispatch({
      type: 'DECREASE_COUNTER',
      value: 1,
    }),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter);