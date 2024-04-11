import type { Sequelize } from "sequelize";
import { DATABASECHANGELOG as _DATABASECHANGELOG } from "./DATABASECHANGELOG";
import type { DATABASECHANGELOGAttributes, DATABASECHANGELOGCreationAttributes } from "./DATABASECHANGELOG";
import { DATABASECHANGELOGLOCK as _DATABASECHANGELOGLOCK } from "./DATABASECHANGELOGLOCK";
import type { DATABASECHANGELOGLOCKAttributes, DATABASECHANGELOGLOCKCreationAttributes } from "./DATABASECHANGELOGLOCK";
import { SequelizeMeta as _SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";
import { affiliation as _affiliation } from "./affiliation";
import type { affiliationAttributes, affiliationCreationAttributes } from "./affiliation";
import { album as _album } from "./album";
import type { albumAttributes, albumCreationAttributes } from "./album";
import { album_feedback as _album_feedback } from "./album_feedback";
import type { album_feedbackAttributes, album_feedbackCreationAttributes } from "./album_feedback";
import { album_images as _album_images } from "./album_images";
import type { album_imagesAttributes, album_imagesCreationAttributes } from "./album_images";
import { album_rating as _album_rating } from "./album_rating";
import type { album_ratingAttributes, album_ratingCreationAttributes } from "./album_rating";
import { application_event as _application_event } from "./application_event";
import type { application_eventAttributes, application_eventCreationAttributes } from "./application_event";
import { avatar as _avatar } from "./avatar";
import type { avatarAttributes, avatarCreationAttributes } from "./avatar";
import { bid as _bid } from "./bid";
import type { bidAttributes, bidCreationAttributes } from "./bid";
import { billing_details as _billing_details } from "./billing_details";
import type { billing_detailsAttributes, billing_detailsCreationAttributes } from "./billing_details";
import { cart_con_option as _cart_con_option } from "./cart_con_option";
import type { cart_con_optionAttributes, cart_con_optionCreationAttributes } from "./cart_con_option";
import { category as _category } from "./category";
import type { categoryAttributes, categoryCreationAttributes } from "./category";
import { credit_card as _credit_card } from "./credit_card";
import type { credit_cardAttributes, credit_cardCreationAttributes } from "./credit_card";
import { ent_address as _ent_address } from "./ent_address";
import type { ent_addressAttributes, ent_addressCreationAttributes } from "./ent_address";
import { ent_bill_add as _ent_bill_add } from "./ent_bill_add";
import type { ent_bill_addAttributes, ent_bill_addCreationAttributes } from "./ent_bill_add";
import { ent_contact as _ent_contact } from "./ent_contact";
import type { ent_contactAttributes, ent_contactCreationAttributes } from "./ent_contact";
import { ent_loc as _ent_loc } from "./ent_loc";
import type { ent_locAttributes, ent_locCreationAttributes } from "./ent_loc";
import { ent_order_point as _ent_order_point } from "./ent_order_point";
import type { ent_order_pointAttributes, ent_order_pointCreationAttributes } from "./ent_order_point";
import { ent_org as _ent_org } from "./ent_org";
import type { ent_orgAttributes, ent_orgCreationAttributes } from "./ent_org";
import { evt_accesscode as _evt_accesscode } from "./evt_accesscode";
import type { evt_accesscodeAttributes, evt_accesscodeCreationAttributes } from "./evt_accesscode";
import { evt_att_add as _evt_att_add } from "./evt_att_add";
import type { evt_att_addAttributes, evt_att_addCreationAttributes } from "./evt_att_add";
import { evt_att_ans as _evt_att_ans } from "./evt_att_ans";
import type { evt_att_ansAttributes, evt_att_ansCreationAttributes } from "./evt_att_ans";
import { evt_att_profile as _evt_att_profile } from "./evt_att_profile";
import type { evt_att_profileAttributes, evt_att_profileCreationAttributes } from "./evt_att_profile";
import { evt_att_team as _evt_att_team } from "./evt_att_team";
import type { evt_att_teamAttributes, evt_att_teamCreationAttributes } from "./evt_att_team";
import { evt_attendee as _evt_attendee } from "./evt_attendee";
import type { evt_attendeeAttributes, evt_attendeeCreationAttributes } from "./evt_attendee";
import { evt_barcode as _evt_barcode } from "./evt_barcode";
import type { evt_barcodeAttributes, evt_barcodeCreationAttributes } from "./evt_barcode";
import { evt_discount as _evt_discount } from "./evt_discount";
import type { evt_discountAttributes, evt_discountCreationAttributes } from "./evt_discount";
import { evt_organizer as _evt_organizer } from "./evt_organizer";
import type { evt_organizerAttributes, evt_organizerCreationAttributes } from "./evt_organizer";
import { evt_prog_cat as _evt_prog_cat } from "./evt_prog_cat";
import type { evt_prog_catAttributes, evt_prog_catCreationAttributes } from "./evt_prog_cat";
import { evt_prog_fmt as _evt_prog_fmt } from "./evt_prog_fmt";
import type { evt_prog_fmtAttributes, evt_prog_fmtCreationAttributes } from "./evt_prog_fmt";
import { evt_program as _evt_program } from "./evt_program";
import type { evt_programAttributes, evt_programCreationAttributes } from "./evt_program";
import { evt_schedule as _evt_schedule } from "./evt_schedule";
import type { evt_scheduleAttributes, evt_scheduleCreationAttributes } from "./evt_schedule";
import { evt_tkt_class as _evt_tkt_class } from "./evt_tkt_class";
import type { evt_tkt_classAttributes, evt_tkt_classCreationAttributes } from "./evt_tkt_class";
import { evt_venue as _evt_venue } from "./evt_venue";
import type { evt_venueAttributes, evt_venueCreationAttributes } from "./evt_venue";
import { hibernate_sequence as _hibernate_sequence } from "./hibernate_sequence";
import type { hibernate_sequenceAttributes, hibernate_sequenceCreationAttributes } from "./hibernate_sequence";
import { image as _image } from "./image";
import type { imageAttributes, imageCreationAttributes } from "./image";
import { image_comment as _image_comment } from "./image_comment";
import type { image_commentAttributes, image_commentCreationAttributes } from "./image_comment";
import { image_feedback as _image_feedback } from "./image_feedback";
import type { image_feedbackAttributes, image_feedbackCreationAttributes } from "./image_feedback";
import { image_likers as _image_likers } from "./image_likers";
import type { image_likersAttributes, image_likersCreationAttributes } from "./image_likers";
import { image_rating as _image_rating } from "./image_rating";
import type { image_ratingAttributes, image_ratingCreationAttributes } from "./image_rating";
import { image_tags as _image_tags } from "./image_tags";
import type { image_tagsAttributes, image_tagsCreationAttributes } from "./image_tags";
import { image_viewers as _image_viewers } from "./image_viewers";
import type { image_viewersAttributes, image_viewersCreationAttributes } from "./image_viewers";
import { item_bid as _item_bid } from "./item_bid";
import type { item_bidAttributes, item_bidCreationAttributes } from "./item_bid";
import { item_bid_bids as _item_bid_bids } from "./item_bid_bids";
import type { item_bid_bidsAttributes, item_bid_bidsCreationAttributes } from "./item_bid_bids";
import { item_bid_shipment as _item_bid_shipment } from "./item_bid_shipment";
import type { item_bid_shipmentAttributes, item_bid_shipmentCreationAttributes } from "./item_bid_shipment";
import { item_license as _item_license } from "./item_license";
import type { item_licenseAttributes, item_licenseCreationAttributes } from "./item_license";
import { master_type as _master_type } from "./master_type";
import type { master_typeAttributes, master_typeCreationAttributes } from "./master_type";
import { master_value as _master_value } from "./master_value";
import type { master_valueAttributes, master_valueCreationAttributes } from "./master_value";
import { medium_users as _medium_users } from "./medium_users";
import type { medium_usersAttributes, medium_usersCreationAttributes } from "./medium_users";
import { password_reset_token as _password_reset_token } from "./password_reset_token";
import type { password_reset_tokenAttributes, password_reset_tokenCreationAttributes } from "./password_reset_token";
import { pay_credit_card as _pay_credit_card } from "./pay_credit_card";
import type { pay_credit_cardAttributes, pay_credit_cardCreationAttributes } from "./pay_credit_card";
import { pay_payment as _pay_payment } from "./pay_payment";
import type { pay_paymentAttributes, pay_paymentCreationAttributes } from "./pay_payment";
import { perm_activity as _perm_activity } from "./perm_activity";
import type { perm_activityAttributes, perm_activityCreationAttributes } from "./perm_activity";
import { perm_client as _perm_client } from "./perm_client";
import type { perm_clientAttributes, perm_clientCreationAttributes } from "./perm_client";
import { perm_oauth_code as _perm_oauth_code } from "./perm_oauth_code";
import type { perm_oauth_codeAttributes, perm_oauth_codeCreationAttributes } from "./perm_oauth_code";
import { perm_oauth_token as _perm_oauth_token } from "./perm_oauth_token";
import type { perm_oauth_tokenAttributes, perm_oauth_tokenCreationAttributes } from "./perm_oauth_token";
import { perm_role as _perm_role } from "./perm_role";
import type { perm_roleAttributes, perm_roleCreationAttributes } from "./perm_role";
import { pgm_answers as _pgm_answers } from "./pgm_answers";
import type { pgm_answersAttributes, pgm_answersCreationAttributes } from "./pgm_answers";
import { pgm_judge as _pgm_judge } from "./pgm_judge";
import type { pgm_judgeAttributes, pgm_judgeCreationAttributes } from "./pgm_judge";
import { pgm_quest as _pgm_quest } from "./pgm_quest";
import type { pgm_questAttributes, pgm_questCreationAttributes } from "./pgm_quest";
import { pgm_rating as _pgm_rating } from "./pgm_rating";
import type { pgm_ratingAttributes, pgm_ratingCreationAttributes } from "./pgm_rating";
import { pgm_refs as _pgm_refs } from "./pgm_refs";
import type { pgm_refsAttributes, pgm_refsCreationAttributes } from "./pgm_refs";
import { pgm_submission as _pgm_submission } from "./pgm_submission";
import type { pgm_submissionAttributes, pgm_submissionCreationAttributes } from "./pgm_submission";
import { role_activities as _role_activities } from "./role_activities";
import type { role_activitiesAttributes, role_activitiesCreationAttributes } from "./role_activities";
import { sch_class as _sch_class } from "./sch_class";
import type { sch_classAttributes, sch_classCreationAttributes } from "./sch_class";
import { sch_course as _sch_course } from "./sch_course";
import type { sch_courseAttributes, sch_courseCreationAttributes } from "./sch_course";
import { sch_dept as _sch_dept } from "./sch_dept";
import type { sch_deptAttributes, sch_deptCreationAttributes } from "./sch_dept";
import { sch_enroll as _sch_enroll } from "./sch_enroll";
import type { sch_enrollAttributes, sch_enrollCreationAttributes } from "./sch_enroll";
import { sch_instructor as _sch_instructor } from "./sch_instructor";
import type { sch_instructorAttributes, sch_instructorCreationAttributes } from "./sch_instructor";
import { sch_school as _sch_school } from "./sch_school";
import type { sch_schoolAttributes, sch_schoolCreationAttributes } from "./sch_school";
import { sch_student as _sch_student } from "./sch_student";
import type { sch_studentAttributes, sch_studentCreationAttributes } from "./sch_student";
import { schedule_recurrence as _schedule_recurrence } from "./schedule_recurrence";
import type { schedule_recurrenceAttributes, schedule_recurrenceCreationAttributes } from "./schedule_recurrence";
import { shipment as _shipment } from "./shipment";
import type { shipmentAttributes, shipmentCreationAttributes } from "./shipment";
import { shipping_details as _shipping_details } from "./shipping_details";
import type { shipping_detailsAttributes, shipping_detailsCreationAttributes } from "./shipping_details";
import { stu_class as _stu_class } from "./stu_class";
import type { stu_classAttributes, stu_classCreationAttributes } from "./stu_class";
import { stu_list as _stu_list } from "./stu_list";
import type { stu_listAttributes, stu_listCreationAttributes } from "./stu_list";
import { stu_receipt as _stu_receipt } from "./stu_receipt";
import type { stu_receiptAttributes, stu_receiptCreationAttributes } from "./stu_receipt";
import { stu_regist as _stu_regist } from "./stu_regist";
import type { stu_registAttributes, stu_registCreationAttributes } from "./stu_regist";
import { test_ADDRESSES as _test_ADDRESSES } from "./test_ADDRESSES";
import type { test_ADDRESSESAttributes, test_ADDRESSESCreationAttributes } from "./test_ADDRESSES";
import { test_USERS as _test_USERS } from "./test_USERS";
import type { test_USERSAttributes, test_USERSCreationAttributes } from "./test_USERS";
import { time_line as _time_line } from "./time_line";
import type { time_lineAttributes, time_lineCreationAttributes } from "./time_line";
import { type as _type } from "./type";
import type { typeAttributes, typeCreationAttributes } from "./type";
import { upload as _upload } from "./upload";
import type { uploadAttributes, uploadCreationAttributes } from "./upload";
import { user as _user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";
import { user_biography as _user_biography } from "./user_biography";
import type { user_biographyAttributes, user_biographyCreationAttributes } from "./user_biography";
import { user_biography_affiliations as _user_biography_affiliations } from "./user_biography_affiliations";
import type { user_biography_affiliationsAttributes, user_biography_affiliationsCreationAttributes } from "./user_biography_affiliations";
import { user_biography_awards_and_honors as _user_biography_awards_and_honors } from "./user_biography_awards_and_honors";
import type { user_biography_awards_and_honorsAttributes, user_biography_awards_and_honorsCreationAttributes } from "./user_biography_awards_and_honors";
import { user_biography_education as _user_biography_education } from "./user_biography_education";
import type { user_biography_educationAttributes, user_biography_educationCreationAttributes } from "./user_biography_education";
import { user_biography_exhibitions as _user_biography_exhibitions } from "./user_biography_exhibitions";
import type { user_biography_exhibitionsAttributes, user_biography_exhibitionsCreationAttributes } from "./user_biography_exhibitions";
import { user_biography_publications as _user_biography_publications } from "./user_biography_publications";
import type { user_biography_publicationsAttributes, user_biography_publicationsCreationAttributes } from "./user_biography_publications";
import { user_friends as _user_friends } from "./user_friends";
import type { user_friendsAttributes, user_friendsCreationAttributes } from "./user_friends";
import { user_roles as _user_roles } from "./user_roles";
import type { user_rolesAttributes, user_rolesCreationAttributes } from "./user_roles";
import { video as _video } from "./video";
import type { videoAttributes, videoCreationAttributes } from "./video";
import { video_tags as _video_tags } from "./video_tags";
import type { video_tagsAttributes, video_tagsCreationAttributes } from "./video_tags";
import { video_viewers as _video_viewers } from "./video_viewers";
import type { video_viewersAttributes, video_viewersCreationAttributes } from "./video_viewers";

export {
  _DATABASECHANGELOG as DATABASECHANGELOG,
  _DATABASECHANGELOGLOCK as DATABASECHANGELOGLOCK,
  _SequelizeMeta as SequelizeMeta,
  _affiliation as affiliation,
  _album as album,
  _album_feedback as album_feedback,
  _album_images as album_images,
  _album_rating as album_rating,
  _application_event as application_event,
  _avatar as avatar,
  _bid as bid,
  _billing_details as billing_details,
  _cart_con_option as cart_con_option,
  _category as category,
  _credit_card as credit_card,
  _ent_address as ent_address,
  _ent_bill_add as ent_bill_add,
  _ent_contact as ent_contact,
  _ent_loc as ent_loc,
  _ent_order_point as ent_order_point,
  _ent_org as ent_org,
  _evt_accesscode as evt_accesscode,
  _evt_att_add as evt_att_add,
  _evt_att_ans as evt_att_ans,
  _evt_att_profile as evt_att_profile,
  _evt_att_team as evt_att_team,
  _evt_attendee as evt_attendee,
  _evt_barcode as evt_barcode,
  _evt_discount as evt_discount,
  _evt_organizer as evt_organizer,
  _evt_prog_cat as evt_prog_cat,
  _evt_prog_fmt as evt_prog_fmt,
  _evt_program as evt_program,
  _evt_schedule as evt_schedule,
  _evt_tkt_class as evt_tkt_class,
  _evt_venue as evt_venue,
  _hibernate_sequence as hibernate_sequence,
  _image as image,
  _image_comment as image_comment,
  _image_feedback as image_feedback,
  _image_likers as image_likers,
  _image_rating as image_rating,
  _image_tags as image_tags,
  _image_viewers as image_viewers,
  _item_bid as item_bid,
  _item_bid_bids as item_bid_bids,
  _item_bid_shipment as item_bid_shipment,
  _item_license as item_license,
  _master_type as master_type,
  _master_value as master_value,
  _medium_users as medium_users,
  _password_reset_token as password_reset_token,
  _pay_credit_card as pay_credit_card,
  _pay_payment as pay_payment,
  _perm_activity as perm_activity,
  _perm_client as perm_client,
  _perm_oauth_code as perm_oauth_code,
  _perm_oauth_token as perm_oauth_token,
  _perm_role as perm_role,
  _pgm_answers as pgm_answers,
  _pgm_judge as pgm_judge,
  _pgm_quest as pgm_quest,
  _pgm_rating as pgm_rating,
  _pgm_refs as pgm_refs,
  _pgm_submission as pgm_submission,
  _role_activities as role_activities,
  _sch_class as sch_class,
  _sch_course as sch_course,
  _sch_dept as sch_dept,
  _sch_enroll as sch_enroll,
  _sch_instructor as sch_instructor,
  _sch_school as sch_school,
  _sch_student as sch_student,
  _schedule_recurrence as schedule_recurrence,
  _shipment as shipment,
  _shipping_details as shipping_details,
  _stu_class as stu_class,
  _stu_list as stu_list,
  _stu_receipt as stu_receipt,
  _stu_regist as stu_regist,
  _test_ADDRESSES as test_ADDRESSES,
  _test_USERS as test_USERS,
  _time_line as time_line,
  _type as type,
  _upload as upload,
  _user as user,
  _user_biography as user_biography,
  _user_biography_affiliations as user_biography_affiliations,
  _user_biography_awards_and_honors as user_biography_awards_and_honors,
  _user_biography_education as user_biography_education,
  _user_biography_exhibitions as user_biography_exhibitions,
  _user_biography_publications as user_biography_publications,
  _user_friends as user_friends,
  _user_roles as user_roles,
  _video as video,
  _video_tags as video_tags,
  _video_viewers as video_viewers,
};

export type {
  DATABASECHANGELOGAttributes,
  DATABASECHANGELOGCreationAttributes,
  DATABASECHANGELOGLOCKAttributes,
  DATABASECHANGELOGLOCKCreationAttributes,
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
  affiliationAttributes,
  affiliationCreationAttributes,
  albumAttributes,
  albumCreationAttributes,
  album_feedbackAttributes,
  album_feedbackCreationAttributes,
  album_imagesAttributes,
  album_imagesCreationAttributes,
  album_ratingAttributes,
  album_ratingCreationAttributes,
  application_eventAttributes,
  application_eventCreationAttributes,
  avatarAttributes,
  avatarCreationAttributes,
  bidAttributes,
  bidCreationAttributes,
  billing_detailsAttributes,
  billing_detailsCreationAttributes,
  cart_con_optionAttributes,
  cart_con_optionCreationAttributes,
  categoryAttributes,
  categoryCreationAttributes,
  credit_cardAttributes,
  credit_cardCreationAttributes,
  ent_addressAttributes,
  ent_addressCreationAttributes,
  ent_bill_addAttributes,
  ent_bill_addCreationAttributes,
  ent_contactAttributes,
  ent_contactCreationAttributes,
  ent_locAttributes,
  ent_locCreationAttributes,
  ent_order_pointAttributes,
  ent_order_pointCreationAttributes,
  ent_orgAttributes,
  ent_orgCreationAttributes,
  evt_accesscodeAttributes,
  evt_accesscodeCreationAttributes,
  evt_att_addAttributes,
  evt_att_addCreationAttributes,
  evt_att_ansAttributes,
  evt_att_ansCreationAttributes,
  evt_att_profileAttributes,
  evt_att_profileCreationAttributes,
  evt_att_teamAttributes,
  evt_att_teamCreationAttributes,
  evt_attendeeAttributes,
  evt_attendeeCreationAttributes,
  evt_barcodeAttributes,
  evt_barcodeCreationAttributes,
  evt_discountAttributes,
  evt_discountCreationAttributes,
  evt_organizerAttributes,
  evt_organizerCreationAttributes,
  evt_prog_catAttributes,
  evt_prog_catCreationAttributes,
  evt_prog_fmtAttributes,
  evt_prog_fmtCreationAttributes,
  evt_programAttributes,
  evt_programCreationAttributes,
  evt_scheduleAttributes,
  evt_scheduleCreationAttributes,
  evt_tkt_classAttributes,
  evt_tkt_classCreationAttributes,
  evt_venueAttributes,
  evt_venueCreationAttributes,
  hibernate_sequenceAttributes,
  hibernate_sequenceCreationAttributes,
  imageAttributes,
  imageCreationAttributes,
  image_commentAttributes,
  image_commentCreationAttributes,
  image_feedbackAttributes,
  image_feedbackCreationAttributes,
  image_likersAttributes,
  image_likersCreationAttributes,
  image_ratingAttributes,
  image_ratingCreationAttributes,
  image_tagsAttributes,
  image_tagsCreationAttributes,
  image_viewersAttributes,
  image_viewersCreationAttributes,
  item_bidAttributes,
  item_bidCreationAttributes,
  item_bid_bidsAttributes,
  item_bid_bidsCreationAttributes,
  item_bid_shipmentAttributes,
  item_bid_shipmentCreationAttributes,
  item_licenseAttributes,
  item_licenseCreationAttributes,
  master_typeAttributes,
  master_typeCreationAttributes,
  master_valueAttributes,
  master_valueCreationAttributes,
  medium_usersAttributes,
  medium_usersCreationAttributes,
  password_reset_tokenAttributes,
  password_reset_tokenCreationAttributes,
  pay_credit_cardAttributes,
  pay_credit_cardCreationAttributes,
  pay_paymentAttributes,
  pay_paymentCreationAttributes,
  perm_activityAttributes,
  perm_activityCreationAttributes,
  perm_clientAttributes,
  perm_clientCreationAttributes,
  perm_oauth_codeAttributes,
  perm_oauth_codeCreationAttributes,
  perm_oauth_tokenAttributes,
  perm_oauth_tokenCreationAttributes,
  perm_roleAttributes,
  perm_roleCreationAttributes,
  pgm_answersAttributes,
  pgm_answersCreationAttributes,
  pgm_judgeAttributes,
  pgm_judgeCreationAttributes,
  pgm_questAttributes,
  pgm_questCreationAttributes,
  pgm_ratingAttributes,
  pgm_ratingCreationAttributes,
  pgm_refsAttributes,
  pgm_refsCreationAttributes,
  pgm_submissionAttributes,
  pgm_submissionCreationAttributes,
  role_activitiesAttributes,
  role_activitiesCreationAttributes,
  sch_classAttributes,
  sch_classCreationAttributes,
  sch_courseAttributes,
  sch_courseCreationAttributes,
  sch_deptAttributes,
  sch_deptCreationAttributes,
  sch_enrollAttributes,
  sch_enrollCreationAttributes,
  sch_instructorAttributes,
  sch_instructorCreationAttributes,
  sch_schoolAttributes,
  sch_schoolCreationAttributes,
  sch_studentAttributes,
  sch_studentCreationAttributes,
  schedule_recurrenceAttributes,
  schedule_recurrenceCreationAttributes,
  shipmentAttributes,
  shipmentCreationAttributes,
  shipping_detailsAttributes,
  shipping_detailsCreationAttributes,
  stu_classAttributes,
  stu_classCreationAttributes,
  stu_listAttributes,
  stu_listCreationAttributes,
  stu_receiptAttributes,
  stu_receiptCreationAttributes,
  stu_registAttributes,
  stu_registCreationAttributes,
  test_ADDRESSESAttributes,
  test_ADDRESSESCreationAttributes,
  test_USERSAttributes,
  test_USERSCreationAttributes,
  time_lineAttributes,
  time_lineCreationAttributes,
  typeAttributes,
  typeCreationAttributes,
  uploadAttributes,
  uploadCreationAttributes,
  userAttributes,
  userCreationAttributes,
  user_biographyAttributes,
  user_biographyCreationAttributes,
  user_biography_affiliationsAttributes,
  user_biography_affiliationsCreationAttributes,
  user_biography_awards_and_honorsAttributes,
  user_biography_awards_and_honorsCreationAttributes,
  user_biography_educationAttributes,
  user_biography_educationCreationAttributes,
  user_biography_exhibitionsAttributes,
  user_biography_exhibitionsCreationAttributes,
  user_biography_publicationsAttributes,
  user_biography_publicationsCreationAttributes,
  user_friendsAttributes,
  user_friendsCreationAttributes,
  user_rolesAttributes,
  user_rolesCreationAttributes,
  videoAttributes,
  videoCreationAttributes,
  video_tagsAttributes,
  video_tagsCreationAttributes,
  video_viewersAttributes,
  video_viewersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const DATABASECHANGELOG = _DATABASECHANGELOG.initModel(sequelize);
  const DATABASECHANGELOGLOCK = _DATABASECHANGELOGLOCK.initModel(sequelize);
  const SequelizeMeta = _SequelizeMeta.initModel(sequelize);
  const affiliation = _affiliation.initModel(sequelize);
  const album = _album.initModel(sequelize);
  const album_feedback = _album_feedback.initModel(sequelize);
  const album_images = _album_images.initModel(sequelize);
  const album_rating = _album_rating.initModel(sequelize);
  const application_event = _application_event.initModel(sequelize);
  const avatar = _avatar.initModel(sequelize);
  const bid = _bid.initModel(sequelize);
  const billing_details = _billing_details.initModel(sequelize);
  const cart_con_option = _cart_con_option.initModel(sequelize);
  const category = _category.initModel(sequelize);
  const credit_card = _credit_card.initModel(sequelize);
  const ent_address = _ent_address.initModel(sequelize);
  const ent_bill_add = _ent_bill_add.initModel(sequelize);
  const ent_contact = _ent_contact.initModel(sequelize);
  const ent_loc = _ent_loc.initModel(sequelize);
  const ent_order_point = _ent_order_point.initModel(sequelize);
  const ent_org = _ent_org.initModel(sequelize);
  const evt_accesscode = _evt_accesscode.initModel(sequelize);
  const evt_att_add = _evt_att_add.initModel(sequelize);
  const evt_att_ans = _evt_att_ans.initModel(sequelize);
  const evt_att_profile = _evt_att_profile.initModel(sequelize);
  const evt_att_team = _evt_att_team.initModel(sequelize);
  const evt_attendee = _evt_attendee.initModel(sequelize);
  const evt_barcode = _evt_barcode.initModel(sequelize);
  const evt_discount = _evt_discount.initModel(sequelize);
  const evt_organizer = _evt_organizer.initModel(sequelize);
  const evt_prog_cat = _evt_prog_cat.initModel(sequelize);
  const evt_prog_fmt = _evt_prog_fmt.initModel(sequelize);
  const evt_program = _evt_program.initModel(sequelize);
  const evt_schedule = _evt_schedule.initModel(sequelize);
  const evt_tkt_class = _evt_tkt_class.initModel(sequelize);
  const evt_venue = _evt_venue.initModel(sequelize);
  const hibernate_sequence = _hibernate_sequence.initModel(sequelize);
  const image = _image.initModel(sequelize);
  const image_comment = _image_comment.initModel(sequelize);
  const image_feedback = _image_feedback.initModel(sequelize);
  const image_likers = _image_likers.initModel(sequelize);
  const image_rating = _image_rating.initModel(sequelize);
  const image_tags = _image_tags.initModel(sequelize);
  const image_viewers = _image_viewers.initModel(sequelize);
  const item_bid = _item_bid.initModel(sequelize);
  const item_bid_bids = _item_bid_bids.initModel(sequelize);
  const item_bid_shipment = _item_bid_shipment.initModel(sequelize);
  const item_license = _item_license.initModel(sequelize);
  const master_type = _master_type.initModel(sequelize);
  const master_value = _master_value.initModel(sequelize);
  const medium_users = _medium_users.initModel(sequelize);
  const password_reset_token = _password_reset_token.initModel(sequelize);
  const pay_credit_card = _pay_credit_card.initModel(sequelize);
  const pay_payment = _pay_payment.initModel(sequelize);
  const perm_activity = _perm_activity.initModel(sequelize);
  const perm_client = _perm_client.initModel(sequelize);
  const perm_oauth_code = _perm_oauth_code.initModel(sequelize);
  const perm_oauth_token = _perm_oauth_token.initModel(sequelize);
  const perm_role = _perm_role.initModel(sequelize);
  const pgm_answers = _pgm_answers.initModel(sequelize);
  const pgm_judge = _pgm_judge.initModel(sequelize);
  const pgm_quest = _pgm_quest.initModel(sequelize);
  const pgm_rating = _pgm_rating.initModel(sequelize);
  const pgm_refs = _pgm_refs.initModel(sequelize);
  const pgm_submission = _pgm_submission.initModel(sequelize);
  const role_activities = _role_activities.initModel(sequelize);
  const sch_class = _sch_class.initModel(sequelize);
  const sch_course = _sch_course.initModel(sequelize);
  const sch_dept = _sch_dept.initModel(sequelize);
  const sch_enroll = _sch_enroll.initModel(sequelize);
  const sch_instructor = _sch_instructor.initModel(sequelize);
  const sch_school = _sch_school.initModel(sequelize);
  const sch_student = _sch_student.initModel(sequelize);
  const schedule_recurrence = _schedule_recurrence.initModel(sequelize);
  const shipment = _shipment.initModel(sequelize);
  const shipping_details = _shipping_details.initModel(sequelize);
  const stu_class = _stu_class.initModel(sequelize);
  const stu_list = _stu_list.initModel(sequelize);
  const stu_receipt = _stu_receipt.initModel(sequelize);
  const stu_regist = _stu_regist.initModel(sequelize);
  const test_ADDRESSES = _test_ADDRESSES.initModel(sequelize);
  const test_USERS = _test_USERS.initModel(sequelize);
  const time_line = _time_line.initModel(sequelize);
  const type = _type.initModel(sequelize);
  const upload = _upload.initModel(sequelize);
  const user = _user.initModel(sequelize);
  const user_biography = _user_biography.initModel(sequelize);
  const user_biography_affiliations = _user_biography_affiliations.initModel(sequelize);
  const user_biography_awards_and_honors = _user_biography_awards_and_honors.initModel(sequelize);
  const user_biography_education = _user_biography_education.initModel(sequelize);
  const user_biography_exhibitions = _user_biography_exhibitions.initModel(sequelize);
  const user_biography_publications = _user_biography_publications.initModel(sequelize);
  const user_friends = _user_friends.initModel(sequelize);
  const user_roles = _user_roles.initModel(sequelize);
  const video = _video.initModel(sequelize);
  const video_tags = _video_tags.initModel(sequelize);
  const video_viewers = _video_viewers.initModel(sequelize);

  album.belongsToMany(image, { as: 'image_id_images', through: album_images, foreignKey: "album_id", otherKey: "image_id" });
  image.belongsToMany(album, { as: 'album_id_albums', through: album_images, foreignKey: "image_id", otherKey: "album_id" });
  image.belongsToMany(user, { as: 'user_id_users', through: image_likers, foreignKey: "image_id", otherKey: "user_id" });
  perm_role.belongsToMany(user, { as: 'user_id_user_user_roles', through: user_roles, foreignKey: "roles_id", otherKey: "user_id" });
  sch_class.belongsToMany(sch_student, { as: 'student_id_sch_students', through: sch_enroll, foreignKey: "course_class_id", otherKey: "student_id" });
  sch_student.belongsToMany(sch_class, { as: 'course_class_id_sch_classes', through: sch_enroll, foreignKey: "student_id", otherKey: "course_class_id" });
  time_line.belongsToMany(user_biography, { as: 'user_biography_id_user_biographies', through: user_biography_affiliations, foreignKey: "affiliations_id", otherKey: "user_biography_id" });
  time_line.belongsToMany(user_biography, { as: 'user_biography_id_user_biography_user_biography_awards_and_honors', through: user_biography_awards_and_honors, foreignKey: "awards_and_honors_id", otherKey: "user_biography_id" });
  time_line.belongsToMany(user_biography, { as: 'user_biography_id_user_biography_user_biography_educations', through: user_biography_education, foreignKey: "education_id", otherKey: "user_biography_id" });
  time_line.belongsToMany(user_biography, { as: 'user_biography_id_user_biography_user_biography_exhibitions', through: user_biography_exhibitions, foreignKey: "exhibitions_id", otherKey: "user_biography_id" });
  time_line.belongsToMany(user_biography, { as: 'user_biography_id_user_biography_user_biography_publications', through: user_biography_publications, foreignKey: "publications_id", otherKey: "user_biography_id" });
  user.belongsToMany(image, { as: 'image_id_image_image_likers', through: image_likers, foreignKey: "user_id", otherKey: "image_id" });
  user.belongsToMany(perm_role, { as: 'roles_id_perm_roles', through: user_roles, foreignKey: "user_id", otherKey: "roles_id" });
  user.belongsToMany(user, { as: 'user_id_user_user_friends', through: user_friends, foreignKey: "friend_id", otherKey: "user_id" });
  user.belongsToMany(user, { as: 'friend_id_users', through: user_friends, foreignKey: "user_id", otherKey: "friend_id" });
  user_biography.belongsToMany(time_line, { as: 'affiliations_id_time_lines', through: user_biography_affiliations, foreignKey: "user_biography_id", otherKey: "affiliations_id" });
  user_biography.belongsToMany(time_line, { as: 'awards_and_honors_id_time_lines', through: user_biography_awards_and_honors, foreignKey: "user_biography_id", otherKey: "awards_and_honors_id" });
  user_biography.belongsToMany(time_line, { as: 'education_id_time_lines', through: user_biography_education, foreignKey: "user_biography_id", otherKey: "education_id" });
  user_biography.belongsToMany(time_line, { as: 'exhibitions_id_time_lines', through: user_biography_exhibitions, foreignKey: "user_biography_id", otherKey: "exhibitions_id" });
  user_biography.belongsToMany(time_line, { as: 'publications_id_time_lines', through: user_biography_publications, foreignKey: "user_biography_id", otherKey: "publications_id" });
  album_feedback.belongsTo(album, { as: "entity", foreignKey: "entity_id"});
  album.hasMany(album_feedback, { as: "album_feedbacks", foreignKey: "entity_id"});
  album_images.belongsTo(album, { as: "album", foreignKey: "album_id"});
  album.hasMany(album_images, { as: "album_images", foreignKey: "album_id"});
  album_rating.belongsTo(album, { as: "entity", foreignKey: "entity_id"});
  album.hasMany(album_rating, { as: "album_ratings", foreignKey: "entity_id"});
  pgm_submission.belongsTo(album, { as: "album", foreignKey: "album_id"});
  album.hasMany(pgm_submission, { as: "pgm_submissions", foreignKey: "album_id"});
  stu_list.belongsTo(album, { as: "album", foreignKey: "album_id"});
  album.hasMany(stu_list, { as: "stu_lists", foreignKey: "album_id"});
  item_bid.belongsTo(bid, { as: "successful_bid", foreignKey: "successful_bid_id"});
  bid.hasMany(item_bid, { as: "item_bids", foreignKey: "successful_bid_id"});
  item_bid_bids.belongsTo(bid, { as: "bid", foreignKey: "bids_id"});
  bid.hasMany(item_bid_bids, { as: "item_bid_bids", foreignKey: "bids_id"});
  credit_card.belongsTo(billing_details, { as: "credit_card", foreignKey: "credit_card_id"});
  billing_details.hasOne(credit_card, { as: "credit_card", foreignKey: "credit_card_id"});
  category.belongsTo(category, { as: "parent", foreignKey: "parent_id"});
  category.hasMany(category, { as: "categories", foreignKey: "parent_id"});
  image.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(image, { as: "images", foreignKey: "category_id"});
  video.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(video, { as: "videos", foreignKey: "category_id"});
  affiliation.belongsTo(ent_address, { as: "address", foreignKey: "address_id"});
  ent_address.hasMany(affiliation, { as: "affiliations", foreignKey: "address_id"});
  ent_bill_add.belongsTo(ent_address, { as: "address", foreignKey: "address_id"});
  ent_address.hasMany(ent_bill_add, { as: "ent_bill_adds", foreignKey: "address_id"});
  ent_contact.belongsTo(ent_address, { as: "address", foreignKey: "address_id"});
  ent_address.hasMany(ent_contact, { as: "ent_contacts", foreignKey: "address_id"});
  ent_loc.belongsTo(ent_address, { as: "address", foreignKey: "address_id"});
  ent_address.hasMany(ent_loc, { as: "ent_locs", foreignKey: "address_id"});
  ent_order_point.belongsTo(ent_address, { as: "address", foreignKey: "address_id"});
  ent_address.hasMany(ent_order_point, { as: "ent_order_points", foreignKey: "address_id"});
  ent_org.belongsTo(ent_address, { as: "address", foreignKey: "address_id"});
  ent_address.hasMany(ent_org, { as: "ent_orgs", foreignKey: "address_id"});
  evt_att_add.belongsTo(ent_address, { as: "home", foreignKey: "home_id"});
  ent_address.hasMany(evt_att_add, { as: "evt_att_adds", foreignKey: "home_id"});
  evt_att_add.belongsTo(ent_address, { as: "ship", foreignKey: "ship_id"});
  ent_address.hasMany(evt_att_add, { as: "ship_evt_att_adds", foreignKey: "ship_id"});
  evt_att_add.belongsTo(ent_address, { as: "work", foreignKey: "work_id"});
  ent_address.hasMany(evt_att_add, { as: "work_evt_att_adds", foreignKey: "work_id"});
  evt_venue.belongsTo(ent_address, { as: "address", foreignKey: "address_id"});
  ent_address.hasMany(evt_venue, { as: "evt_venues", foreignKey: "address_id"});
  shipment.belongsTo(ent_address, { as: "delivery_address", foreignKey: "delivery_address_id"});
  ent_address.hasMany(shipment, { as: "shipments", foreignKey: "delivery_address_id"});
  ent_bill_add.belongsTo(ent_contact, { as: "contact", foreignKey: "contact_id"});
  ent_contact.hasMany(ent_bill_add, { as: "ent_bill_adds", foreignKey: "contact_id"});
  ent_order_point.belongsTo(ent_contact, { as: "contact", foreignKey: "contact_id"});
  ent_contact.hasMany(ent_order_point, { as: "ent_order_points", foreignKey: "contact_id"});
  ent_org.belongsTo(ent_contact, { as: "contact", foreignKey: "contact_id"});
  ent_contact.hasMany(ent_org, { as: "ent_orgs", foreignKey: "contact_id"});
  user.belongsTo(ent_contact, { as: "contact", foreignKey: "contact_id"});
  ent_contact.hasMany(user, { as: "users", foreignKey: "contact_id"});
  ent_loc.belongsTo(ent_loc, { as: "parent", foreignKey: "parent_id"});
  ent_loc.hasMany(ent_loc, { as: "ent_locs", foreignKey: "parent_id"});
  affiliation.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(affiliation, { as: "affiliations", foreignKey: "organization_id"});
  album.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(album, { as: "albums", foreignKey: "organization_id"});
  album_feedback.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(album_feedback, { as: "album_feedbacks", foreignKey: "organization_id"});
  album_rating.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(album_rating, { as: "album_ratings", foreignKey: "organization_id"});
  application_event.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(application_event, { as: "application_events", foreignKey: "organization_id"});
  avatar.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(avatar, { as: "avatars", foreignKey: "organization_id"});
  bid.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(bid, { as: "bids", foreignKey: "organization_id"});
  billing_details.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(billing_details, { as: "billing_details", foreignKey: "organization_id"});
  cart_con_option.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(cart_con_option, { as: "cart_con_options", foreignKey: "organization_id"});
  category.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(category, { as: "categories", foreignKey: "organization_id"});
  ent_address.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(ent_address, { as: "ent_addresses", foreignKey: "organization_id"});
  ent_bill_add.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(ent_bill_add, { as: "ent_bill_adds", foreignKey: "organization_id"});
  ent_contact.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(ent_contact, { as: "ent_contacts", foreignKey: "organization_id"});
  ent_loc.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(ent_loc, { as: "ent_locs", foreignKey: "organization_id"});
  ent_order_point.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(ent_order_point, { as: "ent_order_points", foreignKey: "organization_id"});
  ent_org.belongsTo(ent_org, { as: "root", foreignKey: "root_id"});
  ent_org.hasMany(ent_org, { as: "ent_orgs", foreignKey: "root_id"});
  ent_org.belongsTo(ent_org, { as: "parent", foreignKey: "parent_id"});
  ent_org.hasMany(ent_org, { as: "parent_ent_orgs", foreignKey: "parent_id"});
  ent_org.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(ent_org, { as: "organization_ent_orgs", foreignKey: "organization_id"});
  evt_accesscode.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_accesscode, { as: "evt_accesscodes", foreignKey: "organization_id"});
  evt_att_add.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_att_add, { as: "evt_att_adds", foreignKey: "organization_id"});
  evt_att_ans.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_att_ans, { as: "evt_att_ans", foreignKey: "organization_id"});
  evt_att_profile.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_att_profile, { as: "evt_att_profiles", foreignKey: "organization_id"});
  evt_att_team.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_att_team, { as: "evt_att_teams", foreignKey: "organization_id"});
  evt_attendee.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_attendee, { as: "evt_attendees", foreignKey: "organization_id"});
  evt_barcode.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_barcode, { as: "evt_barcodes", foreignKey: "organization_id"});
  evt_discount.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_discount, { as: "evt_discounts", foreignKey: "organization_id"});
  evt_organizer.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_organizer, { as: "evt_organizers", foreignKey: "organization_id"});
  evt_prog_cat.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_prog_cat, { as: "evt_prog_cats", foreignKey: "organization_id"});
  evt_prog_fmt.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_prog_fmt, { as: "evt_prog_fmts", foreignKey: "organization_id"});
  evt_program.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_program, { as: "evt_programs", foreignKey: "organization_id"});
  evt_schedule.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_schedule, { as: "evt_schedules", foreignKey: "organization_id"});
  evt_tkt_class.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_tkt_class, { as: "evt_tkt_classes", foreignKey: "organization_id"});
  evt_venue.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(evt_venue, { as: "evt_venues", foreignKey: "organization_id"});
  image.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(image, { as: "images", foreignKey: "organization_id"});
  image_comment.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(image_comment, { as: "image_comments", foreignKey: "organization_id"});
  image_feedback.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(image_feedback, { as: "image_feedbacks", foreignKey: "organization_id"});
  image_rating.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(image_rating, { as: "image_ratings", foreignKey: "organization_id"});
  item_bid.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(item_bid, { as: "item_bids", foreignKey: "organization_id"});
  item_license.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(item_license, { as: "item_licenses", foreignKey: "organization_id"});
  master_type.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(master_type, { as: "master_types", foreignKey: "organization_id"});
  master_value.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(master_value, { as: "master_values", foreignKey: "organization_id"});
  password_reset_token.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(password_reset_token, { as: "password_reset_tokens", foreignKey: "organization_id"});
  pay_credit_card.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(pay_credit_card, { as: "pay_credit_cards", foreignKey: "organization_id"});
  pay_payment.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(pay_payment, { as: "pay_payments", foreignKey: "organization_id"});
  perm_activity.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(perm_activity, { as: "perm_activities", foreignKey: "organization_id"});
  perm_role.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(perm_role, { as: "perm_roles", foreignKey: "organization_id"});
  pgm_answers.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(pgm_answers, { as: "pgm_answers", foreignKey: "organization_id"});
  pgm_judge.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(pgm_judge, { as: "pgm_judges", foreignKey: "organization_id"});
  pgm_quest.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(pgm_quest, { as: "pgm_quests", foreignKey: "organization_id"});
  pgm_rating.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(pgm_rating, { as: "pgm_ratings", foreignKey: "organization_id"});
  pgm_refs.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(pgm_refs, { as: "pgm_refs", foreignKey: "organization_id"});
  pgm_submission.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(pgm_submission, { as: "pgm_submissions", foreignKey: "organization_id"});
  sch_class.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(sch_class, { as: "sch_classes", foreignKey: "organization_id"});
  sch_course.belongsTo(ent_org, { as: "root", foreignKey: "root_id"});
  ent_org.hasMany(sch_course, { as: "sch_courses", foreignKey: "root_id"});
  sch_course.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(sch_course, { as: "organization_sch_courses", foreignKey: "organization_id"});
  sch_dept.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(sch_dept, { as: "sch_depts", foreignKey: "organization_id"});
  sch_instructor.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(sch_instructor, { as: "sch_instructors", foreignKey: "organization_id"});
  sch_school.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(sch_school, { as: "sch_schools", foreignKey: "organization_id"});
  sch_student.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(sch_student, { as: "sch_students", foreignKey: "organization_id"});
  shipping_details.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(shipping_details, { as: "shipping_details", foreignKey: "organization_id"});
  stu_class.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(stu_class, { as: "stu_classes", foreignKey: "organization_id"});
  stu_list.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(stu_list, { as: "stu_lists", foreignKey: "organization_id"});
  stu_receipt.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(stu_receipt, { as: "stu_receipts", foreignKey: "organization_id"});
  stu_regist.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(stu_regist, { as: "stu_regists", foreignKey: "organization_id"});
  type.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(type, { as: "types", foreignKey: "organization_id"});
  upload.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(upload, { as: "uploads", foreignKey: "organization_id"});
  user.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(user, { as: "users", foreignKey: "organization_id"});
  user_biography.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(user_biography, { as: "user_biographies", foreignKey: "organization_id"});
  video.belongsTo(ent_org, { as: "organization", foreignKey: "organization_id"});
  ent_org.hasMany(video, { as: "videos", foreignKey: "organization_id"});
  evt_attendee.belongsTo(evt_att_add, { as: "address", foreignKey: "addresses_id"});
  evt_att_add.hasMany(evt_attendee, { as: "evt_attendees", foreignKey: "addresses_id"});
  evt_attendee.belongsTo(evt_att_profile, { as: "profile", foreignKey: "profile_id"});
  evt_att_profile.hasMany(evt_attendee, { as: "evt_attendees", foreignKey: "profile_id"});
  evt_attendee.belongsTo(evt_barcode, { as: "barcode", foreignKey: "barcodes_id"});
  evt_barcode.hasMany(evt_attendee, { as: "evt_attendees", foreignKey: "barcodes_id"});
  evt_program.belongsTo(evt_organizer, { as: "organizer", foreignKey: "organizer_id"});
  evt_organizer.hasMany(evt_program, { as: "evt_programs", foreignKey: "organizer_id"});
  evt_prog_cat.belongsTo(evt_prog_cat, { as: "fk_parent_category_evt_prog_cat", foreignKey: "fk_parent_category"});
  evt_prog_cat.hasMany(evt_prog_cat, { as: "evt_prog_cats", foreignKey: "fk_parent_category"});
  evt_program.belongsTo(evt_prog_cat, { as: "subcategory", foreignKey: "subcategory_id"});
  evt_prog_cat.hasMany(evt_program, { as: "evt_programs", foreignKey: "subcategory_id"});
  evt_program.belongsTo(evt_prog_cat, { as: "category", foreignKey: "category_id"});
  evt_prog_cat.hasMany(evt_program, { as: "category_evt_programs", foreignKey: "category_id"});
  evt_program.belongsTo(evt_prog_fmt, { as: "format", foreignKey: "format_id"});
  evt_prog_fmt.hasMany(evt_program, { as: "evt_programs", foreignKey: "format_id"});
  evt_att_team.belongsTo(evt_program, { as: "program", foreignKey: "program_id"});
  evt_program.hasMany(evt_att_team, { as: "evt_att_teams", foreignKey: "program_id"});
  evt_attendee.belongsTo(evt_program, { as: "program", foreignKey: "program_id"});
  evt_program.hasMany(evt_attendee, { as: "evt_attendees", foreignKey: "program_id"});
  pgm_submission.belongsTo(evt_program, { as: "program", foreignKey: "program_id"});
  evt_program.hasMany(pgm_submission, { as: "pgm_submissions", foreignKey: "program_id"});
  evt_program.belongsTo(evt_schedule, { as: "schedule", foreignKey: "schedule_id"});
  evt_schedule.hasMany(evt_program, { as: "evt_programs", foreignKey: "schedule_id"});
  schedule_recurrence.belongsTo(evt_schedule, { as: "schedule", foreignKey: "schedule_id"});
  evt_schedule.hasMany(schedule_recurrence, { as: "schedule_recurrences", foreignKey: "schedule_id"});
  evt_attendee.belongsTo(evt_tkt_class, { as: "ticket_class", foreignKey: "ticket_class_id"});
  evt_tkt_class.hasMany(evt_attendee, { as: "evt_attendees", foreignKey: "ticket_class_id"});
  evt_program.belongsTo(evt_venue, { as: "venue", foreignKey: "venue_id"});
  evt_venue.hasMany(evt_program, { as: "evt_programs", foreignKey: "venue_id"});
  album_images.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(album_images, { as: "album_images", foreignKey: "image_id"});
  image_comment.belongsTo(image, { as: "commentable", foreignKey: "commentable_id"});
  image.hasMany(image_comment, { as: "image_comments", foreignKey: "commentable_id"});
  image_feedback.belongsTo(image, { as: "entity", foreignKey: "entity_id"});
  image.hasMany(image_feedback, { as: "image_feedbacks", foreignKey: "entity_id"});
  image_likers.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(image_likers, { as: "image_likers", foreignKey: "image_id"});
  image_rating.belongsTo(image, { as: "entity", foreignKey: "entity_id"});
  image.hasMany(image_rating, { as: "image_ratings", foreignKey: "entity_id"});
  image_tags.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(image_tags, { as: "image_tags", foreignKey: "image_id"});
  image_viewers.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(image_viewers, { as: "image_viewers", foreignKey: "image_id"});
  item_license.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(item_license, { as: "item_licenses", foreignKey: "image_id"});
  bid.belongsTo(item_bid, { as: "item", foreignKey: "item_id"});
  item_bid.hasMany(bid, { as: "bids", foreignKey: "item_id"});
  item_bid_bids.belongsTo(item_bid, { as: "item_bid", foreignKey: "item_bid_id"});
  item_bid.hasMany(item_bid_bids, { as: "item_bid_bids", foreignKey: "item_bid_id"});
  item_bid_shipment.belongsTo(item_bid, { as: "item_bid", foreignKey: "item_bid_id"});
  item_bid.hasMany(item_bid_shipment, { as: "item_bid_shipments", foreignKey: "item_bid_id"});
  master_type.belongsTo(master_type, { as: "parent_type", foreignKey: "parent_type_id"});
  master_type.hasMany(master_type, { as: "master_types", foreignKey: "parent_type_id"});
  master_value.belongsTo(master_type, { as: "parent_type", foreignKey: "parent_type_id"});
  master_type.hasMany(master_value, { as: "master_values", foreignKey: "parent_type_id"});
  cart_con_option.belongsTo(master_value, { as: "subcat_type", foreignKey: "subcat_type_id"});
  master_value.hasMany(cart_con_option, { as: "cart_con_options", foreignKey: "subcat_type_id"});
  cart_con_option.belongsTo(master_value, { as: "cat_type", foreignKey: "cat_type_id"});
  master_value.hasMany(cart_con_option, { as: "cat_type_cart_con_options", foreignKey: "cat_type_id"});
  role_activities.belongsTo(perm_activity, { as: "activity", foreignKey: "activities_id"});
  perm_activity.hasMany(role_activities, { as: "role_activities", foreignKey: "activities_id"});
  role_activities.belongsTo(perm_role, { as: "role", foreignKey: "role_id"});
  perm_role.hasMany(role_activities, { as: "role_activities", foreignKey: "role_id"});
  user_roles.belongsTo(perm_role, { as: "role", foreignKey: "roles_id"});
  perm_role.hasMany(user_roles, { as: "user_roles", foreignKey: "roles_id"});
  pgm_answers.belongsTo(pgm_quest, { as: "questionnaire", foreignKey: "questionnaire_id"});
  pgm_quest.hasMany(pgm_answers, { as: "pgm_answers", foreignKey: "questionnaire_id"});
  pgm_submission.belongsTo(pgm_quest, { as: "questionnaire", foreignKey: "questionnaire_id"});
  pgm_quest.hasMany(pgm_submission, { as: "pgm_submissions", foreignKey: "questionnaire_id"});
  pgm_judge.belongsTo(pgm_submission, { as: "program_submission", foreignKey: "program_submission_id"});
  pgm_submission.hasMany(pgm_judge, { as: "pgm_judges", foreignKey: "program_submission_id"});
  pgm_quest.belongsTo(pgm_submission, { as: "program_submission", foreignKey: "program_submission_id"});
  pgm_submission.hasMany(pgm_quest, { as: "pgm_quests", foreignKey: "program_submission_id"});
  pgm_rating.belongsTo(pgm_submission, { as: "entity", foreignKey: "entity_id"});
  pgm_submission.hasMany(pgm_rating, { as: "pgm_ratings", foreignKey: "entity_id"});
  pgm_refs.belongsTo(pgm_submission, { as: "program_submission", foreignKey: "program_submission_id"});
  pgm_submission.hasMany(pgm_refs, { as: "pgm_refs", foreignKey: "program_submission_id"});
  sch_enroll.belongsTo(sch_class, { as: "course_class", foreignKey: "course_class_id"});
  sch_class.hasMany(sch_enroll, { as: "sch_enrolls", foreignKey: "course_class_id"});
  sch_class.belongsTo(sch_course, { as: "course", foreignKey: "course_id"});
  sch_course.hasMany(sch_class, { as: "sch_classes", foreignKey: "course_id"});
  sch_instructor.belongsTo(sch_dept, { as: "department", foreignKey: "department_id"});
  sch_dept.hasMany(sch_instructor, { as: "sch_instructors", foreignKey: "department_id"});
  sch_student.belongsTo(sch_dept, { as: "department", foreignKey: "department_id"});
  sch_dept.hasMany(sch_student, { as: "sch_students", foreignKey: "department_id"});
  sch_class.belongsTo(sch_instructor, { as: "instructor", foreignKey: "instructor_id"});
  sch_instructor.hasMany(sch_class, { as: "sch_classes", foreignKey: "instructor_id"});
  sch_student.belongsTo(sch_instructor, { as: "advisor", foreignKey: "advisor_id"});
  sch_instructor.hasMany(sch_student, { as: "sch_students", foreignKey: "advisor_id"});
  sch_dept.belongsTo(sch_school, { as: "school", foreignKey: "school_id"});
  sch_school.hasMany(sch_dept, { as: "sch_depts", foreignKey: "school_id"});
  sch_enroll.belongsTo(sch_student, { as: "student", foreignKey: "student_id"});
  sch_student.hasMany(sch_enroll, { as: "sch_enrolls", foreignKey: "student_id"});
  item_bid_shipment.belongsTo(shipment, { as: "shipment", foreignKey: "shipment_id"});
  shipment.hasOne(item_bid_shipment, { as: "item_bid_shipment", foreignKey: "shipment_id"});
  stu_regist.belongsTo(stu_class, { as: "class", foreignKey: "class_id"});
  stu_class.hasMany(stu_regist, { as: "stu_regists", foreignKey: "class_id"});
  stu_receipt.belongsTo(stu_regist, { as: "registration", foreignKey: "registration_id"});
  stu_regist.hasMany(stu_receipt, { as: "stu_receipts", foreignKey: "registration_id"});
  test_USERS.belongsTo(test_ADDRESSES, { as: "ADDRESS_test_ADDRESS", foreignKey: "ADDRESS"});
  test_ADDRESSES.hasMany(test_USERS, { as: "test_USERs", foreignKey: "ADDRESS"});
  user_biography_affiliations.belongsTo(time_line, { as: "affiliation", foreignKey: "affiliations_id"});
  time_line.hasMany(user_biography_affiliations, { as: "user_biography_affiliations", foreignKey: "affiliations_id"});
  user_biography_awards_and_honors.belongsTo(time_line, { as: "awards_and_honor", foreignKey: "awards_and_honors_id"});
  time_line.hasMany(user_biography_awards_and_honors, { as: "user_biography_awards_and_honors", foreignKey: "awards_and_honors_id"});
  user_biography_education.belongsTo(time_line, { as: "education", foreignKey: "education_id"});
  time_line.hasMany(user_biography_education, { as: "user_biography_educations", foreignKey: "education_id"});
  user_biography_exhibitions.belongsTo(time_line, { as: "exhibition", foreignKey: "exhibitions_id"});
  time_line.hasMany(user_biography_exhibitions, { as: "user_biography_exhibitions", foreignKey: "exhibitions_id"});
  user_biography_publications.belongsTo(time_line, { as: "publication", foreignKey: "publications_id"});
  time_line.hasMany(user_biography_publications, { as: "user_biography_publications", foreignKey: "publications_id"});
  image.belongsTo(type, { as: "affiliation_level", foreignKey: "affiliation_level_id"});
  type.hasMany(image, { as: "images", foreignKey: "affiliation_level_id"});
  image.belongsTo(type, { as: "affiliation_type", foreignKey: "affiliation_type_id"});
  type.hasMany(image, { as: "affiliation_type_images", foreignKey: "affiliation_type_id"});
  album.belongsTo(upload, { as: "cover", foreignKey: "cover_id"});
  upload.hasMany(album, { as: "albums", foreignKey: "cover_id"});
  category.belongsTo(upload, { as: "cover", foreignKey: "cover_id"});
  upload.hasMany(category, { as: "categories", foreignKey: "cover_id"});
  category.belongsTo(upload, { as: "avatar", foreignKey: "avatar_id"});
  upload.hasMany(category, { as: "avatar_categories", foreignKey: "avatar_id"});
  ent_org.belongsTo(upload, { as: "cover", foreignKey: "cover_id"});
  upload.hasMany(ent_org, { as: "ent_orgs", foreignKey: "cover_id"});
  ent_org.belongsTo(upload, { as: "avatar_upload", foreignKey: "avatar_id"});
  upload.hasMany(ent_org, { as: "avatar_ent_orgs", foreignKey: "avatar_id"});
  evt_program.belongsTo(upload, { as: "logo", foreignKey: "logo_id"});
  upload.hasMany(evt_program, { as: "evt_programs", foreignKey: "logo_id"});
  evt_program.belongsTo(upload, { as: "cover", foreignKey: "cover_id"});
  upload.hasMany(evt_program, { as: "cover_evt_programs", foreignKey: "cover_id"});
  evt_schedule.belongsTo(upload, { as: "cover", foreignKey: "cover_id"});
  upload.hasMany(evt_schedule, { as: "evt_schedules", foreignKey: "cover_id"});
  image.belongsTo(upload, { as: "cover", foreignKey: "cover_id"});
  upload.hasMany(image, { as: "images", foreignKey: "cover_id"});
  user.belongsTo(upload, { as: "cover", foreignKey: "cover_id"});
  upload.hasMany(user, { as: "users", foreignKey: "cover_id"});
  user.belongsTo(upload, { as: "avatar_upload", foreignKey: "avatar_id"});
  upload.hasMany(user, { as: "avatar_users", foreignKey: "avatar_id"});
  video.belongsTo(upload, { as: "cover", foreignKey: "cover_id"});
  upload.hasMany(video, { as: "videos", foreignKey: "cover_id"});
  affiliation.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(affiliation, { as: "affiliations", foreignKey: "last_modified_by_id"});
  affiliation.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(affiliation, { as: "created_by_affiliations", foreignKey: "created_by_id"});
  album.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(album, { as: "albums", foreignKey: "last_modified_by_id"});
  album.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(album, { as: "created_by_albums", foreignKey: "created_by_id"});
  album_feedback.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(album_feedback, { as: "album_feedbacks", foreignKey: "user_id"});
  album_feedback.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(album_feedback, { as: "last_modified_by_album_feedbacks", foreignKey: "last_modified_by_id"});
  album_feedback.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(album_feedback, { as: "created_by_album_feedbacks", foreignKey: "created_by_id"});
  album_rating.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(album_rating, { as: "album_ratings", foreignKey: "user_id"});
  album_rating.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(album_rating, { as: "last_modified_by_album_ratings", foreignKey: "last_modified_by_id"});
  album_rating.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(album_rating, { as: "created_by_album_ratings", foreignKey: "created_by_id"});
  application_event.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(application_event, { as: "application_events", foreignKey: "last_modified_by_id"});
  application_event.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(application_event, { as: "created_by_application_events", foreignKey: "created_by_id"});
  avatar.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(avatar, { as: "avatars", foreignKey: "created_by_id"});
  avatar.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(avatar, { as: "last_modified_by_avatars", foreignKey: "last_modified_by_id"});
  bid.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(bid, { as: "bids", foreignKey: "created_by_id"});
  bid.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(bid, { as: "last_modified_by_bids", foreignKey: "last_modified_by_id"});
  bid.belongsTo(user, { as: "bidder", foreignKey: "bidder_id"});
  user.hasMany(bid, { as: "bidder_bids", foreignKey: "bidder_id"});
  billing_details.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(billing_details, { as: "billing_details", foreignKey: "last_modified_by_id"});
  billing_details.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(billing_details, { as: "created_by_billing_details", foreignKey: "created_by_id"});
  billing_details.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(billing_details, { as: "user_billing_details", foreignKey: "user_id"});
  cart_con_option.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(cart_con_option, { as: "cart_con_options", foreignKey: "last_modified_by_id"});
  cart_con_option.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(cart_con_option, { as: "created_by_cart_con_options", foreignKey: "created_by_id"});
  category.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(category, { as: "categories", foreignKey: "last_modified_by_id"});
  category.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(category, { as: "created_by_categories", foreignKey: "created_by_id"});
  ent_address.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(ent_address, { as: "ent_addresses", foreignKey: "last_modified_by_id"});
  ent_address.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(ent_address, { as: "created_by_ent_addresses", foreignKey: "created_by_id"});
  ent_bill_add.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(ent_bill_add, { as: "ent_bill_adds", foreignKey: "created_by_id"});
  ent_bill_add.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(ent_bill_add, { as: "last_modified_by_ent_bill_adds", foreignKey: "last_modified_by_id"});
  ent_contact.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(ent_contact, { as: "ent_contacts", foreignKey: "created_by_id"});
  ent_contact.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(ent_contact, { as: "last_modified_by_ent_contacts", foreignKey: "last_modified_by_id"});
  ent_loc.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(ent_loc, { as: "ent_locs", foreignKey: "created_by_id"});
  ent_loc.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(ent_loc, { as: "last_modified_by_ent_locs", foreignKey: "last_modified_by_id"});
  ent_loc.belongsTo(user, { as: "owner", foreignKey: "owner_id"});
  user.hasMany(ent_loc, { as: "owner_ent_locs", foreignKey: "owner_id"});
  ent_order_point.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(ent_order_point, { as: "ent_order_points", foreignKey: "last_modified_by_id"});
  ent_order_point.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(ent_order_point, { as: "created_by_ent_order_points", foreignKey: "created_by_id"});
  ent_org.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(ent_org, { as: "ent_orgs", foreignKey: "last_modified_by_id"});
  ent_org.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(ent_org, { as: "created_by_ent_orgs", foreignKey: "created_by_id"});
  ent_org.belongsTo(user, { as: "admin", foreignKey: "admin_id"});
  user.hasMany(ent_org, { as: "admin_ent_orgs", foreignKey: "admin_id"});
  evt_accesscode.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_accesscode, { as: "evt_accesscodes", foreignKey: "last_modified_by_id"});
  evt_accesscode.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_accesscode, { as: "created_by_evt_accesscodes", foreignKey: "created_by_id"});
  evt_att_add.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_att_add, { as: "evt_att_adds", foreignKey: "last_modified_by_id"});
  evt_att_add.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_att_add, { as: "created_by_evt_att_adds", foreignKey: "created_by_id"});
  evt_att_ans.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_att_ans, { as: "evt_att_ans", foreignKey: "last_modified_by_id"});
  evt_att_ans.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_att_ans, { as: "created_by_evt_att_ans", foreignKey: "created_by_id"});
  evt_att_profile.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_att_profile, { as: "evt_att_profiles", foreignKey: "created_by_id"});
  evt_att_profile.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_att_profile, { as: "last_modified_by_evt_att_profiles", foreignKey: "last_modified_by_id"});
  evt_att_team.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_att_team, { as: "evt_att_teams", foreignKey: "last_modified_by_id"});
  evt_att_team.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_att_team, { as: "created_by_evt_att_teams", foreignKey: "created_by_id"});
  evt_attendee.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_attendee, { as: "evt_attendees", foreignKey: "last_modified_by_id"});
  evt_attendee.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_attendee, { as: "created_by_evt_attendees", foreignKey: "created_by_id"});
  evt_barcode.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_barcode, { as: "evt_barcodes", foreignKey: "created_by_id"});
  evt_barcode.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_barcode, { as: "last_modified_by_evt_barcodes", foreignKey: "last_modified_by_id"});
  evt_discount.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_discount, { as: "evt_discounts", foreignKey: "created_by_id"});
  evt_discount.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_discount, { as: "last_modified_by_evt_discounts", foreignKey: "last_modified_by_id"});
  evt_organizer.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_organizer, { as: "evt_organizers", foreignKey: "created_by_id"});
  evt_organizer.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_organizer, { as: "last_modified_by_evt_organizers", foreignKey: "last_modified_by_id"});
  evt_prog_cat.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_prog_cat, { as: "evt_prog_cats", foreignKey: "last_modified_by_id"});
  evt_prog_cat.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_prog_cat, { as: "created_by_evt_prog_cats", foreignKey: "created_by_id"});
  evt_prog_fmt.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_prog_fmt, { as: "evt_prog_fmts", foreignKey: "last_modified_by_id"});
  evt_prog_fmt.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_prog_fmt, { as: "created_by_evt_prog_fmts", foreignKey: "created_by_id"});
  evt_program.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_program, { as: "evt_programs", foreignKey: "created_by_id"});
  evt_program.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_program, { as: "last_modified_by_evt_programs", foreignKey: "last_modified_by_id"});
  evt_schedule.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_schedule, { as: "evt_schedules", foreignKey: "created_by_id"});
  evt_schedule.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_schedule, { as: "last_modified_by_evt_schedules", foreignKey: "last_modified_by_id"});
  evt_tkt_class.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_tkt_class, { as: "evt_tkt_classes", foreignKey: "last_modified_by_id"});
  evt_tkt_class.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_tkt_class, { as: "created_by_evt_tkt_classes", foreignKey: "created_by_id"});
  evt_venue.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(evt_venue, { as: "evt_venues", foreignKey: "last_modified_by_id"});
  evt_venue.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(evt_venue, { as: "created_by_evt_venues", foreignKey: "created_by_id"});
  image.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(image, { as: "images", foreignKey: "created_by_id"});
  image.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(image, { as: "last_modified_by_images", foreignKey: "last_modified_by_id"});
  image.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(image, { as: "user_images", foreignKey: "user_id"});
  image_comment.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(image_comment, { as: "image_comments", foreignKey: "user_id"});
  image_comment.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(image_comment, { as: "created_by_image_comments", foreignKey: "created_by_id"});
  image_comment.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(image_comment, { as: "last_modified_by_image_comments", foreignKey: "last_modified_by_id"});
  image_feedback.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(image_feedback, { as: "image_feedbacks", foreignKey: "user_id"});
  image_feedback.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(image_feedback, { as: "created_by_image_feedbacks", foreignKey: "created_by_id"});
  image_feedback.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(image_feedback, { as: "last_modified_by_image_feedbacks", foreignKey: "last_modified_by_id"});
  image_likers.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(image_likers, { as: "image_likers", foreignKey: "user_id"});
  image_rating.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(image_rating, { as: "image_ratings", foreignKey: "user_id"});
  image_rating.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(image_rating, { as: "created_by_image_ratings", foreignKey: "created_by_id"});
  image_rating.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(image_rating, { as: "last_modified_by_image_ratings", foreignKey: "last_modified_by_id"});
  item_bid.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(item_bid, { as: "item_bids", foreignKey: "last_modified_by_id"});
  item_bid.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(item_bid, { as: "created_by_item_bids", foreignKey: "created_by_id"});
  item_license.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(item_license, { as: "item_licenses", foreignKey: "created_by_id"});
  item_license.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(item_license, { as: "last_modified_by_item_licenses", foreignKey: "last_modified_by_id"});
  master_type.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(master_type, { as: "master_types", foreignKey: "created_by_id"});
  master_type.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(master_type, { as: "last_modified_by_master_types", foreignKey: "last_modified_by_id"});
  master_value.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(master_value, { as: "master_values", foreignKey: "created_by_id"});
  master_value.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(master_value, { as: "last_modified_by_master_values", foreignKey: "last_modified_by_id"});
  password_reset_token.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(password_reset_token, { as: "password_reset_tokens", foreignKey: "created_by_id"});
  password_reset_token.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(password_reset_token, { as: "user_password_reset_tokens", foreignKey: "user_id"});
  password_reset_token.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(password_reset_token, { as: "last_modified_by_password_reset_tokens", foreignKey: "last_modified_by_id"});
  pay_credit_card.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(pay_credit_card, { as: "pay_credit_cards", foreignKey: "created_by_id"});
  pay_credit_card.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(pay_credit_card, { as: "last_modified_by_pay_credit_cards", foreignKey: "last_modified_by_id"});
  pay_payment.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(pay_payment, { as: "pay_payments", foreignKey: "last_modified_by_id"});
  pay_payment.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(pay_payment, { as: "created_by_pay_payments", foreignKey: "created_by_id"});
  perm_activity.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(perm_activity, { as: "perm_activities", foreignKey: "created_by_id"});
  perm_activity.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(perm_activity, { as: "last_modified_by_perm_activities", foreignKey: "last_modified_by_id"});
  perm_role.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(perm_role, { as: "perm_roles", foreignKey: "last_modified_by_id"});
  perm_role.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(perm_role, { as: "created_by_perm_roles", foreignKey: "created_by_id"});
  pgm_answers.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(pgm_answers, { as: "pgm_answers", foreignKey: "last_modified_by_id"});
  pgm_answers.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(pgm_answers, { as: "created_by_pgm_answers", foreignKey: "created_by_id"});
  pgm_judge.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(pgm_judge, { as: "pgm_judges", foreignKey: "last_modified_by_id"});
  pgm_judge.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(pgm_judge, { as: "created_by_pgm_judges", foreignKey: "created_by_id"});
  pgm_judge.belongsTo(user, { as: "judge", foreignKey: "judge_id"});
  user.hasMany(pgm_judge, { as: "judge_pgm_judges", foreignKey: "judge_id"});
  pgm_quest.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(pgm_quest, { as: "pgm_quests", foreignKey: "created_by_id"});
  pgm_quest.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(pgm_quest, { as: "last_modified_by_pgm_quests", foreignKey: "last_modified_by_id"});
  pgm_rating.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(pgm_rating, { as: "pgm_ratings", foreignKey: "user_id"});
  pgm_rating.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(pgm_rating, { as: "last_modified_by_pgm_ratings", foreignKey: "last_modified_by_id"});
  pgm_rating.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(pgm_rating, { as: "created_by_pgm_ratings", foreignKey: "created_by_id"});
  pgm_refs.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(pgm_refs, { as: "pgm_refs", foreignKey: "created_by_id"});
  pgm_refs.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(pgm_refs, { as: "last_modified_by_pgm_refs", foreignKey: "last_modified_by_id"});
  pgm_submission.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(pgm_submission, { as: "pgm_submissions", foreignKey: "created_by_id"});
  pgm_submission.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(pgm_submission, { as: "last_modified_by_pgm_submissions", foreignKey: "last_modified_by_id"});
  sch_class.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(sch_class, { as: "sch_classes", foreignKey: "created_by_id"});
  sch_class.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(sch_class, { as: "last_modified_by_sch_classes", foreignKey: "last_modified_by_id"});
  sch_course.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(sch_course, { as: "sch_courses", foreignKey: "last_modified_by_id"});
  sch_course.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(sch_course, { as: "created_by_sch_courses", foreignKey: "created_by_id"});
  sch_dept.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(sch_dept, { as: "sch_depts", foreignKey: "created_by_id"});
  sch_dept.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(sch_dept, { as: "last_modified_by_sch_depts", foreignKey: "last_modified_by_id"});
  sch_instructor.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(sch_instructor, { as: "sch_instructors", foreignKey: "created_by_id"});
  sch_instructor.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(sch_instructor, { as: "last_modified_by_sch_instructors", foreignKey: "last_modified_by_id"});
  sch_school.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(sch_school, { as: "sch_schools", foreignKey: "created_by_id"});
  sch_school.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(sch_school, { as: "last_modified_by_sch_schools", foreignKey: "last_modified_by_id"});
  sch_student.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(sch_student, { as: "sch_students", foreignKey: "last_modified_by_id"});
  sch_student.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(sch_student, { as: "created_by_sch_students", foreignKey: "created_by_id"});
  shipment.belongsTo(user, { as: "buyer", foreignKey: "buyer_id"});
  user.hasMany(shipment, { as: "shipments", foreignKey: "buyer_id"});
  shipment.belongsTo(user, { as: "seller", foreignKey: "seller_id"});
  user.hasMany(shipment, { as: "seller_shipments", foreignKey: "seller_id"});
  shipping_details.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(shipping_details, { as: "shipping_details", foreignKey: "created_by_id"});
  shipping_details.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(shipping_details, { as: "user_shipping_details", foreignKey: "user_id"});
  shipping_details.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(shipping_details, { as: "last_modified_by_shipping_details", foreignKey: "last_modified_by_id"});
  stu_class.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(stu_class, { as: "stu_classes", foreignKey: "last_modified_by_id"});
  stu_class.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(stu_class, { as: "created_by_stu_classes", foreignKey: "created_by_id"});
  stu_list.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(stu_list, { as: "stu_lists", foreignKey: "last_modified_by_id"});
  stu_list.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(stu_list, { as: "created_by_stu_lists", foreignKey: "created_by_id"});
  stu_receipt.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(stu_receipt, { as: "stu_receipts", foreignKey: "created_by_id"});
  stu_receipt.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(stu_receipt, { as: "last_modified_by_stu_receipts", foreignKey: "last_modified_by_id"});
  stu_regist.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(stu_regist, { as: "stu_regists", foreignKey: "created_by_id"});
  stu_regist.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(stu_regist, { as: "last_modified_by_stu_regists", foreignKey: "last_modified_by_id"});
  type.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(type, { as: "types", foreignKey: "created_by_id"});
  type.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(type, { as: "last_modified_by_types", foreignKey: "last_modified_by_id"});
  upload.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(upload, { as: "uploads", foreignKey: "created_by_id"});
  upload.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(upload, { as: "last_modified_by_uploads", foreignKey: "last_modified_by_id"});
  user_biography.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(user_biography, { as: "user_biographies", foreignKey: "last_modified_by_id"});
  user_biography.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(user_biography, { as: "created_by_user_biographies", foreignKey: "created_by_id"});
  user_friends.belongsTo(user, { as: "friend", foreignKey: "friend_id"});
  user.hasMany(user_friends, { as: "user_friends", foreignKey: "friend_id"});
  user_friends.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_friends, { as: "user_user_friends", foreignKey: "user_id"});
  user_roles.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_roles, { as: "user_roles", foreignKey: "user_id"});
  video.belongsTo(user, { as: "last_modified_by", foreignKey: "last_modified_by_id"});
  user.hasMany(video, { as: "videos", foreignKey: "last_modified_by_id"});
  video.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(video, { as: "user_videos", foreignKey: "user_id"});
  video.belongsTo(user, { as: "created_by", foreignKey: "created_by_id"});
  user.hasMany(video, { as: "created_by_videos", foreignKey: "created_by_id"});
  user_biography_affiliations.belongsTo(user_biography, { as: "user_biography", foreignKey: "user_biography_id"});
  user_biography.hasMany(user_biography_affiliations, { as: "user_biography_affiliations", foreignKey: "user_biography_id"});
  user_biography_awards_and_honors.belongsTo(user_biography, { as: "user_biography", foreignKey: "user_biography_id"});
  user_biography.hasMany(user_biography_awards_and_honors, { as: "user_biography_awards_and_honors", foreignKey: "user_biography_id"});
  user_biography_education.belongsTo(user_biography, { as: "user_biography", foreignKey: "user_biography_id"});
  user_biography.hasMany(user_biography_education, { as: "user_biography_educations", foreignKey: "user_biography_id"});
  user_biography_exhibitions.belongsTo(user_biography, { as: "user_biography", foreignKey: "user_biography_id"});
  user_biography.hasMany(user_biography_exhibitions, { as: "user_biography_exhibitions", foreignKey: "user_biography_id"});
  user_biography_publications.belongsTo(user_biography, { as: "user_biography", foreignKey: "user_biography_id"});
  user_biography.hasMany(user_biography_publications, { as: "user_biography_publications", foreignKey: "user_biography_id"});
  video_tags.belongsTo(video, { as: "video", foreignKey: "video_id"});
  video.hasMany(video_tags, { as: "video_tags", foreignKey: "video_id"});
  video_viewers.belongsTo(video, { as: "video", foreignKey: "video_id"});
  video.hasMany(video_viewers, { as: "video_viewers", foreignKey: "video_id"});

  return {
    DATABASECHANGELOG: DATABASECHANGELOG,
    DATABASECHANGELOGLOCK: DATABASECHANGELOGLOCK,
    SequelizeMeta: SequelizeMeta,
    affiliation: affiliation,
    album: album,
    album_feedback: album_feedback,
    album_images: album_images,
    album_rating: album_rating,
    application_event: application_event,
    avatar: avatar,
    bid: bid,
    billing_details: billing_details,
    cart_con_option: cart_con_option,
    category: category,
    credit_card: credit_card,
    ent_address: ent_address,
    ent_bill_add: ent_bill_add,
    ent_contact: ent_contact,
    ent_loc: ent_loc,
    ent_order_point: ent_order_point,
    ent_org: ent_org,
    evt_accesscode: evt_accesscode,
    evt_att_add: evt_att_add,
    evt_att_ans: evt_att_ans,
    evt_att_profile: evt_att_profile,
    evt_att_team: evt_att_team,
    evt_attendee: evt_attendee,
    evt_barcode: evt_barcode,
    evt_discount: evt_discount,
    evt_organizer: evt_organizer,
    evt_prog_cat: evt_prog_cat,
    evt_prog_fmt: evt_prog_fmt,
    evt_program: evt_program,
    evt_schedule: evt_schedule,
    evt_tkt_class: evt_tkt_class,
    evt_venue: evt_venue,
    hibernate_sequence: hibernate_sequence,
    image: image,
    image_comment: image_comment,
    image_feedback: image_feedback,
    image_likers: image_likers,
    image_rating: image_rating,
    image_tags: image_tags,
    image_viewers: image_viewers,
    item_bid: item_bid,
    item_bid_bids: item_bid_bids,
    item_bid_shipment: item_bid_shipment,
    item_license: item_license,
    master_type: master_type,
    master_value: master_value,
    medium_users: medium_users,
    password_reset_token: password_reset_token,
    pay_credit_card: pay_credit_card,
    pay_payment: pay_payment,
    perm_activity: perm_activity,
    perm_client: perm_client,
    perm_oauth_code: perm_oauth_code,
    perm_oauth_token: perm_oauth_token,
    perm_role: perm_role,
    pgm_answers: pgm_answers,
    pgm_judge: pgm_judge,
    pgm_quest: pgm_quest,
    pgm_rating: pgm_rating,
    pgm_refs: pgm_refs,
    pgm_submission: pgm_submission,
    role_activities: role_activities,
    sch_class: sch_class,
    sch_course: sch_course,
    sch_dept: sch_dept,
    sch_enroll: sch_enroll,
    sch_instructor: sch_instructor,
    sch_school: sch_school,
    sch_student: sch_student,
    schedule_recurrence: schedule_recurrence,
    shipment: shipment,
    shipping_details: shipping_details,
    stu_class: stu_class,
    stu_list: stu_list,
    stu_receipt: stu_receipt,
    stu_regist: stu_regist,
    test_ADDRESSES: test_ADDRESSES,
    test_USERS: test_USERS,
    time_line: time_line,
    type: type,
    upload: upload,
    user: user,
    user_biography: user_biography,
    user_biography_affiliations: user_biography_affiliations,
    user_biography_awards_and_honors: user_biography_awards_and_honors,
    user_biography_education: user_biography_education,
    user_biography_exhibitions: user_biography_exhibitions,
    user_biography_publications: user_biography_publications,
    user_friends: user_friends,
    user_roles: user_roles,
    video: video,
    video_tags: video_tags,
    video_viewers: video_viewers,
  };
}
