/**
 * SkillCategory — Value Object
 * Categorías disponibles para clasificar habilidades en la plataforma.
 */
export enum SkillCategory {
  TECHNOLOGY  = 'technology',
  DESIGN      = 'design',
  LANGUAGES   = 'languages',
  MUSIC       = 'music',
  BUSINESS    = 'business',
  ARTS        = 'arts',
  SPORTS      = 'sports',
  OTHER       = 'other',
}

export const SkillCategoryLabels: Record<SkillCategory, string> = {
  [SkillCategory.TECHNOLOGY]: 'Tecnología',
  [SkillCategory.DESIGN]:     'Diseño',
  [SkillCategory.LANGUAGES]:  'Idiomas',
  [SkillCategory.MUSIC]:      'Música',
  [SkillCategory.BUSINESS]:   'Negocios',
  [SkillCategory.ARTS]:       'Arte',
  [SkillCategory.SPORTS]:     'Deportes',
  [SkillCategory.OTHER]:      'Otro',
}
