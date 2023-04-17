import React from 'react';
import {  View, Text, TouchableOpacity } from "react-native";
import {connect} from 'react-redux';

class Counter extends React.Component{
    render(){
        return (
            <View style={styles.card}>
                <Text>
                    Jumlah data : {this.props.counter.length}
                </Text>

                <TouchableOpacity onPress={this.props.reduxIncreaseCounter}>
                  <Text style = { styles.search }>
                    Tambah Data Acak
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.reduxDecreaseCounter}>
                  <Text style = { styles.search }>
                    Hapus Data Acak
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style = { styles.search }>
                    Edit Data Acak
                  </Text>
                </TouchableOpacity>
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