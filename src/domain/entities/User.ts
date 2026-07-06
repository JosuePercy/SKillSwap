export type UserStatus = 'pending_verification' | 'active' | 'suspended'

export interface User {
  readonly id: string
  readonly email: string
  readonly passwordHash: string
  readonly status: UserStatus
  readonly createdAt: Date
}
