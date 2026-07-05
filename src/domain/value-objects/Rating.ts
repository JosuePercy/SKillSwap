/**
 * Rating — Value Object
 * Encapsula una calificación de 1 a 5 estrellas con validación integrada.
 */
export class Rating {
  private readonly _value: number

  private constructor(value: number) {
    this._value = value
  }

  static create(value: number): Rating {
    const rounded = Math.round(value)
    if (rounded < 1 || rounded > 5) {
      throw new Error(`Rating debe estar entre 1 y 5, se recibió: ${value}`)
    }
    return new Rating(rounded)
  }

  get value(): number {
    return this._value
  }

  equals(other: Rating): boolean {
    return this._value === other._value
  }

  toString(): string {
    return `${this._value}/5`
  }
}
