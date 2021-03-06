import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from "../constants/styles";
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message}))
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.greeting}>{`Hello again.\nWelcome back.`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={ styles.inputTitle }>Email address</Text>
                        <TextInput
                            style={ styles.input }
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        >    
                        </TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        >
                        </TextInput>
                    </View>
                </View>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.handleLogin}
                >
                    <Text style={{ color: "#FFF", fontWeight: "500"}}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32}}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={{ color: "#414959", fontSize: 13}}>
                        New to SocialApp? <Text style={{ fontWeight: "500", color: "#E9446A"}}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}