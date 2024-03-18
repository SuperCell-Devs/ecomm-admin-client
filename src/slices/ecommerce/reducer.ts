import { createSlice } from "@reduxjs/toolkit";
import {
    getOrders,
    addOrders,
    updateOrders,
    deleteOrders,
    getSellers,
    addSellers,
    updateSellers,
    deleteSellers,
    getProductList,
    addProductList,
    updateProductList,
    deleteProductList,
    getBrandsList,
    addBrandsList,
    deleteBrandsList,
    updateBrandsList,
    addCountryList,
    getCountryList,
    updateCountryList,
    deleteCountryList,
    addVendorsList, getVendorList, deleteVendorsList, updateVendorsList
} from './thunk';

export const initialState = {
    brands: [],
    sellers: [],
    products: [],
    country: [],
    vendors:[],
    reviews: [],
    errors: {}
};

const EcommerceSlice = createSlice({
    name: 'Ecommerce',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // Orders
        builder.addCase(getOrders.fulfilled, (state: any, action: any) => {
            state.orders = action.payload;
        });
     
        builder.addCase(addOrders.fulfilled, (state: any, action: any) => {
            state.orders.unshift(action.payload);
        });
       
        builder.addCase(updateOrders.fulfilled, (state: any, action: any) => {
            state.orders = state.orders.map((orders: any) =>
                orders.id === action.payload.id
                    ? { ...orders, ...action.payload }
                    : orders
            );
        });
      
        builder.addCase(deleteOrders.fulfilled, (state: any, action: any) => {
            state.orders = state.orders.filter(
                (orders: any) => orders.id.toString() !== action.payload.toString()
            );
        });
     

        // Sellers
        builder.addCase(getSellers.fulfilled, (state: any, action: any) => {
            state.sellers = action.payload;
        });
     
        builder.addCase(addSellers.fulfilled, (state: any, action: any) => {
            state.sellers.unshift(action.payload);
        });
    
        builder.addCase(updateSellers.fulfilled, (state: any, action: any) => {
            state.sellers = state.sellers.map((sellers: any) =>
                sellers.id === action.payload.id
                    ? { ...sellers, ...action.payload }
                    : sellers
            );
        });
    
        builder.addCase(deleteSellers.fulfilled, (state: any, action: any) => {
            state.sellers = state.sellers.filter(
                (sellers: any) => sellers.id.toString() !== action.payload.toString()
            );
        });
     

        // Products
        // List View
        builder.addCase(getProductList.fulfilled, (state: any, action: any) => {
            const updatedResults = [action.payload];
            state.products = { ...state.products, results: updatedResults };
        });

        builder.addCase(addProductList.fulfilled, (state: any, action: any) => {
            state.productList.unshift(action.payload);
        });
    
        builder.addCase(updateProductList.fulfilled, (state: any, action: any) => {
            state.productList = state.productList.map((productList: any) =>
                productList.id === action.payload.id
                    ? { ...productList, ...action.payload }
                    : productList
            );
        });
        
        builder.addCase(deleteProductList.fulfilled, (state: any, action: any) => {
            state.productList = state.productList.filter(
                (productList: any) => productList.id.toString() !== action.payload.toString()
            );
        });

        // brands
        builder.addCase(getBrandsList.fulfilled, (state: any, action: any) => {
            const updatedResults = action.payload;
            state.brands = { ...state.brands, ...updatedResults };
        });
        builder.addCase(addBrandsList.fulfilled, (state: any, action: any) => {
            state.brands.unshift(action.payload);
        });
        builder.addCase(updateBrandsList.fulfilled, (state: any, action: any) => {
            state.brands = state.brands.map((brandList: any) =>
                    brandList.id === action.payload.id
                    ? { ...brandList, ...action.payload }
                    : brandList
            );
        });
        builder.addCase(deleteBrandsList.fulfilled, (state: any, action: any) => {
            state.brands = state.brands.filter(
                (brandList: any) => brandList.id.toString() !== action.payload.toString()
            );
        });


        // country
        builder.addCase(getCountryList.fulfilled, (state: any, action: any) => {
            const updatedResults = [action.payload];
            state.country = { ...state.country, results: updatedResults };
        });
        builder.addCase(addCountryList.fulfilled, (state: any, action: any) => {
            state.country.unshift(action.payload);
        });
        builder.addCase(updateCountryList.fulfilled, (state: any, action: any) => {
            state.country = state.country.map((countryList: any) =>
                countryList.id === action.payload.id
                    ? { ...countryList, ...action.payload }
                    : countryList
            );
        });
        builder.addCase(deleteCountryList.fulfilled, (state: any, action: any) => {
            state.country = state.country.filter(
                (countryList: any) => countryList.id.toString() !== action.payload.toString()
            );
        });


        // Vendors
        builder.addCase(getVendorList.fulfilled, (state: any, action: any) => {
            const updatedResults = [action.payload];
            state.vendors = { ...state.vendors, results: updatedResults };
        });
        builder.addCase(addVendorsList.fulfilled, (state: any, action: any) => {
            state.vendors.unshift(action.payload);
        });
        builder.addCase(updateVendorsList.fulfilled, (state: any, action: any) => {
            state.vendors = state.vendors.map((vendorsList: any) =>
                    vendorsList.id === action.payload.id
                    ? { ...vendorsList, ...action.payload }
                    : vendorsList
            );
        });
        builder.addCase(deleteVendorsList.fulfilled, (state: any, action: any) => {
            state.vendors = state.vendors.filter(
                (vendorsListList: any) => vendorsListList.id.toString() !== action.payload.toString()
            );
        });


        // Error handling
        builder.addMatcher(
            (action) => {
            return [
                getOrders.rejected,
                addOrders.rejected,
                updateOrders.rejected,
                deleteOrders.rejected,
                getSellers.rejected,
                addSellers.rejected,
                updateSellers.rejected,
                deleteSellers.rejected,
                getProductList.rejected,
                addProductList.rejected,
                updateProductList.rejected,
                deleteProductList.rejected,
                getBrandsList.rejected,
                updateBrandsList.rejected,
                deleteBrandsList.rejected,
                addBrandsList.rejected,
                getCountryList.rejected,
                updateCountryList.rejected,
                addCountryList.rejected,
                deleteCountryList.rejected,
                addVendorsList.rejected,
                getVendorList.rejected,
                updateVendorsList.rejected,
                deleteVendorsList.rejected
            ].includes(action.type);
            },
            (state: any, action: any) => {
            state.error = action.payload.error || null;
            }
        );
    }
    
});

export default EcommerceSlice.reducer;