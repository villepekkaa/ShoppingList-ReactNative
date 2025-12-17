import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import AddItem from './components/AddItem';
import ViewItems from './components/ViewItems';
import { useShoppingList } from './hooks/useShoppingList';
import { AddItem as AddItemType } from './types/ShoppingList';

export default function App() {
  const { items, handleAddItem } = useShoppingList();

  const onAddItem = (item: AddItemType) => {
    handleAddItem(item.name, item.quantity);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AddItem onAddItem={onAddItem} />
        <ViewItems items={items} />
      </View>
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
    paddingTop: 20,
  },
});
