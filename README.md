# Shopping List

A simple and elegant React Native shopping list application with Firebase backend.

This repository contains a solution for a weekly assignment 8 in the course "Web- and Hybrid Technologies in Mobile Programming" at Oulu University of Applied Sciences.

## Features

- ✅ Add items with quantities
- ✅ Real-time synchronization with Firebase
- ✅ Mark items as purchased
- ✅ Clean and modern UI
- ✅ Keyboard-friendly input with Enter key support

## Tech Stack

- **React Native** with Expo
- **TypeScript**
- **Firebase Firestore** for real-time database
- **Custom Hooks** for state management

## Project Structure

```
├── components/
│   ├── AddItem.tsx       # Item input with expandable plus button
│   ├── DeleteItem.tsx    # Checkmark button to remove items
│   ├── Header.tsx        # App header
│   └── ViewItems.tsx     # List view with FlatList
├── hooks/
│   └── useShoppingList.ts # Firebase integration hook
├── types/
│   └── ShoppingList.ts   # TypeScript interfaces
├── firebase/
│   └── Config.ts         # Firebase configuration
└── App.tsx               # Main app component
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Configure Firebase:
   - Create a `.env` file in the root directory
   - Add your Firebase credentials to `.env`
   - Update `firebase/Config.ts` if needed

3. Run the app:
```bash
npx expo start
```

## Usage

- Tap the **+** button to add new items
- Enter item name and quantity (defaults to 1)
- Press Enter to quickly add items
- Tap the **✓** button to mark items as purchased (removes from list)

## License

MIT
