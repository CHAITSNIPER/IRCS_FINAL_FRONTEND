import axios from 'axios';
import { checkNonExpToken } from '../../utils/API-routes';
async function isValidToken(token){
    try{
        const response = await axios.get(checkNonExpToken(token));
        if(response.data.status){
            return true;
        }
        else return false;
    }catch(error){
        console.log('error fetching validity', error);
    }
}
export default isValidToken