export interface FormData {
  // Common fields
  productImages: string[];
  productName: string;
  category: string;
  productDescription: string;
  retailPrice: string;
  deliveryTime: string;
  deliveryFee: string;
  documents: { name: string; url: string; type: string }[];
  productCertifications: { name: string; url: string; type: string }[];

  // InformationManually specific fields
  productType?: string;
  licenseNumber?: string;
  issueDate?: string;
  expiryDate?: string;
  brand?: string;
  manufacturer?: string;
  countryOfOrigin?: string;
  ingredient?: string;
  indications?: string;
  userGuide?: string;
  sideEffects?: string;
  preserve?: string;
  weight?: string;
  note?: string;
  retailPriceAfterFee?: string;
  whyBuy?: string;

  // UploadDocument specific fields
  platformFeeAmount?: string;
  whyBuyFromMe?: string;

  // Form type indicator
  formType: "manual" | "upload";
}

// Product Info

export interface ProductInfo {
  brand: string;
  name: string;
  price: number;
  category: string;
  weight: string;
  manufacturer: string;
  countryOfOrigin: string;
  licenseNumber: string;
  description: string;
  images: string[];
  shippingCost: string;
  deliveryTime: string;
}

export interface DisplayData {
  detailedDescription: string;
  ingredients: string[];
  indications: string[];
  userGuide: string[];
  sideEffects: string[];
  note: string[];
  presenter: string[];
  qualityPoints: string[];
}

export interface MainDetailContentProps {
  formData: FormData | null;
  displayData: DisplayData;
}
