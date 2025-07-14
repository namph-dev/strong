import { Dispatch, SetStateAction } from "react";

// Tab types
export type TabType = "upload" | "manual";
export type FormType = "manual" | "upload";

// File data interface
export interface FileData {
  name: string;
  url: string;
  type: string;
}

// Completion result interface
export interface CompletionResult {
  completedFields: number;
  totalFields: number;
  percentage: number;
}

// Base form fields (shared between both forms)
export interface BaseFormData {
  productImages: string[];
  productName: string;
  category: string;
  productDescription: string;
  documents: FileData[];
  retailPrice: string;
  deliveryTime: string;
  deliveryFee: string;
}

// Manual form specific data
export interface ManualFormData extends BaseFormData {
  formType: "manual";
  productType: string;
  licenseNumber: string;
  issueDate?: string;
  expiryDate?: string;
  productCertifications: FileData[];
  brand: string;
  manufacturer: string;
  countryOfOrigin: string;
  ingredient: string;
  indications: string;
  userGuide: string;
  sideEffects: string;
  preserve: string;
  weight: string;
  note: string;
  retailPriceAfterFee: string;
  whyBuy: string;
}

// Upload form specific data
export interface UploadFormData extends BaseFormData {
  formType: "upload";
  platformFeeAmount: string;
  whyBuyFromMe: string;
}

// Union type for form data
export type ProductFormData = ManualFormData | UploadFormData;

// Props interfaces for child components
export interface ManualFormProps {
  // Shared props
  productImages: File[];
  setProductImages: Dispatch<SetStateAction<File[]>>;
  productName: string;
  setProductName: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  productDescription: string;
  setProductDescription: Dispatch<SetStateAction<string>>;
  documents: File[];
  setDocuments: Dispatch<SetStateAction<File[]>>;
  retailPrice: string;
  setRetailPrice: Dispatch<SetStateAction<string>>;
  deliveryTime: string;
  setDeliveryTime: Dispatch<SetStateAction<string>>;
  deliveryFee: string;
  setDeliveryFee: Dispatch<SetStateAction<string>>;

  // Manual form specific props
  productType: string;
  setProductType: Dispatch<SetStateAction<string>>;
  licenseNumber: string;
  setLicenseNumber: Dispatch<SetStateAction<string>>;
  issueDate?: Date;
  setIssueDate: Dispatch<SetStateAction<Date | undefined>>;
  expiryDate?: Date;
  setExpiryDate: Dispatch<SetStateAction<Date | undefined>>;
  productCertifications: File[];
  setProductCertifications: Dispatch<SetStateAction<File[]>>;
  brand: string;
  setBrand: Dispatch<SetStateAction<string>>;
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
  countryOfOrigin: string;
  setCountryOfOrigin: Dispatch<SetStateAction<string>>;
  ingredient: string;
  setIngredient: Dispatch<SetStateAction<string>>;
  indications: string;
  setIndications: Dispatch<SetStateAction<string>>;
  userGuide: string;
  setUserGuide: Dispatch<SetStateAction<string>>;
  sideEffects: string;
  setSideEffects: Dispatch<SetStateAction<string>>;
  preserve: string;
  setPreserve: Dispatch<SetStateAction<string>>;
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
  note: string;
  setNote: Dispatch<SetStateAction<string>>;
  retailPriceAfterFee: string;
  setRetailPriceAfterFee: Dispatch<SetStateAction<string>>;
  whyBuy: string;
  setWhyBuy: Dispatch<SetStateAction<string>>;
}

export interface UploadFormProps {
  // Shared props
  productImages: File[];
  setProductImages: Dispatch<SetStateAction<File[]>>;
  productName: string;
  setProductName: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  productDescription: string;
  setProductDescription: Dispatch<SetStateAction<string>>;
  documents: File[];
  setDocuments: Dispatch<SetStateAction<File[]>>;
  retailPrice: string;
  setRetailPrice: Dispatch<SetStateAction<string>>;
  deliveryTime: string;
  setDeliveryTime: Dispatch<SetStateAction<string>>;
  deliveryFee: string;
  setDeliveryFee: Dispatch<SetStateAction<string>>;

  // Upload form specific props
  platformFeeAmount: string;
  setPlatformFeeAmount: Dispatch<SetStateAction<string>>;
  whyBuyFromMe: string;
  setWhyBuyFromMe: Dispatch<SetStateAction<string>>;
}

// Field validator function type
export type FieldValidator = () => boolean;

// Progress bar props
export interface ProgressBarProps {
  completedFields: number;
  totalFields: number;
  percentage: number;
}
