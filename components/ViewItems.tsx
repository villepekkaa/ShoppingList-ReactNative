import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { useShoppingList } from '../hooks/useShoppingList';
import { ShoppingItem, ViewItemsProps } from '../types/ShoppingList';
import DeleteItem from './DeleteItem';

export default function ViewItems(props: ViewItemsProps) {
    const { items: hookItems, handleDeleteItem } = useShoppingList();
    const items: ShoppingItem[] = props.items ?? hookItems;

    const renderItem = ({ item, index }: { item: ShoppingItem; index: number }) => (
        <View style={[styles.itemRow, index % 2 === 0 && styles.evenItem]}>
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemQuantity}>x{item.quantity}</Text>
            </View>
            <DeleteItem item={item} onDelete={handleDeleteItem} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Text style={styles.emptyText}>Shopping list is empty</Text>}
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
    itemInfo: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
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