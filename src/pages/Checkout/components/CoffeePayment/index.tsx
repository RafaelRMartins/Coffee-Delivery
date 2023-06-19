import { BoxCoffee } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CartListValue,
  CartListContext,
} from '../../../../contexts/CartListContext'
import { ChangeEvent, useContext, MouseEvent } from 'react'

export function CoffeePayment({ id, name, value, amount }: CartListValue) {
  const { removeCoffee, updateCoffeeAmount } = useContext(CartListContext)
  const price = value * amount
  const minus = amount - 1
  const plus = amount + 1

  const formatAmount = (value: number): string => {
    return value.toString().padStart(2, '0')
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let newValue: number = parseInt(event.target.value)

    if (newValue > 99) {
      newValue = 99
    }

    if (newValue < 1 || isNaN(newValue)) {
      newValue = 1
    }

    updateCoffeeAmount({ id, amount: newValue })
  }

  const handleUpdateCoffeeAmount = (
    event: MouseEvent<HTMLButtonElement>,
    type: string,
  ) => {
    event.preventDefault()

    if (type === 'minus') {
      if (minus === 0) {
        return
      }
      updateCoffeeAmount({ id, amount: minus })
    }

    if (type === 'plus') {
      if (plus === 100) {
        return
      }
      updateCoffeeAmount({ id, amount: plus })
    }
  }

  return (
    <BoxCoffee>
      <section>
        <img src={id} alt="" />
        <div className="ControllerBox">
          <p>{name}</p>
          <div className="ControllerButton">
            <div className="AmountCoffee">
              <button
                onClick={(event) => handleUpdateCoffeeAmount(event, 'minus')}
              >
                <Minus size={14} weight="bold" />
              </button>
              <input
                type="number"
                value={formatAmount(amount)}
                onChange={handleChange}
                min="1"
                max="99"
              />
              <button
                onClick={(event) => handleUpdateCoffeeAmount(event, 'plus')}
              >
                <Plus size={14} weight="bold" />
              </button>
            </div>
            <button className="remove-coffee" onClick={() => removeCoffee(id)}>
              <Trash size={16} weight="regular" />
              Remover
            </button>
          </div>
        </div>
      </section>

      <p>R$ {price.toFixed(2).toString().replace('.', ',')}</p>
    </BoxCoffee>
  )
}
