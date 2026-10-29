import React, { Component } from 'react'
import url from '../../config.json'
import axios from 'axios'
import './StockHistory.css'
export class StockHistory extends Component {
    constructor(props){
        super(props)
        this.state={
            allStocksList:[]
        }
    }
    componentDidMount() {
        let userId=localStorage.getItem('userId')
        axios.get(`${url.url}/myOrders/${userId}`)
            .then(res => {
                console.log("res inside component did mount get my orders", res)
                if (res.status === 200 && res.data.status==="SUCCESS" ){   
                    console.log("inside success")
                    this.setState({
                        allStocksList: res.data.data
                    },()=>{
                        console.log("all stock after set state", this.state.allStocksList)
                    });
                } else {
        
                }
            })
    }
    render() {
        return (
            <div>
                <h2>List Of Stocks</h2>
                <table className="breachtable">
                            <thead className="tableheading">
                                <tr>
                                    <th scope="col">Ordered Date</th>
                                    <th scope="col">Stock Name</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total Price</th>
                                    <th scope="col">Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.allStocksList.map((each, index) => (
                                        <tr className="datarow" scope="row">
                                            <td> {each.orderedDate}</td>
                                            <td> {each.stockName}</td>
                                            <td> {each.unitPrice}</td>
                                            <td> {each.quantity}</td>
                                            <td> {each.totalPrice}</td>
                                            <td> {each.status}</td>
                                            
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                
            </div>
        )
    }
}

export default StockHistory
