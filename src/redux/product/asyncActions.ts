import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./types";

export const fetchProducts = createAsyncThunk(
    'product/fetchProductsStatus',
    async (categoriesActive: string) => {
      const { data } = await axios.get<Product[]>(
        `http://165.227.222.89/menu/category/${categoriesActive}`,
      );
      return data as Product[];
    },
  );