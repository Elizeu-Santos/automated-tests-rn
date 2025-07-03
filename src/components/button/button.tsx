import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export function Button({ title, onPress, style, textStyle }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} testID="button-test" activeOpacity={0.8}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4F8EF7',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
        marginVertical: 8,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 1,
    },
});
