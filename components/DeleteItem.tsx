import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { DeleteItemProps } from '../types/ShoppingList';

export default function DeleteItem({ item, onDelete }: DeleteItemProps) {
  return (
    <TouchableOpacity 
      style={styles.checkButton} 
      onPress={() => onDelete(item.id)}
    >
      <Text style={styles.checkText}>✓</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27ae60',
    borderRadius: 16,
  },
  checkText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});