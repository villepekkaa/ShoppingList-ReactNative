import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderProps } from '../types/ShoppingList';

export default function Header({ title = 'Shopping List' }: HeaderProps) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ddd',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
    },
});