import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { affiliation, affiliationId } from './affiliation';
import type { album, albumId } from './album';
import type { album_feedback, album_feedbackId } from './album_feedback';
import type { album_rating, album_ratingId } from './album_rating';
import type { application_event, application_eventId } from './application_event';
import type { avatar, avatarId } from './avatar';
import type { bid, bidId } from './bid';
import type { billing_details, billing_detailsId } from './billing_details';
import type { cart_con_option, cart_con_optionId } from './cart_con_option';
import type { category, categoryId } from './category';
import type { ent_address, ent_addressId } from './ent_address';
import type { ent_bill_add, ent_bill_addId } from './ent_bill_add';
import type { ent_contact, ent_contactId } from './ent_contact';
import type { ent_loc, ent_locId } from './ent_loc';
import type { ent_order_point, ent_order_pointId } from './ent_order_point';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_accesscode, evt_accesscodeId } from './evt_accesscode';
import type { evt_att_add, evt_att_addId } from './evt_att_add';
import type { evt_att_ans, evt_att_ansId } from './evt_att_ans';
import type { evt_att_profile, evt_att_profileId } from './evt_att_profile';
import type { evt_att_team, evt_att_teamId } from './evt_att_team';
import type { evt_attendee, evt_attendeeId } from './evt_attendee';
import type { evt_barcode, evt_barcodeId } from './evt_barcode';
import type { evt_discount, evt_discountId } from './evt_discount';
import type { evt_organizer, evt_organizerId } from './evt_organizer';
import type { evt_prog_cat, evt_prog_catId } from './evt_prog_cat';
import type { evt_prog_fmt, evt_prog_fmtId } from './evt_prog_fmt';
import type { evt_program, evt_programId } from './evt_program';
import type { evt_schedule, evt_scheduleId } from './evt_schedule';
import type { evt_tkt_class, evt_tkt_classId } from './evt_tkt_class';
import type { evt_venue, evt_venueId } from './evt_venue';
import type { image, imageId } from './image';
import type { image_comment, image_commentId } from './image_comment';
import type { image_feedback, image_feedbackId } from './image_feedback';
import type { image_likers, image_likersId } from './image_likers';
import type { image_rating, image_ratingId } from './image_rating';
import type { item_bid, item_bidId } from './item_bid';
import type { item_license, item_licenseId } from './item_license';
import type { master_type, master_typeId } from './master_type';
import type { master_value, master_valueId } from './master_value';
import type { password_reset_token, password_reset_tokenId } from './password_reset_token';
import type { pay_credit_card, pay_credit_cardId } from './pay_credit_card';
import type { pay_payment, pay_paymentId } from './pay_payment';
import type { perm_activity, perm_activityId } from './perm_activity';
import type { perm_role, perm_roleId } from './perm_role';
import type { pgm_answers, pgm_answersId } from './pgm_answers';
import type { pgm_judge, pgm_judgeId } from './pgm_judge';
import type { pgm_quest, pgm_questId } from './pgm_quest';
import type { pgm_rating, pgm_ratingId } from './pgm_rating';
import type { pgm_refs, pgm_refsId } from './pgm_refs';
import type { pgm_submission, pgm_submissionId } from './pgm_submission';
import type { sch_class, sch_classId } from './sch_class';
import type { sch_course, sch_courseId } from './sch_course';
import type { sch_dept, sch_deptId } from './sch_dept';
import type { sch_instructor, sch_instructorId } from './sch_instructor';
import type { sch_school, sch_schoolId } from './sch_school';
import type { sch_student, sch_studentId } from './sch_student';
import type { shipment, shipmentId } from './shipment';
import type { shipping_details, shipping_detailsId } from './shipping_details';
import type { stu_class, stu_classId } from './stu_class';
import type { stu_list, stu_listId } from './stu_list';
import type { stu_receipt, stu_receiptId } from './stu_receipt';
import type { stu_regist, stu_registId } from './stu_regist';
import type { type, typeId } from './type';
import type { upload, uploadId } from './upload';
import type { user_biography, user_biographyId } from './user_biography';
import type { user_friends, user_friendsId } from './user_friends';
import type { user_roles, user_rolesId } from './user_roles';
import type { video, videoId } from './video';

export interface userAttributes {
  id: number;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  art_count: number;
  birth_date?: Date;
  city?: string;
  country?: string;
  email?: string;
  first_name?: string;
  followers_count: number;
  friends_count: number;
  invite_accepted: boolean;
  invite_pending: boolean;
  last_name?: string;
  login_name?: string;
  password?: string;
  password_expiry_date?: Date;
  phone?: string;
  state?: string;
  stripe_id?: string;
  subscription_id?: string;
  upgradeeop?: Date;
  upgrade_expiry?: Date;
  upgrade_type: number;
  upload_limit: number;
  upload_limit_expiry?: Date;
  url?: string;
  user_pic?: string;
  user_thumb?: string;
  views_count: number;
  avatar_id?: number;
  contact_id?: number;
  cover_id?: number;
  organization_id?: number;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes = "description" | "display_name" | "name" | "status" | "birth_date" | "city" | "country" | "email" | "first_name" | "last_name" | "login_name" | "password" | "password_expiry_date" | "phone" | "state" | "stripe_id" | "subscription_id" | "upgradeeop" | "upgrade_expiry" | "upload_limit_expiry" | "url" | "user_pic" | "user_thumb" | "avatar_id" | "contact_id" | "cover_id" | "organization_id";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: number;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  art_count!: number;
  birth_date?: Date;
  city?: string;
  country?: string;
  email?: string;
  first_name?: string;
  followers_count!: number;
  friends_count!: number;
  invite_accepted!: boolean;
  invite_pending!: boolean;
  last_name?: string;
  login_name?: string;
  password?: string;
  password_expiry_date?: Date;
  phone?: string;
  state?: string;
  stripe_id?: string;
  subscription_id?: string;
  upgradeeop?: Date;
  upgrade_expiry?: Date;
  upgrade_type!: number;
  upload_limit!: number;
  upload_limit_expiry?: Date;
  url?: string;
  user_pic?: string;
  user_thumb?: string;
  views_count!: number;
  avatar_id?: number;
  contact_id?: number;
  cover_id?: number;
  organization_id?: number;

  // user belongsTo ent_contact via contact_id
  contact!: ent_contact;
  getContact!: Sequelize.BelongsToGetAssociationMixin<ent_contact>;
  setContact!: Sequelize.BelongsToSetAssociationMixin<ent_contact, ent_contactId>;
  createContact!: Sequelize.BelongsToCreateAssociationMixin<ent_contact>;
  // user belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // user belongsTo upload via cover_id
  cover!: upload;
  getCover!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setCover!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createCover!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // user belongsTo upload via avatar_id
  avatar_upload!: upload;
  getAvatar_upload!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setAvatar_upload!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createAvatar_upload!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // user hasMany affiliation via last_modified_by_id
  affiliations!: affiliation[];
  getAffiliations!: Sequelize.HasManyGetAssociationsMixin<affiliation>;
  setAffiliations!: Sequelize.HasManySetAssociationsMixin<affiliation, affiliationId>;
  addAffiliation!: Sequelize.HasManyAddAssociationMixin<affiliation, affiliationId>;
  addAffiliations!: Sequelize.HasManyAddAssociationsMixin<affiliation, affiliationId>;
  createAffiliation!: Sequelize.HasManyCreateAssociationMixin<affiliation>;
  removeAffiliation!: Sequelize.HasManyRemoveAssociationMixin<affiliation, affiliationId>;
  removeAffiliations!: Sequelize.HasManyRemoveAssociationsMixin<affiliation, affiliationId>;
  hasAffiliation!: Sequelize.HasManyHasAssociationMixin<affiliation, affiliationId>;
  hasAffiliations!: Sequelize.HasManyHasAssociationsMixin<affiliation, affiliationId>;
  countAffiliations!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany affiliation via created_by_id
  created_by_affiliations!: affiliation[];
  getCreated_by_affiliations!: Sequelize.HasManyGetAssociationsMixin<affiliation>;
  setCreated_by_affiliations!: Sequelize.HasManySetAssociationsMixin<affiliation, affiliationId>;
  addCreated_by_affiliation!: Sequelize.HasManyAddAssociationMixin<affiliation, affiliationId>;
  addCreated_by_affiliations!: Sequelize.HasManyAddAssociationsMixin<affiliation, affiliationId>;
  createCreated_by_affiliation!: Sequelize.HasManyCreateAssociationMixin<affiliation>;
  removeCreated_by_affiliation!: Sequelize.HasManyRemoveAssociationMixin<affiliation, affiliationId>;
  removeCreated_by_affiliations!: Sequelize.HasManyRemoveAssociationsMixin<affiliation, affiliationId>;
  hasCreated_by_affiliation!: Sequelize.HasManyHasAssociationMixin<affiliation, affiliationId>;
  hasCreated_by_affiliations!: Sequelize.HasManyHasAssociationsMixin<affiliation, affiliationId>;
  countCreated_by_affiliations!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany album via last_modified_by_id
  albums!: album[];
  getAlbums!: Sequelize.HasManyGetAssociationsMixin<album>;
  setAlbums!: Sequelize.HasManySetAssociationsMixin<album, albumId>;
  addAlbum!: Sequelize.HasManyAddAssociationMixin<album, albumId>;
  addAlbums!: Sequelize.HasManyAddAssociationsMixin<album, albumId>;
  createAlbum!: Sequelize.HasManyCreateAssociationMixin<album>;
  removeAlbum!: Sequelize.HasManyRemoveAssociationMixin<album, albumId>;
  removeAlbums!: Sequelize.HasManyRemoveAssociationsMixin<album, albumId>;
  hasAlbum!: Sequelize.HasManyHasAssociationMixin<album, albumId>;
  hasAlbums!: Sequelize.HasManyHasAssociationsMixin<album, albumId>;
  countAlbums!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany album via created_by_id
  created_by_albums!: album[];
  getCreated_by_albums!: Sequelize.HasManyGetAssociationsMixin<album>;
  setCreated_by_albums!: Sequelize.HasManySetAssociationsMixin<album, albumId>;
  addCreated_by_album!: Sequelize.HasManyAddAssociationMixin<album, albumId>;
  addCreated_by_albums!: Sequelize.HasManyAddAssociationsMixin<album, albumId>;
  createCreated_by_album!: Sequelize.HasManyCreateAssociationMixin<album>;
  removeCreated_by_album!: Sequelize.HasManyRemoveAssociationMixin<album, albumId>;
  removeCreated_by_albums!: Sequelize.HasManyRemoveAssociationsMixin<album, albumId>;
  hasCreated_by_album!: Sequelize.HasManyHasAssociationMixin<album, albumId>;
  hasCreated_by_albums!: Sequelize.HasManyHasAssociationsMixin<album, albumId>;
  countCreated_by_albums!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany album_feedback via user_id
  album_feedbacks!: album_feedback[];
  getAlbum_feedbacks!: Sequelize.HasManyGetAssociationsMixin<album_feedback>;
  setAlbum_feedbacks!: Sequelize.HasManySetAssociationsMixin<album_feedback, album_feedbackId>;
  addAlbum_feedback!: Sequelize.HasManyAddAssociationMixin<album_feedback, album_feedbackId>;
  addAlbum_feedbacks!: Sequelize.HasManyAddAssociationsMixin<album_feedback, album_feedbackId>;
  createAlbum_feedback!: Sequelize.HasManyCreateAssociationMixin<album_feedback>;
  removeAlbum_feedback!: Sequelize.HasManyRemoveAssociationMixin<album_feedback, album_feedbackId>;
  removeAlbum_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<album_feedback, album_feedbackId>;
  hasAlbum_feedback!: Sequelize.HasManyHasAssociationMixin<album_feedback, album_feedbackId>;
  hasAlbum_feedbacks!: Sequelize.HasManyHasAssociationsMixin<album_feedback, album_feedbackId>;
  countAlbum_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany album_feedback via last_modified_by_id
  last_modified_by_album_feedbacks!: album_feedback[];
  getLast_modified_by_album_feedbacks!: Sequelize.HasManyGetAssociationsMixin<album_feedback>;
  setLast_modified_by_album_feedbacks!: Sequelize.HasManySetAssociationsMixin<album_feedback, album_feedbackId>;
  addLast_modified_by_album_feedback!: Sequelize.HasManyAddAssociationMixin<album_feedback, album_feedbackId>;
  addLast_modified_by_album_feedbacks!: Sequelize.HasManyAddAssociationsMixin<album_feedback, album_feedbackId>;
  createLast_modified_by_album_feedback!: Sequelize.HasManyCreateAssociationMixin<album_feedback>;
  removeLast_modified_by_album_feedback!: Sequelize.HasManyRemoveAssociationMixin<album_feedback, album_feedbackId>;
  removeLast_modified_by_album_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<album_feedback, album_feedbackId>;
  hasLast_modified_by_album_feedback!: Sequelize.HasManyHasAssociationMixin<album_feedback, album_feedbackId>;
  hasLast_modified_by_album_feedbacks!: Sequelize.HasManyHasAssociationsMixin<album_feedback, album_feedbackId>;
  countLast_modified_by_album_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany album_feedback via created_by_id
  created_by_album_feedbacks!: album_feedback[];
  getCreated_by_album_feedbacks!: Sequelize.HasManyGetAssociationsMixin<album_feedback>;
  setCreated_by_album_feedbacks!: Sequelize.HasManySetAssociationsMixin<album_feedback, album_feedbackId>;
  addCreated_by_album_feedback!: Sequelize.HasManyAddAssociationMixin<album_feedback, album_feedbackId>;
  addCreated_by_album_feedbacks!: Sequelize.HasManyAddAssociationsMixin<album_feedback, album_feedbackId>;
  createCreated_by_album_feedback!: Sequelize.HasManyCreateAssociationMixin<album_feedback>;
  removeCreated_by_album_feedback!: Sequelize.HasManyRemoveAssociationMixin<album_feedback, album_feedbackId>;
  removeCreated_by_album_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<album_feedback, album_feedbackId>;
  hasCreated_by_album_feedback!: Sequelize.HasManyHasAssociationMixin<album_feedback, album_feedbackId>;
  hasCreated_by_album_feedbacks!: Sequelize.HasManyHasAssociationsMixin<album_feedback, album_feedbackId>;
  countCreated_by_album_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany album_rating via user_id
  album_ratings!: album_rating[];
  getAlbum_ratings!: Sequelize.HasManyGetAssociationsMixin<album_rating>;
  setAlbum_ratings!: Sequelize.HasManySetAssociationsMixin<album_rating, album_ratingId>;
  addAlbum_rating!: Sequelize.HasManyAddAssociationMixin<album_rating, album_ratingId>;
  addAlbum_ratings!: Sequelize.HasManyAddAssociationsMixin<album_rating, album_ratingId>;
  createAlbum_rating!: Sequelize.HasManyCreateAssociationMixin<album_rating>;
  removeAlbum_rating!: Sequelize.HasManyRemoveAssociationMixin<album_rating, album_ratingId>;
  removeAlbum_ratings!: Sequelize.HasManyRemoveAssociationsMixin<album_rating, album_ratingId>;
  hasAlbum_rating!: Sequelize.HasManyHasAssociationMixin<album_rating, album_ratingId>;
  hasAlbum_ratings!: Sequelize.HasManyHasAssociationsMixin<album_rating, album_ratingId>;
  countAlbum_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany album_rating via last_modified_by_id
  last_modified_by_album_ratings!: album_rating[];
  getLast_modified_by_album_ratings!: Sequelize.HasManyGetAssociationsMixin<album_rating>;
  setLast_modified_by_album_ratings!: Sequelize.HasManySetAssociationsMixin<album_rating, album_ratingId>;
  addLast_modified_by_album_rating!: Sequelize.HasManyAddAssociationMixin<album_rating, album_ratingId>;
  addLast_modified_by_album_ratings!: Sequelize.HasManyAddAssociationsMixin<album_rating, album_ratingId>;
  createLast_modified_by_album_rating!: Sequelize.HasManyCreateAssociationMixin<album_rating>;
  removeLast_modified_by_album_rating!: Sequelize.HasManyRemoveAssociationMixin<album_rating, album_ratingId>;
  removeLast_modified_by_album_ratings!: Sequelize.HasManyRemoveAssociationsMixin<album_rating, album_ratingId>;
  hasLast_modified_by_album_rating!: Sequelize.HasManyHasAssociationMixin<album_rating, album_ratingId>;
  hasLast_modified_by_album_ratings!: Sequelize.HasManyHasAssociationsMixin<album_rating, album_ratingId>;
  countLast_modified_by_album_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany album_rating via created_by_id
  created_by_album_ratings!: album_rating[];
  getCreated_by_album_ratings!: Sequelize.HasManyGetAssociationsMixin<album_rating>;
  setCreated_by_album_ratings!: Sequelize.HasManySetAssociationsMixin<album_rating, album_ratingId>;
  addCreated_by_album_rating!: Sequelize.HasManyAddAssociationMixin<album_rating, album_ratingId>;
  addCreated_by_album_ratings!: Sequelize.HasManyAddAssociationsMixin<album_rating, album_ratingId>;
  createCreated_by_album_rating!: Sequelize.HasManyCreateAssociationMixin<album_rating>;
  removeCreated_by_album_rating!: Sequelize.HasManyRemoveAssociationMixin<album_rating, album_ratingId>;
  removeCreated_by_album_ratings!: Sequelize.HasManyRemoveAssociationsMixin<album_rating, album_ratingId>;
  hasCreated_by_album_rating!: Sequelize.HasManyHasAssociationMixin<album_rating, album_ratingId>;
  hasCreated_by_album_ratings!: Sequelize.HasManyHasAssociationsMixin<album_rating, album_ratingId>;
  countCreated_by_album_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany application_event via last_modified_by_id
  application_events!: application_event[];
  getApplication_events!: Sequelize.HasManyGetAssociationsMixin<application_event>;
  setApplication_events!: Sequelize.HasManySetAssociationsMixin<application_event, application_eventId>;
  addApplication_event!: Sequelize.HasManyAddAssociationMixin<application_event, application_eventId>;
  addApplication_events!: Sequelize.HasManyAddAssociationsMixin<application_event, application_eventId>;
  createApplication_event!: Sequelize.HasManyCreateAssociationMixin<application_event>;
  removeApplication_event!: Sequelize.HasManyRemoveAssociationMixin<application_event, application_eventId>;
  removeApplication_events!: Sequelize.HasManyRemoveAssociationsMixin<application_event, application_eventId>;
  hasApplication_event!: Sequelize.HasManyHasAssociationMixin<application_event, application_eventId>;
  hasApplication_events!: Sequelize.HasManyHasAssociationsMixin<application_event, application_eventId>;
  countApplication_events!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany application_event via created_by_id
  created_by_application_events!: application_event[];
  getCreated_by_application_events!: Sequelize.HasManyGetAssociationsMixin<application_event>;
  setCreated_by_application_events!: Sequelize.HasManySetAssociationsMixin<application_event, application_eventId>;
  addCreated_by_application_event!: Sequelize.HasManyAddAssociationMixin<application_event, application_eventId>;
  addCreated_by_application_events!: Sequelize.HasManyAddAssociationsMixin<application_event, application_eventId>;
  createCreated_by_application_event!: Sequelize.HasManyCreateAssociationMixin<application_event>;
  removeCreated_by_application_event!: Sequelize.HasManyRemoveAssociationMixin<application_event, application_eventId>;
  removeCreated_by_application_events!: Sequelize.HasManyRemoveAssociationsMixin<application_event, application_eventId>;
  hasCreated_by_application_event!: Sequelize.HasManyHasAssociationMixin<application_event, application_eventId>;
  hasCreated_by_application_events!: Sequelize.HasManyHasAssociationsMixin<application_event, application_eventId>;
  countCreated_by_application_events!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany avatar via created_by_id
  avatars!: avatar[];
  getAvatars!: Sequelize.HasManyGetAssociationsMixin<avatar>;
  setAvatars!: Sequelize.HasManySetAssociationsMixin<avatar, avatarId>;
  addAvatar!: Sequelize.HasManyAddAssociationMixin<avatar, avatarId>;
  addAvatars!: Sequelize.HasManyAddAssociationsMixin<avatar, avatarId>;
  createAvatar!: Sequelize.HasManyCreateAssociationMixin<avatar>;
  removeAvatar!: Sequelize.HasManyRemoveAssociationMixin<avatar, avatarId>;
  removeAvatars!: Sequelize.HasManyRemoveAssociationsMixin<avatar, avatarId>;
  hasAvatar!: Sequelize.HasManyHasAssociationMixin<avatar, avatarId>;
  hasAvatars!: Sequelize.HasManyHasAssociationsMixin<avatar, avatarId>;
  countAvatars!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany avatar via last_modified_by_id
  last_modified_by_avatars!: avatar[];
  getLast_modified_by_avatars!: Sequelize.HasManyGetAssociationsMixin<avatar>;
  setLast_modified_by_avatars!: Sequelize.HasManySetAssociationsMixin<avatar, avatarId>;
  addLast_modified_by_avatar!: Sequelize.HasManyAddAssociationMixin<avatar, avatarId>;
  addLast_modified_by_avatars!: Sequelize.HasManyAddAssociationsMixin<avatar, avatarId>;
  createLast_modified_by_avatar!: Sequelize.HasManyCreateAssociationMixin<avatar>;
  removeLast_modified_by_avatar!: Sequelize.HasManyRemoveAssociationMixin<avatar, avatarId>;
  removeLast_modified_by_avatars!: Sequelize.HasManyRemoveAssociationsMixin<avatar, avatarId>;
  hasLast_modified_by_avatar!: Sequelize.HasManyHasAssociationMixin<avatar, avatarId>;
  hasLast_modified_by_avatars!: Sequelize.HasManyHasAssociationsMixin<avatar, avatarId>;
  countLast_modified_by_avatars!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany bid via created_by_id
  bids!: bid[];
  getBids!: Sequelize.HasManyGetAssociationsMixin<bid>;
  setBids!: Sequelize.HasManySetAssociationsMixin<bid, bidId>;
  addBid!: Sequelize.HasManyAddAssociationMixin<bid, bidId>;
  addBids!: Sequelize.HasManyAddAssociationsMixin<bid, bidId>;
  createBid!: Sequelize.HasManyCreateAssociationMixin<bid>;
  removeBid!: Sequelize.HasManyRemoveAssociationMixin<bid, bidId>;
  removeBids!: Sequelize.HasManyRemoveAssociationsMixin<bid, bidId>;
  hasBid!: Sequelize.HasManyHasAssociationMixin<bid, bidId>;
  hasBids!: Sequelize.HasManyHasAssociationsMixin<bid, bidId>;
  countBids!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany bid via last_modified_by_id
  last_modified_by_bids!: bid[];
  getLast_modified_by_bids!: Sequelize.HasManyGetAssociationsMixin<bid>;
  setLast_modified_by_bids!: Sequelize.HasManySetAssociationsMixin<bid, bidId>;
  addLast_modified_by_bid!: Sequelize.HasManyAddAssociationMixin<bid, bidId>;
  addLast_modified_by_bids!: Sequelize.HasManyAddAssociationsMixin<bid, bidId>;
  createLast_modified_by_bid!: Sequelize.HasManyCreateAssociationMixin<bid>;
  removeLast_modified_by_bid!: Sequelize.HasManyRemoveAssociationMixin<bid, bidId>;
  removeLast_modified_by_bids!: Sequelize.HasManyRemoveAssociationsMixin<bid, bidId>;
  hasLast_modified_by_bid!: Sequelize.HasManyHasAssociationMixin<bid, bidId>;
  hasLast_modified_by_bids!: Sequelize.HasManyHasAssociationsMixin<bid, bidId>;
  countLast_modified_by_bids!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany bid via bidder_id
  bidder_bids!: bid[];
  getBidder_bids!: Sequelize.HasManyGetAssociationsMixin<bid>;
  setBidder_bids!: Sequelize.HasManySetAssociationsMixin<bid, bidId>;
  addBidder_bid!: Sequelize.HasManyAddAssociationMixin<bid, bidId>;
  addBidder_bids!: Sequelize.HasManyAddAssociationsMixin<bid, bidId>;
  createBidder_bid!: Sequelize.HasManyCreateAssociationMixin<bid>;
  removeBidder_bid!: Sequelize.HasManyRemoveAssociationMixin<bid, bidId>;
  removeBidder_bids!: Sequelize.HasManyRemoveAssociationsMixin<bid, bidId>;
  hasBidder_bid!: Sequelize.HasManyHasAssociationMixin<bid, bidId>;
  hasBidder_bids!: Sequelize.HasManyHasAssociationsMixin<bid, bidId>;
  countBidder_bids!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany billing_details via last_modified_by_id
  billing_details!: billing_details[];
  getBilling_details!: Sequelize.HasManyGetAssociationsMixin<billing_details>;
  setBilling_details!: Sequelize.HasManySetAssociationsMixin<billing_details, billing_detailsId>;
  addBilling_detail!: Sequelize.HasManyAddAssociationMixin<billing_details, billing_detailsId>;
  addBilling_details!: Sequelize.HasManyAddAssociationsMixin<billing_details, billing_detailsId>;
  createBilling_detail!: Sequelize.HasManyCreateAssociationMixin<billing_details>;
  removeBilling_detail!: Sequelize.HasManyRemoveAssociationMixin<billing_details, billing_detailsId>;
  removeBilling_details!: Sequelize.HasManyRemoveAssociationsMixin<billing_details, billing_detailsId>;
  hasBilling_detail!: Sequelize.HasManyHasAssociationMixin<billing_details, billing_detailsId>;
  hasBilling_details!: Sequelize.HasManyHasAssociationsMixin<billing_details, billing_detailsId>;
  countBilling_details!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany billing_details via created_by_id
  created_by_billing_details!: billing_details[];
  getCreated_by_billing_details!: Sequelize.HasManyGetAssociationsMixin<billing_details>;
  setCreated_by_billing_details!: Sequelize.HasManySetAssociationsMixin<billing_details, billing_detailsId>;
  addCreated_by_billing_detail!: Sequelize.HasManyAddAssociationMixin<billing_details, billing_detailsId>;
  addCreated_by_billing_details!: Sequelize.HasManyAddAssociationsMixin<billing_details, billing_detailsId>;
  createCreated_by_billing_detail!: Sequelize.HasManyCreateAssociationMixin<billing_details>;
  removeCreated_by_billing_detail!: Sequelize.HasManyRemoveAssociationMixin<billing_details, billing_detailsId>;
  removeCreated_by_billing_details!: Sequelize.HasManyRemoveAssociationsMixin<billing_details, billing_detailsId>;
  hasCreated_by_billing_detail!: Sequelize.HasManyHasAssociationMixin<billing_details, billing_detailsId>;
  hasCreated_by_billing_details!: Sequelize.HasManyHasAssociationsMixin<billing_details, billing_detailsId>;
  countCreated_by_billing_details!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany billing_details via user_id
  user_billing_details!: billing_details[];
  getUser_billing_details!: Sequelize.HasManyGetAssociationsMixin<billing_details>;
  setUser_billing_details!: Sequelize.HasManySetAssociationsMixin<billing_details, billing_detailsId>;
  addUser_billing_detail!: Sequelize.HasManyAddAssociationMixin<billing_details, billing_detailsId>;
  addUser_billing_details!: Sequelize.HasManyAddAssociationsMixin<billing_details, billing_detailsId>;
  createUser_billing_detail!: Sequelize.HasManyCreateAssociationMixin<billing_details>;
  removeUser_billing_detail!: Sequelize.HasManyRemoveAssociationMixin<billing_details, billing_detailsId>;
  removeUser_billing_details!: Sequelize.HasManyRemoveAssociationsMixin<billing_details, billing_detailsId>;
  hasUser_billing_detail!: Sequelize.HasManyHasAssociationMixin<billing_details, billing_detailsId>;
  hasUser_billing_details!: Sequelize.HasManyHasAssociationsMixin<billing_details, billing_detailsId>;
  countUser_billing_details!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany cart_con_option via last_modified_by_id
  cart_con_options!: cart_con_option[];
  getCart_con_options!: Sequelize.HasManyGetAssociationsMixin<cart_con_option>;
  setCart_con_options!: Sequelize.HasManySetAssociationsMixin<cart_con_option, cart_con_optionId>;
  addCart_con_option!: Sequelize.HasManyAddAssociationMixin<cart_con_option, cart_con_optionId>;
  addCart_con_options!: Sequelize.HasManyAddAssociationsMixin<cart_con_option, cart_con_optionId>;
  createCart_con_option!: Sequelize.HasManyCreateAssociationMixin<cart_con_option>;
  removeCart_con_option!: Sequelize.HasManyRemoveAssociationMixin<cart_con_option, cart_con_optionId>;
  removeCart_con_options!: Sequelize.HasManyRemoveAssociationsMixin<cart_con_option, cart_con_optionId>;
  hasCart_con_option!: Sequelize.HasManyHasAssociationMixin<cart_con_option, cart_con_optionId>;
  hasCart_con_options!: Sequelize.HasManyHasAssociationsMixin<cart_con_option, cart_con_optionId>;
  countCart_con_options!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany cart_con_option via created_by_id
  created_by_cart_con_options!: cart_con_option[];
  getCreated_by_cart_con_options!: Sequelize.HasManyGetAssociationsMixin<cart_con_option>;
  setCreated_by_cart_con_options!: Sequelize.HasManySetAssociationsMixin<cart_con_option, cart_con_optionId>;
  addCreated_by_cart_con_option!: Sequelize.HasManyAddAssociationMixin<cart_con_option, cart_con_optionId>;
  addCreated_by_cart_con_options!: Sequelize.HasManyAddAssociationsMixin<cart_con_option, cart_con_optionId>;
  createCreated_by_cart_con_option!: Sequelize.HasManyCreateAssociationMixin<cart_con_option>;
  removeCreated_by_cart_con_option!: Sequelize.HasManyRemoveAssociationMixin<cart_con_option, cart_con_optionId>;
  removeCreated_by_cart_con_options!: Sequelize.HasManyRemoveAssociationsMixin<cart_con_option, cart_con_optionId>;
  hasCreated_by_cart_con_option!: Sequelize.HasManyHasAssociationMixin<cart_con_option, cart_con_optionId>;
  hasCreated_by_cart_con_options!: Sequelize.HasManyHasAssociationsMixin<cart_con_option, cart_con_optionId>;
  countCreated_by_cart_con_options!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany category via last_modified_by_id
  categories!: category[];
  getCategories!: Sequelize.HasManyGetAssociationsMixin<category>;
  setCategories!: Sequelize.HasManySetAssociationsMixin<category, categoryId>;
  addCategory!: Sequelize.HasManyAddAssociationMixin<category, categoryId>;
  addCategories!: Sequelize.HasManyAddAssociationsMixin<category, categoryId>;
  createCategory!: Sequelize.HasManyCreateAssociationMixin<category>;
  removeCategory!: Sequelize.HasManyRemoveAssociationMixin<category, categoryId>;
  removeCategories!: Sequelize.HasManyRemoveAssociationsMixin<category, categoryId>;
  hasCategory!: Sequelize.HasManyHasAssociationMixin<category, categoryId>;
  hasCategories!: Sequelize.HasManyHasAssociationsMixin<category, categoryId>;
  countCategories!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany category via created_by_id
  created_by_categories!: category[];
  getCreated_by_categories!: Sequelize.HasManyGetAssociationsMixin<category>;
  setCreated_by_categories!: Sequelize.HasManySetAssociationsMixin<category, categoryId>;
  addCreated_by_category!: Sequelize.HasManyAddAssociationMixin<category, categoryId>;
  addCreated_by_categories!: Sequelize.HasManyAddAssociationsMixin<category, categoryId>;
  createCreated_by_category!: Sequelize.HasManyCreateAssociationMixin<category>;
  removeCreated_by_category!: Sequelize.HasManyRemoveAssociationMixin<category, categoryId>;
  removeCreated_by_categories!: Sequelize.HasManyRemoveAssociationsMixin<category, categoryId>;
  hasCreated_by_category!: Sequelize.HasManyHasAssociationMixin<category, categoryId>;
  hasCreated_by_categories!: Sequelize.HasManyHasAssociationsMixin<category, categoryId>;
  countCreated_by_categories!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_address via last_modified_by_id
  ent_addresses!: ent_address[];
  getEnt_addresses!: Sequelize.HasManyGetAssociationsMixin<ent_address>;
  setEnt_addresses!: Sequelize.HasManySetAssociationsMixin<ent_address, ent_addressId>;
  addEnt_address!: Sequelize.HasManyAddAssociationMixin<ent_address, ent_addressId>;
  addEnt_addresses!: Sequelize.HasManyAddAssociationsMixin<ent_address, ent_addressId>;
  createEnt_address!: Sequelize.HasManyCreateAssociationMixin<ent_address>;
  removeEnt_address!: Sequelize.HasManyRemoveAssociationMixin<ent_address, ent_addressId>;
  removeEnt_addresses!: Sequelize.HasManyRemoveAssociationsMixin<ent_address, ent_addressId>;
  hasEnt_address!: Sequelize.HasManyHasAssociationMixin<ent_address, ent_addressId>;
  hasEnt_addresses!: Sequelize.HasManyHasAssociationsMixin<ent_address, ent_addressId>;
  countEnt_addresses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_address via created_by_id
  created_by_ent_addresses!: ent_address[];
  getCreated_by_ent_addresses!: Sequelize.HasManyGetAssociationsMixin<ent_address>;
  setCreated_by_ent_addresses!: Sequelize.HasManySetAssociationsMixin<ent_address, ent_addressId>;
  addCreated_by_ent_address!: Sequelize.HasManyAddAssociationMixin<ent_address, ent_addressId>;
  addCreated_by_ent_addresses!: Sequelize.HasManyAddAssociationsMixin<ent_address, ent_addressId>;
  createCreated_by_ent_address!: Sequelize.HasManyCreateAssociationMixin<ent_address>;
  removeCreated_by_ent_address!: Sequelize.HasManyRemoveAssociationMixin<ent_address, ent_addressId>;
  removeCreated_by_ent_addresses!: Sequelize.HasManyRemoveAssociationsMixin<ent_address, ent_addressId>;
  hasCreated_by_ent_address!: Sequelize.HasManyHasAssociationMixin<ent_address, ent_addressId>;
  hasCreated_by_ent_addresses!: Sequelize.HasManyHasAssociationsMixin<ent_address, ent_addressId>;
  countCreated_by_ent_addresses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_bill_add via created_by_id
  ent_bill_adds!: ent_bill_add[];
  getEnt_bill_adds!: Sequelize.HasManyGetAssociationsMixin<ent_bill_add>;
  setEnt_bill_adds!: Sequelize.HasManySetAssociationsMixin<ent_bill_add, ent_bill_addId>;
  addEnt_bill_add!: Sequelize.HasManyAddAssociationMixin<ent_bill_add, ent_bill_addId>;
  addEnt_bill_adds!: Sequelize.HasManyAddAssociationsMixin<ent_bill_add, ent_bill_addId>;
  createEnt_bill_add!: Sequelize.HasManyCreateAssociationMixin<ent_bill_add>;
  removeEnt_bill_add!: Sequelize.HasManyRemoveAssociationMixin<ent_bill_add, ent_bill_addId>;
  removeEnt_bill_adds!: Sequelize.HasManyRemoveAssociationsMixin<ent_bill_add, ent_bill_addId>;
  hasEnt_bill_add!: Sequelize.HasManyHasAssociationMixin<ent_bill_add, ent_bill_addId>;
  hasEnt_bill_adds!: Sequelize.HasManyHasAssociationsMixin<ent_bill_add, ent_bill_addId>;
  countEnt_bill_adds!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_bill_add via last_modified_by_id
  last_modified_by_ent_bill_adds!: ent_bill_add[];
  getLast_modified_by_ent_bill_adds!: Sequelize.HasManyGetAssociationsMixin<ent_bill_add>;
  setLast_modified_by_ent_bill_adds!: Sequelize.HasManySetAssociationsMixin<ent_bill_add, ent_bill_addId>;
  addLast_modified_by_ent_bill_add!: Sequelize.HasManyAddAssociationMixin<ent_bill_add, ent_bill_addId>;
  addLast_modified_by_ent_bill_adds!: Sequelize.HasManyAddAssociationsMixin<ent_bill_add, ent_bill_addId>;
  createLast_modified_by_ent_bill_add!: Sequelize.HasManyCreateAssociationMixin<ent_bill_add>;
  removeLast_modified_by_ent_bill_add!: Sequelize.HasManyRemoveAssociationMixin<ent_bill_add, ent_bill_addId>;
  removeLast_modified_by_ent_bill_adds!: Sequelize.HasManyRemoveAssociationsMixin<ent_bill_add, ent_bill_addId>;
  hasLast_modified_by_ent_bill_add!: Sequelize.HasManyHasAssociationMixin<ent_bill_add, ent_bill_addId>;
  hasLast_modified_by_ent_bill_adds!: Sequelize.HasManyHasAssociationsMixin<ent_bill_add, ent_bill_addId>;
  countLast_modified_by_ent_bill_adds!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_contact via created_by_id
  ent_contacts!: ent_contact[];
  getEnt_contacts!: Sequelize.HasManyGetAssociationsMixin<ent_contact>;
  setEnt_contacts!: Sequelize.HasManySetAssociationsMixin<ent_contact, ent_contactId>;
  addEnt_contact!: Sequelize.HasManyAddAssociationMixin<ent_contact, ent_contactId>;
  addEnt_contacts!: Sequelize.HasManyAddAssociationsMixin<ent_contact, ent_contactId>;
  createEnt_contact!: Sequelize.HasManyCreateAssociationMixin<ent_contact>;
  removeEnt_contact!: Sequelize.HasManyRemoveAssociationMixin<ent_contact, ent_contactId>;
  removeEnt_contacts!: Sequelize.HasManyRemoveAssociationsMixin<ent_contact, ent_contactId>;
  hasEnt_contact!: Sequelize.HasManyHasAssociationMixin<ent_contact, ent_contactId>;
  hasEnt_contacts!: Sequelize.HasManyHasAssociationsMixin<ent_contact, ent_contactId>;
  countEnt_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_contact via last_modified_by_id
  last_modified_by_ent_contacts!: ent_contact[];
  getLast_modified_by_ent_contacts!: Sequelize.HasManyGetAssociationsMixin<ent_contact>;
  setLast_modified_by_ent_contacts!: Sequelize.HasManySetAssociationsMixin<ent_contact, ent_contactId>;
  addLast_modified_by_ent_contact!: Sequelize.HasManyAddAssociationMixin<ent_contact, ent_contactId>;
  addLast_modified_by_ent_contacts!: Sequelize.HasManyAddAssociationsMixin<ent_contact, ent_contactId>;
  createLast_modified_by_ent_contact!: Sequelize.HasManyCreateAssociationMixin<ent_contact>;
  removeLast_modified_by_ent_contact!: Sequelize.HasManyRemoveAssociationMixin<ent_contact, ent_contactId>;
  removeLast_modified_by_ent_contacts!: Sequelize.HasManyRemoveAssociationsMixin<ent_contact, ent_contactId>;
  hasLast_modified_by_ent_contact!: Sequelize.HasManyHasAssociationMixin<ent_contact, ent_contactId>;
  hasLast_modified_by_ent_contacts!: Sequelize.HasManyHasAssociationsMixin<ent_contact, ent_contactId>;
  countLast_modified_by_ent_contacts!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_loc via created_by_id
  ent_locs!: ent_loc[];
  getEnt_locs!: Sequelize.HasManyGetAssociationsMixin<ent_loc>;
  setEnt_locs!: Sequelize.HasManySetAssociationsMixin<ent_loc, ent_locId>;
  addEnt_loc!: Sequelize.HasManyAddAssociationMixin<ent_loc, ent_locId>;
  addEnt_locs!: Sequelize.HasManyAddAssociationsMixin<ent_loc, ent_locId>;
  createEnt_loc!: Sequelize.HasManyCreateAssociationMixin<ent_loc>;
  removeEnt_loc!: Sequelize.HasManyRemoveAssociationMixin<ent_loc, ent_locId>;
  removeEnt_locs!: Sequelize.HasManyRemoveAssociationsMixin<ent_loc, ent_locId>;
  hasEnt_loc!: Sequelize.HasManyHasAssociationMixin<ent_loc, ent_locId>;
  hasEnt_locs!: Sequelize.HasManyHasAssociationsMixin<ent_loc, ent_locId>;
  countEnt_locs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_loc via last_modified_by_id
  last_modified_by_ent_locs!: ent_loc[];
  getLast_modified_by_ent_locs!: Sequelize.HasManyGetAssociationsMixin<ent_loc>;
  setLast_modified_by_ent_locs!: Sequelize.HasManySetAssociationsMixin<ent_loc, ent_locId>;
  addLast_modified_by_ent_loc!: Sequelize.HasManyAddAssociationMixin<ent_loc, ent_locId>;
  addLast_modified_by_ent_locs!: Sequelize.HasManyAddAssociationsMixin<ent_loc, ent_locId>;
  createLast_modified_by_ent_loc!: Sequelize.HasManyCreateAssociationMixin<ent_loc>;
  removeLast_modified_by_ent_loc!: Sequelize.HasManyRemoveAssociationMixin<ent_loc, ent_locId>;
  removeLast_modified_by_ent_locs!: Sequelize.HasManyRemoveAssociationsMixin<ent_loc, ent_locId>;
  hasLast_modified_by_ent_loc!: Sequelize.HasManyHasAssociationMixin<ent_loc, ent_locId>;
  hasLast_modified_by_ent_locs!: Sequelize.HasManyHasAssociationsMixin<ent_loc, ent_locId>;
  countLast_modified_by_ent_locs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_loc via owner_id
  owner_ent_locs!: ent_loc[];
  getOwner_ent_locs!: Sequelize.HasManyGetAssociationsMixin<ent_loc>;
  setOwner_ent_locs!: Sequelize.HasManySetAssociationsMixin<ent_loc, ent_locId>;
  addOwner_ent_loc!: Sequelize.HasManyAddAssociationMixin<ent_loc, ent_locId>;
  addOwner_ent_locs!: Sequelize.HasManyAddAssociationsMixin<ent_loc, ent_locId>;
  createOwner_ent_loc!: Sequelize.HasManyCreateAssociationMixin<ent_loc>;
  removeOwner_ent_loc!: Sequelize.HasManyRemoveAssociationMixin<ent_loc, ent_locId>;
  removeOwner_ent_locs!: Sequelize.HasManyRemoveAssociationsMixin<ent_loc, ent_locId>;
  hasOwner_ent_loc!: Sequelize.HasManyHasAssociationMixin<ent_loc, ent_locId>;
  hasOwner_ent_locs!: Sequelize.HasManyHasAssociationsMixin<ent_loc, ent_locId>;
  countOwner_ent_locs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_order_point via last_modified_by_id
  ent_order_points!: ent_order_point[];
  getEnt_order_points!: Sequelize.HasManyGetAssociationsMixin<ent_order_point>;
  setEnt_order_points!: Sequelize.HasManySetAssociationsMixin<ent_order_point, ent_order_pointId>;
  addEnt_order_point!: Sequelize.HasManyAddAssociationMixin<ent_order_point, ent_order_pointId>;
  addEnt_order_points!: Sequelize.HasManyAddAssociationsMixin<ent_order_point, ent_order_pointId>;
  createEnt_order_point!: Sequelize.HasManyCreateAssociationMixin<ent_order_point>;
  removeEnt_order_point!: Sequelize.HasManyRemoveAssociationMixin<ent_order_point, ent_order_pointId>;
  removeEnt_order_points!: Sequelize.HasManyRemoveAssociationsMixin<ent_order_point, ent_order_pointId>;
  hasEnt_order_point!: Sequelize.HasManyHasAssociationMixin<ent_order_point, ent_order_pointId>;
  hasEnt_order_points!: Sequelize.HasManyHasAssociationsMixin<ent_order_point, ent_order_pointId>;
  countEnt_order_points!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_order_point via created_by_id
  created_by_ent_order_points!: ent_order_point[];
  getCreated_by_ent_order_points!: Sequelize.HasManyGetAssociationsMixin<ent_order_point>;
  setCreated_by_ent_order_points!: Sequelize.HasManySetAssociationsMixin<ent_order_point, ent_order_pointId>;
  addCreated_by_ent_order_point!: Sequelize.HasManyAddAssociationMixin<ent_order_point, ent_order_pointId>;
  addCreated_by_ent_order_points!: Sequelize.HasManyAddAssociationsMixin<ent_order_point, ent_order_pointId>;
  createCreated_by_ent_order_point!: Sequelize.HasManyCreateAssociationMixin<ent_order_point>;
  removeCreated_by_ent_order_point!: Sequelize.HasManyRemoveAssociationMixin<ent_order_point, ent_order_pointId>;
  removeCreated_by_ent_order_points!: Sequelize.HasManyRemoveAssociationsMixin<ent_order_point, ent_order_pointId>;
  hasCreated_by_ent_order_point!: Sequelize.HasManyHasAssociationMixin<ent_order_point, ent_order_pointId>;
  hasCreated_by_ent_order_points!: Sequelize.HasManyHasAssociationsMixin<ent_order_point, ent_order_pointId>;
  countCreated_by_ent_order_points!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_org via last_modified_by_id
  ent_orgs!: ent_org[];
  getEnt_orgs!: Sequelize.HasManyGetAssociationsMixin<ent_org>;
  setEnt_orgs!: Sequelize.HasManySetAssociationsMixin<ent_org, ent_orgId>;
  addEnt_org!: Sequelize.HasManyAddAssociationMixin<ent_org, ent_orgId>;
  addEnt_orgs!: Sequelize.HasManyAddAssociationsMixin<ent_org, ent_orgId>;
  createEnt_org!: Sequelize.HasManyCreateAssociationMixin<ent_org>;
  removeEnt_org!: Sequelize.HasManyRemoveAssociationMixin<ent_org, ent_orgId>;
  removeEnt_orgs!: Sequelize.HasManyRemoveAssociationsMixin<ent_org, ent_orgId>;
  hasEnt_org!: Sequelize.HasManyHasAssociationMixin<ent_org, ent_orgId>;
  hasEnt_orgs!: Sequelize.HasManyHasAssociationsMixin<ent_org, ent_orgId>;
  countEnt_orgs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_org via created_by_id
  created_by_ent_orgs!: ent_org[];
  getCreated_by_ent_orgs!: Sequelize.HasManyGetAssociationsMixin<ent_org>;
  setCreated_by_ent_orgs!: Sequelize.HasManySetAssociationsMixin<ent_org, ent_orgId>;
  addCreated_by_ent_org!: Sequelize.HasManyAddAssociationMixin<ent_org, ent_orgId>;
  addCreated_by_ent_orgs!: Sequelize.HasManyAddAssociationsMixin<ent_org, ent_orgId>;
  createCreated_by_ent_org!: Sequelize.HasManyCreateAssociationMixin<ent_org>;
  removeCreated_by_ent_org!: Sequelize.HasManyRemoveAssociationMixin<ent_org, ent_orgId>;
  removeCreated_by_ent_orgs!: Sequelize.HasManyRemoveAssociationsMixin<ent_org, ent_orgId>;
  hasCreated_by_ent_org!: Sequelize.HasManyHasAssociationMixin<ent_org, ent_orgId>;
  hasCreated_by_ent_orgs!: Sequelize.HasManyHasAssociationsMixin<ent_org, ent_orgId>;
  countCreated_by_ent_orgs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ent_org via admin_id
  admin_ent_orgs!: ent_org[];
  getAdmin_ent_orgs!: Sequelize.HasManyGetAssociationsMixin<ent_org>;
  setAdmin_ent_orgs!: Sequelize.HasManySetAssociationsMixin<ent_org, ent_orgId>;
  addAdmin_ent_org!: Sequelize.HasManyAddAssociationMixin<ent_org, ent_orgId>;
  addAdmin_ent_orgs!: Sequelize.HasManyAddAssociationsMixin<ent_org, ent_orgId>;
  createAdmin_ent_org!: Sequelize.HasManyCreateAssociationMixin<ent_org>;
  removeAdmin_ent_org!: Sequelize.HasManyRemoveAssociationMixin<ent_org, ent_orgId>;
  removeAdmin_ent_orgs!: Sequelize.HasManyRemoveAssociationsMixin<ent_org, ent_orgId>;
  hasAdmin_ent_org!: Sequelize.HasManyHasAssociationMixin<ent_org, ent_orgId>;
  hasAdmin_ent_orgs!: Sequelize.HasManyHasAssociationsMixin<ent_org, ent_orgId>;
  countAdmin_ent_orgs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_accesscode via last_modified_by_id
  evt_accesscodes!: evt_accesscode[];
  getEvt_accesscodes!: Sequelize.HasManyGetAssociationsMixin<evt_accesscode>;
  setEvt_accesscodes!: Sequelize.HasManySetAssociationsMixin<evt_accesscode, evt_accesscodeId>;
  addEvt_accesscode!: Sequelize.HasManyAddAssociationMixin<evt_accesscode, evt_accesscodeId>;
  addEvt_accesscodes!: Sequelize.HasManyAddAssociationsMixin<evt_accesscode, evt_accesscodeId>;
  createEvt_accesscode!: Sequelize.HasManyCreateAssociationMixin<evt_accesscode>;
  removeEvt_accesscode!: Sequelize.HasManyRemoveAssociationMixin<evt_accesscode, evt_accesscodeId>;
  removeEvt_accesscodes!: Sequelize.HasManyRemoveAssociationsMixin<evt_accesscode, evt_accesscodeId>;
  hasEvt_accesscode!: Sequelize.HasManyHasAssociationMixin<evt_accesscode, evt_accesscodeId>;
  hasEvt_accesscodes!: Sequelize.HasManyHasAssociationsMixin<evt_accesscode, evt_accesscodeId>;
  countEvt_accesscodes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_accesscode via created_by_id
  created_by_evt_accesscodes!: evt_accesscode[];
  getCreated_by_evt_accesscodes!: Sequelize.HasManyGetAssociationsMixin<evt_accesscode>;
  setCreated_by_evt_accesscodes!: Sequelize.HasManySetAssociationsMixin<evt_accesscode, evt_accesscodeId>;
  addCreated_by_evt_accesscode!: Sequelize.HasManyAddAssociationMixin<evt_accesscode, evt_accesscodeId>;
  addCreated_by_evt_accesscodes!: Sequelize.HasManyAddAssociationsMixin<evt_accesscode, evt_accesscodeId>;
  createCreated_by_evt_accesscode!: Sequelize.HasManyCreateAssociationMixin<evt_accesscode>;
  removeCreated_by_evt_accesscode!: Sequelize.HasManyRemoveAssociationMixin<evt_accesscode, evt_accesscodeId>;
  removeCreated_by_evt_accesscodes!: Sequelize.HasManyRemoveAssociationsMixin<evt_accesscode, evt_accesscodeId>;
  hasCreated_by_evt_accesscode!: Sequelize.HasManyHasAssociationMixin<evt_accesscode, evt_accesscodeId>;
  hasCreated_by_evt_accesscodes!: Sequelize.HasManyHasAssociationsMixin<evt_accesscode, evt_accesscodeId>;
  countCreated_by_evt_accesscodes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_att_add via last_modified_by_id
  evt_att_adds!: evt_att_add[];
  getEvt_att_adds!: Sequelize.HasManyGetAssociationsMixin<evt_att_add>;
  setEvt_att_adds!: Sequelize.HasManySetAssociationsMixin<evt_att_add, evt_att_addId>;
  addEvt_att_add!: Sequelize.HasManyAddAssociationMixin<evt_att_add, evt_att_addId>;
  addEvt_att_adds!: Sequelize.HasManyAddAssociationsMixin<evt_att_add, evt_att_addId>;
  createEvt_att_add!: Sequelize.HasManyCreateAssociationMixin<evt_att_add>;
  removeEvt_att_add!: Sequelize.HasManyRemoveAssociationMixin<evt_att_add, evt_att_addId>;
  removeEvt_att_adds!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_add, evt_att_addId>;
  hasEvt_att_add!: Sequelize.HasManyHasAssociationMixin<evt_att_add, evt_att_addId>;
  hasEvt_att_adds!: Sequelize.HasManyHasAssociationsMixin<evt_att_add, evt_att_addId>;
  countEvt_att_adds!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_att_add via created_by_id
  created_by_evt_att_adds!: evt_att_add[];
  getCreated_by_evt_att_adds!: Sequelize.HasManyGetAssociationsMixin<evt_att_add>;
  setCreated_by_evt_att_adds!: Sequelize.HasManySetAssociationsMixin<evt_att_add, evt_att_addId>;
  addCreated_by_evt_att_add!: Sequelize.HasManyAddAssociationMixin<evt_att_add, evt_att_addId>;
  addCreated_by_evt_att_adds!: Sequelize.HasManyAddAssociationsMixin<evt_att_add, evt_att_addId>;
  createCreated_by_evt_att_add!: Sequelize.HasManyCreateAssociationMixin<evt_att_add>;
  removeCreated_by_evt_att_add!: Sequelize.HasManyRemoveAssociationMixin<evt_att_add, evt_att_addId>;
  removeCreated_by_evt_att_adds!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_add, evt_att_addId>;
  hasCreated_by_evt_att_add!: Sequelize.HasManyHasAssociationMixin<evt_att_add, evt_att_addId>;
  hasCreated_by_evt_att_adds!: Sequelize.HasManyHasAssociationsMixin<evt_att_add, evt_att_addId>;
  countCreated_by_evt_att_adds!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_att_ans via last_modified_by_id
  evt_att_ans!: evt_att_ans[];
  getEvt_att_ans!: Sequelize.HasManyGetAssociationsMixin<evt_att_ans>;
  setEvt_att_ans!: Sequelize.HasManySetAssociationsMixin<evt_att_ans, evt_att_ansId>;
  addEvt_att_an!: Sequelize.HasManyAddAssociationMixin<evt_att_ans, evt_att_ansId>;
  addEvt_att_ans!: Sequelize.HasManyAddAssociationsMixin<evt_att_ans, evt_att_ansId>;
  createEvt_att_an!: Sequelize.HasManyCreateAssociationMixin<evt_att_ans>;
  removeEvt_att_an!: Sequelize.HasManyRemoveAssociationMixin<evt_att_ans, evt_att_ansId>;
  removeEvt_att_ans!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_ans, evt_att_ansId>;
  hasEvt_att_an!: Sequelize.HasManyHasAssociationMixin<evt_att_ans, evt_att_ansId>;
  hasEvt_att_ans!: Sequelize.HasManyHasAssociationsMixin<evt_att_ans, evt_att_ansId>;
  countEvt_att_ans!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_att_ans via created_by_id
  created_by_evt_att_ans!: evt_att_ans[];
  getCreated_by_evt_att_ans!: Sequelize.HasManyGetAssociationsMixin<evt_att_ans>;
  setCreated_by_evt_att_ans!: Sequelize.HasManySetAssociationsMixin<evt_att_ans, evt_att_ansId>;
  addCreated_by_evt_att_an!: Sequelize.HasManyAddAssociationMixin<evt_att_ans, evt_att_ansId>;
  addCreated_by_evt_att_ans!: Sequelize.HasManyAddAssociationsMixin<evt_att_ans, evt_att_ansId>;
  createCreated_by_evt_att_an!: Sequelize.HasManyCreateAssociationMixin<evt_att_ans>;
  removeCreated_by_evt_att_an!: Sequelize.HasManyRemoveAssociationMixin<evt_att_ans, evt_att_ansId>;
  removeCreated_by_evt_att_ans!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_ans, evt_att_ansId>;
  hasCreated_by_evt_att_an!: Sequelize.HasManyHasAssociationMixin<evt_att_ans, evt_att_ansId>;
  hasCreated_by_evt_att_ans!: Sequelize.HasManyHasAssociationsMixin<evt_att_ans, evt_att_ansId>;
  countCreated_by_evt_att_ans!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_att_profile via created_by_id
  evt_att_profiles!: evt_att_profile[];
  getEvt_att_profiles!: Sequelize.HasManyGetAssociationsMixin<evt_att_profile>;
  setEvt_att_profiles!: Sequelize.HasManySetAssociationsMixin<evt_att_profile, evt_att_profileId>;
  addEvt_att_profile!: Sequelize.HasManyAddAssociationMixin<evt_att_profile, evt_att_profileId>;
  addEvt_att_profiles!: Sequelize.HasManyAddAssociationsMixin<evt_att_profile, evt_att_profileId>;
  createEvt_att_profile!: Sequelize.HasManyCreateAssociationMixin<evt_att_profile>;
  removeEvt_att_profile!: Sequelize.HasManyRemoveAssociationMixin<evt_att_profile, evt_att_profileId>;
  removeEvt_att_profiles!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_profile, evt_att_profileId>;
  hasEvt_att_profile!: Sequelize.HasManyHasAssociationMixin<evt_att_profile, evt_att_profileId>;
  hasEvt_att_profiles!: Sequelize.HasManyHasAssociationsMixin<evt_att_profile, evt_att_profileId>;
  countEvt_att_profiles!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_att_profile via last_modified_by_id
  last_modified_by_evt_att_profiles!: evt_att_profile[];
  getLast_modified_by_evt_att_profiles!: Sequelize.HasManyGetAssociationsMixin<evt_att_profile>;
  setLast_modified_by_evt_att_profiles!: Sequelize.HasManySetAssociationsMixin<evt_att_profile, evt_att_profileId>;
  addLast_modified_by_evt_att_profile!: Sequelize.HasManyAddAssociationMixin<evt_att_profile, evt_att_profileId>;
  addLast_modified_by_evt_att_profiles!: Sequelize.HasManyAddAssociationsMixin<evt_att_profile, evt_att_profileId>;
  createLast_modified_by_evt_att_profile!: Sequelize.HasManyCreateAssociationMixin<evt_att_profile>;
  removeLast_modified_by_evt_att_profile!: Sequelize.HasManyRemoveAssociationMixin<evt_att_profile, evt_att_profileId>;
  removeLast_modified_by_evt_att_profiles!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_profile, evt_att_profileId>;
  hasLast_modified_by_evt_att_profile!: Sequelize.HasManyHasAssociationMixin<evt_att_profile, evt_att_profileId>;
  hasLast_modified_by_evt_att_profiles!: Sequelize.HasManyHasAssociationsMixin<evt_att_profile, evt_att_profileId>;
  countLast_modified_by_evt_att_profiles!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_att_team via last_modified_by_id
  evt_att_teams!: evt_att_team[];
  getEvt_att_teams!: Sequelize.HasManyGetAssociationsMixin<evt_att_team>;
  setEvt_att_teams!: Sequelize.HasManySetAssociationsMixin<evt_att_team, evt_att_teamId>;
  addEvt_att_team!: Sequelize.HasManyAddAssociationMixin<evt_att_team, evt_att_teamId>;
  addEvt_att_teams!: Sequelize.HasManyAddAssociationsMixin<evt_att_team, evt_att_teamId>;
  createEvt_att_team!: Sequelize.HasManyCreateAssociationMixin<evt_att_team>;
  removeEvt_att_team!: Sequelize.HasManyRemoveAssociationMixin<evt_att_team, evt_att_teamId>;
  removeEvt_att_teams!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_team, evt_att_teamId>;
  hasEvt_att_team!: Sequelize.HasManyHasAssociationMixin<evt_att_team, evt_att_teamId>;
  hasEvt_att_teams!: Sequelize.HasManyHasAssociationsMixin<evt_att_team, evt_att_teamId>;
  countEvt_att_teams!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_att_team via created_by_id
  created_by_evt_att_teams!: evt_att_team[];
  getCreated_by_evt_att_teams!: Sequelize.HasManyGetAssociationsMixin<evt_att_team>;
  setCreated_by_evt_att_teams!: Sequelize.HasManySetAssociationsMixin<evt_att_team, evt_att_teamId>;
  addCreated_by_evt_att_team!: Sequelize.HasManyAddAssociationMixin<evt_att_team, evt_att_teamId>;
  addCreated_by_evt_att_teams!: Sequelize.HasManyAddAssociationsMixin<evt_att_team, evt_att_teamId>;
  createCreated_by_evt_att_team!: Sequelize.HasManyCreateAssociationMixin<evt_att_team>;
  removeCreated_by_evt_att_team!: Sequelize.HasManyRemoveAssociationMixin<evt_att_team, evt_att_teamId>;
  removeCreated_by_evt_att_teams!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_team, evt_att_teamId>;
  hasCreated_by_evt_att_team!: Sequelize.HasManyHasAssociationMixin<evt_att_team, evt_att_teamId>;
  hasCreated_by_evt_att_teams!: Sequelize.HasManyHasAssociationsMixin<evt_att_team, evt_att_teamId>;
  countCreated_by_evt_att_teams!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_attendee via last_modified_by_id
  evt_attendees!: evt_attendee[];
  getEvt_attendees!: Sequelize.HasManyGetAssociationsMixin<evt_attendee>;
  setEvt_attendees!: Sequelize.HasManySetAssociationsMixin<evt_attendee, evt_attendeeId>;
  addEvt_attendee!: Sequelize.HasManyAddAssociationMixin<evt_attendee, evt_attendeeId>;
  addEvt_attendees!: Sequelize.HasManyAddAssociationsMixin<evt_attendee, evt_attendeeId>;
  createEvt_attendee!: Sequelize.HasManyCreateAssociationMixin<evt_attendee>;
  removeEvt_attendee!: Sequelize.HasManyRemoveAssociationMixin<evt_attendee, evt_attendeeId>;
  removeEvt_attendees!: Sequelize.HasManyRemoveAssociationsMixin<evt_attendee, evt_attendeeId>;
  hasEvt_attendee!: Sequelize.HasManyHasAssociationMixin<evt_attendee, evt_attendeeId>;
  hasEvt_attendees!: Sequelize.HasManyHasAssociationsMixin<evt_attendee, evt_attendeeId>;
  countEvt_attendees!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_attendee via created_by_id
  created_by_evt_attendees!: evt_attendee[];
  getCreated_by_evt_attendees!: Sequelize.HasManyGetAssociationsMixin<evt_attendee>;
  setCreated_by_evt_attendees!: Sequelize.HasManySetAssociationsMixin<evt_attendee, evt_attendeeId>;
  addCreated_by_evt_attendee!: Sequelize.HasManyAddAssociationMixin<evt_attendee, evt_attendeeId>;
  addCreated_by_evt_attendees!: Sequelize.HasManyAddAssociationsMixin<evt_attendee, evt_attendeeId>;
  createCreated_by_evt_attendee!: Sequelize.HasManyCreateAssociationMixin<evt_attendee>;
  removeCreated_by_evt_attendee!: Sequelize.HasManyRemoveAssociationMixin<evt_attendee, evt_attendeeId>;
  removeCreated_by_evt_attendees!: Sequelize.HasManyRemoveAssociationsMixin<evt_attendee, evt_attendeeId>;
  hasCreated_by_evt_attendee!: Sequelize.HasManyHasAssociationMixin<evt_attendee, evt_attendeeId>;
  hasCreated_by_evt_attendees!: Sequelize.HasManyHasAssociationsMixin<evt_attendee, evt_attendeeId>;
  countCreated_by_evt_attendees!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_barcode via created_by_id
  evt_barcodes!: evt_barcode[];
  getEvt_barcodes!: Sequelize.HasManyGetAssociationsMixin<evt_barcode>;
  setEvt_barcodes!: Sequelize.HasManySetAssociationsMixin<evt_barcode, evt_barcodeId>;
  addEvt_barcode!: Sequelize.HasManyAddAssociationMixin<evt_barcode, evt_barcodeId>;
  addEvt_barcodes!: Sequelize.HasManyAddAssociationsMixin<evt_barcode, evt_barcodeId>;
  createEvt_barcode!: Sequelize.HasManyCreateAssociationMixin<evt_barcode>;
  removeEvt_barcode!: Sequelize.HasManyRemoveAssociationMixin<evt_barcode, evt_barcodeId>;
  removeEvt_barcodes!: Sequelize.HasManyRemoveAssociationsMixin<evt_barcode, evt_barcodeId>;
  hasEvt_barcode!: Sequelize.HasManyHasAssociationMixin<evt_barcode, evt_barcodeId>;
  hasEvt_barcodes!: Sequelize.HasManyHasAssociationsMixin<evt_barcode, evt_barcodeId>;
  countEvt_barcodes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_barcode via last_modified_by_id
  last_modified_by_evt_barcodes!: evt_barcode[];
  getLast_modified_by_evt_barcodes!: Sequelize.HasManyGetAssociationsMixin<evt_barcode>;
  setLast_modified_by_evt_barcodes!: Sequelize.HasManySetAssociationsMixin<evt_barcode, evt_barcodeId>;
  addLast_modified_by_evt_barcode!: Sequelize.HasManyAddAssociationMixin<evt_barcode, evt_barcodeId>;
  addLast_modified_by_evt_barcodes!: Sequelize.HasManyAddAssociationsMixin<evt_barcode, evt_barcodeId>;
  createLast_modified_by_evt_barcode!: Sequelize.HasManyCreateAssociationMixin<evt_barcode>;
  removeLast_modified_by_evt_barcode!: Sequelize.HasManyRemoveAssociationMixin<evt_barcode, evt_barcodeId>;
  removeLast_modified_by_evt_barcodes!: Sequelize.HasManyRemoveAssociationsMixin<evt_barcode, evt_barcodeId>;
  hasLast_modified_by_evt_barcode!: Sequelize.HasManyHasAssociationMixin<evt_barcode, evt_barcodeId>;
  hasLast_modified_by_evt_barcodes!: Sequelize.HasManyHasAssociationsMixin<evt_barcode, evt_barcodeId>;
  countLast_modified_by_evt_barcodes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_discount via created_by_id
  evt_discounts!: evt_discount[];
  getEvt_discounts!: Sequelize.HasManyGetAssociationsMixin<evt_discount>;
  setEvt_discounts!: Sequelize.HasManySetAssociationsMixin<evt_discount, evt_discountId>;
  addEvt_discount!: Sequelize.HasManyAddAssociationMixin<evt_discount, evt_discountId>;
  addEvt_discounts!: Sequelize.HasManyAddAssociationsMixin<evt_discount, evt_discountId>;
  createEvt_discount!: Sequelize.HasManyCreateAssociationMixin<evt_discount>;
  removeEvt_discount!: Sequelize.HasManyRemoveAssociationMixin<evt_discount, evt_discountId>;
  removeEvt_discounts!: Sequelize.HasManyRemoveAssociationsMixin<evt_discount, evt_discountId>;
  hasEvt_discount!: Sequelize.HasManyHasAssociationMixin<evt_discount, evt_discountId>;
  hasEvt_discounts!: Sequelize.HasManyHasAssociationsMixin<evt_discount, evt_discountId>;
  countEvt_discounts!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_discount via last_modified_by_id
  last_modified_by_evt_discounts!: evt_discount[];
  getLast_modified_by_evt_discounts!: Sequelize.HasManyGetAssociationsMixin<evt_discount>;
  setLast_modified_by_evt_discounts!: Sequelize.HasManySetAssociationsMixin<evt_discount, evt_discountId>;
  addLast_modified_by_evt_discount!: Sequelize.HasManyAddAssociationMixin<evt_discount, evt_discountId>;
  addLast_modified_by_evt_discounts!: Sequelize.HasManyAddAssociationsMixin<evt_discount, evt_discountId>;
  createLast_modified_by_evt_discount!: Sequelize.HasManyCreateAssociationMixin<evt_discount>;
  removeLast_modified_by_evt_discount!: Sequelize.HasManyRemoveAssociationMixin<evt_discount, evt_discountId>;
  removeLast_modified_by_evt_discounts!: Sequelize.HasManyRemoveAssociationsMixin<evt_discount, evt_discountId>;
  hasLast_modified_by_evt_discount!: Sequelize.HasManyHasAssociationMixin<evt_discount, evt_discountId>;
  hasLast_modified_by_evt_discounts!: Sequelize.HasManyHasAssociationsMixin<evt_discount, evt_discountId>;
  countLast_modified_by_evt_discounts!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_organizer via created_by_id
  evt_organizers!: evt_organizer[];
  getEvt_organizers!: Sequelize.HasManyGetAssociationsMixin<evt_organizer>;
  setEvt_organizers!: Sequelize.HasManySetAssociationsMixin<evt_organizer, evt_organizerId>;
  addEvt_organizer!: Sequelize.HasManyAddAssociationMixin<evt_organizer, evt_organizerId>;
  addEvt_organizers!: Sequelize.HasManyAddAssociationsMixin<evt_organizer, evt_organizerId>;
  createEvt_organizer!: Sequelize.HasManyCreateAssociationMixin<evt_organizer>;
  removeEvt_organizer!: Sequelize.HasManyRemoveAssociationMixin<evt_organizer, evt_organizerId>;
  removeEvt_organizers!: Sequelize.HasManyRemoveAssociationsMixin<evt_organizer, evt_organizerId>;
  hasEvt_organizer!: Sequelize.HasManyHasAssociationMixin<evt_organizer, evt_organizerId>;
  hasEvt_organizers!: Sequelize.HasManyHasAssociationsMixin<evt_organizer, evt_organizerId>;
  countEvt_organizers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_organizer via last_modified_by_id
  last_modified_by_evt_organizers!: evt_organizer[];
  getLast_modified_by_evt_organizers!: Sequelize.HasManyGetAssociationsMixin<evt_organizer>;
  setLast_modified_by_evt_organizers!: Sequelize.HasManySetAssociationsMixin<evt_organizer, evt_organizerId>;
  addLast_modified_by_evt_organizer!: Sequelize.HasManyAddAssociationMixin<evt_organizer, evt_organizerId>;
  addLast_modified_by_evt_organizers!: Sequelize.HasManyAddAssociationsMixin<evt_organizer, evt_organizerId>;
  createLast_modified_by_evt_organizer!: Sequelize.HasManyCreateAssociationMixin<evt_organizer>;
  removeLast_modified_by_evt_organizer!: Sequelize.HasManyRemoveAssociationMixin<evt_organizer, evt_organizerId>;
  removeLast_modified_by_evt_organizers!: Sequelize.HasManyRemoveAssociationsMixin<evt_organizer, evt_organizerId>;
  hasLast_modified_by_evt_organizer!: Sequelize.HasManyHasAssociationMixin<evt_organizer, evt_organizerId>;
  hasLast_modified_by_evt_organizers!: Sequelize.HasManyHasAssociationsMixin<evt_organizer, evt_organizerId>;
  countLast_modified_by_evt_organizers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_prog_cat via last_modified_by_id
  evt_prog_cats!: evt_prog_cat[];
  getEvt_prog_cats!: Sequelize.HasManyGetAssociationsMixin<evt_prog_cat>;
  setEvt_prog_cats!: Sequelize.HasManySetAssociationsMixin<evt_prog_cat, evt_prog_catId>;
  addEvt_prog_cat!: Sequelize.HasManyAddAssociationMixin<evt_prog_cat, evt_prog_catId>;
  addEvt_prog_cats!: Sequelize.HasManyAddAssociationsMixin<evt_prog_cat, evt_prog_catId>;
  createEvt_prog_cat!: Sequelize.HasManyCreateAssociationMixin<evt_prog_cat>;
  removeEvt_prog_cat!: Sequelize.HasManyRemoveAssociationMixin<evt_prog_cat, evt_prog_catId>;
  removeEvt_prog_cats!: Sequelize.HasManyRemoveAssociationsMixin<evt_prog_cat, evt_prog_catId>;
  hasEvt_prog_cat!: Sequelize.HasManyHasAssociationMixin<evt_prog_cat, evt_prog_catId>;
  hasEvt_prog_cats!: Sequelize.HasManyHasAssociationsMixin<evt_prog_cat, evt_prog_catId>;
  countEvt_prog_cats!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_prog_cat via created_by_id
  created_by_evt_prog_cats!: evt_prog_cat[];
  getCreated_by_evt_prog_cats!: Sequelize.HasManyGetAssociationsMixin<evt_prog_cat>;
  setCreated_by_evt_prog_cats!: Sequelize.HasManySetAssociationsMixin<evt_prog_cat, evt_prog_catId>;
  addCreated_by_evt_prog_cat!: Sequelize.HasManyAddAssociationMixin<evt_prog_cat, evt_prog_catId>;
  addCreated_by_evt_prog_cats!: Sequelize.HasManyAddAssociationsMixin<evt_prog_cat, evt_prog_catId>;
  createCreated_by_evt_prog_cat!: Sequelize.HasManyCreateAssociationMixin<evt_prog_cat>;
  removeCreated_by_evt_prog_cat!: Sequelize.HasManyRemoveAssociationMixin<evt_prog_cat, evt_prog_catId>;
  removeCreated_by_evt_prog_cats!: Sequelize.HasManyRemoveAssociationsMixin<evt_prog_cat, evt_prog_catId>;
  hasCreated_by_evt_prog_cat!: Sequelize.HasManyHasAssociationMixin<evt_prog_cat, evt_prog_catId>;
  hasCreated_by_evt_prog_cats!: Sequelize.HasManyHasAssociationsMixin<evt_prog_cat, evt_prog_catId>;
  countCreated_by_evt_prog_cats!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_prog_fmt via last_modified_by_id
  evt_prog_fmts!: evt_prog_fmt[];
  getEvt_prog_fmts!: Sequelize.HasManyGetAssociationsMixin<evt_prog_fmt>;
  setEvt_prog_fmts!: Sequelize.HasManySetAssociationsMixin<evt_prog_fmt, evt_prog_fmtId>;
  addEvt_prog_fmt!: Sequelize.HasManyAddAssociationMixin<evt_prog_fmt, evt_prog_fmtId>;
  addEvt_prog_fmts!: Sequelize.HasManyAddAssociationsMixin<evt_prog_fmt, evt_prog_fmtId>;
  createEvt_prog_fmt!: Sequelize.HasManyCreateAssociationMixin<evt_prog_fmt>;
  removeEvt_prog_fmt!: Sequelize.HasManyRemoveAssociationMixin<evt_prog_fmt, evt_prog_fmtId>;
  removeEvt_prog_fmts!: Sequelize.HasManyRemoveAssociationsMixin<evt_prog_fmt, evt_prog_fmtId>;
  hasEvt_prog_fmt!: Sequelize.HasManyHasAssociationMixin<evt_prog_fmt, evt_prog_fmtId>;
  hasEvt_prog_fmts!: Sequelize.HasManyHasAssociationsMixin<evt_prog_fmt, evt_prog_fmtId>;
  countEvt_prog_fmts!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_prog_fmt via created_by_id
  created_by_evt_prog_fmts!: evt_prog_fmt[];
  getCreated_by_evt_prog_fmts!: Sequelize.HasManyGetAssociationsMixin<evt_prog_fmt>;
  setCreated_by_evt_prog_fmts!: Sequelize.HasManySetAssociationsMixin<evt_prog_fmt, evt_prog_fmtId>;
  addCreated_by_evt_prog_fmt!: Sequelize.HasManyAddAssociationMixin<evt_prog_fmt, evt_prog_fmtId>;
  addCreated_by_evt_prog_fmts!: Sequelize.HasManyAddAssociationsMixin<evt_prog_fmt, evt_prog_fmtId>;
  createCreated_by_evt_prog_fmt!: Sequelize.HasManyCreateAssociationMixin<evt_prog_fmt>;
  removeCreated_by_evt_prog_fmt!: Sequelize.HasManyRemoveAssociationMixin<evt_prog_fmt, evt_prog_fmtId>;
  removeCreated_by_evt_prog_fmts!: Sequelize.HasManyRemoveAssociationsMixin<evt_prog_fmt, evt_prog_fmtId>;
  hasCreated_by_evt_prog_fmt!: Sequelize.HasManyHasAssociationMixin<evt_prog_fmt, evt_prog_fmtId>;
  hasCreated_by_evt_prog_fmts!: Sequelize.HasManyHasAssociationsMixin<evt_prog_fmt, evt_prog_fmtId>;
  countCreated_by_evt_prog_fmts!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_program via created_by_id
  evt_programs!: evt_program[];
  getEvt_programs!: Sequelize.HasManyGetAssociationsMixin<evt_program>;
  setEvt_programs!: Sequelize.HasManySetAssociationsMixin<evt_program, evt_programId>;
  addEvt_program!: Sequelize.HasManyAddAssociationMixin<evt_program, evt_programId>;
  addEvt_programs!: Sequelize.HasManyAddAssociationsMixin<evt_program, evt_programId>;
  createEvt_program!: Sequelize.HasManyCreateAssociationMixin<evt_program>;
  removeEvt_program!: Sequelize.HasManyRemoveAssociationMixin<evt_program, evt_programId>;
  removeEvt_programs!: Sequelize.HasManyRemoveAssociationsMixin<evt_program, evt_programId>;
  hasEvt_program!: Sequelize.HasManyHasAssociationMixin<evt_program, evt_programId>;
  hasEvt_programs!: Sequelize.HasManyHasAssociationsMixin<evt_program, evt_programId>;
  countEvt_programs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_program via last_modified_by_id
  last_modified_by_evt_programs!: evt_program[];
  getLast_modified_by_evt_programs!: Sequelize.HasManyGetAssociationsMixin<evt_program>;
  setLast_modified_by_evt_programs!: Sequelize.HasManySetAssociationsMixin<evt_program, evt_programId>;
  addLast_modified_by_evt_program!: Sequelize.HasManyAddAssociationMixin<evt_program, evt_programId>;
  addLast_modified_by_evt_programs!: Sequelize.HasManyAddAssociationsMixin<evt_program, evt_programId>;
  createLast_modified_by_evt_program!: Sequelize.HasManyCreateAssociationMixin<evt_program>;
  removeLast_modified_by_evt_program!: Sequelize.HasManyRemoveAssociationMixin<evt_program, evt_programId>;
  removeLast_modified_by_evt_programs!: Sequelize.HasManyRemoveAssociationsMixin<evt_program, evt_programId>;
  hasLast_modified_by_evt_program!: Sequelize.HasManyHasAssociationMixin<evt_program, evt_programId>;
  hasLast_modified_by_evt_programs!: Sequelize.HasManyHasAssociationsMixin<evt_program, evt_programId>;
  countLast_modified_by_evt_programs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_schedule via created_by_id
  evt_schedules!: evt_schedule[];
  getEvt_schedules!: Sequelize.HasManyGetAssociationsMixin<evt_schedule>;
  setEvt_schedules!: Sequelize.HasManySetAssociationsMixin<evt_schedule, evt_scheduleId>;
  addEvt_schedule!: Sequelize.HasManyAddAssociationMixin<evt_schedule, evt_scheduleId>;
  addEvt_schedules!: Sequelize.HasManyAddAssociationsMixin<evt_schedule, evt_scheduleId>;
  createEvt_schedule!: Sequelize.HasManyCreateAssociationMixin<evt_schedule>;
  removeEvt_schedule!: Sequelize.HasManyRemoveAssociationMixin<evt_schedule, evt_scheduleId>;
  removeEvt_schedules!: Sequelize.HasManyRemoveAssociationsMixin<evt_schedule, evt_scheduleId>;
  hasEvt_schedule!: Sequelize.HasManyHasAssociationMixin<evt_schedule, evt_scheduleId>;
  hasEvt_schedules!: Sequelize.HasManyHasAssociationsMixin<evt_schedule, evt_scheduleId>;
  countEvt_schedules!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_schedule via last_modified_by_id
  last_modified_by_evt_schedules!: evt_schedule[];
  getLast_modified_by_evt_schedules!: Sequelize.HasManyGetAssociationsMixin<evt_schedule>;
  setLast_modified_by_evt_schedules!: Sequelize.HasManySetAssociationsMixin<evt_schedule, evt_scheduleId>;
  addLast_modified_by_evt_schedule!: Sequelize.HasManyAddAssociationMixin<evt_schedule, evt_scheduleId>;
  addLast_modified_by_evt_schedules!: Sequelize.HasManyAddAssociationsMixin<evt_schedule, evt_scheduleId>;
  createLast_modified_by_evt_schedule!: Sequelize.HasManyCreateAssociationMixin<evt_schedule>;
  removeLast_modified_by_evt_schedule!: Sequelize.HasManyRemoveAssociationMixin<evt_schedule, evt_scheduleId>;
  removeLast_modified_by_evt_schedules!: Sequelize.HasManyRemoveAssociationsMixin<evt_schedule, evt_scheduleId>;
  hasLast_modified_by_evt_schedule!: Sequelize.HasManyHasAssociationMixin<evt_schedule, evt_scheduleId>;
  hasLast_modified_by_evt_schedules!: Sequelize.HasManyHasAssociationsMixin<evt_schedule, evt_scheduleId>;
  countLast_modified_by_evt_schedules!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_tkt_class via last_modified_by_id
  evt_tkt_classes!: evt_tkt_class[];
  getEvt_tkt_classes!: Sequelize.HasManyGetAssociationsMixin<evt_tkt_class>;
  setEvt_tkt_classes!: Sequelize.HasManySetAssociationsMixin<evt_tkt_class, evt_tkt_classId>;
  addEvt_tkt_class!: Sequelize.HasManyAddAssociationMixin<evt_tkt_class, evt_tkt_classId>;
  addEvt_tkt_classes!: Sequelize.HasManyAddAssociationsMixin<evt_tkt_class, evt_tkt_classId>;
  createEvt_tkt_class!: Sequelize.HasManyCreateAssociationMixin<evt_tkt_class>;
  removeEvt_tkt_class!: Sequelize.HasManyRemoveAssociationMixin<evt_tkt_class, evt_tkt_classId>;
  removeEvt_tkt_classes!: Sequelize.HasManyRemoveAssociationsMixin<evt_tkt_class, evt_tkt_classId>;
  hasEvt_tkt_class!: Sequelize.HasManyHasAssociationMixin<evt_tkt_class, evt_tkt_classId>;
  hasEvt_tkt_classes!: Sequelize.HasManyHasAssociationsMixin<evt_tkt_class, evt_tkt_classId>;
  countEvt_tkt_classes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_tkt_class via created_by_id
  created_by_evt_tkt_classes!: evt_tkt_class[];
  getCreated_by_evt_tkt_classes!: Sequelize.HasManyGetAssociationsMixin<evt_tkt_class>;
  setCreated_by_evt_tkt_classes!: Sequelize.HasManySetAssociationsMixin<evt_tkt_class, evt_tkt_classId>;
  addCreated_by_evt_tkt_class!: Sequelize.HasManyAddAssociationMixin<evt_tkt_class, evt_tkt_classId>;
  addCreated_by_evt_tkt_classes!: Sequelize.HasManyAddAssociationsMixin<evt_tkt_class, evt_tkt_classId>;
  createCreated_by_evt_tkt_class!: Sequelize.HasManyCreateAssociationMixin<evt_tkt_class>;
  removeCreated_by_evt_tkt_class!: Sequelize.HasManyRemoveAssociationMixin<evt_tkt_class, evt_tkt_classId>;
  removeCreated_by_evt_tkt_classes!: Sequelize.HasManyRemoveAssociationsMixin<evt_tkt_class, evt_tkt_classId>;
  hasCreated_by_evt_tkt_class!: Sequelize.HasManyHasAssociationMixin<evt_tkt_class, evt_tkt_classId>;
  hasCreated_by_evt_tkt_classes!: Sequelize.HasManyHasAssociationsMixin<evt_tkt_class, evt_tkt_classId>;
  countCreated_by_evt_tkt_classes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_venue via last_modified_by_id
  evt_venues!: evt_venue[];
  getEvt_venues!: Sequelize.HasManyGetAssociationsMixin<evt_venue>;
  setEvt_venues!: Sequelize.HasManySetAssociationsMixin<evt_venue, evt_venueId>;
  addEvt_venue!: Sequelize.HasManyAddAssociationMixin<evt_venue, evt_venueId>;
  addEvt_venues!: Sequelize.HasManyAddAssociationsMixin<evt_venue, evt_venueId>;
  createEvt_venue!: Sequelize.HasManyCreateAssociationMixin<evt_venue>;
  removeEvt_venue!: Sequelize.HasManyRemoveAssociationMixin<evt_venue, evt_venueId>;
  removeEvt_venues!: Sequelize.HasManyRemoveAssociationsMixin<evt_venue, evt_venueId>;
  hasEvt_venue!: Sequelize.HasManyHasAssociationMixin<evt_venue, evt_venueId>;
  hasEvt_venues!: Sequelize.HasManyHasAssociationsMixin<evt_venue, evt_venueId>;
  countEvt_venues!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany evt_venue via created_by_id
  created_by_evt_venues!: evt_venue[];
  getCreated_by_evt_venues!: Sequelize.HasManyGetAssociationsMixin<evt_venue>;
  setCreated_by_evt_venues!: Sequelize.HasManySetAssociationsMixin<evt_venue, evt_venueId>;
  addCreated_by_evt_venue!: Sequelize.HasManyAddAssociationMixin<evt_venue, evt_venueId>;
  addCreated_by_evt_venues!: Sequelize.HasManyAddAssociationsMixin<evt_venue, evt_venueId>;
  createCreated_by_evt_venue!: Sequelize.HasManyCreateAssociationMixin<evt_venue>;
  removeCreated_by_evt_venue!: Sequelize.HasManyRemoveAssociationMixin<evt_venue, evt_venueId>;
  removeCreated_by_evt_venues!: Sequelize.HasManyRemoveAssociationsMixin<evt_venue, evt_venueId>;
  hasCreated_by_evt_venue!: Sequelize.HasManyHasAssociationMixin<evt_venue, evt_venueId>;
  hasCreated_by_evt_venues!: Sequelize.HasManyHasAssociationsMixin<evt_venue, evt_venueId>;
  countCreated_by_evt_venues!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image via created_by_id
  images!: image[];
  getImages!: Sequelize.HasManyGetAssociationsMixin<image>;
  setImages!: Sequelize.HasManySetAssociationsMixin<image, imageId>;
  addImage!: Sequelize.HasManyAddAssociationMixin<image, imageId>;
  addImages!: Sequelize.HasManyAddAssociationsMixin<image, imageId>;
  createImage!: Sequelize.HasManyCreateAssociationMixin<image>;
  removeImage!: Sequelize.HasManyRemoveAssociationMixin<image, imageId>;
  removeImages!: Sequelize.HasManyRemoveAssociationsMixin<image, imageId>;
  hasImage!: Sequelize.HasManyHasAssociationMixin<image, imageId>;
  hasImages!: Sequelize.HasManyHasAssociationsMixin<image, imageId>;
  countImages!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image via last_modified_by_id
  last_modified_by_images!: image[];
  getLast_modified_by_images!: Sequelize.HasManyGetAssociationsMixin<image>;
  setLast_modified_by_images!: Sequelize.HasManySetAssociationsMixin<image, imageId>;
  addLast_modified_by_image!: Sequelize.HasManyAddAssociationMixin<image, imageId>;
  addLast_modified_by_images!: Sequelize.HasManyAddAssociationsMixin<image, imageId>;
  createLast_modified_by_image!: Sequelize.HasManyCreateAssociationMixin<image>;
  removeLast_modified_by_image!: Sequelize.HasManyRemoveAssociationMixin<image, imageId>;
  removeLast_modified_by_images!: Sequelize.HasManyRemoveAssociationsMixin<image, imageId>;
  hasLast_modified_by_image!: Sequelize.HasManyHasAssociationMixin<image, imageId>;
  hasLast_modified_by_images!: Sequelize.HasManyHasAssociationsMixin<image, imageId>;
  countLast_modified_by_images!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image via user_id
  user_images!: image[];
  getUser_images!: Sequelize.HasManyGetAssociationsMixin<image>;
  setUser_images!: Sequelize.HasManySetAssociationsMixin<image, imageId>;
  addUser_image!: Sequelize.HasManyAddAssociationMixin<image, imageId>;
  addUser_images!: Sequelize.HasManyAddAssociationsMixin<image, imageId>;
  createUser_image!: Sequelize.HasManyCreateAssociationMixin<image>;
  removeUser_image!: Sequelize.HasManyRemoveAssociationMixin<image, imageId>;
  removeUser_images!: Sequelize.HasManyRemoveAssociationsMixin<image, imageId>;
  hasUser_image!: Sequelize.HasManyHasAssociationMixin<image, imageId>;
  hasUser_images!: Sequelize.HasManyHasAssociationsMixin<image, imageId>;
  countUser_images!: Sequelize.HasManyCountAssociationsMixin;
  // user belongsToMany image via user_id and image_id
  image_id_image_image_likers!: image[];
  getImage_id_image_image_likers!: Sequelize.BelongsToManyGetAssociationsMixin<image>;
  setImage_id_image_image_likers!: Sequelize.BelongsToManySetAssociationsMixin<image, imageId>;
  addImage_id_image_image_liker!: Sequelize.BelongsToManyAddAssociationMixin<image, imageId>;
  addImage_id_image_image_likers!: Sequelize.BelongsToManyAddAssociationsMixin<image, imageId>;
  createImage_id_image_image_liker!: Sequelize.BelongsToManyCreateAssociationMixin<image>;
  removeImage_id_image_image_liker!: Sequelize.BelongsToManyRemoveAssociationMixin<image, imageId>;
  removeImage_id_image_image_likers!: Sequelize.BelongsToManyRemoveAssociationsMixin<image, imageId>;
  hasImage_id_image_image_liker!: Sequelize.BelongsToManyHasAssociationMixin<image, imageId>;
  hasImage_id_image_image_likers!: Sequelize.BelongsToManyHasAssociationsMixin<image, imageId>;
  countImage_id_image_image_likers!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user hasMany image_comment via user_id
  image_comments!: image_comment[];
  getImage_comments!: Sequelize.HasManyGetAssociationsMixin<image_comment>;
  setImage_comments!: Sequelize.HasManySetAssociationsMixin<image_comment, image_commentId>;
  addImage_comment!: Sequelize.HasManyAddAssociationMixin<image_comment, image_commentId>;
  addImage_comments!: Sequelize.HasManyAddAssociationsMixin<image_comment, image_commentId>;
  createImage_comment!: Sequelize.HasManyCreateAssociationMixin<image_comment>;
  removeImage_comment!: Sequelize.HasManyRemoveAssociationMixin<image_comment, image_commentId>;
  removeImage_comments!: Sequelize.HasManyRemoveAssociationsMixin<image_comment, image_commentId>;
  hasImage_comment!: Sequelize.HasManyHasAssociationMixin<image_comment, image_commentId>;
  hasImage_comments!: Sequelize.HasManyHasAssociationsMixin<image_comment, image_commentId>;
  countImage_comments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image_comment via created_by_id
  created_by_image_comments!: image_comment[];
  getCreated_by_image_comments!: Sequelize.HasManyGetAssociationsMixin<image_comment>;
  setCreated_by_image_comments!: Sequelize.HasManySetAssociationsMixin<image_comment, image_commentId>;
  addCreated_by_image_comment!: Sequelize.HasManyAddAssociationMixin<image_comment, image_commentId>;
  addCreated_by_image_comments!: Sequelize.HasManyAddAssociationsMixin<image_comment, image_commentId>;
  createCreated_by_image_comment!: Sequelize.HasManyCreateAssociationMixin<image_comment>;
  removeCreated_by_image_comment!: Sequelize.HasManyRemoveAssociationMixin<image_comment, image_commentId>;
  removeCreated_by_image_comments!: Sequelize.HasManyRemoveAssociationsMixin<image_comment, image_commentId>;
  hasCreated_by_image_comment!: Sequelize.HasManyHasAssociationMixin<image_comment, image_commentId>;
  hasCreated_by_image_comments!: Sequelize.HasManyHasAssociationsMixin<image_comment, image_commentId>;
  countCreated_by_image_comments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image_comment via last_modified_by_id
  last_modified_by_image_comments!: image_comment[];
  getLast_modified_by_image_comments!: Sequelize.HasManyGetAssociationsMixin<image_comment>;
  setLast_modified_by_image_comments!: Sequelize.HasManySetAssociationsMixin<image_comment, image_commentId>;
  addLast_modified_by_image_comment!: Sequelize.HasManyAddAssociationMixin<image_comment, image_commentId>;
  addLast_modified_by_image_comments!: Sequelize.HasManyAddAssociationsMixin<image_comment, image_commentId>;
  createLast_modified_by_image_comment!: Sequelize.HasManyCreateAssociationMixin<image_comment>;
  removeLast_modified_by_image_comment!: Sequelize.HasManyRemoveAssociationMixin<image_comment, image_commentId>;
  removeLast_modified_by_image_comments!: Sequelize.HasManyRemoveAssociationsMixin<image_comment, image_commentId>;
  hasLast_modified_by_image_comment!: Sequelize.HasManyHasAssociationMixin<image_comment, image_commentId>;
  hasLast_modified_by_image_comments!: Sequelize.HasManyHasAssociationsMixin<image_comment, image_commentId>;
  countLast_modified_by_image_comments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image_feedback via user_id
  image_feedbacks!: image_feedback[];
  getImage_feedbacks!: Sequelize.HasManyGetAssociationsMixin<image_feedback>;
  setImage_feedbacks!: Sequelize.HasManySetAssociationsMixin<image_feedback, image_feedbackId>;
  addImage_feedback!: Sequelize.HasManyAddAssociationMixin<image_feedback, image_feedbackId>;
  addImage_feedbacks!: Sequelize.HasManyAddAssociationsMixin<image_feedback, image_feedbackId>;
  createImage_feedback!: Sequelize.HasManyCreateAssociationMixin<image_feedback>;
  removeImage_feedback!: Sequelize.HasManyRemoveAssociationMixin<image_feedback, image_feedbackId>;
  removeImage_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<image_feedback, image_feedbackId>;
  hasImage_feedback!: Sequelize.HasManyHasAssociationMixin<image_feedback, image_feedbackId>;
  hasImage_feedbacks!: Sequelize.HasManyHasAssociationsMixin<image_feedback, image_feedbackId>;
  countImage_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image_feedback via created_by_id
  created_by_image_feedbacks!: image_feedback[];
  getCreated_by_image_feedbacks!: Sequelize.HasManyGetAssociationsMixin<image_feedback>;
  setCreated_by_image_feedbacks!: Sequelize.HasManySetAssociationsMixin<image_feedback, image_feedbackId>;
  addCreated_by_image_feedback!: Sequelize.HasManyAddAssociationMixin<image_feedback, image_feedbackId>;
  addCreated_by_image_feedbacks!: Sequelize.HasManyAddAssociationsMixin<image_feedback, image_feedbackId>;
  createCreated_by_image_feedback!: Sequelize.HasManyCreateAssociationMixin<image_feedback>;
  removeCreated_by_image_feedback!: Sequelize.HasManyRemoveAssociationMixin<image_feedback, image_feedbackId>;
  removeCreated_by_image_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<image_feedback, image_feedbackId>;
  hasCreated_by_image_feedback!: Sequelize.HasManyHasAssociationMixin<image_feedback, image_feedbackId>;
  hasCreated_by_image_feedbacks!: Sequelize.HasManyHasAssociationsMixin<image_feedback, image_feedbackId>;
  countCreated_by_image_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image_feedback via last_modified_by_id
  last_modified_by_image_feedbacks!: image_feedback[];
  getLast_modified_by_image_feedbacks!: Sequelize.HasManyGetAssociationsMixin<image_feedback>;
  setLast_modified_by_image_feedbacks!: Sequelize.HasManySetAssociationsMixin<image_feedback, image_feedbackId>;
  addLast_modified_by_image_feedback!: Sequelize.HasManyAddAssociationMixin<image_feedback, image_feedbackId>;
  addLast_modified_by_image_feedbacks!: Sequelize.HasManyAddAssociationsMixin<image_feedback, image_feedbackId>;
  createLast_modified_by_image_feedback!: Sequelize.HasManyCreateAssociationMixin<image_feedback>;
  removeLast_modified_by_image_feedback!: Sequelize.HasManyRemoveAssociationMixin<image_feedback, image_feedbackId>;
  removeLast_modified_by_image_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<image_feedback, image_feedbackId>;
  hasLast_modified_by_image_feedback!: Sequelize.HasManyHasAssociationMixin<image_feedback, image_feedbackId>;
  hasLast_modified_by_image_feedbacks!: Sequelize.HasManyHasAssociationsMixin<image_feedback, image_feedbackId>;
  countLast_modified_by_image_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image_likers via user_id
  image_likers!: image_likers[];
  getImage_likers!: Sequelize.HasManyGetAssociationsMixin<image_likers>;
  setImage_likers!: Sequelize.HasManySetAssociationsMixin<image_likers, image_likersId>;
  addImage_liker!: Sequelize.HasManyAddAssociationMixin<image_likers, image_likersId>;
  addImage_likers!: Sequelize.HasManyAddAssociationsMixin<image_likers, image_likersId>;
  createImage_liker!: Sequelize.HasManyCreateAssociationMixin<image_likers>;
  removeImage_liker!: Sequelize.HasManyRemoveAssociationMixin<image_likers, image_likersId>;
  removeImage_likers!: Sequelize.HasManyRemoveAssociationsMixin<image_likers, image_likersId>;
  hasImage_liker!: Sequelize.HasManyHasAssociationMixin<image_likers, image_likersId>;
  hasImage_likers!: Sequelize.HasManyHasAssociationsMixin<image_likers, image_likersId>;
  countImage_likers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image_rating via user_id
  image_ratings!: image_rating[];
  getImage_ratings!: Sequelize.HasManyGetAssociationsMixin<image_rating>;
  setImage_ratings!: Sequelize.HasManySetAssociationsMixin<image_rating, image_ratingId>;
  addImage_rating!: Sequelize.HasManyAddAssociationMixin<image_rating, image_ratingId>;
  addImage_ratings!: Sequelize.HasManyAddAssociationsMixin<image_rating, image_ratingId>;
  createImage_rating!: Sequelize.HasManyCreateAssociationMixin<image_rating>;
  removeImage_rating!: Sequelize.HasManyRemoveAssociationMixin<image_rating, image_ratingId>;
  removeImage_ratings!: Sequelize.HasManyRemoveAssociationsMixin<image_rating, image_ratingId>;
  hasImage_rating!: Sequelize.HasManyHasAssociationMixin<image_rating, image_ratingId>;
  hasImage_ratings!: Sequelize.HasManyHasAssociationsMixin<image_rating, image_ratingId>;
  countImage_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image_rating via created_by_id
  created_by_image_ratings!: image_rating[];
  getCreated_by_image_ratings!: Sequelize.HasManyGetAssociationsMixin<image_rating>;
  setCreated_by_image_ratings!: Sequelize.HasManySetAssociationsMixin<image_rating, image_ratingId>;
  addCreated_by_image_rating!: Sequelize.HasManyAddAssociationMixin<image_rating, image_ratingId>;
  addCreated_by_image_ratings!: Sequelize.HasManyAddAssociationsMixin<image_rating, image_ratingId>;
  createCreated_by_image_rating!: Sequelize.HasManyCreateAssociationMixin<image_rating>;
  removeCreated_by_image_rating!: Sequelize.HasManyRemoveAssociationMixin<image_rating, image_ratingId>;
  removeCreated_by_image_ratings!: Sequelize.HasManyRemoveAssociationsMixin<image_rating, image_ratingId>;
  hasCreated_by_image_rating!: Sequelize.HasManyHasAssociationMixin<image_rating, image_ratingId>;
  hasCreated_by_image_ratings!: Sequelize.HasManyHasAssociationsMixin<image_rating, image_ratingId>;
  countCreated_by_image_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany image_rating via last_modified_by_id
  last_modified_by_image_ratings!: image_rating[];
  getLast_modified_by_image_ratings!: Sequelize.HasManyGetAssociationsMixin<image_rating>;
  setLast_modified_by_image_ratings!: Sequelize.HasManySetAssociationsMixin<image_rating, image_ratingId>;
  addLast_modified_by_image_rating!: Sequelize.HasManyAddAssociationMixin<image_rating, image_ratingId>;
  addLast_modified_by_image_ratings!: Sequelize.HasManyAddAssociationsMixin<image_rating, image_ratingId>;
  createLast_modified_by_image_rating!: Sequelize.HasManyCreateAssociationMixin<image_rating>;
  removeLast_modified_by_image_rating!: Sequelize.HasManyRemoveAssociationMixin<image_rating, image_ratingId>;
  removeLast_modified_by_image_ratings!: Sequelize.HasManyRemoveAssociationsMixin<image_rating, image_ratingId>;
  hasLast_modified_by_image_rating!: Sequelize.HasManyHasAssociationMixin<image_rating, image_ratingId>;
  hasLast_modified_by_image_ratings!: Sequelize.HasManyHasAssociationsMixin<image_rating, image_ratingId>;
  countLast_modified_by_image_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany item_bid via last_modified_by_id
  item_bids!: item_bid[];
  getItem_bids!: Sequelize.HasManyGetAssociationsMixin<item_bid>;
  setItem_bids!: Sequelize.HasManySetAssociationsMixin<item_bid, item_bidId>;
  addItem_bid!: Sequelize.HasManyAddAssociationMixin<item_bid, item_bidId>;
  addItem_bids!: Sequelize.HasManyAddAssociationsMixin<item_bid, item_bidId>;
  createItem_bid!: Sequelize.HasManyCreateAssociationMixin<item_bid>;
  removeItem_bid!: Sequelize.HasManyRemoveAssociationMixin<item_bid, item_bidId>;
  removeItem_bids!: Sequelize.HasManyRemoveAssociationsMixin<item_bid, item_bidId>;
  hasItem_bid!: Sequelize.HasManyHasAssociationMixin<item_bid, item_bidId>;
  hasItem_bids!: Sequelize.HasManyHasAssociationsMixin<item_bid, item_bidId>;
  countItem_bids!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany item_bid via created_by_id
  created_by_item_bids!: item_bid[];
  getCreated_by_item_bids!: Sequelize.HasManyGetAssociationsMixin<item_bid>;
  setCreated_by_item_bids!: Sequelize.HasManySetAssociationsMixin<item_bid, item_bidId>;
  addCreated_by_item_bid!: Sequelize.HasManyAddAssociationMixin<item_bid, item_bidId>;
  addCreated_by_item_bids!: Sequelize.HasManyAddAssociationsMixin<item_bid, item_bidId>;
  createCreated_by_item_bid!: Sequelize.HasManyCreateAssociationMixin<item_bid>;
  removeCreated_by_item_bid!: Sequelize.HasManyRemoveAssociationMixin<item_bid, item_bidId>;
  removeCreated_by_item_bids!: Sequelize.HasManyRemoveAssociationsMixin<item_bid, item_bidId>;
  hasCreated_by_item_bid!: Sequelize.HasManyHasAssociationMixin<item_bid, item_bidId>;
  hasCreated_by_item_bids!: Sequelize.HasManyHasAssociationsMixin<item_bid, item_bidId>;
  countCreated_by_item_bids!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany item_license via created_by_id
  item_licenses!: item_license[];
  getItem_licenses!: Sequelize.HasManyGetAssociationsMixin<item_license>;
  setItem_licenses!: Sequelize.HasManySetAssociationsMixin<item_license, item_licenseId>;
  addItem_license!: Sequelize.HasManyAddAssociationMixin<item_license, item_licenseId>;
  addItem_licenses!: Sequelize.HasManyAddAssociationsMixin<item_license, item_licenseId>;
  createItem_license!: Sequelize.HasManyCreateAssociationMixin<item_license>;
  removeItem_license!: Sequelize.HasManyRemoveAssociationMixin<item_license, item_licenseId>;
  removeItem_licenses!: Sequelize.HasManyRemoveAssociationsMixin<item_license, item_licenseId>;
  hasItem_license!: Sequelize.HasManyHasAssociationMixin<item_license, item_licenseId>;
  hasItem_licenses!: Sequelize.HasManyHasAssociationsMixin<item_license, item_licenseId>;
  countItem_licenses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany item_license via last_modified_by_id
  last_modified_by_item_licenses!: item_license[];
  getLast_modified_by_item_licenses!: Sequelize.HasManyGetAssociationsMixin<item_license>;
  setLast_modified_by_item_licenses!: Sequelize.HasManySetAssociationsMixin<item_license, item_licenseId>;
  addLast_modified_by_item_license!: Sequelize.HasManyAddAssociationMixin<item_license, item_licenseId>;
  addLast_modified_by_item_licenses!: Sequelize.HasManyAddAssociationsMixin<item_license, item_licenseId>;
  createLast_modified_by_item_license!: Sequelize.HasManyCreateAssociationMixin<item_license>;
  removeLast_modified_by_item_license!: Sequelize.HasManyRemoveAssociationMixin<item_license, item_licenseId>;
  removeLast_modified_by_item_licenses!: Sequelize.HasManyRemoveAssociationsMixin<item_license, item_licenseId>;
  hasLast_modified_by_item_license!: Sequelize.HasManyHasAssociationMixin<item_license, item_licenseId>;
  hasLast_modified_by_item_licenses!: Sequelize.HasManyHasAssociationsMixin<item_license, item_licenseId>;
  countLast_modified_by_item_licenses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany master_type via created_by_id
  master_types!: master_type[];
  getMaster_types!: Sequelize.HasManyGetAssociationsMixin<master_type>;
  setMaster_types!: Sequelize.HasManySetAssociationsMixin<master_type, master_typeId>;
  addMaster_type!: Sequelize.HasManyAddAssociationMixin<master_type, master_typeId>;
  addMaster_types!: Sequelize.HasManyAddAssociationsMixin<master_type, master_typeId>;
  createMaster_type!: Sequelize.HasManyCreateAssociationMixin<master_type>;
  removeMaster_type!: Sequelize.HasManyRemoveAssociationMixin<master_type, master_typeId>;
  removeMaster_types!: Sequelize.HasManyRemoveAssociationsMixin<master_type, master_typeId>;
  hasMaster_type!: Sequelize.HasManyHasAssociationMixin<master_type, master_typeId>;
  hasMaster_types!: Sequelize.HasManyHasAssociationsMixin<master_type, master_typeId>;
  countMaster_types!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany master_type via last_modified_by_id
  last_modified_by_master_types!: master_type[];
  getLast_modified_by_master_types!: Sequelize.HasManyGetAssociationsMixin<master_type>;
  setLast_modified_by_master_types!: Sequelize.HasManySetAssociationsMixin<master_type, master_typeId>;
  addLast_modified_by_master_type!: Sequelize.HasManyAddAssociationMixin<master_type, master_typeId>;
  addLast_modified_by_master_types!: Sequelize.HasManyAddAssociationsMixin<master_type, master_typeId>;
  createLast_modified_by_master_type!: Sequelize.HasManyCreateAssociationMixin<master_type>;
  removeLast_modified_by_master_type!: Sequelize.HasManyRemoveAssociationMixin<master_type, master_typeId>;
  removeLast_modified_by_master_types!: Sequelize.HasManyRemoveAssociationsMixin<master_type, master_typeId>;
  hasLast_modified_by_master_type!: Sequelize.HasManyHasAssociationMixin<master_type, master_typeId>;
  hasLast_modified_by_master_types!: Sequelize.HasManyHasAssociationsMixin<master_type, master_typeId>;
  countLast_modified_by_master_types!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany master_value via created_by_id
  master_values!: master_value[];
  getMaster_values!: Sequelize.HasManyGetAssociationsMixin<master_value>;
  setMaster_values!: Sequelize.HasManySetAssociationsMixin<master_value, master_valueId>;
  addMaster_value!: Sequelize.HasManyAddAssociationMixin<master_value, master_valueId>;
  addMaster_values!: Sequelize.HasManyAddAssociationsMixin<master_value, master_valueId>;
  createMaster_value!: Sequelize.HasManyCreateAssociationMixin<master_value>;
  removeMaster_value!: Sequelize.HasManyRemoveAssociationMixin<master_value, master_valueId>;
  removeMaster_values!: Sequelize.HasManyRemoveAssociationsMixin<master_value, master_valueId>;
  hasMaster_value!: Sequelize.HasManyHasAssociationMixin<master_value, master_valueId>;
  hasMaster_values!: Sequelize.HasManyHasAssociationsMixin<master_value, master_valueId>;
  countMaster_values!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany master_value via last_modified_by_id
  last_modified_by_master_values!: master_value[];
  getLast_modified_by_master_values!: Sequelize.HasManyGetAssociationsMixin<master_value>;
  setLast_modified_by_master_values!: Sequelize.HasManySetAssociationsMixin<master_value, master_valueId>;
  addLast_modified_by_master_value!: Sequelize.HasManyAddAssociationMixin<master_value, master_valueId>;
  addLast_modified_by_master_values!: Sequelize.HasManyAddAssociationsMixin<master_value, master_valueId>;
  createLast_modified_by_master_value!: Sequelize.HasManyCreateAssociationMixin<master_value>;
  removeLast_modified_by_master_value!: Sequelize.HasManyRemoveAssociationMixin<master_value, master_valueId>;
  removeLast_modified_by_master_values!: Sequelize.HasManyRemoveAssociationsMixin<master_value, master_valueId>;
  hasLast_modified_by_master_value!: Sequelize.HasManyHasAssociationMixin<master_value, master_valueId>;
  hasLast_modified_by_master_values!: Sequelize.HasManyHasAssociationsMixin<master_value, master_valueId>;
  countLast_modified_by_master_values!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany password_reset_token via created_by_id
  password_reset_tokens!: password_reset_token[];
  getPassword_reset_tokens!: Sequelize.HasManyGetAssociationsMixin<password_reset_token>;
  setPassword_reset_tokens!: Sequelize.HasManySetAssociationsMixin<password_reset_token, password_reset_tokenId>;
  addPassword_reset_token!: Sequelize.HasManyAddAssociationMixin<password_reset_token, password_reset_tokenId>;
  addPassword_reset_tokens!: Sequelize.HasManyAddAssociationsMixin<password_reset_token, password_reset_tokenId>;
  createPassword_reset_token!: Sequelize.HasManyCreateAssociationMixin<password_reset_token>;
  removePassword_reset_token!: Sequelize.HasManyRemoveAssociationMixin<password_reset_token, password_reset_tokenId>;
  removePassword_reset_tokens!: Sequelize.HasManyRemoveAssociationsMixin<password_reset_token, password_reset_tokenId>;
  hasPassword_reset_token!: Sequelize.HasManyHasAssociationMixin<password_reset_token, password_reset_tokenId>;
  hasPassword_reset_tokens!: Sequelize.HasManyHasAssociationsMixin<password_reset_token, password_reset_tokenId>;
  countPassword_reset_tokens!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany password_reset_token via user_id
  user_password_reset_tokens!: password_reset_token[];
  getUser_password_reset_tokens!: Sequelize.HasManyGetAssociationsMixin<password_reset_token>;
  setUser_password_reset_tokens!: Sequelize.HasManySetAssociationsMixin<password_reset_token, password_reset_tokenId>;
  addUser_password_reset_token!: Sequelize.HasManyAddAssociationMixin<password_reset_token, password_reset_tokenId>;
  addUser_password_reset_tokens!: Sequelize.HasManyAddAssociationsMixin<password_reset_token, password_reset_tokenId>;
  createUser_password_reset_token!: Sequelize.HasManyCreateAssociationMixin<password_reset_token>;
  removeUser_password_reset_token!: Sequelize.HasManyRemoveAssociationMixin<password_reset_token, password_reset_tokenId>;
  removeUser_password_reset_tokens!: Sequelize.HasManyRemoveAssociationsMixin<password_reset_token, password_reset_tokenId>;
  hasUser_password_reset_token!: Sequelize.HasManyHasAssociationMixin<password_reset_token, password_reset_tokenId>;
  hasUser_password_reset_tokens!: Sequelize.HasManyHasAssociationsMixin<password_reset_token, password_reset_tokenId>;
  countUser_password_reset_tokens!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany password_reset_token via last_modified_by_id
  last_modified_by_password_reset_tokens!: password_reset_token[];
  getLast_modified_by_password_reset_tokens!: Sequelize.HasManyGetAssociationsMixin<password_reset_token>;
  setLast_modified_by_password_reset_tokens!: Sequelize.HasManySetAssociationsMixin<password_reset_token, password_reset_tokenId>;
  addLast_modified_by_password_reset_token!: Sequelize.HasManyAddAssociationMixin<password_reset_token, password_reset_tokenId>;
  addLast_modified_by_password_reset_tokens!: Sequelize.HasManyAddAssociationsMixin<password_reset_token, password_reset_tokenId>;
  createLast_modified_by_password_reset_token!: Sequelize.HasManyCreateAssociationMixin<password_reset_token>;
  removeLast_modified_by_password_reset_token!: Sequelize.HasManyRemoveAssociationMixin<password_reset_token, password_reset_tokenId>;
  removeLast_modified_by_password_reset_tokens!: Sequelize.HasManyRemoveAssociationsMixin<password_reset_token, password_reset_tokenId>;
  hasLast_modified_by_password_reset_token!: Sequelize.HasManyHasAssociationMixin<password_reset_token, password_reset_tokenId>;
  hasLast_modified_by_password_reset_tokens!: Sequelize.HasManyHasAssociationsMixin<password_reset_token, password_reset_tokenId>;
  countLast_modified_by_password_reset_tokens!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pay_credit_card via created_by_id
  pay_credit_cards!: pay_credit_card[];
  getPay_credit_cards!: Sequelize.HasManyGetAssociationsMixin<pay_credit_card>;
  setPay_credit_cards!: Sequelize.HasManySetAssociationsMixin<pay_credit_card, pay_credit_cardId>;
  addPay_credit_card!: Sequelize.HasManyAddAssociationMixin<pay_credit_card, pay_credit_cardId>;
  addPay_credit_cards!: Sequelize.HasManyAddAssociationsMixin<pay_credit_card, pay_credit_cardId>;
  createPay_credit_card!: Sequelize.HasManyCreateAssociationMixin<pay_credit_card>;
  removePay_credit_card!: Sequelize.HasManyRemoveAssociationMixin<pay_credit_card, pay_credit_cardId>;
  removePay_credit_cards!: Sequelize.HasManyRemoveAssociationsMixin<pay_credit_card, pay_credit_cardId>;
  hasPay_credit_card!: Sequelize.HasManyHasAssociationMixin<pay_credit_card, pay_credit_cardId>;
  hasPay_credit_cards!: Sequelize.HasManyHasAssociationsMixin<pay_credit_card, pay_credit_cardId>;
  countPay_credit_cards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pay_credit_card via last_modified_by_id
  last_modified_by_pay_credit_cards!: pay_credit_card[];
  getLast_modified_by_pay_credit_cards!: Sequelize.HasManyGetAssociationsMixin<pay_credit_card>;
  setLast_modified_by_pay_credit_cards!: Sequelize.HasManySetAssociationsMixin<pay_credit_card, pay_credit_cardId>;
  addLast_modified_by_pay_credit_card!: Sequelize.HasManyAddAssociationMixin<pay_credit_card, pay_credit_cardId>;
  addLast_modified_by_pay_credit_cards!: Sequelize.HasManyAddAssociationsMixin<pay_credit_card, pay_credit_cardId>;
  createLast_modified_by_pay_credit_card!: Sequelize.HasManyCreateAssociationMixin<pay_credit_card>;
  removeLast_modified_by_pay_credit_card!: Sequelize.HasManyRemoveAssociationMixin<pay_credit_card, pay_credit_cardId>;
  removeLast_modified_by_pay_credit_cards!: Sequelize.HasManyRemoveAssociationsMixin<pay_credit_card, pay_credit_cardId>;
  hasLast_modified_by_pay_credit_card!: Sequelize.HasManyHasAssociationMixin<pay_credit_card, pay_credit_cardId>;
  hasLast_modified_by_pay_credit_cards!: Sequelize.HasManyHasAssociationsMixin<pay_credit_card, pay_credit_cardId>;
  countLast_modified_by_pay_credit_cards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pay_payment via last_modified_by_id
  pay_payments!: pay_payment[];
  getPay_payments!: Sequelize.HasManyGetAssociationsMixin<pay_payment>;
  setPay_payments!: Sequelize.HasManySetAssociationsMixin<pay_payment, pay_paymentId>;
  addPay_payment!: Sequelize.HasManyAddAssociationMixin<pay_payment, pay_paymentId>;
  addPay_payments!: Sequelize.HasManyAddAssociationsMixin<pay_payment, pay_paymentId>;
  createPay_payment!: Sequelize.HasManyCreateAssociationMixin<pay_payment>;
  removePay_payment!: Sequelize.HasManyRemoveAssociationMixin<pay_payment, pay_paymentId>;
  removePay_payments!: Sequelize.HasManyRemoveAssociationsMixin<pay_payment, pay_paymentId>;
  hasPay_payment!: Sequelize.HasManyHasAssociationMixin<pay_payment, pay_paymentId>;
  hasPay_payments!: Sequelize.HasManyHasAssociationsMixin<pay_payment, pay_paymentId>;
  countPay_payments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pay_payment via created_by_id
  created_by_pay_payments!: pay_payment[];
  getCreated_by_pay_payments!: Sequelize.HasManyGetAssociationsMixin<pay_payment>;
  setCreated_by_pay_payments!: Sequelize.HasManySetAssociationsMixin<pay_payment, pay_paymentId>;
  addCreated_by_pay_payment!: Sequelize.HasManyAddAssociationMixin<pay_payment, pay_paymentId>;
  addCreated_by_pay_payments!: Sequelize.HasManyAddAssociationsMixin<pay_payment, pay_paymentId>;
  createCreated_by_pay_payment!: Sequelize.HasManyCreateAssociationMixin<pay_payment>;
  removeCreated_by_pay_payment!: Sequelize.HasManyRemoveAssociationMixin<pay_payment, pay_paymentId>;
  removeCreated_by_pay_payments!: Sequelize.HasManyRemoveAssociationsMixin<pay_payment, pay_paymentId>;
  hasCreated_by_pay_payment!: Sequelize.HasManyHasAssociationMixin<pay_payment, pay_paymentId>;
  hasCreated_by_pay_payments!: Sequelize.HasManyHasAssociationsMixin<pay_payment, pay_paymentId>;
  countCreated_by_pay_payments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany perm_activity via created_by_id
  perm_activities!: perm_activity[];
  getPerm_activities!: Sequelize.HasManyGetAssociationsMixin<perm_activity>;
  setPerm_activities!: Sequelize.HasManySetAssociationsMixin<perm_activity, perm_activityId>;
  addPerm_activity!: Sequelize.HasManyAddAssociationMixin<perm_activity, perm_activityId>;
  addPerm_activities!: Sequelize.HasManyAddAssociationsMixin<perm_activity, perm_activityId>;
  createPerm_activity!: Sequelize.HasManyCreateAssociationMixin<perm_activity>;
  removePerm_activity!: Sequelize.HasManyRemoveAssociationMixin<perm_activity, perm_activityId>;
  removePerm_activities!: Sequelize.HasManyRemoveAssociationsMixin<perm_activity, perm_activityId>;
  hasPerm_activity!: Sequelize.HasManyHasAssociationMixin<perm_activity, perm_activityId>;
  hasPerm_activities!: Sequelize.HasManyHasAssociationsMixin<perm_activity, perm_activityId>;
  countPerm_activities!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany perm_activity via last_modified_by_id
  last_modified_by_perm_activities!: perm_activity[];
  getLast_modified_by_perm_activities!: Sequelize.HasManyGetAssociationsMixin<perm_activity>;
  setLast_modified_by_perm_activities!: Sequelize.HasManySetAssociationsMixin<perm_activity, perm_activityId>;
  addLast_modified_by_perm_activity!: Sequelize.HasManyAddAssociationMixin<perm_activity, perm_activityId>;
  addLast_modified_by_perm_activities!: Sequelize.HasManyAddAssociationsMixin<perm_activity, perm_activityId>;
  createLast_modified_by_perm_activity!: Sequelize.HasManyCreateAssociationMixin<perm_activity>;
  removeLast_modified_by_perm_activity!: Sequelize.HasManyRemoveAssociationMixin<perm_activity, perm_activityId>;
  removeLast_modified_by_perm_activities!: Sequelize.HasManyRemoveAssociationsMixin<perm_activity, perm_activityId>;
  hasLast_modified_by_perm_activity!: Sequelize.HasManyHasAssociationMixin<perm_activity, perm_activityId>;
  hasLast_modified_by_perm_activities!: Sequelize.HasManyHasAssociationsMixin<perm_activity, perm_activityId>;
  countLast_modified_by_perm_activities!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany perm_role via last_modified_by_id
  perm_roles!: perm_role[];
  getPerm_roles!: Sequelize.HasManyGetAssociationsMixin<perm_role>;
  setPerm_roles!: Sequelize.HasManySetAssociationsMixin<perm_role, perm_roleId>;
  addPerm_role!: Sequelize.HasManyAddAssociationMixin<perm_role, perm_roleId>;
  addPerm_roles!: Sequelize.HasManyAddAssociationsMixin<perm_role, perm_roleId>;
  createPerm_role!: Sequelize.HasManyCreateAssociationMixin<perm_role>;
  removePerm_role!: Sequelize.HasManyRemoveAssociationMixin<perm_role, perm_roleId>;
  removePerm_roles!: Sequelize.HasManyRemoveAssociationsMixin<perm_role, perm_roleId>;
  hasPerm_role!: Sequelize.HasManyHasAssociationMixin<perm_role, perm_roleId>;
  hasPerm_roles!: Sequelize.HasManyHasAssociationsMixin<perm_role, perm_roleId>;
  countPerm_roles!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany perm_role via created_by_id
  created_by_perm_roles!: perm_role[];
  getCreated_by_perm_roles!: Sequelize.HasManyGetAssociationsMixin<perm_role>;
  setCreated_by_perm_roles!: Sequelize.HasManySetAssociationsMixin<perm_role, perm_roleId>;
  addCreated_by_perm_role!: Sequelize.HasManyAddAssociationMixin<perm_role, perm_roleId>;
  addCreated_by_perm_roles!: Sequelize.HasManyAddAssociationsMixin<perm_role, perm_roleId>;
  createCreated_by_perm_role!: Sequelize.HasManyCreateAssociationMixin<perm_role>;
  removeCreated_by_perm_role!: Sequelize.HasManyRemoveAssociationMixin<perm_role, perm_roleId>;
  removeCreated_by_perm_roles!: Sequelize.HasManyRemoveAssociationsMixin<perm_role, perm_roleId>;
  hasCreated_by_perm_role!: Sequelize.HasManyHasAssociationMixin<perm_role, perm_roleId>;
  hasCreated_by_perm_roles!: Sequelize.HasManyHasAssociationsMixin<perm_role, perm_roleId>;
  countCreated_by_perm_roles!: Sequelize.HasManyCountAssociationsMixin;
  // user belongsToMany perm_role via user_id and roles_id
  roles_id_perm_roles!: perm_role[];
  getRoles_id_perm_roles!: Sequelize.BelongsToManyGetAssociationsMixin<perm_role>;
  setRoles_id_perm_roles!: Sequelize.BelongsToManySetAssociationsMixin<perm_role, perm_roleId>;
  addRoles_id_perm_role!: Sequelize.BelongsToManyAddAssociationMixin<perm_role, perm_roleId>;
  addRoles_id_perm_roles!: Sequelize.BelongsToManyAddAssociationsMixin<perm_role, perm_roleId>;
  createRoles_id_perm_role!: Sequelize.BelongsToManyCreateAssociationMixin<perm_role>;
  removeRoles_id_perm_role!: Sequelize.BelongsToManyRemoveAssociationMixin<perm_role, perm_roleId>;
  removeRoles_id_perm_roles!: Sequelize.BelongsToManyRemoveAssociationsMixin<perm_role, perm_roleId>;
  hasRoles_id_perm_role!: Sequelize.BelongsToManyHasAssociationMixin<perm_role, perm_roleId>;
  hasRoles_id_perm_roles!: Sequelize.BelongsToManyHasAssociationsMixin<perm_role, perm_roleId>;
  countRoles_id_perm_roles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user hasMany pgm_answers via last_modified_by_id
  pgm_answers!: pgm_answers[];
  getPgm_answers!: Sequelize.HasManyGetAssociationsMixin<pgm_answers>;
  setPgm_answers!: Sequelize.HasManySetAssociationsMixin<pgm_answers, pgm_answersId>;
  addPgm_answer!: Sequelize.HasManyAddAssociationMixin<pgm_answers, pgm_answersId>;
  addPgm_answers!: Sequelize.HasManyAddAssociationsMixin<pgm_answers, pgm_answersId>;
  createPgm_answer!: Sequelize.HasManyCreateAssociationMixin<pgm_answers>;
  removePgm_answer!: Sequelize.HasManyRemoveAssociationMixin<pgm_answers, pgm_answersId>;
  removePgm_answers!: Sequelize.HasManyRemoveAssociationsMixin<pgm_answers, pgm_answersId>;
  hasPgm_answer!: Sequelize.HasManyHasAssociationMixin<pgm_answers, pgm_answersId>;
  hasPgm_answers!: Sequelize.HasManyHasAssociationsMixin<pgm_answers, pgm_answersId>;
  countPgm_answers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_answers via created_by_id
  created_by_pgm_answers!: pgm_answers[];
  getCreated_by_pgm_answers!: Sequelize.HasManyGetAssociationsMixin<pgm_answers>;
  setCreated_by_pgm_answers!: Sequelize.HasManySetAssociationsMixin<pgm_answers, pgm_answersId>;
  addCreated_by_pgm_answer!: Sequelize.HasManyAddAssociationMixin<pgm_answers, pgm_answersId>;
  addCreated_by_pgm_answers!: Sequelize.HasManyAddAssociationsMixin<pgm_answers, pgm_answersId>;
  createCreated_by_pgm_answer!: Sequelize.HasManyCreateAssociationMixin<pgm_answers>;
  removeCreated_by_pgm_answer!: Sequelize.HasManyRemoveAssociationMixin<pgm_answers, pgm_answersId>;
  removeCreated_by_pgm_answers!: Sequelize.HasManyRemoveAssociationsMixin<pgm_answers, pgm_answersId>;
  hasCreated_by_pgm_answer!: Sequelize.HasManyHasAssociationMixin<pgm_answers, pgm_answersId>;
  hasCreated_by_pgm_answers!: Sequelize.HasManyHasAssociationsMixin<pgm_answers, pgm_answersId>;
  countCreated_by_pgm_answers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_judge via last_modified_by_id
  pgm_judges!: pgm_judge[];
  getPgm_judges!: Sequelize.HasManyGetAssociationsMixin<pgm_judge>;
  setPgm_judges!: Sequelize.HasManySetAssociationsMixin<pgm_judge, pgm_judgeId>;
  addPgm_judge!: Sequelize.HasManyAddAssociationMixin<pgm_judge, pgm_judgeId>;
  addPgm_judges!: Sequelize.HasManyAddAssociationsMixin<pgm_judge, pgm_judgeId>;
  createPgm_judge!: Sequelize.HasManyCreateAssociationMixin<pgm_judge>;
  removePgm_judge!: Sequelize.HasManyRemoveAssociationMixin<pgm_judge, pgm_judgeId>;
  removePgm_judges!: Sequelize.HasManyRemoveAssociationsMixin<pgm_judge, pgm_judgeId>;
  hasPgm_judge!: Sequelize.HasManyHasAssociationMixin<pgm_judge, pgm_judgeId>;
  hasPgm_judges!: Sequelize.HasManyHasAssociationsMixin<pgm_judge, pgm_judgeId>;
  countPgm_judges!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_judge via created_by_id
  created_by_pgm_judges!: pgm_judge[];
  getCreated_by_pgm_judges!: Sequelize.HasManyGetAssociationsMixin<pgm_judge>;
  setCreated_by_pgm_judges!: Sequelize.HasManySetAssociationsMixin<pgm_judge, pgm_judgeId>;
  addCreated_by_pgm_judge!: Sequelize.HasManyAddAssociationMixin<pgm_judge, pgm_judgeId>;
  addCreated_by_pgm_judges!: Sequelize.HasManyAddAssociationsMixin<pgm_judge, pgm_judgeId>;
  createCreated_by_pgm_judge!: Sequelize.HasManyCreateAssociationMixin<pgm_judge>;
  removeCreated_by_pgm_judge!: Sequelize.HasManyRemoveAssociationMixin<pgm_judge, pgm_judgeId>;
  removeCreated_by_pgm_judges!: Sequelize.HasManyRemoveAssociationsMixin<pgm_judge, pgm_judgeId>;
  hasCreated_by_pgm_judge!: Sequelize.HasManyHasAssociationMixin<pgm_judge, pgm_judgeId>;
  hasCreated_by_pgm_judges!: Sequelize.HasManyHasAssociationsMixin<pgm_judge, pgm_judgeId>;
  countCreated_by_pgm_judges!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_judge via judge_id
  judge_pgm_judges!: pgm_judge[];
  getJudge_pgm_judges!: Sequelize.HasManyGetAssociationsMixin<pgm_judge>;
  setJudge_pgm_judges!: Sequelize.HasManySetAssociationsMixin<pgm_judge, pgm_judgeId>;
  addJudge_pgm_judge!: Sequelize.HasManyAddAssociationMixin<pgm_judge, pgm_judgeId>;
  addJudge_pgm_judges!: Sequelize.HasManyAddAssociationsMixin<pgm_judge, pgm_judgeId>;
  createJudge_pgm_judge!: Sequelize.HasManyCreateAssociationMixin<pgm_judge>;
  removeJudge_pgm_judge!: Sequelize.HasManyRemoveAssociationMixin<pgm_judge, pgm_judgeId>;
  removeJudge_pgm_judges!: Sequelize.HasManyRemoveAssociationsMixin<pgm_judge, pgm_judgeId>;
  hasJudge_pgm_judge!: Sequelize.HasManyHasAssociationMixin<pgm_judge, pgm_judgeId>;
  hasJudge_pgm_judges!: Sequelize.HasManyHasAssociationsMixin<pgm_judge, pgm_judgeId>;
  countJudge_pgm_judges!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_quest via created_by_id
  pgm_quests!: pgm_quest[];
  getPgm_quests!: Sequelize.HasManyGetAssociationsMixin<pgm_quest>;
  setPgm_quests!: Sequelize.HasManySetAssociationsMixin<pgm_quest, pgm_questId>;
  addPgm_quest!: Sequelize.HasManyAddAssociationMixin<pgm_quest, pgm_questId>;
  addPgm_quests!: Sequelize.HasManyAddAssociationsMixin<pgm_quest, pgm_questId>;
  createPgm_quest!: Sequelize.HasManyCreateAssociationMixin<pgm_quest>;
  removePgm_quest!: Sequelize.HasManyRemoveAssociationMixin<pgm_quest, pgm_questId>;
  removePgm_quests!: Sequelize.HasManyRemoveAssociationsMixin<pgm_quest, pgm_questId>;
  hasPgm_quest!: Sequelize.HasManyHasAssociationMixin<pgm_quest, pgm_questId>;
  hasPgm_quests!: Sequelize.HasManyHasAssociationsMixin<pgm_quest, pgm_questId>;
  countPgm_quests!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_quest via last_modified_by_id
  last_modified_by_pgm_quests!: pgm_quest[];
  getLast_modified_by_pgm_quests!: Sequelize.HasManyGetAssociationsMixin<pgm_quest>;
  setLast_modified_by_pgm_quests!: Sequelize.HasManySetAssociationsMixin<pgm_quest, pgm_questId>;
  addLast_modified_by_pgm_quest!: Sequelize.HasManyAddAssociationMixin<pgm_quest, pgm_questId>;
  addLast_modified_by_pgm_quests!: Sequelize.HasManyAddAssociationsMixin<pgm_quest, pgm_questId>;
  createLast_modified_by_pgm_quest!: Sequelize.HasManyCreateAssociationMixin<pgm_quest>;
  removeLast_modified_by_pgm_quest!: Sequelize.HasManyRemoveAssociationMixin<pgm_quest, pgm_questId>;
  removeLast_modified_by_pgm_quests!: Sequelize.HasManyRemoveAssociationsMixin<pgm_quest, pgm_questId>;
  hasLast_modified_by_pgm_quest!: Sequelize.HasManyHasAssociationMixin<pgm_quest, pgm_questId>;
  hasLast_modified_by_pgm_quests!: Sequelize.HasManyHasAssociationsMixin<pgm_quest, pgm_questId>;
  countLast_modified_by_pgm_quests!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_rating via user_id
  pgm_ratings!: pgm_rating[];
  getPgm_ratings!: Sequelize.HasManyGetAssociationsMixin<pgm_rating>;
  setPgm_ratings!: Sequelize.HasManySetAssociationsMixin<pgm_rating, pgm_ratingId>;
  addPgm_rating!: Sequelize.HasManyAddAssociationMixin<pgm_rating, pgm_ratingId>;
  addPgm_ratings!: Sequelize.HasManyAddAssociationsMixin<pgm_rating, pgm_ratingId>;
  createPgm_rating!: Sequelize.HasManyCreateAssociationMixin<pgm_rating>;
  removePgm_rating!: Sequelize.HasManyRemoveAssociationMixin<pgm_rating, pgm_ratingId>;
  removePgm_ratings!: Sequelize.HasManyRemoveAssociationsMixin<pgm_rating, pgm_ratingId>;
  hasPgm_rating!: Sequelize.HasManyHasAssociationMixin<pgm_rating, pgm_ratingId>;
  hasPgm_ratings!: Sequelize.HasManyHasAssociationsMixin<pgm_rating, pgm_ratingId>;
  countPgm_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_rating via last_modified_by_id
  last_modified_by_pgm_ratings!: pgm_rating[];
  getLast_modified_by_pgm_ratings!: Sequelize.HasManyGetAssociationsMixin<pgm_rating>;
  setLast_modified_by_pgm_ratings!: Sequelize.HasManySetAssociationsMixin<pgm_rating, pgm_ratingId>;
  addLast_modified_by_pgm_rating!: Sequelize.HasManyAddAssociationMixin<pgm_rating, pgm_ratingId>;
  addLast_modified_by_pgm_ratings!: Sequelize.HasManyAddAssociationsMixin<pgm_rating, pgm_ratingId>;
  createLast_modified_by_pgm_rating!: Sequelize.HasManyCreateAssociationMixin<pgm_rating>;
  removeLast_modified_by_pgm_rating!: Sequelize.HasManyRemoveAssociationMixin<pgm_rating, pgm_ratingId>;
  removeLast_modified_by_pgm_ratings!: Sequelize.HasManyRemoveAssociationsMixin<pgm_rating, pgm_ratingId>;
  hasLast_modified_by_pgm_rating!: Sequelize.HasManyHasAssociationMixin<pgm_rating, pgm_ratingId>;
  hasLast_modified_by_pgm_ratings!: Sequelize.HasManyHasAssociationsMixin<pgm_rating, pgm_ratingId>;
  countLast_modified_by_pgm_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_rating via created_by_id
  created_by_pgm_ratings!: pgm_rating[];
  getCreated_by_pgm_ratings!: Sequelize.HasManyGetAssociationsMixin<pgm_rating>;
  setCreated_by_pgm_ratings!: Sequelize.HasManySetAssociationsMixin<pgm_rating, pgm_ratingId>;
  addCreated_by_pgm_rating!: Sequelize.HasManyAddAssociationMixin<pgm_rating, pgm_ratingId>;
  addCreated_by_pgm_ratings!: Sequelize.HasManyAddAssociationsMixin<pgm_rating, pgm_ratingId>;
  createCreated_by_pgm_rating!: Sequelize.HasManyCreateAssociationMixin<pgm_rating>;
  removeCreated_by_pgm_rating!: Sequelize.HasManyRemoveAssociationMixin<pgm_rating, pgm_ratingId>;
  removeCreated_by_pgm_ratings!: Sequelize.HasManyRemoveAssociationsMixin<pgm_rating, pgm_ratingId>;
  hasCreated_by_pgm_rating!: Sequelize.HasManyHasAssociationMixin<pgm_rating, pgm_ratingId>;
  hasCreated_by_pgm_ratings!: Sequelize.HasManyHasAssociationsMixin<pgm_rating, pgm_ratingId>;
  countCreated_by_pgm_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_refs via created_by_id
  pgm_refs!: pgm_refs[];
  getPgm_refs!: Sequelize.HasManyGetAssociationsMixin<pgm_refs>;
  setPgm_refs!: Sequelize.HasManySetAssociationsMixin<pgm_refs, pgm_refsId>;
  addPgm_ref!: Sequelize.HasManyAddAssociationMixin<pgm_refs, pgm_refsId>;
  addPgm_refs!: Sequelize.HasManyAddAssociationsMixin<pgm_refs, pgm_refsId>;
  createPgm_ref!: Sequelize.HasManyCreateAssociationMixin<pgm_refs>;
  removePgm_ref!: Sequelize.HasManyRemoveAssociationMixin<pgm_refs, pgm_refsId>;
  removePgm_refs!: Sequelize.HasManyRemoveAssociationsMixin<pgm_refs, pgm_refsId>;
  hasPgm_ref!: Sequelize.HasManyHasAssociationMixin<pgm_refs, pgm_refsId>;
  hasPgm_refs!: Sequelize.HasManyHasAssociationsMixin<pgm_refs, pgm_refsId>;
  countPgm_refs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_refs via last_modified_by_id
  last_modified_by_pgm_refs!: pgm_refs[];
  getLast_modified_by_pgm_refs!: Sequelize.HasManyGetAssociationsMixin<pgm_refs>;
  setLast_modified_by_pgm_refs!: Sequelize.HasManySetAssociationsMixin<pgm_refs, pgm_refsId>;
  addLast_modified_by_pgm_ref!: Sequelize.HasManyAddAssociationMixin<pgm_refs, pgm_refsId>;
  addLast_modified_by_pgm_refs!: Sequelize.HasManyAddAssociationsMixin<pgm_refs, pgm_refsId>;
  createLast_modified_by_pgm_ref!: Sequelize.HasManyCreateAssociationMixin<pgm_refs>;
  removeLast_modified_by_pgm_ref!: Sequelize.HasManyRemoveAssociationMixin<pgm_refs, pgm_refsId>;
  removeLast_modified_by_pgm_refs!: Sequelize.HasManyRemoveAssociationsMixin<pgm_refs, pgm_refsId>;
  hasLast_modified_by_pgm_ref!: Sequelize.HasManyHasAssociationMixin<pgm_refs, pgm_refsId>;
  hasLast_modified_by_pgm_refs!: Sequelize.HasManyHasAssociationsMixin<pgm_refs, pgm_refsId>;
  countLast_modified_by_pgm_refs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_submission via created_by_id
  pgm_submissions!: pgm_submission[];
  getPgm_submissions!: Sequelize.HasManyGetAssociationsMixin<pgm_submission>;
  setPgm_submissions!: Sequelize.HasManySetAssociationsMixin<pgm_submission, pgm_submissionId>;
  addPgm_submission!: Sequelize.HasManyAddAssociationMixin<pgm_submission, pgm_submissionId>;
  addPgm_submissions!: Sequelize.HasManyAddAssociationsMixin<pgm_submission, pgm_submissionId>;
  createPgm_submission!: Sequelize.HasManyCreateAssociationMixin<pgm_submission>;
  removePgm_submission!: Sequelize.HasManyRemoveAssociationMixin<pgm_submission, pgm_submissionId>;
  removePgm_submissions!: Sequelize.HasManyRemoveAssociationsMixin<pgm_submission, pgm_submissionId>;
  hasPgm_submission!: Sequelize.HasManyHasAssociationMixin<pgm_submission, pgm_submissionId>;
  hasPgm_submissions!: Sequelize.HasManyHasAssociationsMixin<pgm_submission, pgm_submissionId>;
  countPgm_submissions!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany pgm_submission via last_modified_by_id
  last_modified_by_pgm_submissions!: pgm_submission[];
  getLast_modified_by_pgm_submissions!: Sequelize.HasManyGetAssociationsMixin<pgm_submission>;
  setLast_modified_by_pgm_submissions!: Sequelize.HasManySetAssociationsMixin<pgm_submission, pgm_submissionId>;
  addLast_modified_by_pgm_submission!: Sequelize.HasManyAddAssociationMixin<pgm_submission, pgm_submissionId>;
  addLast_modified_by_pgm_submissions!: Sequelize.HasManyAddAssociationsMixin<pgm_submission, pgm_submissionId>;
  createLast_modified_by_pgm_submission!: Sequelize.HasManyCreateAssociationMixin<pgm_submission>;
  removeLast_modified_by_pgm_submission!: Sequelize.HasManyRemoveAssociationMixin<pgm_submission, pgm_submissionId>;
  removeLast_modified_by_pgm_submissions!: Sequelize.HasManyRemoveAssociationsMixin<pgm_submission, pgm_submissionId>;
  hasLast_modified_by_pgm_submission!: Sequelize.HasManyHasAssociationMixin<pgm_submission, pgm_submissionId>;
  hasLast_modified_by_pgm_submissions!: Sequelize.HasManyHasAssociationsMixin<pgm_submission, pgm_submissionId>;
  countLast_modified_by_pgm_submissions!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_class via created_by_id
  sch_classes!: sch_class[];
  getSch_classes!: Sequelize.HasManyGetAssociationsMixin<sch_class>;
  setSch_classes!: Sequelize.HasManySetAssociationsMixin<sch_class, sch_classId>;
  addSch_class!: Sequelize.HasManyAddAssociationMixin<sch_class, sch_classId>;
  addSch_classes!: Sequelize.HasManyAddAssociationsMixin<sch_class, sch_classId>;
  createSch_class!: Sequelize.HasManyCreateAssociationMixin<sch_class>;
  removeSch_class!: Sequelize.HasManyRemoveAssociationMixin<sch_class, sch_classId>;
  removeSch_classes!: Sequelize.HasManyRemoveAssociationsMixin<sch_class, sch_classId>;
  hasSch_class!: Sequelize.HasManyHasAssociationMixin<sch_class, sch_classId>;
  hasSch_classes!: Sequelize.HasManyHasAssociationsMixin<sch_class, sch_classId>;
  countSch_classes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_class via last_modified_by_id
  last_modified_by_sch_classes!: sch_class[];
  getLast_modified_by_sch_classes!: Sequelize.HasManyGetAssociationsMixin<sch_class>;
  setLast_modified_by_sch_classes!: Sequelize.HasManySetAssociationsMixin<sch_class, sch_classId>;
  addLast_modified_by_sch_class!: Sequelize.HasManyAddAssociationMixin<sch_class, sch_classId>;
  addLast_modified_by_sch_classes!: Sequelize.HasManyAddAssociationsMixin<sch_class, sch_classId>;
  createLast_modified_by_sch_class!: Sequelize.HasManyCreateAssociationMixin<sch_class>;
  removeLast_modified_by_sch_class!: Sequelize.HasManyRemoveAssociationMixin<sch_class, sch_classId>;
  removeLast_modified_by_sch_classes!: Sequelize.HasManyRemoveAssociationsMixin<sch_class, sch_classId>;
  hasLast_modified_by_sch_class!: Sequelize.HasManyHasAssociationMixin<sch_class, sch_classId>;
  hasLast_modified_by_sch_classes!: Sequelize.HasManyHasAssociationsMixin<sch_class, sch_classId>;
  countLast_modified_by_sch_classes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_course via last_modified_by_id
  sch_courses!: sch_course[];
  getSch_courses!: Sequelize.HasManyGetAssociationsMixin<sch_course>;
  setSch_courses!: Sequelize.HasManySetAssociationsMixin<sch_course, sch_courseId>;
  addSch_course!: Sequelize.HasManyAddAssociationMixin<sch_course, sch_courseId>;
  addSch_courses!: Sequelize.HasManyAddAssociationsMixin<sch_course, sch_courseId>;
  createSch_course!: Sequelize.HasManyCreateAssociationMixin<sch_course>;
  removeSch_course!: Sequelize.HasManyRemoveAssociationMixin<sch_course, sch_courseId>;
  removeSch_courses!: Sequelize.HasManyRemoveAssociationsMixin<sch_course, sch_courseId>;
  hasSch_course!: Sequelize.HasManyHasAssociationMixin<sch_course, sch_courseId>;
  hasSch_courses!: Sequelize.HasManyHasAssociationsMixin<sch_course, sch_courseId>;
  countSch_courses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_course via created_by_id
  created_by_sch_courses!: sch_course[];
  getCreated_by_sch_courses!: Sequelize.HasManyGetAssociationsMixin<sch_course>;
  setCreated_by_sch_courses!: Sequelize.HasManySetAssociationsMixin<sch_course, sch_courseId>;
  addCreated_by_sch_course!: Sequelize.HasManyAddAssociationMixin<sch_course, sch_courseId>;
  addCreated_by_sch_courses!: Sequelize.HasManyAddAssociationsMixin<sch_course, sch_courseId>;
  createCreated_by_sch_course!: Sequelize.HasManyCreateAssociationMixin<sch_course>;
  removeCreated_by_sch_course!: Sequelize.HasManyRemoveAssociationMixin<sch_course, sch_courseId>;
  removeCreated_by_sch_courses!: Sequelize.HasManyRemoveAssociationsMixin<sch_course, sch_courseId>;
  hasCreated_by_sch_course!: Sequelize.HasManyHasAssociationMixin<sch_course, sch_courseId>;
  hasCreated_by_sch_courses!: Sequelize.HasManyHasAssociationsMixin<sch_course, sch_courseId>;
  countCreated_by_sch_courses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_dept via created_by_id
  sch_depts!: sch_dept[];
  getSch_depts!: Sequelize.HasManyGetAssociationsMixin<sch_dept>;
  setSch_depts!: Sequelize.HasManySetAssociationsMixin<sch_dept, sch_deptId>;
  addSch_dept!: Sequelize.HasManyAddAssociationMixin<sch_dept, sch_deptId>;
  addSch_depts!: Sequelize.HasManyAddAssociationsMixin<sch_dept, sch_deptId>;
  createSch_dept!: Sequelize.HasManyCreateAssociationMixin<sch_dept>;
  removeSch_dept!: Sequelize.HasManyRemoveAssociationMixin<sch_dept, sch_deptId>;
  removeSch_depts!: Sequelize.HasManyRemoveAssociationsMixin<sch_dept, sch_deptId>;
  hasSch_dept!: Sequelize.HasManyHasAssociationMixin<sch_dept, sch_deptId>;
  hasSch_depts!: Sequelize.HasManyHasAssociationsMixin<sch_dept, sch_deptId>;
  countSch_depts!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_dept via last_modified_by_id
  last_modified_by_sch_depts!: sch_dept[];
  getLast_modified_by_sch_depts!: Sequelize.HasManyGetAssociationsMixin<sch_dept>;
  setLast_modified_by_sch_depts!: Sequelize.HasManySetAssociationsMixin<sch_dept, sch_deptId>;
  addLast_modified_by_sch_dept!: Sequelize.HasManyAddAssociationMixin<sch_dept, sch_deptId>;
  addLast_modified_by_sch_depts!: Sequelize.HasManyAddAssociationsMixin<sch_dept, sch_deptId>;
  createLast_modified_by_sch_dept!: Sequelize.HasManyCreateAssociationMixin<sch_dept>;
  removeLast_modified_by_sch_dept!: Sequelize.HasManyRemoveAssociationMixin<sch_dept, sch_deptId>;
  removeLast_modified_by_sch_depts!: Sequelize.HasManyRemoveAssociationsMixin<sch_dept, sch_deptId>;
  hasLast_modified_by_sch_dept!: Sequelize.HasManyHasAssociationMixin<sch_dept, sch_deptId>;
  hasLast_modified_by_sch_depts!: Sequelize.HasManyHasAssociationsMixin<sch_dept, sch_deptId>;
  countLast_modified_by_sch_depts!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_instructor via created_by_id
  sch_instructors!: sch_instructor[];
  getSch_instructors!: Sequelize.HasManyGetAssociationsMixin<sch_instructor>;
  setSch_instructors!: Sequelize.HasManySetAssociationsMixin<sch_instructor, sch_instructorId>;
  addSch_instructor!: Sequelize.HasManyAddAssociationMixin<sch_instructor, sch_instructorId>;
  addSch_instructors!: Sequelize.HasManyAddAssociationsMixin<sch_instructor, sch_instructorId>;
  createSch_instructor!: Sequelize.HasManyCreateAssociationMixin<sch_instructor>;
  removeSch_instructor!: Sequelize.HasManyRemoveAssociationMixin<sch_instructor, sch_instructorId>;
  removeSch_instructors!: Sequelize.HasManyRemoveAssociationsMixin<sch_instructor, sch_instructorId>;
  hasSch_instructor!: Sequelize.HasManyHasAssociationMixin<sch_instructor, sch_instructorId>;
  hasSch_instructors!: Sequelize.HasManyHasAssociationsMixin<sch_instructor, sch_instructorId>;
  countSch_instructors!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_instructor via last_modified_by_id
  last_modified_by_sch_instructors!: sch_instructor[];
  getLast_modified_by_sch_instructors!: Sequelize.HasManyGetAssociationsMixin<sch_instructor>;
  setLast_modified_by_sch_instructors!: Sequelize.HasManySetAssociationsMixin<sch_instructor, sch_instructorId>;
  addLast_modified_by_sch_instructor!: Sequelize.HasManyAddAssociationMixin<sch_instructor, sch_instructorId>;
  addLast_modified_by_sch_instructors!: Sequelize.HasManyAddAssociationsMixin<sch_instructor, sch_instructorId>;
  createLast_modified_by_sch_instructor!: Sequelize.HasManyCreateAssociationMixin<sch_instructor>;
  removeLast_modified_by_sch_instructor!: Sequelize.HasManyRemoveAssociationMixin<sch_instructor, sch_instructorId>;
  removeLast_modified_by_sch_instructors!: Sequelize.HasManyRemoveAssociationsMixin<sch_instructor, sch_instructorId>;
  hasLast_modified_by_sch_instructor!: Sequelize.HasManyHasAssociationMixin<sch_instructor, sch_instructorId>;
  hasLast_modified_by_sch_instructors!: Sequelize.HasManyHasAssociationsMixin<sch_instructor, sch_instructorId>;
  countLast_modified_by_sch_instructors!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_school via created_by_id
  sch_schools!: sch_school[];
  getSch_schools!: Sequelize.HasManyGetAssociationsMixin<sch_school>;
  setSch_schools!: Sequelize.HasManySetAssociationsMixin<sch_school, sch_schoolId>;
  addSch_school!: Sequelize.HasManyAddAssociationMixin<sch_school, sch_schoolId>;
  addSch_schools!: Sequelize.HasManyAddAssociationsMixin<sch_school, sch_schoolId>;
  createSch_school!: Sequelize.HasManyCreateAssociationMixin<sch_school>;
  removeSch_school!: Sequelize.HasManyRemoveAssociationMixin<sch_school, sch_schoolId>;
  removeSch_schools!: Sequelize.HasManyRemoveAssociationsMixin<sch_school, sch_schoolId>;
  hasSch_school!: Sequelize.HasManyHasAssociationMixin<sch_school, sch_schoolId>;
  hasSch_schools!: Sequelize.HasManyHasAssociationsMixin<sch_school, sch_schoolId>;
  countSch_schools!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_school via last_modified_by_id
  last_modified_by_sch_schools!: sch_school[];
  getLast_modified_by_sch_schools!: Sequelize.HasManyGetAssociationsMixin<sch_school>;
  setLast_modified_by_sch_schools!: Sequelize.HasManySetAssociationsMixin<sch_school, sch_schoolId>;
  addLast_modified_by_sch_school!: Sequelize.HasManyAddAssociationMixin<sch_school, sch_schoolId>;
  addLast_modified_by_sch_schools!: Sequelize.HasManyAddAssociationsMixin<sch_school, sch_schoolId>;
  createLast_modified_by_sch_school!: Sequelize.HasManyCreateAssociationMixin<sch_school>;
  removeLast_modified_by_sch_school!: Sequelize.HasManyRemoveAssociationMixin<sch_school, sch_schoolId>;
  removeLast_modified_by_sch_schools!: Sequelize.HasManyRemoveAssociationsMixin<sch_school, sch_schoolId>;
  hasLast_modified_by_sch_school!: Sequelize.HasManyHasAssociationMixin<sch_school, sch_schoolId>;
  hasLast_modified_by_sch_schools!: Sequelize.HasManyHasAssociationsMixin<sch_school, sch_schoolId>;
  countLast_modified_by_sch_schools!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_student via last_modified_by_id
  sch_students!: sch_student[];
  getSch_students!: Sequelize.HasManyGetAssociationsMixin<sch_student>;
  setSch_students!: Sequelize.HasManySetAssociationsMixin<sch_student, sch_studentId>;
  addSch_student!: Sequelize.HasManyAddAssociationMixin<sch_student, sch_studentId>;
  addSch_students!: Sequelize.HasManyAddAssociationsMixin<sch_student, sch_studentId>;
  createSch_student!: Sequelize.HasManyCreateAssociationMixin<sch_student>;
  removeSch_student!: Sequelize.HasManyRemoveAssociationMixin<sch_student, sch_studentId>;
  removeSch_students!: Sequelize.HasManyRemoveAssociationsMixin<sch_student, sch_studentId>;
  hasSch_student!: Sequelize.HasManyHasAssociationMixin<sch_student, sch_studentId>;
  hasSch_students!: Sequelize.HasManyHasAssociationsMixin<sch_student, sch_studentId>;
  countSch_students!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany sch_student via created_by_id
  created_by_sch_students!: sch_student[];
  getCreated_by_sch_students!: Sequelize.HasManyGetAssociationsMixin<sch_student>;
  setCreated_by_sch_students!: Sequelize.HasManySetAssociationsMixin<sch_student, sch_studentId>;
  addCreated_by_sch_student!: Sequelize.HasManyAddAssociationMixin<sch_student, sch_studentId>;
  addCreated_by_sch_students!: Sequelize.HasManyAddAssociationsMixin<sch_student, sch_studentId>;
  createCreated_by_sch_student!: Sequelize.HasManyCreateAssociationMixin<sch_student>;
  removeCreated_by_sch_student!: Sequelize.HasManyRemoveAssociationMixin<sch_student, sch_studentId>;
  removeCreated_by_sch_students!: Sequelize.HasManyRemoveAssociationsMixin<sch_student, sch_studentId>;
  hasCreated_by_sch_student!: Sequelize.HasManyHasAssociationMixin<sch_student, sch_studentId>;
  hasCreated_by_sch_students!: Sequelize.HasManyHasAssociationsMixin<sch_student, sch_studentId>;
  countCreated_by_sch_students!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany shipment via buyer_id
  shipments!: shipment[];
  getShipments!: Sequelize.HasManyGetAssociationsMixin<shipment>;
  setShipments!: Sequelize.HasManySetAssociationsMixin<shipment, shipmentId>;
  addShipment!: Sequelize.HasManyAddAssociationMixin<shipment, shipmentId>;
  addShipments!: Sequelize.HasManyAddAssociationsMixin<shipment, shipmentId>;
  createShipment!: Sequelize.HasManyCreateAssociationMixin<shipment>;
  removeShipment!: Sequelize.HasManyRemoveAssociationMixin<shipment, shipmentId>;
  removeShipments!: Sequelize.HasManyRemoveAssociationsMixin<shipment, shipmentId>;
  hasShipment!: Sequelize.HasManyHasAssociationMixin<shipment, shipmentId>;
  hasShipments!: Sequelize.HasManyHasAssociationsMixin<shipment, shipmentId>;
  countShipments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany shipment via seller_id
  seller_shipments!: shipment[];
  getSeller_shipments!: Sequelize.HasManyGetAssociationsMixin<shipment>;
  setSeller_shipments!: Sequelize.HasManySetAssociationsMixin<shipment, shipmentId>;
  addSeller_shipment!: Sequelize.HasManyAddAssociationMixin<shipment, shipmentId>;
  addSeller_shipments!: Sequelize.HasManyAddAssociationsMixin<shipment, shipmentId>;
  createSeller_shipment!: Sequelize.HasManyCreateAssociationMixin<shipment>;
  removeSeller_shipment!: Sequelize.HasManyRemoveAssociationMixin<shipment, shipmentId>;
  removeSeller_shipments!: Sequelize.HasManyRemoveAssociationsMixin<shipment, shipmentId>;
  hasSeller_shipment!: Sequelize.HasManyHasAssociationMixin<shipment, shipmentId>;
  hasSeller_shipments!: Sequelize.HasManyHasAssociationsMixin<shipment, shipmentId>;
  countSeller_shipments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany shipping_details via created_by_id
  shipping_details!: shipping_details[];
  getShipping_details!: Sequelize.HasManyGetAssociationsMixin<shipping_details>;
  setShipping_details!: Sequelize.HasManySetAssociationsMixin<shipping_details, shipping_detailsId>;
  addShipping_detail!: Sequelize.HasManyAddAssociationMixin<shipping_details, shipping_detailsId>;
  addShipping_details!: Sequelize.HasManyAddAssociationsMixin<shipping_details, shipping_detailsId>;
  createShipping_detail!: Sequelize.HasManyCreateAssociationMixin<shipping_details>;
  removeShipping_detail!: Sequelize.HasManyRemoveAssociationMixin<shipping_details, shipping_detailsId>;
  removeShipping_details!: Sequelize.HasManyRemoveAssociationsMixin<shipping_details, shipping_detailsId>;
  hasShipping_detail!: Sequelize.HasManyHasAssociationMixin<shipping_details, shipping_detailsId>;
  hasShipping_details!: Sequelize.HasManyHasAssociationsMixin<shipping_details, shipping_detailsId>;
  countShipping_details!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany shipping_details via user_id
  user_shipping_details!: shipping_details[];
  getUser_shipping_details!: Sequelize.HasManyGetAssociationsMixin<shipping_details>;
  setUser_shipping_details!: Sequelize.HasManySetAssociationsMixin<shipping_details, shipping_detailsId>;
  addUser_shipping_detail!: Sequelize.HasManyAddAssociationMixin<shipping_details, shipping_detailsId>;
  addUser_shipping_details!: Sequelize.HasManyAddAssociationsMixin<shipping_details, shipping_detailsId>;
  createUser_shipping_detail!: Sequelize.HasManyCreateAssociationMixin<shipping_details>;
  removeUser_shipping_detail!: Sequelize.HasManyRemoveAssociationMixin<shipping_details, shipping_detailsId>;
  removeUser_shipping_details!: Sequelize.HasManyRemoveAssociationsMixin<shipping_details, shipping_detailsId>;
  hasUser_shipping_detail!: Sequelize.HasManyHasAssociationMixin<shipping_details, shipping_detailsId>;
  hasUser_shipping_details!: Sequelize.HasManyHasAssociationsMixin<shipping_details, shipping_detailsId>;
  countUser_shipping_details!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany shipping_details via last_modified_by_id
  last_modified_by_shipping_details!: shipping_details[];
  getLast_modified_by_shipping_details!: Sequelize.HasManyGetAssociationsMixin<shipping_details>;
  setLast_modified_by_shipping_details!: Sequelize.HasManySetAssociationsMixin<shipping_details, shipping_detailsId>;
  addLast_modified_by_shipping_detail!: Sequelize.HasManyAddAssociationMixin<shipping_details, shipping_detailsId>;
  addLast_modified_by_shipping_details!: Sequelize.HasManyAddAssociationsMixin<shipping_details, shipping_detailsId>;
  createLast_modified_by_shipping_detail!: Sequelize.HasManyCreateAssociationMixin<shipping_details>;
  removeLast_modified_by_shipping_detail!: Sequelize.HasManyRemoveAssociationMixin<shipping_details, shipping_detailsId>;
  removeLast_modified_by_shipping_details!: Sequelize.HasManyRemoveAssociationsMixin<shipping_details, shipping_detailsId>;
  hasLast_modified_by_shipping_detail!: Sequelize.HasManyHasAssociationMixin<shipping_details, shipping_detailsId>;
  hasLast_modified_by_shipping_details!: Sequelize.HasManyHasAssociationsMixin<shipping_details, shipping_detailsId>;
  countLast_modified_by_shipping_details!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany stu_class via last_modified_by_id
  stu_classes!: stu_class[];
  getStu_classes!: Sequelize.HasManyGetAssociationsMixin<stu_class>;
  setStu_classes!: Sequelize.HasManySetAssociationsMixin<stu_class, stu_classId>;
  addStu_class!: Sequelize.HasManyAddAssociationMixin<stu_class, stu_classId>;
  addStu_classes!: Sequelize.HasManyAddAssociationsMixin<stu_class, stu_classId>;
  createStu_class!: Sequelize.HasManyCreateAssociationMixin<stu_class>;
  removeStu_class!: Sequelize.HasManyRemoveAssociationMixin<stu_class, stu_classId>;
  removeStu_classes!: Sequelize.HasManyRemoveAssociationsMixin<stu_class, stu_classId>;
  hasStu_class!: Sequelize.HasManyHasAssociationMixin<stu_class, stu_classId>;
  hasStu_classes!: Sequelize.HasManyHasAssociationsMixin<stu_class, stu_classId>;
  countStu_classes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany stu_class via created_by_id
  created_by_stu_classes!: stu_class[];
  getCreated_by_stu_classes!: Sequelize.HasManyGetAssociationsMixin<stu_class>;
  setCreated_by_stu_classes!: Sequelize.HasManySetAssociationsMixin<stu_class, stu_classId>;
  addCreated_by_stu_class!: Sequelize.HasManyAddAssociationMixin<stu_class, stu_classId>;
  addCreated_by_stu_classes!: Sequelize.HasManyAddAssociationsMixin<stu_class, stu_classId>;
  createCreated_by_stu_class!: Sequelize.HasManyCreateAssociationMixin<stu_class>;
  removeCreated_by_stu_class!: Sequelize.HasManyRemoveAssociationMixin<stu_class, stu_classId>;
  removeCreated_by_stu_classes!: Sequelize.HasManyRemoveAssociationsMixin<stu_class, stu_classId>;
  hasCreated_by_stu_class!: Sequelize.HasManyHasAssociationMixin<stu_class, stu_classId>;
  hasCreated_by_stu_classes!: Sequelize.HasManyHasAssociationsMixin<stu_class, stu_classId>;
  countCreated_by_stu_classes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany stu_list via last_modified_by_id
  stu_lists!: stu_list[];
  getStu_lists!: Sequelize.HasManyGetAssociationsMixin<stu_list>;
  setStu_lists!: Sequelize.HasManySetAssociationsMixin<stu_list, stu_listId>;
  addStu_list!: Sequelize.HasManyAddAssociationMixin<stu_list, stu_listId>;
  addStu_lists!: Sequelize.HasManyAddAssociationsMixin<stu_list, stu_listId>;
  createStu_list!: Sequelize.HasManyCreateAssociationMixin<stu_list>;
  removeStu_list!: Sequelize.HasManyRemoveAssociationMixin<stu_list, stu_listId>;
  removeStu_lists!: Sequelize.HasManyRemoveAssociationsMixin<stu_list, stu_listId>;
  hasStu_list!: Sequelize.HasManyHasAssociationMixin<stu_list, stu_listId>;
  hasStu_lists!: Sequelize.HasManyHasAssociationsMixin<stu_list, stu_listId>;
  countStu_lists!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany stu_list via created_by_id
  created_by_stu_lists!: stu_list[];
  getCreated_by_stu_lists!: Sequelize.HasManyGetAssociationsMixin<stu_list>;
  setCreated_by_stu_lists!: Sequelize.HasManySetAssociationsMixin<stu_list, stu_listId>;
  addCreated_by_stu_list!: Sequelize.HasManyAddAssociationMixin<stu_list, stu_listId>;
  addCreated_by_stu_lists!: Sequelize.HasManyAddAssociationsMixin<stu_list, stu_listId>;
  createCreated_by_stu_list!: Sequelize.HasManyCreateAssociationMixin<stu_list>;
  removeCreated_by_stu_list!: Sequelize.HasManyRemoveAssociationMixin<stu_list, stu_listId>;
  removeCreated_by_stu_lists!: Sequelize.HasManyRemoveAssociationsMixin<stu_list, stu_listId>;
  hasCreated_by_stu_list!: Sequelize.HasManyHasAssociationMixin<stu_list, stu_listId>;
  hasCreated_by_stu_lists!: Sequelize.HasManyHasAssociationsMixin<stu_list, stu_listId>;
  countCreated_by_stu_lists!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany stu_receipt via created_by_id
  stu_receipts!: stu_receipt[];
  getStu_receipts!: Sequelize.HasManyGetAssociationsMixin<stu_receipt>;
  setStu_receipts!: Sequelize.HasManySetAssociationsMixin<stu_receipt, stu_receiptId>;
  addStu_receipt!: Sequelize.HasManyAddAssociationMixin<stu_receipt, stu_receiptId>;
  addStu_receipts!: Sequelize.HasManyAddAssociationsMixin<stu_receipt, stu_receiptId>;
  createStu_receipt!: Sequelize.HasManyCreateAssociationMixin<stu_receipt>;
  removeStu_receipt!: Sequelize.HasManyRemoveAssociationMixin<stu_receipt, stu_receiptId>;
  removeStu_receipts!: Sequelize.HasManyRemoveAssociationsMixin<stu_receipt, stu_receiptId>;
  hasStu_receipt!: Sequelize.HasManyHasAssociationMixin<stu_receipt, stu_receiptId>;
  hasStu_receipts!: Sequelize.HasManyHasAssociationsMixin<stu_receipt, stu_receiptId>;
  countStu_receipts!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany stu_receipt via last_modified_by_id
  last_modified_by_stu_receipts!: stu_receipt[];
  getLast_modified_by_stu_receipts!: Sequelize.HasManyGetAssociationsMixin<stu_receipt>;
  setLast_modified_by_stu_receipts!: Sequelize.HasManySetAssociationsMixin<stu_receipt, stu_receiptId>;
  addLast_modified_by_stu_receipt!: Sequelize.HasManyAddAssociationMixin<stu_receipt, stu_receiptId>;
  addLast_modified_by_stu_receipts!: Sequelize.HasManyAddAssociationsMixin<stu_receipt, stu_receiptId>;
  createLast_modified_by_stu_receipt!: Sequelize.HasManyCreateAssociationMixin<stu_receipt>;
  removeLast_modified_by_stu_receipt!: Sequelize.HasManyRemoveAssociationMixin<stu_receipt, stu_receiptId>;
  removeLast_modified_by_stu_receipts!: Sequelize.HasManyRemoveAssociationsMixin<stu_receipt, stu_receiptId>;
  hasLast_modified_by_stu_receipt!: Sequelize.HasManyHasAssociationMixin<stu_receipt, stu_receiptId>;
  hasLast_modified_by_stu_receipts!: Sequelize.HasManyHasAssociationsMixin<stu_receipt, stu_receiptId>;
  countLast_modified_by_stu_receipts!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany stu_regist via created_by_id
  stu_regists!: stu_regist[];
  getStu_regists!: Sequelize.HasManyGetAssociationsMixin<stu_regist>;
  setStu_regists!: Sequelize.HasManySetAssociationsMixin<stu_regist, stu_registId>;
  addStu_regist!: Sequelize.HasManyAddAssociationMixin<stu_regist, stu_registId>;
  addStu_regists!: Sequelize.HasManyAddAssociationsMixin<stu_regist, stu_registId>;
  createStu_regist!: Sequelize.HasManyCreateAssociationMixin<stu_regist>;
  removeStu_regist!: Sequelize.HasManyRemoveAssociationMixin<stu_regist, stu_registId>;
  removeStu_regists!: Sequelize.HasManyRemoveAssociationsMixin<stu_regist, stu_registId>;
  hasStu_regist!: Sequelize.HasManyHasAssociationMixin<stu_regist, stu_registId>;
  hasStu_regists!: Sequelize.HasManyHasAssociationsMixin<stu_regist, stu_registId>;
  countStu_regists!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany stu_regist via last_modified_by_id
  last_modified_by_stu_regists!: stu_regist[];
  getLast_modified_by_stu_regists!: Sequelize.HasManyGetAssociationsMixin<stu_regist>;
  setLast_modified_by_stu_regists!: Sequelize.HasManySetAssociationsMixin<stu_regist, stu_registId>;
  addLast_modified_by_stu_regist!: Sequelize.HasManyAddAssociationMixin<stu_regist, stu_registId>;
  addLast_modified_by_stu_regists!: Sequelize.HasManyAddAssociationsMixin<stu_regist, stu_registId>;
  createLast_modified_by_stu_regist!: Sequelize.HasManyCreateAssociationMixin<stu_regist>;
  removeLast_modified_by_stu_regist!: Sequelize.HasManyRemoveAssociationMixin<stu_regist, stu_registId>;
  removeLast_modified_by_stu_regists!: Sequelize.HasManyRemoveAssociationsMixin<stu_regist, stu_registId>;
  hasLast_modified_by_stu_regist!: Sequelize.HasManyHasAssociationMixin<stu_regist, stu_registId>;
  hasLast_modified_by_stu_regists!: Sequelize.HasManyHasAssociationsMixin<stu_regist, stu_registId>;
  countLast_modified_by_stu_regists!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany type via created_by_id
  types!: type[];
  getTypes!: Sequelize.HasManyGetAssociationsMixin<type>;
  setTypes!: Sequelize.HasManySetAssociationsMixin<type, typeId>;
  addType!: Sequelize.HasManyAddAssociationMixin<type, typeId>;
  addTypes!: Sequelize.HasManyAddAssociationsMixin<type, typeId>;
  createType!: Sequelize.HasManyCreateAssociationMixin<type>;
  removeType!: Sequelize.HasManyRemoveAssociationMixin<type, typeId>;
  removeTypes!: Sequelize.HasManyRemoveAssociationsMixin<type, typeId>;
  hasType!: Sequelize.HasManyHasAssociationMixin<type, typeId>;
  hasTypes!: Sequelize.HasManyHasAssociationsMixin<type, typeId>;
  countTypes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany type via last_modified_by_id
  last_modified_by_types!: type[];
  getLast_modified_by_types!: Sequelize.HasManyGetAssociationsMixin<type>;
  setLast_modified_by_types!: Sequelize.HasManySetAssociationsMixin<type, typeId>;
  addLast_modified_by_type!: Sequelize.HasManyAddAssociationMixin<type, typeId>;
  addLast_modified_by_types!: Sequelize.HasManyAddAssociationsMixin<type, typeId>;
  createLast_modified_by_type!: Sequelize.HasManyCreateAssociationMixin<type>;
  removeLast_modified_by_type!: Sequelize.HasManyRemoveAssociationMixin<type, typeId>;
  removeLast_modified_by_types!: Sequelize.HasManyRemoveAssociationsMixin<type, typeId>;
  hasLast_modified_by_type!: Sequelize.HasManyHasAssociationMixin<type, typeId>;
  hasLast_modified_by_types!: Sequelize.HasManyHasAssociationsMixin<type, typeId>;
  countLast_modified_by_types!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany upload via created_by_id
  uploads!: upload[];
  getUploads!: Sequelize.HasManyGetAssociationsMixin<upload>;
  setUploads!: Sequelize.HasManySetAssociationsMixin<upload, uploadId>;
  addUpload!: Sequelize.HasManyAddAssociationMixin<upload, uploadId>;
  addUploads!: Sequelize.HasManyAddAssociationsMixin<upload, uploadId>;
  createUpload!: Sequelize.HasManyCreateAssociationMixin<upload>;
  removeUpload!: Sequelize.HasManyRemoveAssociationMixin<upload, uploadId>;
  removeUploads!: Sequelize.HasManyRemoveAssociationsMixin<upload, uploadId>;
  hasUpload!: Sequelize.HasManyHasAssociationMixin<upload, uploadId>;
  hasUploads!: Sequelize.HasManyHasAssociationsMixin<upload, uploadId>;
  countUploads!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany upload via last_modified_by_id
  last_modified_by_uploads!: upload[];
  getLast_modified_by_uploads!: Sequelize.HasManyGetAssociationsMixin<upload>;
  setLast_modified_by_uploads!: Sequelize.HasManySetAssociationsMixin<upload, uploadId>;
  addLast_modified_by_upload!: Sequelize.HasManyAddAssociationMixin<upload, uploadId>;
  addLast_modified_by_uploads!: Sequelize.HasManyAddAssociationsMixin<upload, uploadId>;
  createLast_modified_by_upload!: Sequelize.HasManyCreateAssociationMixin<upload>;
  removeLast_modified_by_upload!: Sequelize.HasManyRemoveAssociationMixin<upload, uploadId>;
  removeLast_modified_by_uploads!: Sequelize.HasManyRemoveAssociationsMixin<upload, uploadId>;
  hasLast_modified_by_upload!: Sequelize.HasManyHasAssociationMixin<upload, uploadId>;
  hasLast_modified_by_uploads!: Sequelize.HasManyHasAssociationsMixin<upload, uploadId>;
  countLast_modified_by_uploads!: Sequelize.HasManyCountAssociationsMixin;
  // user belongsToMany user via friend_id and user_id
  user_id_user_user_friends!: user[];
  getUser_id_user_user_friends!: Sequelize.BelongsToManyGetAssociationsMixin<user>;
  setUser_id_user_user_friends!: Sequelize.BelongsToManySetAssociationsMixin<user, userId>;
  addUser_id_user_user_friend!: Sequelize.BelongsToManyAddAssociationMixin<user, userId>;
  addUser_id_user_user_friends!: Sequelize.BelongsToManyAddAssociationsMixin<user, userId>;
  createUser_id_user_user_friend!: Sequelize.BelongsToManyCreateAssociationMixin<user>;
  removeUser_id_user_user_friend!: Sequelize.BelongsToManyRemoveAssociationMixin<user, userId>;
  removeUser_id_user_user_friends!: Sequelize.BelongsToManyRemoveAssociationsMixin<user, userId>;
  hasUser_id_user_user_friend!: Sequelize.BelongsToManyHasAssociationMixin<user, userId>;
  hasUser_id_user_user_friends!: Sequelize.BelongsToManyHasAssociationsMixin<user, userId>;
  countUser_id_user_user_friends!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user belongsToMany user via user_id and friend_id
  friend_id_users!: user[];
  getFriend_id_users!: Sequelize.BelongsToManyGetAssociationsMixin<user>;
  setFriend_id_users!: Sequelize.BelongsToManySetAssociationsMixin<user, userId>;
  addFriend_id_user!: Sequelize.BelongsToManyAddAssociationMixin<user, userId>;
  addFriend_id_users!: Sequelize.BelongsToManyAddAssociationsMixin<user, userId>;
  createFriend_id_user!: Sequelize.BelongsToManyCreateAssociationMixin<user>;
  removeFriend_id_user!: Sequelize.BelongsToManyRemoveAssociationMixin<user, userId>;
  removeFriend_id_users!: Sequelize.BelongsToManyRemoveAssociationsMixin<user, userId>;
  hasFriend_id_user!: Sequelize.BelongsToManyHasAssociationMixin<user, userId>;
  hasFriend_id_users!: Sequelize.BelongsToManyHasAssociationsMixin<user, userId>;
  countFriend_id_users!: Sequelize.BelongsToManyCountAssociationsMixin;
  // user hasMany user_biography via last_modified_by_id
  user_biographies!: user_biography[];
  getUser_biographies!: Sequelize.HasManyGetAssociationsMixin<user_biography>;
  setUser_biographies!: Sequelize.HasManySetAssociationsMixin<user_biography, user_biographyId>;
  addUser_biography!: Sequelize.HasManyAddAssociationMixin<user_biography, user_biographyId>;
  addUser_biographies!: Sequelize.HasManyAddAssociationsMixin<user_biography, user_biographyId>;
  createUser_biography!: Sequelize.HasManyCreateAssociationMixin<user_biography>;
  removeUser_biography!: Sequelize.HasManyRemoveAssociationMixin<user_biography, user_biographyId>;
  removeUser_biographies!: Sequelize.HasManyRemoveAssociationsMixin<user_biography, user_biographyId>;
  hasUser_biography!: Sequelize.HasManyHasAssociationMixin<user_biography, user_biographyId>;
  hasUser_biographies!: Sequelize.HasManyHasAssociationsMixin<user_biography, user_biographyId>;
  countUser_biographies!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_biography via created_by_id
  created_by_user_biographies!: user_biography[];
  getCreated_by_user_biographies!: Sequelize.HasManyGetAssociationsMixin<user_biography>;
  setCreated_by_user_biographies!: Sequelize.HasManySetAssociationsMixin<user_biography, user_biographyId>;
  addCreated_by_user_biography!: Sequelize.HasManyAddAssociationMixin<user_biography, user_biographyId>;
  addCreated_by_user_biographies!: Sequelize.HasManyAddAssociationsMixin<user_biography, user_biographyId>;
  createCreated_by_user_biography!: Sequelize.HasManyCreateAssociationMixin<user_biography>;
  removeCreated_by_user_biography!: Sequelize.HasManyRemoveAssociationMixin<user_biography, user_biographyId>;
  removeCreated_by_user_biographies!: Sequelize.HasManyRemoveAssociationsMixin<user_biography, user_biographyId>;
  hasCreated_by_user_biography!: Sequelize.HasManyHasAssociationMixin<user_biography, user_biographyId>;
  hasCreated_by_user_biographies!: Sequelize.HasManyHasAssociationsMixin<user_biography, user_biographyId>;
  countCreated_by_user_biographies!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_friends via friend_id
  user_friends!: user_friends[];
  getUser_friends!: Sequelize.HasManyGetAssociationsMixin<user_friends>;
  setUser_friends!: Sequelize.HasManySetAssociationsMixin<user_friends, user_friendsId>;
  addUser_friend!: Sequelize.HasManyAddAssociationMixin<user_friends, user_friendsId>;
  addUser_friends!: Sequelize.HasManyAddAssociationsMixin<user_friends, user_friendsId>;
  createUser_friend!: Sequelize.HasManyCreateAssociationMixin<user_friends>;
  removeUser_friend!: Sequelize.HasManyRemoveAssociationMixin<user_friends, user_friendsId>;
  removeUser_friends!: Sequelize.HasManyRemoveAssociationsMixin<user_friends, user_friendsId>;
  hasUser_friend!: Sequelize.HasManyHasAssociationMixin<user_friends, user_friendsId>;
  hasUser_friends!: Sequelize.HasManyHasAssociationsMixin<user_friends, user_friendsId>;
  countUser_friends!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_friends via user_id
  user_user_friends!: user_friends[];
  getUser_user_friends!: Sequelize.HasManyGetAssociationsMixin<user_friends>;
  setUser_user_friends!: Sequelize.HasManySetAssociationsMixin<user_friends, user_friendsId>;
  addUser_user_friend!: Sequelize.HasManyAddAssociationMixin<user_friends, user_friendsId>;
  addUser_user_friends!: Sequelize.HasManyAddAssociationsMixin<user_friends, user_friendsId>;
  createUser_user_friend!: Sequelize.HasManyCreateAssociationMixin<user_friends>;
  removeUser_user_friend!: Sequelize.HasManyRemoveAssociationMixin<user_friends, user_friendsId>;
  removeUser_user_friends!: Sequelize.HasManyRemoveAssociationsMixin<user_friends, user_friendsId>;
  hasUser_user_friend!: Sequelize.HasManyHasAssociationMixin<user_friends, user_friendsId>;
  hasUser_user_friends!: Sequelize.HasManyHasAssociationsMixin<user_friends, user_friendsId>;
  countUser_user_friends!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_roles via user_id
  user_roles!: user_roles[];
  getUser_roles!: Sequelize.HasManyGetAssociationsMixin<user_roles>;
  setUser_roles!: Sequelize.HasManySetAssociationsMixin<user_roles, user_rolesId>;
  addUser_role!: Sequelize.HasManyAddAssociationMixin<user_roles, user_rolesId>;
  addUser_roles!: Sequelize.HasManyAddAssociationsMixin<user_roles, user_rolesId>;
  createUser_role!: Sequelize.HasManyCreateAssociationMixin<user_roles>;
  removeUser_role!: Sequelize.HasManyRemoveAssociationMixin<user_roles, user_rolesId>;
  removeUser_roles!: Sequelize.HasManyRemoveAssociationsMixin<user_roles, user_rolesId>;
  hasUser_role!: Sequelize.HasManyHasAssociationMixin<user_roles, user_rolesId>;
  hasUser_roles!: Sequelize.HasManyHasAssociationsMixin<user_roles, user_rolesId>;
  countUser_roles!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany video via last_modified_by_id
  videos!: video[];
  getVideos!: Sequelize.HasManyGetAssociationsMixin<video>;
  setVideos!: Sequelize.HasManySetAssociationsMixin<video, videoId>;
  addVideo!: Sequelize.HasManyAddAssociationMixin<video, videoId>;
  addVideos!: Sequelize.HasManyAddAssociationsMixin<video, videoId>;
  createVideo!: Sequelize.HasManyCreateAssociationMixin<video>;
  removeVideo!: Sequelize.HasManyRemoveAssociationMixin<video, videoId>;
  removeVideos!: Sequelize.HasManyRemoveAssociationsMixin<video, videoId>;
  hasVideo!: Sequelize.HasManyHasAssociationMixin<video, videoId>;
  hasVideos!: Sequelize.HasManyHasAssociationsMixin<video, videoId>;
  countVideos!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany video via user_id
  user_videos!: video[];
  getUser_videos!: Sequelize.HasManyGetAssociationsMixin<video>;
  setUser_videos!: Sequelize.HasManySetAssociationsMixin<video, videoId>;
  addUser_video!: Sequelize.HasManyAddAssociationMixin<video, videoId>;
  addUser_videos!: Sequelize.HasManyAddAssociationsMixin<video, videoId>;
  createUser_video!: Sequelize.HasManyCreateAssociationMixin<video>;
  removeUser_video!: Sequelize.HasManyRemoveAssociationMixin<video, videoId>;
  removeUser_videos!: Sequelize.HasManyRemoveAssociationsMixin<video, videoId>;
  hasUser_video!: Sequelize.HasManyHasAssociationMixin<video, videoId>;
  hasUser_videos!: Sequelize.HasManyHasAssociationsMixin<video, videoId>;
  countUser_videos!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany video via created_by_id
  created_by_videos!: video[];
  getCreated_by_videos!: Sequelize.HasManyGetAssociationsMixin<video>;
  setCreated_by_videos!: Sequelize.HasManySetAssociationsMixin<video, videoId>;
  addCreated_by_video!: Sequelize.HasManyAddAssociationMixin<video, videoId>;
  addCreated_by_videos!: Sequelize.HasManyAddAssociationsMixin<video, videoId>;
  createCreated_by_video!: Sequelize.HasManyCreateAssociationMixin<video>;
  removeCreated_by_video!: Sequelize.HasManyRemoveAssociationMixin<video, videoId>;
  removeCreated_by_videos!: Sequelize.HasManyRemoveAssociationsMixin<video, videoId>;
  hasCreated_by_video!: Sequelize.HasManyHasAssociationMixin<video, videoId>;
  hasCreated_by_videos!: Sequelize.HasManyHasAssociationsMixin<video, videoId>;
  countCreated_by_videos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    display_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    version: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    art_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "UK_ob8kqyqqgmefl0aco34akdtpe"
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    followers_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    friends_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    invite_accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    invite_pending: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    login_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password_expiry_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stripe_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subscription_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    upgradeeop: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    upgrade_expiry: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    upgrade_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    upload_limit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    upload_limit_expiry: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_thumb: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    views_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    avatar_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'upload',
        key: 'id'
      }
    },
    contact_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_contact',
        key: 'id'
      }
    },
    cover_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'upload',
        key: 'id'
      }
    },
    organization_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_org',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "UK_ob8kqyqqgmefl0aco34akdtpe",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "FKaojm4mji1grwbhc2xrh67w2rr",
        using: "BTREE",
        fields: [
          { name: "avatar_id" },
        ]
      },
      {
        name: "FK9fm2tr3hccs1t0wpxinxr0o2o",
        using: "BTREE",
        fields: [
          { name: "contact_id" },
        ]
      },
      {
        name: "FK7a93c35g4wtukxtlwkn3gk7u",
        using: "BTREE",
        fields: [
          { name: "cover_id" },
        ]
      },
      {
        name: "FK6vlslxlpvny08ihiloffiki47",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
