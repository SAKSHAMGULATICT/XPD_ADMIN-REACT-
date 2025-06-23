import { environment } from "../environments/environment";

export class AppConstants {
  public static loggedInUser: string = "";
  public static supplierDefaultURL = "supplier-dashboard/amount-under-offer";
  public static buyerDefaultURL = "Dashboard/approval";
  public static appTNCUrl = "i-accept";

  public static USER_SERVICE_URL = environment.apiUrl + "user/";
  public static userNotFoundURL = "/user-not-found";
  public static COMPANY_PROFILE_URL = environment.apiUrl + "xpdcompanyprofile/";
  public static CASH_DISCOUNTING_SERVICE_URL = environment.apiUrl + "cd/";
  public static M1X_SERVICE_URL = environment.apiUrl + "m1x/";
  // public static AUCTION_BASE_URL = environment.apiUrl + 'auction/';
  public static HOLIDAY_BASE_URL = environment.apiUrl + "holiday/";
  public static WORKFLOW_SERVICE_URL = environment.apiUrl + "workflow/";
  public static BANKS_SERVICE_URL = environment.apiUrl + "bank/";
  // for demo remove when create a cd root
  public static CASH_DISCOUNTING_SUPPLIER_SERVICE_URL =
    environment.apiUrl + "supplier/";
  public static CASH_DISCOUNTING_BUYER_SERVICE_URL =
    environment.apiUrl + "buyer/";
  public static APP_PRODUCT_CONFIG_SERVICE_URL =
    environment.apiUrl + "app/config/";
  public static AUCTION_BASE_URL = "";

  // User service URLs
  /*
   * @Author: Vishal Ahlawat
   * @Desc:
   */

  // public static getTokenURL = AppConstants.USER_SERVICE_URL + 'preLogin';
  public static getIsAuthenticatedURL: string =
    environment.UserAPIEndpoint + "user/clearLogin";
  public static getValueOfKeyURL: string = environment.apiUrl + "getValueOfKey";
  public static loginURL = environment.apiUrl + "login";
  public static getCurrentCompanyHeaderDataURL =
    environment.apiUrl + "getHeaderData";
  public static checkLiveAuctionForHeaderURL =
    AppConstants.USER_SERVICE_URL + "checkLiveAuctionForHeader";
  public static getUserPrivilegesURL = environment.apiUrl + "getUserPrivileges";
  public static requestPrivilegesURL = environment.apiUrl + "requestPrivileges";

  public static switchCompanyURL =
    AppConstants.USER_SERVICE_URL + "setCurrentCompany";
  public static switchCompanyProfileURL =
    AppConstants.USER_SERVICE_URL + "switchCompanyProfile";
  public static logoutUserURL: string = environment.apiUrl + "logout";
  public static validateUserForForgotPasswordURL =
    AppConstants.USER_SERVICE_URL + "validateUserForForgotPassword";
  public static forgotPasswordURL =
    AppConstants.USER_SERVICE_URL + "forgotPasswordUsrMgmt";
  public static forgotPasswordNotificationURL: string =
    AppConstants.USER_SERVICE_URL + "forgotPassword";
  public static verfiyPanURL: string =
    AppConstants.USER_SERVICE_URL + "verfiyPan";
  public static saveMobileNumberURL: string =
    AppConstants.USER_SERVICE_URL + "saveMob";
  public static checkRoleURL: string =
    AppConstants.USER_SERVICE_URL + "checkRole";

  // getRejectedProductCount for Reject invoice

  public static getRejectedProductCountURL: string =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "getRejectedProductCount";
  // Buyer Service URLs
  /*
   * @Author: Vishal Ahlawat
   * @Desc:
   */
  public static getBuyerDashboardDataURL =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "getBuyerDashboardData";
  public static getBuyerOpenDataURL =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "getOpenInvoices";
  public static getBuyerInApprovalDataURL =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL +
    "getApprovalPendingInvoices";
  public static getBuyerPaidDataURL =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "getPaidInvoices";
  public static getBuyerFulfilmentDataURL =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "getFulfilmentInvoices";
  public static fulfillInvoicesURL =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "fulfillInvoices";
  public static getGraphDataForBuyerURL =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "getGraphDataForBuyer";

  /**
   * @auth: Vinay Kumar
   * @Desc: I Accept url (T&C) page
   */

  public static isTNCURL: string =
    AppConstants.CASH_DISCOUNTING_SUPPLIER_SERVICE_URL + "authDetails";
  public static tncOtpUrl = AppConstants.USER_SERVICE_URL + "tncOtp";
  public static checkTncOtpURL = AppConstants.USER_SERVICE_URL + "checkTncOtp";
  public static checkAdminUserURL =
    AppConstants.USER_SERVICE_URL + "checkAdminUser";
  public static getCurrentCompanyUsersURL: string =
    AppConstants.USER_SERVICE_URL + "getCompanyUsers";
  // need to move buyer constant
  public static approveInvoicesURL =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "approveInvoices";
  public static rejectInvoicesURL =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "rejectInvoices";
  public static emailInvoicesURL =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "sendInvoicesOnEmail";
  // end
  public static changePasswordUsrMgmtURL =
    AppConstants.USER_SERVICE_URL + "changePasswordUsrMgmt";
  public static changePasswordNotificationURL: string =
    AppConstants.CASH_DISCOUNTING_SUPPLIER_SERVICE_URL +
    "changePasswordNotification";
  public static getOfferParameterByNameURL: string =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "getOfferParameterByName";

  public static getUserByIdURL: string =
    AppConstants.USER_SERVICE_URL + "getUserById";
  public static getUserRolesURL: string =
    AppConstants.USER_SERVICE_URL + "getUserRoles";

  public static getCompanyWorkflowProductDetailsURL =
    AppConstants.WORKFLOW_SERVICE_URL + "getCompanyWorkflowProductDetails";
  public static getCompanyProductWorkflowURL =
    AppConstants.WORKFLOW_SERVICE_URL + "getCompanyProductWorkflow";
  public static saveWorkFlowURL =
    AppConstants.WORKFLOW_SERVICE_URL + "saveWorkFlow";
  public static verifyWorkFlowURL =
    AppConstants.WORKFLOW_SERVICE_URL + "verifyWorkFlow";

  public static msmeCertificateURL =
    AppConstants.COMPANY_PROFILE_URL + "uploadMSMECertificate";
  public static getSupplierPricingDataOptions =
    AppConstants.COMPANY_PROFILE_URL + "getSupplierPricingStatus";
  public static getMSMECertificate =
    AppConstants.COMPANY_PROFILE_URL + "downloadMSME";
  public static getSupplierStatusURL: string =
    AppConstants.COMPANY_PROFILE_URL + "getSupplierActivationStatus";

  public static getRxilBaseURL: string =
    AppConstants.CASH_DISCOUNTING_BUYER_SERVICE_URL + "getTredsRxilBaseUrl";
  public static RXIL_PAYMENTS_DUE_SCREEN_NAME: string =
    "BuyerOpenTredsRxil Screen";
  public static RXIL_SAVINGS_ACHIEVED_SCREEN_NAME: string =
    "BuyerPaidTredsRxil Screen";
  public static RXIL_FULFILMENT_ALL_INVOICE_SCREEN_NAME: string =
    "BuyerFulfilmentRxil Screen";
  public static RXIL_BUYER_REJECT_SCREEN: string = "Buyer Rejected Screen";
  public static getRxilTransactions: string = "getTredsHeaderValue";
  public static getInvoiceDetailsByFatoringUnitForBuyerURL: string =
    "getInvoiceDetailsByFatoringUnitForBuyer";
  public static withdrawFactoringUnitsURL: string = "withdrawFactoringUnits";
  public static searchCompanies: string = `${environment.apiUrl}/searchCompanies`;
  public static searchUsersURL = environment.apiUrl + "searchUsers";
  public static getProductURLs: string = `${environment.apiUrl}firejobs/getProductURLs`;

  public static getInvoicesURLs: string = `${environment.apiUrl}inv/invoiceDetail`;
  public static getInconsistentInvoiceDataURL: string = `${environment.apiUrl}inv/getInconsistentInvoiceData`;
  public static getInconsistentTransactionDataURL: string = `${environment.apiUrl}inv/getInconsistentTransactionData`;
  public static reconcileIncorrectDataURL: string = `${environment.apiUrl}inv/reconcileIncorrectData`;
  public static getInvoiceNotPostedURL: string = `${environment.apiUrl}inv/getInvoiceNotPosted`;

  public static getETLURL: string = `${environment.apiUrl}firejobs/fireETL`;

  public static getAllUserCompaniesURL: string = `${environment.apiUrl}inv/getAllUserCompanies`;

  public static getAllPendingApprovalsURL: string = `${environment.apiUrl}appr/getAllPendingApprovals`;
  public static getAllMyRequestedApprovalsURL: string = `${environment.apiUrl}appr/getAllMyRequestedApprovals`;
  public static getAllCompletedApprovalsURL: string = `${environment.apiUrl}appr/getAllCompletedApprovals`;

  public static sendForApprovalURL: string = `${environment.apiUrl}appr/sendForApproval`;
  public static approveRequestURL: string = `${environment.apiUrl}appr/approveRequest`;
  public static rejectRequestURL: string = `${environment.apiUrl}appr/rejectRequest`;
  public static forwardRequestURL: string = `${environment.apiUrl}appr/forwardRequest`;
  public static authorizedUsersURL: string = `${environment.apiUrl}appr/authorizedUsers`;

  public static getAllDetailsofInvoiceURLs: string = `${environment.apiUrl}inv/getAllDetailsofInvoice`;
  public static getBuyerAndChildCompanyAuditTrailURL: string = `${environment.apiUrl}inv/getBuyerAndChildCompanyAuditTrail`;

  public static updateTncURL = environment.apiUrl + "updateTnc";
  public static generateOTP = environment.apiUrl + "generateOTP";
  public static validateOTP: string = environment.apiUrl + "validateOTP";
  public static getBuildInfoURL: string = environment.apiUrl + "buildInfo";
  public static getCompanyDetailsURL: string =
    environment.apiUrl + "getCompanyDetails";
  public static updateUsernameURL = environment.apiUrl + "updateUsername";
  public static createBuyerCompanyURL =
    environment.apiUrl + "v1/createBuyerCompany";
  public static getAccountManagerListURL =
    environment.apiUrl + "getAccountManagerList";
  public static linkedBuyersURL = environment.apiUrl + "bank/linkedBuyers";
  public static linkedBanksURL = environment.apiUrl + "bank/linkedBanks";
  public static bankRatesURL = environment.apiUrl + "bank/bankRates";
  public static deleteBankRateURL = environment.apiUrl + "bank/deleteBankRate";
  public static updateBankRateURL =
    environment.apiUrl + "bank/createOrUpdateBankRate";
  public static getAllBuyerCompaniesURL =
    environment.apiUrl + "anchor-churn/getAllBuyerCompanies";
  public static updateChurnStatusURL =
    environment.apiUrl + "anchor-churn/updateChurnStatusOfCompany";
  public static getBuyerProductsURL: string =
    environment.apiUrl + "inv/getBuyerProducts";
  public static getPostingStatesForCompanyURL: string =
    environment.apiUrl + "inv/getPostingStatesForCompany";
  public static getStateNameByCompanyIdAndProductIdURL: string =
    environment.apiUrl + "inv/getStateNameByCompanyIdAndProductId";
  public static getTransactionDetailsURL: string =
    environment.apiUrl + "inv/getTransactionDetails";
  public static getSubmitInvoiceStatusChangeRequest: string =
    environment.apiUrl + "inv/submitInvoiceStatusChangeRequest";

  public static getConfigDataURL: string =
    environment.apiUrl + "compconf/getConfigData";
  public static saveConfigurationURL: string =
    environment.apiUrl + "compconf/saveConfiguration";

  public static getPostingDataURL: string =
    environment.apiUrl + "posting/getPostingData";
  public static sendForApprovalPostingURL: string =
    environment.apiUrl + "posting/sendForApproval";
  public static resendPostingMailURL: string =
    environment.apiUrl + "posting/resendpostingmail";

  public static uploadedSearchFileURL: string =
    environment.apiUrl + "dataUpload/searchData";
  public static uploadedDownloadFileURL: string =
    environment.apiUrl + "dataUpload/downloadData";

  public static postingSearchFileURL: string =
    environment.apiUrl + "posting/searchFile";
  public static postingDownloadFileURL: string =
    environment.apiUrl + "posting/downloadFile";
  public static sendForDeletionApprovalURL: string =
    environment.apiUrl + "posting/sendForDeletionApproval";


  public static invoiceDetailForDeletionURL: string = environment.apiUrl + "inv/invoiceDetailForDeletion";
  public static submitInvoiceDeletionRequestURL: string = environment.apiUrl + "inv/submitInvoiceDeletionRequest";

  public static apiUserUpdatePasswordURL: string = environment.apiUrl + "updatePassword";
  public static getAllGroupURL: string = environment.apiUrl + "getAllGroups";
  

}
