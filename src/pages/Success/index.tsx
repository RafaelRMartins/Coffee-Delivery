import { CircleCurrency, CircleMap, CircleTimer, FinalPage } from './styles'
import Illustration from '../../assets/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useParams } from 'react-router-dom'

export function Success() {
  const { road, number, neighborhood, city, uf, payment } = useParams()

  return (
    <FinalPage>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <section>
        <div className="BoxInfo">
          <div className="info">
            <CircleMap>
              <MapPin size={16} weight="fill" />
            </CircleMap>
            <p>
              Entrega em{' '}
              <span>
                {road}, {number}
              </span>{' '}
              <br />
              {neighborhood} - {city}, {uf}
            </p>
          </div>
          <div className="info">
            <CircleTimer>
              <Timer size={16} weight="fill" />
            </CircleTimer>
            <p>
              Previsão de entrega <br /> <span>20 min - 30 min</span>
            </p>
          </div>
          <div className="info">
            <CircleCurrency>
              <CurrencyDollar size={16} weight="fill" />
            </CircleCurrency>
            <p>
              Pagamento na entrega <br /> <span>{payment}</span>
            </p>
          </div>
        </div>
        <img src={Illustration} alt="" />
      </section>
    </FinalPage>
  )
}
