export interface ShoppingItem {

    id: string;
    name: string;
    quantity: number;
    createdAt: any;

}

export interface AddItemProps {
  onAddItem: (text: string) => void;
}