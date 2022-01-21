
import React, { useState } from 'react';
import axios from 'axios';

function AddProductForm() {
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const addProducts = async()=>
    {
        const result = await axios.post('https://5d36d86c86300e0014b647c7.mockapi.io/products', 
        {avatar: image, name: name, description: description})
        window.location.reload();
        return false;
    }

    return (
        <div>
        <div className="field-input-group">
            <input onChange={e => (setImage(e.target.value))} placeholder="Image" name="image" type="text" value={image} className="ant-input" />
        </div>
        <div className="field-input-group">
            <input onChange={e => (setName(e.target.value))} placeholder="Product name" name='name' type="text" value={name} className="ant-input" />
        </div>
        <div className="field-input-group">
            <input onChange={e => (setDescription(e.target.value))} placeholder="Product description" name='description' value={description} type="text" className="ant-input" />
        </div>
        <div className="modal-new-user-footer">
            <button onClick={() => addProducts()} className="ant-btn ant-btn-primary">
                Save
            </button>
            <button className="ant-btn" style={{marginLeft: 10}} >
                Cancel
            </button>
        </div>
    </div>
    );
}

export default AddProductForm;
