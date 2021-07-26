import React, {useState, useEffect} from 'react';

import Cart from '../../assets/cart.png'

import { Container } from './style';

import api from '../../services/api';
import { createSemicolonClassElement } from 'typescript';

interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}


const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]); 
  const [ cart, setCart ] = useState<IProduct[]>([]); 


  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  const handleCart = (index: number) => {
    let push: any = [ ...cart, cart.push(data[index])]
    setCart(push)
    const productStore = JSON.stringify(cart)
    localStorage.setItem(`@cart`, productStore)
  }

  const handleCartStorage = (index: number) => {
    const productStore = JSON.stringify(data[index])

   
   
  }

  return (
    <Container>
        <div>
          <div>
            <img src="https://i.pinimg.com/474x/6b/29/5c/6b295c41f0851ef603c205876d659c11.jpg" alt="logo" width="120px" height="auto" /> 
          </div>
          <div>
            <img src={Cart} alt="cart" width="50px" height="auto" />
            <p><span>{cart.length} - Itens</span></p>
          </div>
        </div>
      <section>
        {data.map( (prod, index) =>(
          <div className="product-content" key={prod.id}>
          <img src={prod.photo} alt="vonder" width="200" height="auto" />
          <h4>{prod.name}</h4>
          <span>{prod.description}</span>
          <h6>{prod.price}</h6>
          <button onClick={ () => handleCart(index)}>Adicionar ao carrinho</button>
        </div>
        ))}
         
      </section>
    </Container>
  );
}

export default Home;
