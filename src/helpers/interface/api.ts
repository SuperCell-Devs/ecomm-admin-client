/**
 * Common
 */


// Pagination
export interface Paginated<T> {
    results: T;
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
}


/**
 * API
 * 
 */

// Brands
export interface IBrand {
  nameAr: string;
  nameEn: string;
  description: string;
  webSite: string;
  id: number;
}
export type IPostBrand = Omit<IBrand, 'id'>;
export interface IPutBrand extends IBrand {}
export interface IGetAllBrandsProps { name?: string, page?: number, pageSize?: number }

// Country
export interface ICountry {
    enName: string;
    arName: string;
    id: number;
}
export type IPostCountry = Omit<ICountry, 'id'>;
export interface IPutCountry extends ICountry {}

// Districts
export interface Province {
    nameAr: string;
    nameEn: string;
    countryId: number,
    country: any;
    districts: any[];
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    isDeleted: boolean;
}

export interface IDistrict {
    nameAr: string;
    nameEn: string;
    province: Province;
    id: number;
}
export interface IPostDistrict {
  nameAr: string;
  nameEn: string;
  provinceId: 0;
}
export type IPutDistrict = Partial<IPostDistrict>; 

// Vendors

export interface IPostVendors {
    name: string;
    description: string;
    email: string;
    phoneNumber: string;
    address: string;
    districtId: number;
    vendorType: number;
    userId: string;
  }