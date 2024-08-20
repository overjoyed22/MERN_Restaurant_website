import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>At DineLine, our menu is a curated collection of dishes that have become beloved by our guests, each crafted to perfection by our expert chefs. From our signature Truffle Mushroom Risotto, bursting with earthy flavors and velvety textures, to the Grilled Lemon Herb Chicken, a tender and zesty delight that leaves you craving more, every dish is a masterpiece. Don’t miss our Spicy Tuna Tartare, a fresh and vibrant starter that perfectly balances heat and flavor, or indulge in the Decadent Chocolate Lava Cake, a molten center that’s pure indulgence with every bite.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu