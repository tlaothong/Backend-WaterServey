module.exports = function (app) {
  let ctrl = require('./control/users')
  

  //user
  app.route('/api/users')
    .get(ctrl.read_all_user)
  app.route('/api/user/:id')
    .get(ctrl.read_a_user)
    .put(ctrl.update_a_user)
    .delete(ctrl.delete_a_user);
  app.route('/api/user/')
    .post(ctrl.create_a_user)

  //area
  let area = require('./control/areas')
  app.route('/api/areas')
    .get(area.read_all_area);
  app.route('/api/area/')
    .post(area.create_a_area);
  app.route('/api/area/:id')
    .get(area.read_a_area)
    .put(area.update_a_area)
    .delete(area.delete_a_area);

  //tablet
  let tablet = require('./control/tablets')
  app.route('/api/tablets')
    .get(tablet.read_all_tablet);
  app.route('/api/tablet/')
    .post(tablet.create_a_tablet);
  app.route('/api/tablet/:id')
    .get(tablet.read_a_tablet)
    .put(tablet.update_a_tablet)
    .delete(tablet.delete_a_tablet);

  //progress
  let progress = require('./control/progress')
  app.route('/api/progresss')
    .get(progress.read_all_progress);
  app.route('/api/progress/')
    .post(progress.create_a_progress);
  app.route('/api/progress/:id')
    .get(progress.read_a_progress)
    .put(progress.update_a_progress)
    .delete(progress.delete_a_progress);

  //SN1
  let SN1 = require('./control/SN1/SN1')
  app.route('/api/SN1s')
    .get(SN1.read_all_SN1);
  app.route('/api/SN1/')
    .post(SN1.create_a_SN1);
  app.route('/api/SN1/:id')
    .get(SN1.read_a_SN1)
    .put(SN1.update_a_SN1)
    .delete(SN1.delete_a_SN1);
  //SN1P1
  let SN1P1 = require('./control/SN1/SN1P1')
  app.route('/api/SN1P1s')
    .get(SN1P1.read_all_SN1P1);
  app.route('/api/SN1P1/')
    .post(SN1P1.create_a_SN1P1);
  app.route('/api/SN1P1/:id')
    .get(SN1P1.read_a_SN1P1)
    .put(SN1P1.update_a_SN1P1)
    .delete(SN1P1.delete_a_SN1P1);
  //SN1P2
  let SN1P2 = require('./control/SN1/SN1P2')
  app.route('/api/SN1P2s')
    .get(SN1P2.read_all_SN1P2);
  app.route('/api/SN1P2/')
    .post(SN1P2.create_a_SN1P2);
  app.route('/api/SN1P2/:id')
    .get(SN1P2.read_a_SN1P2)
    .put(SN1P2.update_a_SN1P2)
    .delete(SN1P2.delete_a_SN1P2);
  //SN1P3
  SN1P3 = require('./control/SN1/SN1P3')
  app.route('/api/SN1P3s')
    .get(SN1P3.read_all_SN1P3);
  app.route('/api/SN1P3/')
    .post(SN1P3.create_a_SN1P3);
  app.route('/api/SN1P3/:id')
    .get(SN1P3.read_a_SN1P3)
    .put(SN1P3.update_a_SN1P3)
    .delete(SN1P3.delete_a_SN1P3);
  //SN2_1
  let SN2_1 = require('./control/SN2_1/SN2_1')
  app.route('/api/SN2_1s')
    .get(SN2_1.read_all_SN2_1);
  app.route('/api/SN2_1/')
    .post(SN2_1.create_a_SN2_1);
  app.route('/api/SN2_1/:id')
    .get(SN2_1.read_a_SN2_1)
    .put(SN2_1.update_a_SN2_1)
    .delete(SN2_1.delete_a_SN2_1);
  //SN2_1P1
  let SN2_1P1 = require('./control/SN2_1/SN2_1P1')
  app.route('/api/SN2_1P1s')
    .get(SN2_1P1.read_all_SN2_1P1);
  app.route('/api/SN2_1P1/')
    .post(SN2_1P1.create_a_SN2_1P1);
  app.route('/api/SN2_1P1/:id')
    .get(SN2_1P1.read_a_SN2_1P1)
    .put(SN2_1P1.update_a_SN2_1P1)
    .delete(SN2_1P1.delete_a_SN2_1P1);
  //SN2_1P2
  let SN2_1P2 = require('./control/SN2_1/SN2_1P2')
  app.route('/api/SN2_1P2s')
    .get(SN2_1P2.read_all_SN2_1P2);
  app.route('/api/SN2_1P2/')
    .post(SN2_1P2.create_a_SN2_1P2);
  app.route('/api/SN2_1P2/:id')
    .get(SN2_1P2.read_a_SN2_1P2)
    .put(SN2_1P2.update_a_SN2_1P2)
    .delete(SN2_1P2.delete_a_SN2_1P2);
  //SN2_1P2_1
  let SN2_1P2_1 = require('./control/SN2_1/SN2_1P2_1')
  app.route('/api/SN2_1P2_1s')
    .get(SN2_1P2_1.read_all_SN2_1P2_1);
  app.route('/api/SN2_1P2_1/')
    .post(SN2_1P2_1.create_a_SN2_1P2_1);
  app.route('/api/SN2_1P2_1/:id')
    .get(SN2_1P2_1.read_a_SN2_1P2_1)
    .put(SN2_1P2_1.update_a_SN2_1P2_1)
    .delete(SN2_1P2_1.delete_a_SN2_1P2_1);
  //SN2_1P2_2
  let SN2_1P2_2 = require('./control/SN2_1/SN2_1P2_2')
  app.route('/api/SN2_1P2_2s')
    .get(SN2_1P2_2.read_all_SN2_1P2_2);
  app.route('/api/SN2_1P2_2/')
    .post(SN2_1P2_2.create_a_SN2_1P2_2);
  app.route('/api/SN2_1P2_2/:id')
    .get(SN2_1P2_2.read_a_SN2_1P2_2)
    .put(SN2_1P2_2.update_a_SN2_1P2_2)
    .delete(SN2_1P2_2.delete_a_SN2_1P2_2);
  //SN2_1P2_3
  let SN2_1P2_3 = require('./control/SN2_1/SN2_1P2_3')
  app.route('/api/SN2_1P2_3s')
    .get(SN2_1P2_3.read_all_SN2_1P2_3);
  app.route('/api/SN2_1P2_3/')
    .post(SN2_1P2_3.create_a_SN2_1P2_3);
  app.route('/api/SN2_1P2_3/:id')
    .get(SN2_1P2_3.read_a_SN2_1P2_3)
    .put(SN2_1P2_3.update_a_SN2_1P2_3)
    .delete(SN2_1P2_3.delete_a_SN2_1P2_3);
  //SN2_1P2_4
  let SN2_1P2_4 = require('./control/SN2_1/SN2_1P2_4')
  app.route('/api/SN2_1P2_4s')
    .get(SN2_1P2_4.read_all_SN2_1P2_4);
  app.route('/api/SN2_1P2_4/')
    .post(SN2_1P2_4.create_a_SN2_1P2_4);
  app.route('/api/SN2_1P2_4/:id')
    .get(SN2_1P2_4.read_a_SN2_1P2_4)
    .put(SN2_1P2_4.update_a_SN2_1P2_4)
    .delete(SN2_1P2_4.delete_a_SN2_1P2_4);
  //SN2_1P2_5
  let SN2_1P2_5 = require('./control/SN2_1/SN2_1P2_5')
  app.route('/api/SN2_1P2_5s')
    .get(SN2_1P2_5.read_all_SN2_1P2_5);
  app.route('/api/SN2_1P2_5/')
    .post(SN2_1P2_5.create_a_SN2_1P2_5);
  app.route('/api/SN2_1P2_5/:id')
    .get(SN2_1P2_5.read_a_SN2_1P2_5)
    .put(SN2_1P2_5.update_a_SN2_1P2_5)
    .delete(SN2_1P2_5.delete_a_SN2_1P2_5);
  //SN2_1P2_6      
  let SN2_1P2_6 = require('./control/SN2_1/SN2_1P2_6')
  app.route('/api/SN2_1P2_6s')
    .get(SN2_1P2_6.read_all_SN2_1P2_6);
  app.route('/api/SN2_1P2_6/')
    .post(SN2_1P2_6.create_a_SN2_1P2_6);
  app.route('/api/SN2_1P2_6/:id')
    .get(SN2_1P2_6.read_a_SN2_1P2_6)
    .put(SN2_1P2_6.update_a_SN2_1P2_6)
    .delete(SN2_1P2_6.delete_a_SN2_1P2_6);
  //SN2_1P2_7        
  let SN2_1P2_7 = require('./control/SN2_1/SN2_1P2_7')
  app.route('/api/SN2_1P2_7s')
    .get(SN2_1P2_7.read_all_SN2_1P2_7);
  app.route('/api/SN2_1P2_7/')
    .post(SN2_1P2_7.create_a_SN2_1P2_7);
  app.route('/api/SN2_1P2_7/:id')
    .get(SN2_1P2_7.read_a_SN2_1P2_7)
    .put(SN2_1P2_7.update_a_SN2_1P2_7)
    .delete(SN2_1P2_7.delete_a_SN2_1P2_7);
  //SN2_1P2_9_1        
  let SN2_1P2_9_1 = require('./control/SN2_1/SN2_1P2_9_1')
  app.route('/api/SN2_1P2_9_1s')
    .get(SN2_1P2_9_1.read_all_SN2_1P2_9_1);
  app.route('/api/SN2_1P2_9_1/')
    .post(SN2_1P2_9_1.create_a_SN2_1P2_9_1);
  app.route('/api/SN2_1P2_9_1/:id')
    .get(SN2_1P2_9_1.read_a_SN2_1P2_9_1)
    .put(SN2_1P2_9_1.update_a_SN2_1P2_9_1)
    .delete(SN2_1P2_9_1.delete_a_SN2_1P2_9_1);
  //SN2_1P2_9_3 
  let SN2_1P2_9_3 = require('./control/SN2_1/SN2_1P2_9_3')
  app.route('/api/SN2_1P2_9_3s')
    .get(SN2_1P2_9_3.read_all_SN2_1P2_9_3);
  app.route('/api/SN2_1P2_9_3/')
    .post(SN2_1P2_9_3.create_a_SN2_1P2_9_3);
  app.route('/api/SN2_1P2_9_3/:id')
    .get(SN2_1P2_9_3.read_a_SN2_1P2_9_3)
    .put(SN2_1P2_9_3.update_a_SN2_1P2_9_3)
    .delete(SN2_1P2_9_3.delete_a_SN2_1P2_9_3);
  //SN2_1P2_9_4    
  let SN2_1P2_9_4 = require('./control/SN2_1/SN2_1P2_9_4')
  app.route('/api/SN2_1P2_9_4s')
    .get(SN2_1P2_9_4.read_all_SN2_1P2_9_4);
  app.route('/api/SN2_1P2_9_4/')
    .post(SN2_1P2_9_4.create_a_SN2_1P2_9_4);
  app.route('/api/SN2_1P2_9_4/:id')
    .get(SN2_1P2_9_4.read_a_SN2_1P2_9_4)
    .put(SN2_1P2_9_4.update_a_SN2_1P2_9_4)
    .delete(SN2_1P2_9_4.delete_a_SN2_1P2_9_4);
  //SN2_1P3
  let SN2_1P3 = require('./control/SN2_1/SN2_1P3')
  app.route('/api/SN2_1P3s')
    .get(SN2_1P3.read_all_SN2_1P3);
  app.route('/api/SN2_1P3/')
    .post(SN2_1P3.create_a_SN2_1P3);
  app.route('/api/SN2_1P3/:id')
    .get(SN2_1P3.read_a_SN2_1P3)
    .put(SN2_1P3.update_a_SN2_1P3)
    .delete(SN2_1P3.delete_a_SN2_1P3);
  //SN2_1P4   
  let SN2_1P4 = require('./control/SN2_1/SN2_1P4')
  app.route('/api/SN2_1P4s')
    .get(SN2_1P4.read_all_SN2_1P4);
  app.route('/api/SN2_1P4/')
    .post(SN2_1P4.create_a_SN2_1P4);
  app.route('/api/SN2_1P4/:id')
    .get(SN2_1P4.read_a_SN2_1P4)
    .put(SN2_1P4.update_a_SN2_1P4)
    .delete(SN2_1P4.delete_a_SN2_1P4);
  //SN2_1P5   
  let SN2_1P5 = require('./control/SN2_1/SN2_1P5')
  app.route('/api/SN2_1P5s')
    .get(SN2_1P5.read_all_SN2_1P5);
  app.route('/api/SN2_1P5/')
    .post(SN2_1P5.create_a_SN2_1P5);
  app.route('/api/SN2_1P5/:id')
    .get(SN2_1P5.read_a_SN2_1P5)
    .put(SN2_1P5.update_a_SN2_1P5)
    .delete(SN2_1P5.delete_a_SN2_1P5);
  //SN2_1P5_1    
  let SN2_1P5_1 = require('./control/SN2_1/SN2_1P5_1')
  app.route('/api/SN2_1P5_1s')
    .get(SN2_1P5_1.read_all_SN2_1P5_1);
  app.route('/api/SN2_1P5_1/')
    .post(SN2_1P5_1.create_a_SN2_1P5_1);
  app.route('/api/SN2_1P5_1/:id')
    .get(SN2_1P5_1.read_a_SN2_1P5_1)
    .put(SN2_1P5_1.update_a_SN2_1P5_1)
    .delete(SN2_1P5_1.delete_a_SN2_1P5_1);
  //SN2_1P5_2
  let SN2_1P5_2 = require('./control/SN2_1/SN2_1P5_2')
  app.route('/api/SN2_1P5_2s')
    .get(SN2_1P5_2.read_all_SN2_1P5_2);
  app.route('/api/SN2_1P5_2/')
    .post(SN2_1P5_2.create_a_SN2_1P5_2);
  app.route('/api/SN2_1P5_2/:id')
    .get(SN2_1P5_2.read_a_SN2_1P5_2)
    .put(SN2_1P5_2.update_a_SN2_1P5_2)
    .delete(SN2_1P5_2.delete_a_SN2_1P5_2);
  //SN2_1P5_3   
  let SN2_1P5_3 = require('./control/SN2_1/SN2_1P5_3')
  app.route('/api/SN2_1P5_3s')
    .get(SN2_1P5_3.read_all_SN2_1P5_3);
  app.route('/api/SN2_1P5_3/')
    .post(SN2_1P5_3.create_a_SN2_1P5_3);
  app.route('/api/SN2_1P5_3/:id')
    .get(SN2_1P5_3.read_a_SN2_1P5_3)
    .put(SN2_1P5_3.update_a_SN2_1P5_3)
    .delete(SN2_1P5_3.delete_a_SN2_1P5_3);
  //SN2_1P5_4     
  let SN2_1P5_4 = require('./control/SN2_1/SN2_1P5_4')
  app.route('/api/SN2_1P5_4s')
    .get(SN2_1P5_4.read_all_SN2_1P5_4);
  app.route('/api/SN2_1P5_4/')
    .post(SN2_1P5_4.create_a_SN2_1P5_4);
  app.route('/api/SN2_1P5_4/:id')
    .get(SN2_1P5_4.read_a_SN2_1P5_4)
    .put(SN2_1P5_4.update_a_SN2_1P5_4)
    .delete(SN2_1P5_4.delete_a_SN2_1P5_4);
  //SN2_1P5_5
  let SN2_1P5_5 = require('./control/SN2_1/SN2_1P5_5') 
  app.route('/api/SN2_1P5_5s')
    .get(SN2_1P5_5.read_all_SN2_1P5_5);
  app.route('/api/SN2_1P5_5/')
    .post(SN2_1P5_5.create_a_SN2_1P5_5);
  app.route('/api/SN2_1P5_5/:id')
    .get(SN2_1P5_5.read_a_SN2_1P5_5)
    .put(SN2_1P5_5.update_a_SN2_1P5_5)
    .delete(SN2_1P5_5.delete_a_SN2_1P5_5);
  //SN2_1P5_6  
  let SN2_1P5_6 = require('./control/SN2_1/SN2_1P5_6')
  app.route('/api/SN2_1P5_6s')
    .get(SN2_1P5_6.read_all_SN2_1P5_6);
  app.route('/api/SN2_1P5_6/')
    .post(SN2_1P5_6.create_a_SN2_1P5_6);
  app.route('/api/SN2_1P5_6/:id')
    .get(SN2_1P5_6.read_a_SN2_1P5_6)
    .put(SN2_1P5_6.update_a_SN2_1P5_6)
    .delete(SN2_1P5_6.delete_a_SN2_1P5_6);

  let SN2_1P5_7 = require('./control/SN2_1/SN2_1P5_7')
  app.route('/api/SN2_1P5_7s')
    .get(SN2_1P5_7.read_all_SN2_1P5_7);
  app.route('/api/SN2_1P5_6/')
    .post(SN2_1P5_7.create_a_SN2_1P5_7);
  app.route('/api/SN2_1P5_6/:id')
    .get(SN2_1P5_7.read_a_SN2_1P5_7)
    .put(SN2_1P5_7.update_a_SN2_1P5_7)
    .delete(SN2_1P5_7.delete_a_SN2_1P5_7);
  //Pool       
  let Pool = require('./control/SN2_1/pool')
  app.route('/api/Pools')
    .get(Pool.read_all_Pool);
  app.route('/api/Pool/')
    .post(Pool.create_a_Pool);
  app.route('/api/Pool/:id')
    .get(Pool.read_a_Pool)
    .put(Pool.update_a_Pool)
    .delete(Pool.delete_a_Pool);
  //Pump   
  let Pump = require('./control/SN2_1/pump')
  app.route('/api/Pumps')
    .get(Pump.read_all_Pump);
  app.route('/api/Pump/')
    .post(Pump.create_a_Pump);
  app.route('/api/Pump/:id')
    .get(Pump.read_a_Pump)
    .put(Pump.update_a_Pump)
    .delete(Pump.delete_a_Pump);
  //SN2_2P0   
  let SN2_2P0 = require('./control/SN2_2/SN2_2P0')
  app.route('/api/SN2_2P0s')
    .get(SN2_2P0.read_all_SN2_2P0);
  app.route('/api/SN2_2P0/')
    .post(SN2_2P0.create_a_SN2_2P0);
  app.route('/api/SN2_2P0/:id')
    .get(SN2_2P0.read_a_SN2_2P0)
    .put(SN2_2P0.update_a_SN2_2P0)
    .delete(SN2_2P0.delete_a_SN2_2P0);
  //SN2_2   
  let SN2_2 = require('./control/SN2_2/SN2_2')
  app.route('/api/SN2_2s')
    .get(SN2_2.read_all_SN2_2);
  app.route('/api/SN2_2/')
    .post(SN2_2.create_a_SN2_2);
  app.route('/api/SN2_2/:id')
    .get(SN2_2.read_a_SN2_2)
    .put(SN2_2.update_a_SN2_2)
    .delete(SN2_2.delete_a_SN2_2);
  //SN2_2P1_3   
  let SN2_2P1_3 = require('./control/SN2_2/SN2_2P1_3')
  app.route('/api/SN2_2P1_3s')
    .get(SN2_2P1_3.read_all_SN2_2P1_3);
  app.route('/api/SN2_2P1_3/')
    .post(SN2_2P1_3.create_a_SN2_2P1_3);
  app.route('/api/SN2_2P1_3/:id')
    .get(SN2_2P1_3.read_a_SN2_2P1_3)
    .put(SN2_2P1_3.update_a_SN2_2P1_3)
    .delete(SN2_2P1_3.delete_a_SN2_2P1_3);
  //SN2_2P1_5   
  let SN2_2P1_5 = require('./control/SN2_2/SN2_2P1_5')
  app.route('/api/SN2_2P1_5s')
    .get(SN2_2P1_5.read_all_SN2_2P1_5);
  app.route('/api/SN2_2P1_5/')
    .post(SN2_2P1_5.create_a_SN2_2P1_5);
  app.route('/api/SN2_2P1_5/:id')
    .get(SN2_2P1_5.read_a_SN2_2P1_5)
    .put(SN2_2P1_5.update_a_SN2_2P1_5)
    .delete(SN2_2P1_5.delete_a_SN2_2P1_5);
  //SN2_2P2   
  let SN2_2P2 = require('./control/SN2_2/SN2_2P2')
  app.route('/api/SN2_2P2s')
    .get(SN2_2P2.read_all_SN2_2P2);
  app.route('/api/SN2_2P2/')
    .post(SN2_2P2.create_a_SN2_2P2);
  app.route('/api/SN2_2P2/:id')
    .get(SN2_2P2.read_a_SN2_2P2)
    .put(SN2_2P2.update_a_SN2_2P2)
    .delete(SN2_2P2.delete_a_SN2_2P2);


  app.route('/ea')
    .get(area.get_all_ea);

  app.route('/user')
    .get(ctrl.get_all_user);

  app.route('/insert_user')
    .post(ctrl.create_a_user);

  app.route('/update_user')
    .put(ctrl.update_a_user);

  app.route('/delete_user')
    .delete(ctrl.delete_a_user);

  app.route('/insert_ea')
    .post(area.create_a_area);

  app.route('/update_ea')
    .put(area.update_a_area);

  app.route('/delete_ea')
    .delete(area.delete_a_area);

  app.route('/ea_cwt')
    .get(area.getEaByCWT);

  app.route('/ea_fs')
    .get(area.getEaByFS);

  app.route('/ea_fi')
    .get(area.getEaByFI);

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
    .post(tablet.create_a_tablet);

  app.route('/update_tablet')
    .put(tablet.update_a_tablet);

  app.route('/delete_tablet')
    .delete(tablet.delete_a_tablet);

  app.route('/tablet')
    .get(tablet.read_all_tablet);

  app.route('/insert_sn22')
    .post(SN2_2.create_a_SN2_2);



};




