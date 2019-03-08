import React, { Component } from 'react'
import {storeProducts, detailProduct } from './data'
const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [],
      detailProduct: detailProduct
    }

    this.addToCart = this.addToCart.bind(this);
    this.handleDetail = this.handleDetail.bind(this);
  };
  
  componentDidMount(){
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts,singleItem];
    })
    this.setState(() => {
      return {products: tempProducts}
    })
  };
  handleDetail = () => {
    console.log('hello from detail');
  };

  addToCart = ()  =>  {
    console('hello from add to cart');
  };
  render() {
    return (
      <ProductContext.Provider value= {{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };