module.exports = function (app) {
  
  
  var ctrl = require('./control/areas')

  //user
  app.route('/api/users')
    .get(ctrl.read_all_user);
  app.route('/api/user/:id')
    .get(ctrl.read_a_user)
    .put(ctrl.update_a_user)
    .delete(ctrl.delete_a_user);
  app.route('/api/user/')
    .post(ctrl.create_a_user);

  //area
  app.route('/api/areas')
    .get(ctrl.read_all_area);
  app.route('/api/area/')
    .post(ctrl.create_a_area);
  app.route('/api/area/:id')
    .get(ctrl.read_a_area)
    .put(ctrl.update_a_area)
    .delete(ctrl.delete_a_area);

  //tablet
  app.route('/api/tablets')
    .get(ctrl.read_all_tablet);
  app.route('/api/tablet/')
    .post(ctrl.create_a_tablet);
  app.route('/api/tablet/:id')
    .get(ctrl.read_a_tablet)
    .put(ctrl.update_a_tablet)
    .delete(ctrl.delete_a_tablet);

  //progress
  app.route('/api/progresss')
    .get(ctrl.read_all_progress);
  app.route('/api/progress/')
    .post(ctrl.create_a_progress);
  app.route('/api/progress/:id')
    .get(ctrl.read_a_progress)
    .put(ctrl.update_a_progress)
    .delete(ctrl.delete_a_progress);

  //SN1
  app.route('/api/SN1s')
    .get(ctrl.read_all_SN1);
  app.route('/api/SN1/')
    .post(ctrl.create_a_SN1);
  app.route('/api/SN1/:id')
    .get(ctrl.read_a_SN1)
    .put(ctrl.update_a_SN1)
    .delete(ctrl.delete_a_SN1);
  //SN1P1
  app.route('/api/SN1P1s')
    .get(ctrl.read_all_SN1P1);
  app.route('/api/SN1P1/')
    .post(ctrl.create_a_SN1P1);
  app.route('/api/SN1P1/:id')
    .get(ctrl.read_a_SN1P1)
    .put(ctrl.update_a_SN1P1)
    .delete(ctrl.delete_a_SN1P1);
  //SN1P2
  app.route('/api/SN1P2s')
    .get(ctrl.read_all_SN1P2);
  app.route('/api/SN1P2/')
    .post(ctrl.create_a_SN1P2);
  app.route('/api/SN1P2/:id')
    .get(ctrl.read_a_SN1P2)
    .put(ctrl.update_a_SN1P2)
    .delete(ctrl.delete_a_SN1P2);
  //SN1P3
  app.route('/api/SN1P3s')
    .get(ctrl.read_all_SN1P3);
  app.route('/api/SN1P3/')
    .post(ctrl.create_a_SN1P3);
  app.route('/api/SN1P3/:id')
    .get(ctrl.read_a_SN1P3)
    .put(ctrl.update_a_SN1P3)
    .delete(ctrl.delete_a_SN1P3);
  //SN2_1
  app.route('/api/SN2_1s')
    .get(ctrl.read_all_SN2_1);
  app.route('/api/SN2_1/')
    .post(ctrl.create_a_SN2_1);
  app.route('/api/SN2_1/:id')
    .get(ctrl.read_a_SN2_1)
    .put(ctrl.update_a_SN2_1)
    .delete(ctrl.delete_a_SN2_1);
  //SN2_1P1
  app.route('/api/SN2_1P1s')
    .get(ctrl.read_all_SN2_1P1);
  app.route('/api/SN2_1P1/')
    .post(ctrl.create_a_SN2_1P1);
  app.route('/api/SN2_1P1/:id')
    .get(ctrl.read_a_SN2_1P1)
    .put(ctrl.update_a_SN2_1P1)
    .delete(ctrl.delete_a_SN2_1P1);
  //SN2_1P2
  app.route('/api/SN2_1P2s')
    .get(ctrl.read_all_SN2_1P2);
  app.route('/api/SN2_1P2/')
    .post(ctrl.create_a_SN2_1P2);
  app.route('/api/SN2_1P2/:id')
    .get(ctrl.read_a_SN2_1P2)
    .put(ctrl.update_a_SN2_1P2)
    .delete(ctrl.delete_a_SN2_1P2);
  //SN2_1P2_1
  app.route('/api/SN2_1P2_1s')
    .get(ctrl.read_all_SN2_1P2_1);
  app.route('/api/SN2_1P2_1/')
    .post(ctrl.create_a_SN2_1P2_1);
  app.route('/api/SN2_1P2_1/:id')
    .get(ctrl.read_a_SN2_1P2_1)
    .put(ctrl.update_a_SN2_1P2_1)
    .delete(ctrl.delete_a_SN2_1P2_1);
  //SN2_1P2_2
  app.route('/api/SN2_1P2_2s')
    .get(ctrl.read_all_SN2_1P2_2);
  app.route('/api/SN2_1P2_2/')
    .post(ctrl.create_a_SN2_1P2_2);
  app.route('/api/SN2_1P2_2/:id')
    .get(ctrl.read_a_SN2_1P2_2)
    .put(ctrl.update_a_SN2_1P2_2)
    .delete(ctrl.delete_a_SN2_1P2_2);
  //SN2_1P2_3
  app.route('/api/SN2_1P2_3s')
    .get(ctrl.read_all_SN2_1P2_3);
  app.route('/api/SN2_1P2_3/')
    .post(ctrl.create_a_SN2_1P2_3);
  app.route('/api/SN2_1P2_3/:id')
    .get(ctrl.read_a_SN2_1P2_3)
    .put(ctrl.update_a_SN2_1P2_3)
    .delete(ctrl.delete_a_SN2_1P2_3);
  //SN2_1P2_4
  app.route('/api/SN2_1P2_4s')
    .get(ctrl.read_all_SN2_1P2_4);
  app.route('/api/SN2_1P2_4/')
    .post(ctrl.create_a_SN2_1P2_4);
  app.route('/api/SN2_1P2_4/:id')
    .get(ctrl.read_a_SN2_1P2_4)
    .put(ctrl.update_a_SN2_1P2_4)
    .delete(ctrl.delete_a_SN2_1P2_4);
  //SN2_1P2_5
  app.route('/api/SN2_1P2_5s')
    .get(ctrl.read_all_SN2_1P2_5);
  app.route('/api/SN2_1P2_5/')
    .post(ctrl.create_a_SN2_1P2_5);
  app.route('/api/SN2_1P2_5/:id')
    .get(ctrl.read_a_SN2_1P2_5)
    .put(ctrl.update_a_SN2_1P2_5)
    .delete(ctrl.delete_a_SN2_1P2_5);
  //SN2_1P2_6      
  app.route('/api/SN2_1P2_6s')
    .get(ctrl.read_all_SN2_1P2_6);
  app.route('/api/SN2_1P2_6/')
    .post(ctrl.create_a_SN2_1P2_6);
  app.route('/api/SN2_1P2_6/:id')
    .get(ctrl.read_a_SN2_1P2_6)
    .put(ctrl.update_a_SN2_1P2_6)
    .delete(ctrl.delete_a_SN2_1P2_6);
  //SN2_1P2_7        
  app.route('/api/SN2_1P2_7s')
    .get(ctrl.read_all_SN2_1P2_7);
  app.route('/api/SN2_1P2_7/')
    .post(ctrl.create_a_SN2_1P2_7);
  app.route('/api/SN2_1P2_7/:id')
    .get(ctrl.read_a_SN2_1P2_7)
    .put(ctrl.update_a_SN2_1P2_7)
    .delete(ctrl.delete_a_SN2_1P2_7);
  //SN2_1P2_9_1        
  app.route('/api/SN2_1P2_9_1s')
    .get(ctrl.read_all_SN2_1P2_9_1);
  app.route('/api/SN2_1P2_9_1/')
    .post(ctrl.create_a_SN2_1P2_9_1);
  app.route('/api/SN2_1P2_9_1/:id')
    .get(ctrl.read_a_SN2_1P2_9_1)
    .put(ctrl.update_a_SN2_1P2_9_1)
    .delete(ctrl.delete_a_SN2_1P2_9_1);
  //SN2_1P2_9_3 
  app.route('/api/SN2_1P2_9_3s')
    .get(ctrl.read_all_SN2_1P2_9_3);
  app.route('/api/SN2_1P2_9_3/')
    .post(ctrl.create_a_SN2_1P2_9_3);
  app.route('/api/SN2_1P2_9_3/:id')
    .get(ctrl.read_a_SN2_1P2_9_3)
    .put(ctrl.update_a_SN2_1P2_9_3)
    .delete(ctrl.delete_a_SN2_1P2_9_3);
  //SN2_1P2_9_4    
  app.route('/api/SN2_1P2_9_4s')
    .get(ctrl.read_all_SN2_1P2_9_4);
  app.route('/api/SN2_1P2_9_4/')
    .post(ctrl.create_a_SN2_1P2_9_4);
  app.route('/api/SN2_1P2_9_4/:id')
    .get(ctrl.read_a_SN2_1P2_9_4)
    .put(ctrl.update_a_SN2_1P2_9_4)
    .delete(ctrl.delete_a_SN2_1P2_9_4);
  //SN2_1P3
  app.route('/api/SN2_1P3s')
    .get(ctrl.read_all_SN2_1P3);
  app.route('/api/SN2_1P3/')
    .post(ctrl.create_a_SN2_1P3);
  app.route('/api/SN2_1P3/:id')
    .get(ctrl.read_a_SN2_1P3)
    .put(ctrl.update_a_SN2_1P3)
    .delete(ctrl.delete_a_SN2_1P3);
  //SN2_1P4   
  app.route('/api/SN2_1P4s')
    .get(ctrl.read_all_SN2_1P4);
  app.route('/api/SN2_1P4/')
    .post(ctrl.create_a_SN2_1P4);
  app.route('/api/SN2_1P4/:id')
    .get(ctrl.read_a_SN2_1P4)
    .put(ctrl.update_a_SN2_1P4)
    .delete(ctrl.delete_a_SN2_1P4);
  //SN2_1P5   
  app.route('/api/SN2_1P5s')
    .get(ctrl.read_all_SN2_1P5);
  app.route('/api/SN2_1P5/')
    .post(ctrl.create_a_SN2_1P5);
  app.route('/api/SN2_1P5/:id')
    .get(ctrl.read_a_SN2_1P5)
    .put(ctrl.update_a_SN2_1P5)
    .delete(ctrl.delete_a_SN2_1P5);
  //SN2_1P5_1    
  app.route('/api/SN2_1P5_1s')
    .get(ctrl.read_all_SN2_1P5_1);
  app.route('/api/SN2_1P5_1/')
    .post(ctrl.create_a_SN2_1P5_1);
  app.route('/api/SN2_1P5_1/:id')
    .get(ctrl.read_a_SN2_1P5_1)
    .put(ctrl.update_a_SN2_1P5_1)
    .delete(ctrl.delete_a_SN2_1P5_1);
  //SN2_1P5_2
  app.route('/api/SN2_1P5_2s')
    .get(ctrl.read_all_SN2_1P5_2);
  app.route('/api/SN2_1P5_2/')
    .post(ctrl.create_a_SN2_1P5_2);
  app.route('/api/SN2_1P5_2/:id')
    .get(ctrl.read_a_SN2_1P5_2)
    .put(ctrl.update_a_SN2_1P5_2)
    .delete(ctrl.delete_a_SN2_1P5_2);
  //SN2_1P5_3   
  app.route('/api/SN2_1P5_3s')
    .get(ctrl.read_all_SN2_1P5_3);
  app.route('/api/SN2_1P5_3/')
    .post(ctrl.create_a_SN2_1P5_3);
  app.route('/api/SN2_1P5_3/:id')
    .get(ctrl.read_a_SN2_1P5_3)
    .put(ctrl.update_a_SN2_1P5_3)
    .delete(ctrl.delete_a_SN2_1P5_3);
  //SN2_1P5_4     
  app.route('/api/SN2_1P5_4s')
    .get(ctrl.read_all_SN2_1P5_4);
  app.route('/api/SN2_1P5_4/')
    .post(ctrl.create_a_SN2_1P5_4);
  app.route('/api/SN2_1P5_4/:id')
    .get(ctrl.read_a_SN2_1P5_4)
    .put(ctrl.update_a_SN2_1P5_4)
    .delete(ctrl.delete_a_SN2_1P5_4);
  //SN2_1P5_5       
  app.route('/api/SN2_1P5_5s')
    .get(ctrl.read_all_SN2_1P5_5);
  app.route('/api/SN2_1P5_5/')
    .post(ctrl.create_a_SN2_1P5_5);
  app.route('/api/SN2_1P5_5/:id')
    .get(ctrl.read_a_SN2_1P5_5)
    .put(ctrl.update_a_SN2_1P5_5)
    .delete(ctrl.delete_a_SN2_1P5_5);
  //SN2_1P5_6  
  app.route('/api/SN2_1P5_6s')
    .get(ctrl.read_all_SN2_1P5_6);
  app.route('/api/SN2_1P5_6/')
    .post(ctrl.create_a_SN2_1P5_6);
  app.route('/api/SN2_1P5_6/:id')
    .get(ctrl.read_a_SN2_1P5_6)
    .put(ctrl.update_a_SN2_1P5_6)
    .delete(ctrl.delete_a_SN2_1P5_6);
  //Pool       
  app.route('/api/Pools')
    .get(ctrl.read_all_Pool);
  app.route('/api/Pool/')
    .post(ctrl.create_a_Pool);
  app.route('/api/Pool/:id')
    .get(ctrl.read_a_Pool)
    .put(ctrl.update_a_Pool)
    .delete(ctrl.delete_a_Pool);
  //Pump   
  app.route('/api/Pumps')
    .get(ctrl.read_all_Pump);
  app.route('/api/Pump/')
    .post(ctrl.create_a_Pump);
  app.route('/api/Pump/:id')
    .get(ctrl.read_a_Pump)
    .put(ctrl.update_a_Pump)
    .delete(ctrl.delete_a_Pump);
  //SN2_2P0   
  app.route('/api/SN2_2P0s')
    .get(ctrl.read_all_SN2_2P0);
  app.route('/api/SN2_2P0/')
    .post(ctrl.create_a_SN2_2P0);
  app.route('/api/SN2_2P0/:id')
    .get(ctrl.read_a_SN2_2P0)
    .put(ctrl.update_a_SN2_2P0)
    .delete(ctrl.delete_a_SN2_2P0);
  //SN2_2   
  app.route('/api/SN2_2s')
    .get(ctrl.read_all_SN2_2);
  app.route('/api/SN2_2/')
    .post(ctrl.create_a_SN2_2);
  app.route('/api/SN2_2/:id')
    .get(ctrl.read_a_SN2_2)
    .put(ctrl.update_a_SN2_2)
    .delete(ctrl.delete_a_SN2_2);
  //SN2_2P1_3   
  app.route('/api/SN2_2P1_3s')
    .get(ctrl.read_all_SN2_2P1_3);
  app.route('/api/SN2_2P1_3/')
    .post(ctrl.create_a_SN2_2P1_3);
  app.route('/api/SN2_2P1_3/:id')
    .get(ctrl.read_a_SN2_2P1_3)
    .put(ctrl.update_a_SN2_2P1_3)
    .delete(ctrl.delete_a_SN2_2P1_3);
  //SN2_2P1_5   
  app.route('/api/SN2_2P1_5s')
    .get(ctrl.read_all_SN2_2P1_5);
  app.route('/api/SN2_2P1_5/')
    .post(ctrl.create_a_SN2_2P1_5);
  app.route('/api/SN2_2P1_5/:id')
    .get(ctrl.read_a_SN2_2P1_5)
    .put(ctrl.update_a_SN2_2P1_5)
    .delete(ctrl.delete_a_SN2_2P1_5);
  //SN2_2P2   
  app.route('/api/SN2_2P2s')
    .get(ctrl.read_all_SN2_2P2);
  app.route('/api/SN2_2P2/')
    .post(ctrl.create_a_SN2_2P2);
  app.route('/api/SN2_2P2/:id')
    .get(ctrl.read_a_SN2_2P2)
    .put(ctrl.update_a_SN2_2P2)
    .delete(ctrl.delete_a_SN2_2P2);




  //page
  app.route('/')
    .get(ctrl.getHomePage);


  app.route('/ea')
    .get(ctrl.get_all_ea);

  app.route('/user')
    .get(ctrl.get_all_user);

  app.route('/insert_user')
    .post(ctrl.create_a_user);

  app.route('/update_user')
    .put(ctrl.update_a_user);

  app.route('/delete_user')
    .delete(ctrl.delete_a_user);

  app.route('/insert_ea')
    .post(ctrl.create_a_area);

  app.route('/update_ea')
    .put(ctrl.update_a_area);

  app.route('/delete_ea')
    .delete(ctrl.delete_a_area);

  app.route('/ea_cwt')
    .get(ctrl.getEaByCWT);

  app.route('/ea_fs')
    .get(ctrl.getEaByFS);

  app.route('/ea_fi')
    .get(ctrl.getEaByFI);

  app.route('/userlower_role')
    .get(ctrl.getUserLowerRole);

  app.route('/user_by_area')
    .get(ctrl.getUserByArea);

  app.route('/userlower_role_area')
    .get(ctrl.getUserLowerRoleArea);

  app.route('/user_role_area')
    .get(ctrl.getUserRoleArea);

  app.route('/user_id_pwd')
    .post(ctrl.getUserByIDPWD);

  app.route('/user_id')
    .post(ctrl.getUserByID);

  app.route('/insert_tablet')
    .post(ctrl.create_a_tablet);

  app.route('/update_tablet')
    .put(ctrl.update_a_tablet);

  app.route('/delete_tablet')
    .delete(ctrl.delete_a_tablet);

  app.route('/tablet')
    .get(ctrl.read_all_tablet);

  app.route('/insert_sn22')
    .post(ctrl.create_a_SN2_2);



};




