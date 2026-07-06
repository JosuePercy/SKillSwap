export type SkillLevel = 'basic' | 'intermediate' | 'advanced'
export type SkillMode  = 'teach' | 'learn'

export interface UserSkill {
  readonly id: string
  readonly userId: string
  readonly skill: string
  readonly level: SkillLevel
  readonly mode: SkillMode
}
