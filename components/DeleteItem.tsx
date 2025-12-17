import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { DeleteItemProps } from '../types/ShoppingList';

export default function DeleteItem({ item, onDelete }: DeleteItemProps) {
  return (
    <TouchableOpacity 
      style={styles.deleteButton} 
      onPress={() => onDelete(item.id)}
    >
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: '#ff4444',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});