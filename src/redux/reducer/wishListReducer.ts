import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishListReducerInitialState } from "../../types/reducer-types";
import { WishlistItem } from "../../types/types";


const initialState: WishListReducerInitialState = {
    loading: false,
    wishListItems: []
};

export const wishListReducer = createSlice({
    name: "wishListReducer",
    initialState,
    reducers: {
        addToWishList: (state, action: PayloadAction<WishlistItem>) => {
            state.loading = true;

            const index = state.wishListItems.findIndex(
                (i) => i.productId === action.payload.productId
            );

            if (index !== -1) state.wishListItems[index] = action.payload;
            else state.wishListItems.push(action.payload);
            state.loading = false;
        },
        removeWishListItem: (state, action: PayloadAction<string>) => {
            state.loading = true;
            state.wishListItems = state.wishListItems.filter(
                (i) => i.productId !== action.payload
            );
            state.loading = false;
        },

    }
})
export const {
    addToWishList,
    removeWishListItem
} = wishListReducer.actions;