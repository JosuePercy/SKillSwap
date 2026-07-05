import { describe, it, expect } from 'vitest'
import { Rating } from '../../domain/value-objects/Rating'

describe('Rating', () => {
  it('crea una calificación válida de 5', () => {
    const rating = Rating.create(5)
    expect(rating.value).toBe(5)
  })

  it('crea una calificación válida de 1', () => {
    const rating = Rating.create(1)
    expect(rating.value).toBe(1)
  })

  it('redondea decimales al entero más cercano', () => {
    const rating = Rating.create(4.6)
    expect(rating.value).toBe(5)
  })

  it('lanza error si el valor es menor a 1', () => {
    expect(() => Rating.create(0)).toThrowError()
  })

  it('lanza error si el valor es mayor a 5', () => {
    expect(() => Rating.create(6)).toThrowError()
  })

  it('toString retorna el formato correcto', () => {
    const rating = Rating.create(4)
    expect(rating.toString()).toBe('4/5')
  })

  it('equals compara dos ratings iguales', () => {
    const a = Rating.create(3)
    const b = Rating.create(3)
    expect(a.equals(b)).toBe(true)
  })

  it('equals detecta ratings distintos', () => {
    const a = Rating.create(2)
    const b = Rating.create(4)
    expect(a.equals(b)).toBe(false)
  })
})
