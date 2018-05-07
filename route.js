module.exports = function (app) {
  let ctrl = require('./control/users')


  //user
  app.route('/user')
    .get(ctrl.read_all_user);
  app.route('/insert_user')
    .get(ctrl.read_a_user);
  app.route('/update_user')
    .post(ctrl.update_a_user);
  app.route('/delete_user')
    .delete(ctrl.delete_a_user);
  app.route('/api/user/')
    .put(ctrl.create_a_user)

  //area
  let area = require('./control/areas')
  app.route('/ea')
    .get(area.read_all_area);
  app.route('/insert_ea')
    .put(area.create_a_area);
  app.route('/api/area/:id')
    .get(area.read_a_area);
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

  //progress
  let progress = require('./control/progress')
  app.route('/api/progresss')
    .get(progress.read_all_progress);
  app.route('/api/progress/')
    .put(progress.create_a_progress);
  app.route('/api/progress/:id')
    .get(progress.read_a_progress)
    .post(progress.update_a_progress)
    .delete(progress.delete_a_progress);

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

  app.route('/insert_sn22')
    .put(SN2_2.create_a_SN2_2);



};




