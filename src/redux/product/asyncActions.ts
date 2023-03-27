import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./types";

export const fetchProducts = createAsyncThunk(
    'product/fetchProductsStatus',
    async (categoriesActive: number) => {
      const { data } = await axios.get<Product[]>(
        `https://63cc2abe9b72d2a88e0948dc.mockapi.io/products?category=${categoriesActive}`,
      );
      return data as Product[];
    },
  );