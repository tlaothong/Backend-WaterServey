module.exports = function(app) {
    var account = require('./control');
  
    //api
    app.route('/api/v1/accounts')
      .get(account.list_all_account)
      
  
  
    app.route('/api/v1/account/:accountId')
      .get(account.read_a_account)
      .put(account.update_a_account)
      .delete(account.delete_a_account)
      .post(account.create_a_account);



    //page
    app.route('/')
      .get(account.getHomePage);

  };