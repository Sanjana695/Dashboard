import Header from './Header';
import React, { useState } from 'react';
function AddProduct() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function addProduct() {
        console.warn(name, file, price, description);
        //now for backend
       
        // const formData = new formData();
        // formData.append("file", file)
        // formData.append("name", name)
        // formData.append("price", price)
        // formData.append("description", description)
        // let info = { file, name, price, description }
        // let result = await fetch('', {
        //     method: "POST",
        //     headers: {
        //         "content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({ info })
        // });
        // result = await result.json();
        // console.warn("result", result)
        // // localStorage.setItem("user-info", JSON.stringify(result));
        // //history.push("/add")
    }

    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>AddProduct Page</h1>
                <input type="text" className="form-control" placeholder="name"
                    value={name} onChange={(e) => setName(e.target.value)} />
                <br />

                <input type="file" className="form-control" placeholder="file"
                    value={file} onChange={(e) => setFile(e.target.value)} />
                <br />

                <input type="text" className="form-control" placeholder="Price"
                    value={price} onChange={(e) => setPrice(e.target.value)} />
                <br />

                <input type="text" className="form-control" placeholder="Description"
                    value={description} onChange={(e) => setDescription(e.target.value)} />
                <br />

                <button onClick={addProduct} className="btn btn-primary">Add Product</button>
            </div>
        </>
    )
}
export default AddProduct;