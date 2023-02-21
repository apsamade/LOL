const express = require('express')
const router = express.Router()
const adminController = require('../controller/admin')

router.get('/', adminController.getAccueil)
router.post('/', adminController.postAccueil)

router.get('/inscription', adminController.getInscription)
router.post('/inscription', adminController.postInscription)

router.get('/connexion', adminController.getConnexion)
router.post('/connexion', adminController.postConnexion)




module.exports = router;