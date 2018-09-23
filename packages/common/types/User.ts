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

export interface IPayment {
  id: string
  reference: string
  referenceRaw: string
  createdAt: number
  creditsAdded: number
  note: string | null
  rawAmount: number
  rawCurrency: string
  verified: boolean // If verified, don't add credits again if subsequent checks
  verifiedBy: string
}

export interface IProduct {
  id: string
  name: string
  description: string | null
  credits: number
  category: TProductCategory
  priority: number
}

export interface IPurchase {
  id: string
  creditsRemoved: number
  startTime: number
  endTime: number
  productId: string
  stringifiedProduct: string
}

export interface IAccessLogEntry {
  createdAt: number
  client: string
  token: string
}

export interface IUserData {
  identifier: string,
  payments: IPayment[]
  purchases: IPurchase[]
  accessLog: IAccessLogEntry[]
  credits: number
  role: TUserRole
  parentId?: string | null
  note?: string | null
}
