import React from 'react';
import { Text, View } from 'react-native';
import styles from '../constants/styles';

export default class ProfileScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>ProfileScreen</Text>
            </View>
        )
    }
}