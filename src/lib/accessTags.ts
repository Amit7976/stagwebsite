const AccessTags = {
  main: ["dashboard", "employees", "pages", "help"],
  attendance: ["attendance", "attendance_history", "attendance_employees"],
  blogs: ["blogs", "add_blogs", "update_blogs", "delete_blogs"],
  sales: ["sales", "add_sales", "update_sales", "export_sales", "delete_sales"],
  auth: ["auth", "logs", "all_logs"],

  pages: {
    reviews: [
      "reviews",
      "add_reviews",
      "delete_reviews",
      "update_reviews",
      "show_hide_reviews",
    ],
    career: [
      "career",
      "add_career",
      "delete_career",
      "update_career",
      "show_hide_career",
    ],
    newsletter: [
      "newsletter",
      "add_newsletter",
      "delete_newsletter",
      "export_newsletter",
    ],
    wishlist: [
      "wishlist",
      "add_wishlist",
      "delete_wishlist",
      "export_wishlist",
    ],
    event: [
      "event",
      "add_event",
      "delete_event",
      "update_event",
      "show_hide_event",
    ],
    announcement: [
      "announcement",
      "add_announcement",
      "delete_announcement",
      "update_announcement",
      "show_hide_announcement",
    ],
  },

  employees: {
    adminManagement: [
      "Admin_Management",
      "export_admins",
      "add_admin",
      "update_admin",
      "terminate_admin",
      "tag_access_edit",
    ],
    oldAdmins: ["old_admins", "export_old_admins", "revoke_old_admins"],
    task: [
      "my_task",
      "task",
      "assign_task",
      "edit_task",
      "terminate_task",
      "revoke_task",
      "export_task",
    ],
    adminReport: [
      "admin_report",
      "add_admin_report",
      "delete_admin_report",
      "export_admin_report",
    ],
  },

  help: {
    faqs: ["faqs", "add_faqs", "delete_faqs", "update_faqs"],
    companyMails: [
      "companyMails",
      "add_companyMails",
      "delete_companyMails",
      "update_companyMails",
      "show_hide_companyMails",
    ],
    social: [
      "social",
      "add_social",
      "delete_social",
      "update_social",
      "show_hide_social",
    ],
  },
};
export default AccessTags;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const AccessTagsForManagerAdmin = {
  main: ["pages", "help"],
  attendance: ["attendance_employees"],
  blogs: ["blogs", "add_blogs", "update_blogs", "delete_blogs"],
  sales: ["sales", "add_sales"],

  pages: {
    reviews: [
      "reviews",
      "add_reviews",
      "delete_reviews",
      "update_reviews",
      "show_hide_reviews",
    ],
    career: [
      "career",
      "add_career",
      "delete_career",
      "update_career",
      "show_hide_career",
    ],
    newsletter: ["newsletter", "add_newsletter", "delete_newsletter"],
    wishlist: ["wishlist", "add_wishlist", "delete_wishlist"],
    event: [
      "event",
      "add_event",
      "delete_event",
      "update_event",
      "show_hide_event",
    ],
    announcement: [
      "announcement",
      "add_announcement",
      "delete_announcement",
      "update_announcement",
      "show_hide_announcement",
    ],
  },

  employees: {
    adminManagement: [
      "Admin_Management",
      "export_admins",
      "add_admin",
      "update_admin",
      "terminate_admin",
      "tag_access_edit",
    ],
    oldAdmins: ["old_admins", "export_old_admins", "revoke_old_admins"],
    task: [
      "task",
      "assign_task",
      "edit_task",
      "terminate_task",
      "revoke_task",
      "export_task",
    ],
    adminReport: [
      "admin_report",
      "delete_admin_report",
      "export_admin_report",
    ],
  },

  help: {
    faqs: ["faqs", "add_faqs", "delete_faqs", "update_faqs"],
    companyMails: [
      "companyMails",
      "add_companyMails",
      "delete_companyMails",
      "update_companyMails",
      "show_hide_companyMails",
    ],
    social: [
      "social",
      "add_social",
      "delete_social",
      "update_social",
      "show_hide_social",
    ],
  },
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const AccessTagsForEmployerAdmin = {
  main: ["pages", "help"],
  blogs: ["blogs", "add_blogs", "update_blogs", "delete_blogs"],
  sales: ["sales", "add_sales"],

  pages: {
    reviews: ["reviews", "add_reviews"],
    career: ["career", "add_career", "delete_career","update_career","show_hide_career"],
    newsletter: [
      "newsletter",
      "add_newsletter",
      "delete_newsletter",
    ],
    wishlist: [
      "wishlist",
      "add_wishlist",
      "delete_wishlist",
    ],
    event: [
      "event",
      "add_event",
      "delete_event",
      "update_event",
      "show_hide_event",
    ],
    announcement: [
      "announcement",
      "add_announcement",
      "delete_announcement",
      "update_announcement",
      "show_hide_announcement",
    ],
  },

  employees: {
    adminReport: [
      "admin_report",
      "delete_admin_report",
      "export_admin_report",
    ],
  },

  help: {
    faqs: ["faqs", "add_faqs", "delete_faqs", "update_faqs"],
  },
};