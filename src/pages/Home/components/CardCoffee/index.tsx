import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Card, CardTags, PriceAndCart } from './styles'
import { useState, ChangeEvent, useContext } from 'react'
import {
  CartListContext,
  CartListValue,
} from '../../../../contexts/CartListContext'

interface ListCoffee {
  id: string
  name: string
  description: string
  value: number
  tags: string[]
}

export function CardCoffee({ id, name, description, value, tags }: ListCoffee) {
  const { insertCartList } = useContext(CartListContext)
  const [amount, setAmount] = useState<number>(1)
  const addCart = { id, name, value, amount }

  function handleAddCart(addCart: CartListValue) {
    insertCartList(addCart)
  }

  const handleIncrement = (): void => {
    if (amount < 99) {
      setAmount((prevAmount) => prevAmount + 1)
    }
  }

  const handleDecrement = (): void => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let newValue: number = parseInt(event.target.value)

    if (newValue > 99) {
      newValue = 99
    }

    if (newValue < 1 || isNaN(newValue)) {
      newValue = 1
    }

    setAmount(newValue)
  }

  const formatAmount = (value: number): string => {
    return value.toString().padStart(2, '0')
  }

  const price: number = value * amount

  return (
    <Card>
      <img src={id} alt="" />
      <CardTags>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </CardTags>
      <h1>{name}</h1>
      <p>{description}</p>
      <PriceAndCart>
        <p>
          R$
          <span> {price.toFixed(2).toString().replace('.', ',')}</span>
        </p>
        <section>
          <div>
            <button onClick={handleDecrement}>
              <Minus size={14} weight="bold" />
            </button>
            <input
              type="number"
              value={formatAmount(amount)}
              onChange={handleChange}
              min="1"
              max="99"
            />
            <button onClick={handleIncrement}>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <button className="ButtonCart" onClick={() => handleAddCart(addCart)}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </section>
      </PriceAndCart>
    </Card>
  )
}
