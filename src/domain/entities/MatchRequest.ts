export type RequestStatus = 'pending' | 'accepted' | 'rejected'

export interface MatchRequest {
  readonly id: string
  readonly fromUserId: string
  readonly toUserId: string
  readonly status: RequestStatus
  readonly createdAt: Date
}
