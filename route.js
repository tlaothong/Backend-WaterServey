module.exports = function(app) {
    var ctrl = require('./control');
    //api
    /*
    app.route('/api/accounts')
      .get(ctrl.list_all_account);
      
  
    
    app.route('/api/account/:accountId')
      .get(ctrl.read_a_account)
      .put(ctrl.update_a_account)
      .delete(ctrl.delete_a_account)
      .post(ctrl.create_a_account);
    */
    //user
    app.route('/api/users')
      .get(ctrl.read_all_user)
    app.route('/api/user/:id')  
      .get(ctrl.read_a_user)
      .put(ctrl.update_a_user)
      .delete(ctrl.delete_a_user);
    app.route('/api/user/')
      .post(ctrl.create_a_user)
    
    //region
    app.route('/api/regions')
      .get(ctrl.read_all_region);
    app.route('/api/region/') 
      .post(ctrl.create_a_region); 
    app.route('/api/region/:id')  
      .get(ctrl.read_a_region)
      .put(ctrl.update_a_region)
      .delete(ctrl.delete_a_region);
      
    //changwat
    app.route('/api/changwats')
      .get(ctrl.read_all_changwat);
    app.route('/api/changwat/')
      .post(ctrl.create_a_changwat)
    app.route('/api/changwat/:id')  
      .get(ctrl.read_a_changwat)
      .put(ctrl.update_a_changwat)
      .delete(ctrl.delete_a_changwat);
      
    //amphoe
    app.route('/api/amphoes')
      .get(ctrl.read_all_amphoe);
    app.route('/api/amphoe/')
      .post(ctrl.create_a_amphoe)
    app.route('/api/amphoe/:id')  
      .get(ctrl.read_a_amphoe)
      .put(ctrl.update_a_amphoe)
      .delete(ctrl.delete_a_amphoe);
      
    //tambon
    app.route('/api/tambons')
      .get(ctrl.read_all_tambon);
    app.route('/api/tambon/')
      .post(ctrl.create_a_tambon)
    app.route('/api/tambon/:id')  
      .get(ctrl.read_a_tambon)
      .put(ctrl.update_a_tambon)
      .delete(ctrl.delete_a_tambon);  
    //district
    app.route('/api/districts')
      .get(ctrl.read_all_district);
    app.route('/api/district/')
      .post(ctrl.create_a_district)
      app.route('/api/district/:id')  
      .get(ctrl.read_a_district)
      .put(ctrl.update_a_district)
      .delete(ctrl.delete_a_district);
    //EnumerationArea
    app.route('/api/EAs')
      .get(ctrl.read_all_enumerationArea);
    app.route('/api/EA/')
      .post(ctrl.create_a_enumerationArea);
      app.route('/api/amphoe/:id')  
      .get(ctrl.read_a_enumerationArea)
      .put(ctrl.update_a_enumerationArea)
      .delete(ctrl.delete_a_enumerationArea);
    
    //waterCensus1
    app.route('/api/waterCensus1s')
      .get(ctrl.read_all_waterCensus1);
    app.route('/api/waterCensus1/')
      .post(ctrl.create_a_waterCensus1);
    app.route('/api/waterCensus1/:id')  
      .get(ctrl.read_a_waterCensus1)
      .put(ctrl.update_a_waterCensus1)
      .delete(ctrl.delete_a_waterCensus1);

    //building
    app.route('/api/buildings')
      .get(ctrl.read_all_building);
    app.route('/api/building/')
      .post(ctrl.create_a_building);
    app.route('/api/building/:id')  
      .get(ctrl.read_a_building)
      .put(ctrl.update_a_building)
      .delete(ctrl.delete_a_building);

    
    //page
    app.route('/')
      .get(ctrl.getHomePage);

  };  
  