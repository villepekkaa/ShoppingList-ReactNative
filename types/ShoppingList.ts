export interface ShoppingItem {

    id: string;
    name: string;
    quantity: number;
    createdAt: any;
}

export type AddItem = Omit<ShoppingItem, 'id' | 'createdAt'>;

export interface AddItemProps {
    onAddItem: (item: AddItem) => void;
}

export interface ViewItemsProps {
    items?: ShoppingItem[];
}

export interface DeleteItemProps {
    item: ShoppingItem;
    onDelete: (id: string) => void;
}

export type HeaderProps = {
    title?: string;
};