import axios from 'axios';
import {API} from 'utils/config';
import { BASE_URL } from 'utils/constants';

const fetchSectors = () => axios.get(API.sectors);
const fetchSectorBrands=(params:any)=>axios.get(API.brands,params);
const SectorAPI = {
  fetchSectors,
  fetchSectorBrands
};
export default SectorAPI;
