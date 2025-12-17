import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import { AddItemProps } from '../types/ShoppingList';

export default function AddTask({ onAddItem }: AddItemProps) {
  const [input, setInput] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = () => {
    const name = input.trim()
    if (!name) return

    const qty = Number(quantity) || 1
    onAddItem({name, quantity: qty});
    setInput('')
    setQuantity('')
    setIsExpanded(false)
  };

  const handleCancel = () => {
    setInput('')
    setQuantity('')
    setIsExpanded(false)
  };

  if (!isExpanded) {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.plusButton} 
          onPress={() => setIsExpanded(true)}
        >
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput 
          placeholder='Add a new item'
          value={input}
          onChangeText={setInput}
          style={styles.input}
          returnKeyType='done'
          onSubmitEditing={handleSubmit}
          autoFocus
        />
        <TextInput 
          placeholder='1'
          value={quantity}
          onChangeText={setQuantity}
          keyboardType='numeric'
          style={styles.quantityInput}
          returnKeyType='done'
          onSubmitEditing={handleSubmit}
        />
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelText}>✕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  plusButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#198754',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  plusText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 36,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 8,
    marginRight: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  quantityInput: {
    width: 60,
    fontSize: 16,
    padding: 8,
    marginRight: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    textAlign: 'center',
  },
  cancelButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dc3545',
    borderRadius: 18,
  },
  cancelText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});