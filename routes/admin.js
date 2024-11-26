const adminController=require('../controllers/adminController');
const express = require('express');
const adminRouter = express.Router();

adminRouter.route('/')
.get(adminController.getAdmin)
.post(adminController.createAdmin);

adminRouter.route('/:id')
.get(adminController.getAdminById)
.post(adminController.updateAdmin)
.delete(adminController.deleteAdmin);