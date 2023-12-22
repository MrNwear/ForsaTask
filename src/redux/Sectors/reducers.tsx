import {createSlice} from '@reduxjs/toolkit';
import {sectorsType} from 'utils/types';
import { fetchSectors, fetchSectorsBrands } from './Thunks';
interface sectorsState {
  sectors: sectorsType[];
  sectorsBrands: any[];
  isLoading:boolean;
  endReached:boolean;
  error: any;
  currentPage: number;
}

const initialState: sectorsState = {
  sectors: [],
  sectorsBrands: [],
  isLoading: false,
  error: '',
  endReached:false,
  currentPage: 1,
};

const SectorsSlice = createSlice({
  name: 'sectors',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchSectors.pending, state => {
      state.isLoading = true;
      state.error=''
    });
    builder.addCase(fetchSectors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sectors.push(...action.payload);
    });
    builder.addCase(fetchSectors.rejected, (state, action) => {
      state.isLoading = false;
      state.error =
        action.payload || 'Something went wrong please try again later';
    });
    builder.addCase(fetchSectorsBrands.pending, state => {
      state.isLoading = true;
      state.error=''
    });
    builder.addCase(fetchSectorsBrands.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sectorsBrands[action.payload.sector_id] = action.payload.data;
    });
    builder.addCase(fetchSectorsBrands.rejected, (state, action) => {
      state.isLoading = false;
      state.error =
        action.payload || 'Something went wrong please try again later';
    });
  },
});
export default SectorsSlice.reducer;
