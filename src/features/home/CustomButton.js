import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';

const CustomButton = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: 'skyblue' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#1e90ff' : props.color },
                styles.button,
                { ...props.style }
            ]}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        fontSize: 17,
        margin: 5,
        textAlign: 'center',
    },
    button: {
        width: 300,
        height: 35,
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
    },
})

export default CustomButton;