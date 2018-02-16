module.exports = function(app) {
    var account = require('./control');
    var staff = require('./control');
    //api
    app.route('/api/v1/accounts')
      .get(account.list_all_account)
      
  
  
    app.route('/api/v1/account/:accountId')
      .get(account.read_a_account)
      .put(account.update_a_account)
      .delete(account.delete_a_account)
      .post(account.create_a_account);
    //staff
    app.route('/api/v1/staffs')
      .get(staff.read_all_staff)

    app.route('/api/v1/staff/:staffName') 
      .post(staff.create_a_staff) 
      .get(staff.read_a_staff);

    app.route('/api/v1/staff/:')
    //page
    app.route('/')
      .get(account.getHomePage);

  };