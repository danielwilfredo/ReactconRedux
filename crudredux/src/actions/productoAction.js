import {AGREGAR_PRODUCTO, 
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR

} from '../types'

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//crear nuevos productos 
export function crearNuevoProductoAction(producto) {
    return async (dispatch) =>{
        dispatch(agregarProducto());

        try {
            //insertar producto en la api
         await  clienteAxios.post('/productos', producto);

            //si todo sale bien actualizar el state

            dispatch(agregarProductoExito(producto));
            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            //si hay un error cambiar el state
            dispatch(agregarProductoError(true));
            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'

            })
        }
    }
}

const agregarProducto=()=> ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

//si el producto se guarda en la base

const agregarProductoExito= producto =>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload:producto
})

// si el producto no se guarda debido a un error

const agregarProductoError = estado =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})