import React from "react";
import { StyleSheet, Text, View } from 'react-native';
export default class Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello, I am Kay</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});