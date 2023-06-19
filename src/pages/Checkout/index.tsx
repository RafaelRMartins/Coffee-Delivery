import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Box, ConfirmOrder, Payment } from './styles'
import { CoffeePayment } from './components/CoffeePayment'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { CartListContext } from '../../contexts/CartListContext'
import { useNavigate } from 'react-router-dom'

const newCycleFormValidationSchema = zod.object({
  CEP: zod
    .string()
    .min(8, 'Informe um CEP válido!')
    .max(9, 'Informe um CEP válido!'),
  Road: zod.string().min(1, 'Informe a rua de entrega'),
  Number: zod.number().min(1, 'Informe o número de entrega'),
  Complement: zod.string(),
  Neighborhood: zod.string().min(1, 'Informe o bairro de entrega'),
  City: zod.string().min(1, 'Informe a cidade de entrega'),
  UF: zod.string().min(1, 'Informe a UF de entrega'),
  formPayment: zod.string(),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Checkout() {
  const { cartList, clearCartList } = useContext(CartListContext)
  const navigate = useNavigate()

  const coffeePrices = cartList.reduce((totalPrice, coffee) => {
    const coffeePrice = coffee.value * coffee.amount
    return totalPrice + coffeePrice
  }, 0)

  const TotalPrice = coffeePrices + 3.5

  const { register, handleSubmit } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    if (cartList.length) {
      navigate(
        `/success/${data.Road}/${data.Number}/${data.Neighborhood}/${data.City}/${data.UF}/${data.formPayment}`,
      )
      clearCartList()
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <Payment>
          <h2>Complete seu pedido</h2>
          <section>
            <div className="title-form">
              <MapPinLine size={22} weight="regular" />
              <span>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </span>
            </div>
            <div className="area-form">
              <div className="address">
                <input
                  type="text"
                  className="CEP"
                  placeholder="CEP"
                  {...register('CEP')}
                />
                <input
                  type="text"
                  className="Road"
                  placeholder="Rua"
                  {...register('Road')}
                />
                <input
                  type="text"
                  className="Number"
                  placeholder="Número"
                  {...register('Number', { valueAsNumber: true })}
                />
                <input
                  type="text"
                  className="Complement"
                  placeholder="Complemento"
                  {...register('Complement')}
                />
                <input
                  type="text"
                  className="Neighborhood"
                  placeholder="Bairro"
                  {...register('Neighborhood')}
                />
                <input
                  type="text"
                  className="City"
                  placeholder="Cidade"
                  {...register('City')}
                />
                <input
                  type="text"
                  className="UF"
                  placeholder="UF"
                  {...register('UF')}
                />
              </div>
            </div>
          </section>
          <section>
            <div className="title-form Dollar">
              <CurrencyDollar size={22} weight="regular" />
              <span>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </span>
            </div>
            <div className="area-form">
              <div className="payment">
                <input
                  type="radio"
                  id="credit"
                  value="crédito"
                  {...register('formPayment')}
                />
                <label htmlFor="credit">
                  <CreditCard size={16} weight="regular" />
                  Cartão de crédito
                </label>
                <input
                  type="radio"
                  id="debit"
                  value="débito"
                  {...register('formPayment')}
                />
                <label htmlFor="debit">
                  <Bank size={16} weight="regular" />
                  cartão de débito
                </label>
                <input
                  type="radio"
                  id="money"
                  value="dinheiro"
                  {...register('formPayment')}
                />
                <label htmlFor="money">
                  <Money size={16} weight="regular" />
                  dinheiro
                </label>
              </div>
            </div>
          </section>
        </Payment>
        <ConfirmOrder>
          <h2>Cafés selecionados</h2>
          <section>
            {cartList.map((coffee) => {
              return (
                <CoffeePayment
                  key={coffee.id}
                  id={coffee.id}
                  name={coffee.name}
                  value={coffee.value}
                  amount={coffee.amount}
                />
              )
            })}
            <div className="price-list">
              <div className="price">
                <p>Total de itens</p>
                <p className="value">
                  R$ {coffeePrices.toFixed(2).toString().replace('.', ',')}
                </p>
              </div>
              <div className="price">
                <p>Entrega</p>
                <p className="value">R$ 3,50</p>
              </div>
              <div className="price-total">
                <p>Total</p>
                <p>R$ {TotalPrice.toFixed(2).toString().replace('.', ',')}</p>
              </div>
            </div>
            <button className="confirm-button" type="submit">
              confirmar pedido
            </button>
          </section>
        </ConfirmOrder>
      </form>
    </Box>
  )
}
