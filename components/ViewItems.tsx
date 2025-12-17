import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useShoppingList } from '../hooks/useShoppingList';
import { ShoppingItem, ViewItemsProps } from '../types/ShoppingList';

export default function ViewItems(props: ViewItemsProps) {
  const { items: hookItems } = useShoppingList();
  const items: ShoppingItem[] = props.items ?? hookItems;

  const renderItem = ({ item, index }: { item: ShoppingItem; index: number }) => (
    <View style={[styles.itemRow, index % 2 === 0 && styles.evenItem]}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>x{item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No items yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffffff',
    borderRadius: 5,
    marginBottom: 8,
  },
  evenItem: {
    backgroundColor: '#ebf3ffff',
  },
  itemName: {
    fontSize: 16,
    flex: 1,
  },
  itemQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
  },
});