const express = require('express')

const router = express.Router()
const {getAllTasks,createTasks,updateTasks,deleteTasks,getTasks}=require('../controller/tasks')


router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks)
module.exports = router 