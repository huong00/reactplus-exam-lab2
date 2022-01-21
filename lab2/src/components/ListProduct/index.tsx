import { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

function ListProduct() {
    const [products, setProduct] = useState([])

    
    const getProducts = async()=>
    {
        const products = await axios.get('https://5d36d86c86300e0014b647c7.mockapi.io/products')
        console.log(products.data)
        setProduct(products.data)
    }
    const deleteProducts = async(id)=>
    {
      const products = await axios.delete(`https://5d36d86c86300e0014b647c7.mockapi.io/products/${id}`)
      getProducts();
    }
    // const editProduct = async(id)=>
    // {
    //   const products = await axios.delete(`https://5d36d86c86300e0014b647c7.mockapi.io/products/${id}`)
    //   getProducts();
    // }


    const renderProduct = () => {
      return products.map(product => (
        <div>
            <div className="ant-list-items">
                <div className="ant-list-item">
                    <div className="ant-list-item-meta">
                        <div className="ant-list-item-meta-avatar">
                            <span className="ant-image-img">
                                <img src={product['avatar']} style={{width: '200'}} />
                            </span>
                        </div>
                        <div className="ant-list-item-meta-content">
                            <h4 className="ant-list-item-meta-title">
                                <a>{product['name']}</a>
                            </h4>
                            <div className="ant-list-item-meta-description">
                                {product['description']}
                            </div>
                        </div>
                        <ul className="ant-list-item-action">
                            <li>
                                <a onClick={() => (product)}>Edit</a>
                            </li>
                            <li>
                                <a onClick={() => deleteProducts(product['id'])}>Remove</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        ))
        
      }
      useEffect(() => {getProducts()}, [])
      return (
        <div>
            {renderProduct()}
        </div>
    );
}

export default ListProduct;