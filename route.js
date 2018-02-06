module.exports = function(app) {
    var account = require('./control');
  
    // todoList Routes
    app.route('/accounts')
      .get(account.list_all_account)
      .post(account.create_a_account);
  
  
    app.route('/account/:accountId')
      .get(account.read_a_account)
      .put(account.update_a_account)
      .delete(account.delete_a_account);

    app.route('/')
      .get(account.getHomePage);

  };