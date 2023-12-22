import {createAsyncThunk} from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import SectorAPI from './services';


export const fetchSectors = createAsyncThunk(
  'sector/fetchSectors',
  async (_, thunkAPI) => {
    try {
      const response = await SectorAPI.fetchSectors();
      return response.data.results;
    } catch (error: any) {
      console.log(error)
        return thunkAPI.rejectWithValue(error.data);
    }
  },
);
export const fetchSectorsBrands = createAsyncThunk(
  'sector/fetchSectorsBrands',
  async (sector_id:any, thunkAPI) => {
    try {
      const response = await SectorAPI.fetchSectorBrands({params:{sector:sector_id}});
      return {sector_id:sector_id,data:response?.data?.results};
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.data.message);
      } else {
        return thunkAPI.rejectWithValue('Something went wrong');
      }
    }
  },
);
