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
import type { shipping_details, shipping_detailsId } from './shipping_details';
import type { stu_class, stu_classId } from './stu_class';
import type { stu_list, stu_listId } from './stu_list';
import type { stu_receipt, stu_receiptId } from './stu_receipt';
import type { stu_regist, stu_registId } from './stu_regist';
import type { type, typeId } from './type';
import type { upload, uploadId } from './upload';
import type { user, userId } from './user';
import type { user_biography, user_biographyId } from './user_biography';
import type { video, videoId } from './video';

export interface ent_orgAttributes {
  org_type: string;
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  address_id?: number;
  admin_id?: number;
  avatar_id?: number;
  contact_id?: number;
  cover_id?: number;
  parent_id?: number;
  root_id?: number;
}

export type ent_orgPk = "id";
export type ent_orgId = ent_org[ent_orgPk];
export type ent_orgOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "address_id" | "admin_id" | "avatar_id" | "contact_id" | "cover_id" | "parent_id" | "root_id";
export type ent_orgCreationAttributes = Optional<ent_orgAttributes, ent_orgOptionalAttributes>;

export class ent_org extends Model<ent_orgAttributes, ent_orgCreationAttributes> implements ent_orgAttributes {
  org_type!: string;
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  address_id?: number;
  admin_id?: number;
  avatar_id?: number;
  contact_id?: number;
  cover_id?: number;
  parent_id?: number;
  root_id?: number;

  // ent_org belongsTo ent_address via address_id
  address!: ent_address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<ent_address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<ent_address, ent_addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<ent_address>;
  // ent_org belongsTo ent_contact via contact_id
  contact!: ent_contact;
  getContact!: Sequelize.BelongsToGetAssociationMixin<ent_contact>;
  setContact!: Sequelize.BelongsToSetAssociationMixin<ent_contact, ent_contactId>;
  createContact!: Sequelize.BelongsToCreateAssociationMixin<ent_contact>;
  // ent_org hasMany affiliation via organization_id
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
  // ent_org hasMany album via organization_id
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
  // ent_org hasMany album_feedback via organization_id
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
  // ent_org hasMany album_rating via organization_id
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
  // ent_org hasMany application_event via organization_id
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
  // ent_org hasMany avatar via organization_id
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
  // ent_org hasMany bid via organization_id
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
  // ent_org hasMany billing_details via organization_id
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
  // ent_org hasMany cart_con_option via organization_id
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
  // ent_org hasMany category via organization_id
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
  // ent_org hasMany ent_address via organization_id
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
  // ent_org hasMany ent_bill_add via organization_id
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
  // ent_org hasMany ent_contact via organization_id
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
  // ent_org hasMany ent_loc via organization_id
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
  // ent_org hasMany ent_order_point via organization_id
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
  // ent_org belongsTo ent_org via root_id
  root!: ent_org;
  getRoot!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setRoot!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createRoot!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // ent_org belongsTo ent_org via parent_id
  parent!: ent_org;
  getParent!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setParent!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createParent!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // ent_org belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // ent_org hasMany evt_accesscode via organization_id
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
  // ent_org hasMany evt_att_add via organization_id
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
  // ent_org hasMany evt_att_ans via organization_id
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
  // ent_org hasMany evt_att_profile via organization_id
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
  // ent_org hasMany evt_att_team via organization_id
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
  // ent_org hasMany evt_attendee via organization_id
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
  // ent_org hasMany evt_barcode via organization_id
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
  // ent_org hasMany evt_discount via organization_id
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
  // ent_org hasMany evt_organizer via organization_id
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
  // ent_org hasMany evt_prog_cat via organization_id
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
  // ent_org hasMany evt_prog_fmt via organization_id
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
  // ent_org hasMany evt_program via organization_id
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
  // ent_org hasMany evt_schedule via organization_id
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
  // ent_org hasMany evt_tkt_class via organization_id
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
  // ent_org hasMany evt_venue via organization_id
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
  // ent_org hasMany image via organization_id
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
  // ent_org hasMany image_comment via organization_id
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
  // ent_org hasMany image_feedback via organization_id
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
  // ent_org hasMany image_rating via organization_id
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
  // ent_org hasMany item_bid via organization_id
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
  // ent_org hasMany item_license via organization_id
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
  // ent_org hasMany master_type via organization_id
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
  // ent_org hasMany master_value via organization_id
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
  // ent_org hasMany password_reset_token via organization_id
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
  // ent_org hasMany pay_credit_card via organization_id
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
  // ent_org hasMany pay_payment via organization_id
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
  // ent_org hasMany perm_activity via organization_id
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
  // ent_org hasMany perm_role via organization_id
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
  // ent_org hasMany pgm_answers via organization_id
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
  // ent_org hasMany pgm_judge via organization_id
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
  // ent_org hasMany pgm_quest via organization_id
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
  // ent_org hasMany pgm_rating via organization_id
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
  // ent_org hasMany pgm_refs via organization_id
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
  // ent_org hasMany pgm_submission via organization_id
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
  // ent_org hasMany sch_class via organization_id
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
  // ent_org hasMany sch_course via root_id
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
  // ent_org hasMany sch_course via organization_id
  organization_sch_courses!: sch_course[];
  getOrganization_sch_courses!: Sequelize.HasManyGetAssociationsMixin<sch_course>;
  setOrganization_sch_courses!: Sequelize.HasManySetAssociationsMixin<sch_course, sch_courseId>;
  addOrganization_sch_course!: Sequelize.HasManyAddAssociationMixin<sch_course, sch_courseId>;
  addOrganization_sch_courses!: Sequelize.HasManyAddAssociationsMixin<sch_course, sch_courseId>;
  createOrganization_sch_course!: Sequelize.HasManyCreateAssociationMixin<sch_course>;
  removeOrganization_sch_course!: Sequelize.HasManyRemoveAssociationMixin<sch_course, sch_courseId>;
  removeOrganization_sch_courses!: Sequelize.HasManyRemoveAssociationsMixin<sch_course, sch_courseId>;
  hasOrganization_sch_course!: Sequelize.HasManyHasAssociationMixin<sch_course, sch_courseId>;
  hasOrganization_sch_courses!: Sequelize.HasManyHasAssociationsMixin<sch_course, sch_courseId>;
  countOrganization_sch_courses!: Sequelize.HasManyCountAssociationsMixin;
  // ent_org hasMany sch_dept via organization_id
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
  // ent_org hasMany sch_instructor via organization_id
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
  // ent_org hasMany sch_school via organization_id
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
  // ent_org hasMany sch_student via organization_id
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
  // ent_org hasMany shipping_details via organization_id
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
  // ent_org hasMany stu_class via organization_id
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
  // ent_org hasMany stu_list via organization_id
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
  // ent_org hasMany stu_receipt via organization_id
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
  // ent_org hasMany stu_regist via organization_id
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
  // ent_org hasMany type via organization_id
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
  // ent_org hasMany upload via organization_id
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
  // ent_org hasMany user via organization_id
  users!: user[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<user>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<user, userId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<user, userId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<user, userId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<user>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<user, userId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<user, userId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<user, userId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<user, userId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;
  // ent_org hasMany user_biography via organization_id
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
  // ent_org hasMany video via organization_id
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
  // ent_org belongsTo upload via cover_id
  cover!: upload;
  getCover!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setCover!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createCover!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // ent_org belongsTo upload via avatar_id
  avatar_upload!: upload;
  getAvatar_upload!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setAvatar_upload!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createAvatar_upload!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // ent_org belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ent_org belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ent_org belongsTo user via admin_id
  admin!: user;
  getAdmin!: Sequelize.BelongsToGetAssociationMixin<user>;
  setAdmin!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createAdmin!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ent_org {
    return ent_org.init({
    org_type: {
      type: DataTypes.STRING(31),
      allowNull: false
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    created_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    last_modified_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
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
    created_by_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    last_modified_by_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
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
    },
    address_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_address',
        key: 'id'
      }
    },
    admin_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
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
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_org',
        key: 'id'
      }
    },
    root_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_org',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ent_org',
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
        name: "FKgeg5yq3nos2fkj3uwb7ilgktm",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK8jm0kkh7g6kxe3dl06vve5uh6",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKqoqmr7nikrmlmbgwoecpdvkec",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKrnggwfyqihlfm5tei2ctjg6pe",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
      {
        name: "FKivixvlotwtq9afm58x130n5tk",
        using: "BTREE",
        fields: [
          { name: "admin_id" },
        ]
      },
      {
        name: "FKqhwg3salxeb1uqkuejvkk13pa",
        using: "BTREE",
        fields: [
          { name: "avatar_id" },
        ]
      },
      {
        name: "FKq1g0959eqemdods3pqyncxw8l",
        using: "BTREE",
        fields: [
          { name: "contact_id" },
        ]
      },
      {
        name: "FKeuype8nph6mpq2lb5ayithptt",
        using: "BTREE",
        fields: [
          { name: "cover_id" },
        ]
      },
      {
        name: "FKhl1w9tc5kae89rv07qn96r5s",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "FK1dmjx6s64a2har4lh0ook8g1t",
        using: "BTREE",
        fields: [
          { name: "root_id" },
        ]
      },
    ]
  });
  }
}
