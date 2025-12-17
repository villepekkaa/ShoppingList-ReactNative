import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import AddItem from './components/AddItem';
import ViewItems from './components/ViewItems';
import { useShoppingList } from './hooks/useShoppingList';
import { AddItem as AddItemType } from './types/ShoppingList';
import Header from './components/Header';

export default function App() {
  const { items, handleAddItem } = useShoppingList();

  const onAddItem = (item: AddItemType) => {
    handleAddItem(item.name, item.quantity);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <KeyboardAvoidingView 
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        <ViewItems items={items} />
        <AddItem onAddItem={onAddItem} />
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});
