export enum TourType {
  TOUR = "tour",
  ACTIVITY = "activity",
  TICKET = "ticket",
  TRANSPORT = "transport",
}

export enum VehicleType {
  CAR = "car",
  TRAIN = "train",
  BUS = "bus",
  FERRY = "ferry",
}

export enum MeetingPointType {
  PICKUP_OFFER = "1",
  MEETING_POINT = "2",
  BOTH = "3",
}

export enum DurationUnit {
  DAY = "day",
  HOUR = "hour",
  MINUTE = "minute",
}

export enum MenuItemType {
  TOUR = "tour",
  DESTINATION = "destination",
  CATEGORY = "category",
  POST = "post",
  LINK = "link",
  BLOG = "blog",
  TOURS = "tours",
}

export enum OrderStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  DEPOSITED = "deposited",
  CANCELLED = "cancelled",
  REFUND = "refund",
  WAITING = "waiting",
}

export enum PayStatus {
  PENDING = "pending",
  DEPOSITED = "deposited",
  PAID = "paid",
  REFUND = "refund",
}

export enum ReviewStatus {
  PENDING = "pending",
  APPROVED = "approved",
}

export enum LayoutType {
  GRID = "grid",
  LISTING = "listing",
}

export enum SupplierStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
  REJECTED = "rejected",
}
