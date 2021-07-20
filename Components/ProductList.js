import Header from "./Header"
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import iphone from '../Images/iphone.jpg';
import jacket from '../Images/jacket.jpg';
import jacket1 from '../Images/jacket1.jpg';

function ProductList() {
    // const [data, setData] = useState([]);
    // useEffect(async () => {
    //     let result = await fetch('')
    //     result = await result.json();
    //     setData(result)
    // }, [])
    // console.warn("data", data);
    function deleteOperation(){
        alert('delete')
    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
            <h1>Product List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        data.map((item)=>{
                            <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><img style={{width:140}} src={""+ item.file_path}/></td> //file_path will be name in api
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                    </tr>

                        })
                    } */}

                    <tr>
                        <td>1</td>
                        <td>iPhone</td>
                        <td><img style={{width:140}} src={iphone}/></td>
                        <td>Released 2019 14g, 8.3mm thickness iOS 13, up to iOS 14.7 64GB/128GB/256GB storage, no card slot</td>
                        <td>100000</td>
                        <td><Button variant="danger" onClick={()=>{deleteOperation()}}>Delete</Button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Jacket</td>
                        <td><img style={{width:140}} src={jacket}/></td>
                        <td>Winter</td>
                        <td>5000</td>
                        <td><Button variant="danger" onClick={()=>{deleteOperation()}}>Delete</Button></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Jacket</td>
                        <td><img style={{width:140}} src={jacket1}/></td>
                        <td>Winter</td>
                        <td>5000</td>
                        <td><Button variant="danger" onClick={()=>{deleteOperation()}}>Delete</Button></td>

                    </tr>
                </tbody>
            </Table>
            </div>
        </>
    )
}
export default ProductList;