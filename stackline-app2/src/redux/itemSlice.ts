import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export enum SortOrder {
    ASC,
    DESC
}

export enum SortTerm {
    WEEK_ENDING = 'weekEnding',
    RETAIL_SALES = 'retailSales',
    WHOLESALE_SALES = 'wholesaleSales',
    UNITS_SOLD = 'unitsSold',
    RETAILER_MARGIN = 'retailerMargin'
};

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

export interface ItemState {
    "id": string,
  "title": string,
  "image": string,
  "subtitle": string,
  "brand": string,
  "tags": string[],
  "sales": Sale[],
  "sortOrder": SortOrder,
  "sortTerm": SortTerm
}

const initialState: ItemState = {
    "id": "",
    "title": "",
    "image": "",
    "subtitle": "",
    "brand": "",
    "tags": [],
    "sales": [],
    "sortOrder": SortOrder.ASC,
    "sortTerm": SortTerm.WEEK_ENDING
};

export const itemSlice = createSlice({
    name: 'itemState',
    initialState,
    reducers: {
        updateDetails: (state: ItemState, action: PayloadAction<ItemDetails>) => {
            const { id, title, image, subtitle, brand } = action.payload;
            state.id = id;
            state.title = title;
            state.image = image;
            state.subtitle = subtitle;
            state.brand = brand;
        },
        updateTags: (state: ItemState, action: PayloadAction<string[]>) => {
            state.tags = action.payload;
        },
        updateSales: (state: ItemState, action: PayloadAction<Sale[]>) => {
            state.sales = action.payload;
        },
        updateSortTerm: (state: ItemState, action: PayloadAction<SortTerm>) => {
            const sortTerm = action.payload;
            state.sortTerm = sortTerm;
            state.sales.sort((saleA: Sale, saleB: Sale) => {
                return saleA[sortTerm] > saleB[sortTerm] ? 1 : -1;
            });
        },
        updateSortOrder: (state: ItemState, action: PayloadAction<SortOrder>) => {
            const currentSortTerm = state.sortTerm;

            state.sortOrder = action.payload;
            if (action.payload === SortOrder.ASC) {
                state.sales.sort((saleA: Sale, saleB: Sale) => {
                    return saleA[currentSortTerm] > saleB[currentSortTerm] ? 1 : -1;
                });
            } else {
                state.sales.sort((saleA: Sale, saleB: Sale) => {
                    return saleA[currentSortTerm] < saleB[currentSortTerm] ? 1 : -1;
                });
            }
        }
    }
});

export const { updateDetails, updateTags, updateSales, updateSortTerm, updateSortOrder } = itemSlice.actions;

export const selectTitle = (state: RootState) => state.item.title;
export const selectImage = (state: RootState) => state.item.image;
export const selectSubTitle = (state: RootState) => state.item.subtitle;
export const selectTags = (state: RootState) => state.item.tags;
export const selectSales = (state: RootState) => state.item.sales;
export const selectSortTerm = (state: RootState) => state.item.sortTerm;
export const selectSortOrder = (state: RootState) => state.item.sortOrder;

export default itemSlice.reducer;
