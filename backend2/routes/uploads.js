/*
    ruta: api/uploads/
*/
const { Router } = require('express');
const expressFileUpload = require('express-fileupload');


const { validarJWT } = require('../middlewares/validar-jwt');
const { validarArchivoSubir } = require('../middlewares/validar-archivo');
const { fileUpload, retornaImagen, actualizarImagenCloudinary } = require('../controllers/uploads');

const router = Router();

router.use( expressFileUpload() );

router.put('/:tipo/:id', validarJWT , fileUpload );

// router.put('/:coleccion/:id', [
//     check('id','El id debe de ser de mongo').isMongoId(),
//     check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios','articulos'] ) ),
// ], actualizarImagenCloudinary )


router.get('/:tipo/:foto', retornaImagen );



module.exports = router;