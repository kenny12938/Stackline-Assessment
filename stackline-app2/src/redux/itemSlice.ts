import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Sale {
  "weekEnding": string,
  "retailSales": number,
  "wholesaleSales": number,
  "unitsSold": number,
  "retailerMargin": number
}

interface ItemDetails {
    "id": string,
  "title": string,
  "image": string,
  "subtitle": string,
  "brand": string
}
  
export interface ItemData {
  "id": string,
  "title": string,
  "image": string,
  "subtitle": string,
  "brand": string,
  "tags": string[],
  "sales": Sale[]
}

const initialState = {
    "id": "",
    "title": "",
    "image": "",
    "subtitle": "",
    "brand": "",
    "tags": [],
    "sales": []
};

export const itemSlice = createSlice({
    name: 'itemData',
    initialState,
    reducers: {
        updateDetails: (state: ItemData, action: PayloadAction<ItemDetails>) => {
            const { id, title, image, subtitle, brand } = action.payload;
            state.id = id;
            state.title = title;
            state.image = image;
            state.subtitle = subtitle;
            state.brand = brand;
        },
        updateTags: (state: ItemData, action: PayloadAction<string[]>) => {
            state.tags = action.payload;
        },
        updateSales: (state: ItemData, action: PayloadAction<Sale[]>) => {
            state.sales = action.payload;
        }
    }
});

export const { updateDetails, updateTags, updateSales } = itemSlice.actions;

export const selectTitle = (state: RootState) => state.item.title;
export const selectImage = (state: RootState) => state.item.image;
export const selectSubTitle = (state: RootState) => state.item.subtitle;
export const selectTags = (state: RootState) => state.item.tags;
export const selectSales = (state: RootState) => state.item.sales;

export default itemSlice.reducer;
