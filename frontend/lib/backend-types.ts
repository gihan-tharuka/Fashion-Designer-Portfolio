export type BackendApiResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      message: string;
    };

export type BackendLookImageType =
  | "HERO"
  | "LINEUP"
  | "DEVELOPMENT"
  | "MODEL"
  | "FINAL_VIEWS"
  | "PROCESS"
  | "DETAIL";

export type BackendPriceStatus =
  | "CONFIRMED"
  | "TO_BE_FINALISED"
  | "PRICE_ON_REQUEST";

export type BackendLookImage = {
  id: string;
  lookId: string;
  type: BackendLookImageType;
  url: string;
  alt: string;
  caption: string | null;
  displayOrder: number;
};

export type BackendLookMaterial = {
  id: string;
  lookId: string;
  label: string;
  value: string;
  displayOrder: number;
};

export type BackendLookTag = {
  id: string;
  lookId: string;
  label: string;
  displayOrder: number;
};

export type BackendGarmentCosting = {
  id: string;
  garmentId: string;
  currency: string;
  fabricUsage: string;
  fabricPricePerYard: string | null;
  fabricPricePerYardStatus: BackendPriceStatus;
  fabricCost: string | null;
  fabricCostStatus: BackendPriceStatus;
  batikOrDyeCost: string | null;
  sewingCost: string | null;
  trimsCost: string | null;
  finishingCost: string | null;
  totalProductionCost: string | null;
  totalProductionCostStatus: BackendPriceStatus;
  profitMarginPercent: string | null;
  profitMarginStatus: BackendPriceStatus;
  finalSellingPrice: string | null;
  finalSellingPriceStatus: BackendPriceStatus;
  notes: string | null;
};

export type BackendGarment = {
  id: string;
  lookId: string;
  name: string;
  fabric: string;
  displayOrder: number;
  costing: BackendGarmentCosting | null;
};

export type BackendCollection = {
  id: string;
  slug: string;
  name: string;
  season: string;
  subtitle: string | null;
  description: string;
  heroImageUrl: string | null;
  lineupImageUrl: string | null;
  brandImageUrl: string | null;
  status: string;
  displayOrder: number;
};

export type BackendLook = {
  id: string;
  collectionId: string;
  number: string;
  slug: string;
  name: string;
  subtitle: string | null;
  description: string;
  concept: string | null;
  designDevelopment: string | null;
  problemsAndImprovements: string | null;
  outcomeAndReflection: string | null;
  displayOrder: number;
  isFeatured: boolean;
  images: BackendLookImage[];
  tags: BackendLookTag[];
};

export type BackendLookDetail = BackendLook & {
  materials: BackendLookMaterial[];
  garments: BackendGarment[];
  collection: BackendCollection;
  createdAt?: string;
  updatedAt?: string;
};

export type BackendPricingLook = {
  id: string;
  collectionId: string;
  number: string;
  slug: string;
  name: string;
  subtitle: string | null;
  description: string;
  concept: string | null;
  designDevelopment: string | null;
  problemsAndImprovements: string | null;
  outcomeAndReflection: string | null;
  displayOrder: number;
  isFeatured: boolean;
  garments: BackendGarment[];
};

export type BackendLookNavItem = {
  slug: string;
  name: string;
  number: string;
  displayOrder: number;
};

export type BackendLookDetailResponse = {
  look: BackendLookDetail;
  previous: BackendLookNavItem | null;
  next: BackendLookNavItem | null;
};

export type BackendCollectionResponse = BackendCollection & {
  looks: BackendLook[];
};

export type BackendProcessItem = {
  id: string;
  collectionId: string;
  number: string | null;
  title: string;
  description: string;
  imageUrl: string | null;
  imageAlt: string | null;
  category: string | null;
  displayOrder: number;
};

export type BackendSkill = {
  id: string;
  designerProfileId: string;
  label: string;
  type: "SKILL" | "CREATIVE_INTEREST";
  displayOrder: number;
};

export type BackendDesignerProfile = {
  id: string;
  name: string;
  title: string;
  bio: string;
  portraitUrl: string | null;
  quote: string | null;
  email: string;
  phone: string | null;
  linkedinUrl: string | null;
  location: string | null;
  portfolioPdfUrl: string | null;
  skills: BackendSkill[];
};

export type BackendSiteSetting = {
  id: string;
  siteTitle: string;
  siteDescription: string;
  logoUrl: string | null;
  faviconUrl: string | null;
  contactEmail: string;
  contactPhone: string | null;
  linkedinUrl: string | null;
  portfolioPdfUrl: string | null;
  location: string | null;
  copyrightText: string | null;
  seasonLabel: string | null;
  collectionName: string | null;
};

export type BackendSiteSettingsResponse = {
  siteSettings: BackendSiteSetting;
  designerProfile: BackendDesignerProfile | null;
};

export type EnquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  interestType?:
    | "INTERNSHIP"
    | "COLLABORATION"
    | "COMMISSION"
    | "STYLING"
    | "PORTFOLIO_VIEWING"
    | "PRICING"
    | "OTHER";
};

export type BackendEnquiry = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  interestType: NonNullable<EnquiryPayload["interestType"]>;
  status: "NEW" | "READ" | "ARCHIVED";
  createdAt: string;
  updatedAt: string;
};

export type AdminLoginPayload = {
  email: string;
  password: string;
};

export type BackendAdminUser = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN";
  createdAt: string;
  updatedAt: string;
};

export type BackendAuthLoginResponse = {
  token: string;
  user: BackendAdminUser;
};

export type BackendAdminDashboard = {
  totalLooks: number;
  totalGarments: number;
  totalEnquiries: number;
  newEnquiries: number;
  processItems: number;
  confirmedCostings: number;
  priceOnRequestCostings: number;
  latestEnquiries: BackendEnquiry[];
  latestUpdatedLooks: Array<{
    id: string;
    slug: string;
    number: string;
    name: string;
    updatedAt: string;
  }>;
};

export type BackendAdminLookSummary = BackendLook & {
  collection: Pick<BackendCollection, "id" | "slug" | "name" | "season">;
  materials: BackendLookMaterial[];
  _count: {
    garments: number;
  };
  createdAt: string;
  updatedAt: string;
};

export type BackendAdminLookDetail = BackendLookDetail & {
  createdAt: string;
  updatedAt: string;
};

export type AdminLookPayload = {
  number: string;
  slug: string;
  name: string;
  subtitle?: string | null;
  description: string;
  concept?: string | null;
  designDevelopment?: string | null;
  problemsAndImprovements?: string | null;
  outcomeAndReflection?: string | null;
  displayOrder: number;
  isFeatured: boolean;
  images: Array<{
    type: BackendLookImageType;
    url: string;
    alt: string;
    caption?: string | null;
    displayOrder: number;
  }>;
  tags: Array<{
    label: string;
    displayOrder: number;
  }>;
  materials: Array<{
    label: string;
    value: string;
    displayOrder: number;
  }>;
};
