import {
  CircleCoffee,
  CirclePackage,
  CircleShoppingCart,
  CircleTimer,
  CoffeeList,
  CoffeeSection,
  CoffeeTitle,
  HomeBackground,
  InfoIntro,
  InfoList,
  InfoText,
  Intro,
} from './styles'
import Imagem from '../../assets/Imagem.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CardCoffee } from './components/CardCoffee'
import Americano from '../../assets/Americano.png'
import Expresso from '../../assets/Expresso.png'
import ExpressoCremoso from '../../assets/Expresso-Cremoso.png'
import CafeGelado from '../../assets/Café-Gelado.png'
import CafeComLeite from '../../assets/Café-com-Leite.png'
import Latte from '../../assets/Latte.png'
import Capuccino from '../../assets/Capuccino.png'
import Macchiato from '../../assets/Macchiato.png'
import Mochaccino from '../../assets/Mochaccino.png'
import ChocolateQuente from '../../assets/Chocolate-Quente.png'
import Cubano from '../../assets/Cubano.png'
import Havaiano from '../../assets/Havaiano.png'
import Arabe from '../../assets/Árabe.png'
import Irlandes from '../../assets/Irlandês.png'

const ListCoffees = [
  {
    id: Americano,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: Expresso,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: ExpressoCremoso,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: CafeGelado,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    tags: ['Tradicional', 'gelado'],
  },
  {
    id: CafeComLeite,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
    tags: ['Tradicional', 'com leite'],
  },
  {
    id: Latte,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
    tags: ['Tradicional', 'com leite'],
  },
  {
    id: Capuccino,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
    tags: ['Tradicional', 'com leite'],
  },
  {
    id: Macchiato,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
    tags: ['Tradicional', 'com leite'],
  },
  {
    id: Mochaccino,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
    tags: ['Tradicional', 'com leite'],
  },
  {
    id: ChocolateQuente,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
    tags: ['especial', 'com leite'],
  },
  {
    id: Cubano,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: Havaiano,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
    tags: ['especial'],
  },
  {
    id: Arabe,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
    tags: ['especial'],
  },
  {
    id: Irlandes,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
    tags: ['especial', 'alcoólico'],
  },
]

export function Home() {
  return (
    <main>
      <HomeBackground>
        <Intro>
          <InfoIntro>
            <InfoText>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </InfoText>
            <InfoList>
              <ul>
                <li>
                  <CircleShoppingCart>
                    <ShoppingCart size={16} weight="fill" />
                  </CircleShoppingCart>
                  <p>Compra simples e segura</p>
                </li>
                <li>
                  <CirclePackage>
                    <Package size={16} weight="fill" />
                  </CirclePackage>
                  <p>Embalagem mantém o café intacto</p>
                </li>
                <li>
                  <CircleTimer>
                    <Timer size={16} weight="fill" />
                  </CircleTimer>
                  <p>Entrega rápida e rastreada</p>
                </li>
                <li>
                  <CircleCoffee>
                    <Coffee size={16} weight="fill" />
                  </CircleCoffee>
                  <p>O café chega fresquinho até você</p>
                </li>
              </ul>
            </InfoList>
          </InfoIntro>
          <img src={Imagem} alt="" />
        </Intro>
      </HomeBackground>
      <CoffeeSection>
        <CoffeeTitle>Nossos cafés</CoffeeTitle>
        <CoffeeList>
          {ListCoffees.map((coffee) => {
            return (
              <CardCoffee
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                description={coffee.description}
                value={coffee.value}
                tags={coffee.tags}
              />
            )
          })}
        </CoffeeList>
      </CoffeeSection>
    </main>
  )
}
