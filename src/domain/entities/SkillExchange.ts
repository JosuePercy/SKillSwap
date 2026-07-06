export type ExchangeStatus = 'active' | 'completed' | 'cancelled'

export interface SkillExchange {
  readonly id: string
  readonly requestId: string
  readonly userAId: string
  readonly userBId: string
  readonly status: ExchangeStatus
}

export interface ExchangeRating {
  readonly id: string
  readonly exchangeId: string
  readonly fromUserId: string
  readonly toUserId: string
  readonly score: number      // 1–5
  readonly comment?: string
}
