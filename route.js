module.exports = function (app) {
  let user = require('./control/users')


  //user
  app.route('/user')
    .get(user.read_all_user);
  app.route('/insert_user')
    .put(user.create_a_user);
  app.route('/update_user')
    .post(user.update_a_user);
  app.route('/delete_user')
    .delete(user.delete_a_user);

  //area
  let area = require('./control/areas')
  app.route('/ea')
    .get(area.read_all_area);
  app.route('/insert_ea')
    .put(area.create_a_area);
  app.route('/update_ea')
    .post(area.update_a_area);
  app.route('/delete_ea')
    .delete(area.delete_a_area);

  //tablet
  let tablet = require('./control/tablets')
  app.route('/tablet')
    .get(tablet.read_all_tablet);
  app.route('/insert_tablet')
    .put(tablet.create_a_tablet);
  app.route('/tabletID')
    .get(tablet.read_a_tablet);
  app.route('/update_tablet')
    .post(tablet.update_a_tablet);
  app.route('/delete_tablet')
    .delete(tablet.delete_a_tablet);
    
  //SN1
  let SN1 = require('./control/SN1/SN1')
  app.route('/sn1')
    .get(SN1.read_all_SN1);
  app.route('/insert_SN1')
    .put(SN1.create_a_SN1);
  app.route('/sn1ID')
    .get(SN1.read_a_SN1);
  app.route('/update_sn1')
    .post(SN1.update_a_SN1);
  app.route('/delete_sn1')
    .delete(SN1.delete_a_SN1);
  app.route('/sn1_fs')
    .get(SN1.getSN1ByFS);
  app.route('/sn1_fi')
    .get(SN1.getSN1ByFI);
  app.route('/sn1_cwt')
    .get(SN1.getSN1ByCWT);
  app.route('/sn1_edit')
    .get(SN1.getSN1EditStatus);


  let SN2_2 = require('./control/SN2_2/SN2_2')
  app.route('/sn22')
    .get(SN2_2.read_all_SN2_2);
  app.route('/insert_SN22')
    .put(SN2_2.create_a_SN2_2);
  app.route('/sn22ID')
    .get(SN2_2.read_a_SN2_2);
  app.route('/update_sn22')
    .post(SN2_2.update_a_SN2_2);
  app.route('/delete_sn22')
    .delete(SN2_2.delete_a_SN2_2);
    app.route('/sn22AreaID')
    .get(SN2_2.getsn22ByAreaId);
    app.route('/sn22_fs')
    .get(SN2_2.getsn22ByFS);
    app.route('/sn22_fi')
    .get(SN2_2.getsn22ByFI);
    app.route('/sn22_cwt')
    .get(SN2_2.getsn22ByCWT);


  app.route('/ea_cwt')
    .get(area.getEaByCWT);

  app.route('/ea_fs')
    .get(area.getEaByFS);

  app.route('/ea_fi')
    .get(area.getEaByFI);

  app.route('/userlower_role')
    .get(user.getUserLowerRole);

  app.route('/user_by_area')
    .get(user.getUserByArea);

  app.route('/userlower_role_area')
    .get(user.getUserLowerRoleArea);

  app.route('/user_role_area')
    .get(user.getUserRoleArea);

  app.route('/user_id_pwd')
    .post(user.getUserByIDPWD);

  app.route('/user_id')
    .post(user.getUserByID);

  app.route('/insert_sn22')
    .put(SN2_2.create_a_SN2_2);



};




