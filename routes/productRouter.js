const productController=require('../controllers/productController')
const userController=require('../controllers/usercontroller')

const router=require('express').Router();

// 
router.post('/signup',userController.signup)
router.post('/login',userController.login)
router.post('/addProduct',productController.addProduct)
router.get('/allProduct',productController.getProducts)

router.get('/:id',productController.getOneProduct)
router.put('/:id',productController.updateProducts)
router.delete('/:id',productController.deleteProduct)
router.get('/search',productController.search)

module.exports=router;




