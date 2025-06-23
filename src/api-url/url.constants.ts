import { environment } from '../environments/environment.prod';

export class URLConstants{
    // get Base URL
    public static BASE_URL = environment.apiUrl;

    public static getAllBuyerIdAndNameURL = URLConstants.BASE_URL + 'getAllBuyerIdAndName';
    public static getSubscribedProdutsByCompanyIDURL = URLConstants.BASE_URL + 'getSubscribedProdutsByCompanyID';
    public static getXpdStatesByCompanyIdAndProductIdURL = URLConstants.BASE_URL + 'getXpdStatesByCompanyIdAndProductId';
    public static getInvoiceDetailsForVoucherPostingURL = URLConstants.BASE_URL + 'getInvoiceDetailsForVoucherPosting';
    public static submittInvoiceForVoucherPostingURL = URLConstants.BASE_URL + 'submittInvoiceForVoucherPosting';
}
