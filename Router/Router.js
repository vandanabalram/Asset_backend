module.exports = function(app) {
    const todoList = require('../Controller/Controller');
    const desktop = require('../Controller/DesktopController');
    const laptop = require('../Controller/LaptopController');
    const misdesk = require('../Controller/MiscellaneousDesktopController');
    const mislap = require('../Controller/MisLapController');

    const isAuth=require('../Middleware/isAuth')
    
   
     app.route('/Signup')
    .get(todoList.get_a_data)
    .post(todoList.signup);

    app.route('/Signin')
    .post(todoList.userSignin);
    
    app.route('/Singup/:SingupId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

    app.route('/User/:UserId')
    .get(todoList.GetUserById);

   

    app.route('/Desktop')
    .get(desktop.get_a_data)
    .post(desktop.update_a_task) 
    app.route('/delete/:id')
    .delete(desktop.delete_a_task )
    app.route('/Desktop/:Desktopid')
    .put(desktop.update_a_task)

    
    app.route('/Laptop')
    .get(laptop.get_a_data)
    .post(laptop.update_a_task)  
    app.route('/delete1/:id')
    .delete(laptop.delete_a_task )
    app.route('/Laptop/:Laptopid')
    .put(laptop.update_a_task)

    app.route('/MiscellaneousDesktop')
    .get(misdesk.get_a_data)
    .post(misdesk.update_a_task)  
    app.route('/delete2/:id')
    .delete(misdesk.delete_a_task )
    app.route('/MiscellaneousDesktop/:MiscellaneousDesktopid')
    .put(misdesk.update_a_task)



    app.route('/MiscellaneousLaptop')
    .get(mislap.get_a_data)
    .post(mislap.update_a_task)  
    app.route('/delete3/:id')
    .delete(mislap.delete_a_task )
    app.route('/edit3/:id')
    .put(mislap.update_a_task1)

}


    