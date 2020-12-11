//aqui se importan todos los reducers
import {combineReducers} from 'redux'; //funcion para combinar los reducers si se van a utilizar varios
import productosReducer from './productosReducer';

export default combineReducers({
    productos: productosReducer
});
