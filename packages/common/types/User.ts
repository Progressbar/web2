export type TUserRole =
  | 'admin'
  | 'core'
  | 'host'
  | 'member'
  | 'guest'
  | 'coworker'
  | 'company'
  | 'partner'
  | 'unassigned'

export type TProductCategory =
  | 'satoshiMeetingRoom'
  | 'daypass'
  | 'flexdesk'
  | 'fixdesk'
  | '247addon'
  | 'entireSpace'
  | 'privateLocker'
  | 'lab'
  | 'diylab'

export interface IPaymentData {
  uid: string
  method: 'cash' | 'digital'
  methodReference: string
  creditsAdded: number
  note: string
  rawAmount: number
  rawCurrency: string
  verified: boolean // If verified, don't add credits again if subsequent checks
  verifiedByUid: string | null
}

export interface IDiscountData {
  uid: string
  name: string
  description: string
  type: 'percentage' | 'whole'
  amount: number
  enabled: boolean
  used: boolean
}

export interface IProductData {
  name: string
  enabled: boolean
  description: string
  category: TProductCategory
  credits: number
  priority: number
}

export interface IPurchase {
  id: string
  creditsRemoved: number
  startTime: number
  endTime: number
  productId: string
}

export interface IAccessLogEntryData {
  uid: string
  client: 'telegram' | 'web'
}

export interface ISeat {
  name: string
  takenByUid: string | null
}

export interface IUserData {
  uid: string
  identifier: string
  credits: number
  role: TUserRole
  parentUid: string | null
  note: string
  verifiedByUid: string | null
}
