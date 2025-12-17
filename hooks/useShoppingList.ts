import { firestore, collection, addDoc, serverTimestamp, ITEMS, orderBy, query, onSnapshot } from '../firebase/Config';
import { useEffect, useState } from 'react';
import { ShoppingItem } from '../types/ShoppingList';

export const useShoppingList = () => {
    const [items, setItems] = useState<ShoppingItem[]>([]);

    useEffect(() => {
        const colRef = collection(firestore, ITEMS)
        const itemsq = query(colRef, orderBy('createdAt', 'desc'))
        const unsubscribe = onSnapshot(itemsq, (snap) => {
            const itemsList: ShoppingItem[] = snap.docs.map(d => {
                const data = d.data() as any
                return {
                    id: d.id,
                    name: data.name ?? data.text ?? 'Not specified',
                    quantity: data.quantity ?? 1,
                    createdAt: data.createdAt ?? null
                } as ShoppingItem
            })
            setItems(itemsList)
        }, (err) => {
            console.error("onSnapshot error", err)
        })
        return () => { unsubscribe() }
    }, [])

    // Tuotteen lisääminen 
    const handleAddItem = async (name: string, quantity: number): Promise<void> => {
        if (!name.trim()) return;

        try {
            const colRef = collection(firestore, ITEMS);
            await addDoc(colRef, {
                name: name.trim(),
                quantity: quantity,
                createdAt: serverTimestamp()
            });
        } catch (err) {
            console.error("Failed to add item to Firebase", err)
        }
    };

    return {
        items,
        handleAddItem,
        
    };
};