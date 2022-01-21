import React, {useState} from 'react';
import { Modal } from 'antd';

import ListProduct from './components/ListProduct'
import AddProductForm from './components/AddProductForm'

import 'antd/dist/antd.css'
import './App.css';

function App() {

    const [isModalVisible, setIsModalVisible] = useState(false);


    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <div className="App">
            <h2>List product</h2>
            <div className="header-add-user">
                <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
                    Add New Product
                </button>
            </div>
            <ListProduct />
            <Modal title="Add Product" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <AddProductForm />
            </Modal>
        </div>
    );
}

export default App;