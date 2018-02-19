module.exports = function(app) {
    var ctrl = require('./control');
    //api
    app.route('/api/accounts')
      .get(ctrl.list_all_account);
      
  
  
    app.route('/api/account/:accountId')
      .get(ctrl.read_a_account)
      .put(ctrl.update_a_account)
      .delete(ctrl.delete_a_account)
      .post(ctrl.create_a_account);
    
    //staff
    app.route('/api/staffs')
      .get(ctrl.read_all_staff)
    app.route('/api/staff/:staffName')  
      .get(ctrl.read_a_staff);
    app.route('/api/staff/')
      .post(ctrl.create_a_staff)
    
    //region
    app.route('/api/regions')
      .get(ctrl.read_all_region);
    app.route('/api/region/') 
      .post(ctrl.create_a_region); 
    
    //changwat
    app.route('/api/changwats')
      .get(ctrl.read_all_changwat);
    app.route('/api/changwat/')
      .post(ctrl.create_a_changwat)
    
    //amphoe
    app.route('/api/amphoes')
      .get(ctrl.read_all_amphoe);
    app.route('/api/changwat/')
      .post(ctrl.create_a_amphoe)
    
    //tambon
    app.route('/api/tambons')
      .get(ctrl.read_all_tambon);
    app.route('/api/tambon/')
      .post(ctrl.create_a_tambon)
    
    //district
    app.route('/api/districts')
      .get(ctrl.read_all_district);
    app.route('/api/district/')
      .post(ctrl.create_a_district)
    
    //EnumerationArea
    app.route('/api/EAs')
      .get(ctrl.read_all_EnumerationArea);
    app.route('/api/EA/')
      .post(ctrl.create_a_EnumerationArea)
    
    //page
    app.route('/')
      .get(ctrl.getHomePage);

  };  