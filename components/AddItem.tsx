import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import { AddItemProps } from '../types/ShoppingList';



export default function AddTask({ onAddItem }: AddItemProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onAddItem(input.trim());
      setInput('');
    }
  };

  return (
    <View style={styles.inputRow}>
      <TextInput 
        placeholder='Add a new item'
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 8,
    marginRight: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#198754',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});