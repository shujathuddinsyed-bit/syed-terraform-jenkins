import React, { Component } from 'react'
import url from '../../config.json'
import axios from 'axios'
import './ListStocks.css'
export class ListStocks extends Component {
    constructor(props){
        super(props)
        this.state={
            allStocksList:[]
        }
    }
    componentDidMount() {
        axios.get(`${url.url}/getAllStocks`)
            .then(res => {
                console.log("res inside component did mount get all stocks", res)
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
                                    <th scope="col">Stock Name</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Stock Exchange</th>
                                    <th scope="col">CRISIL Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.allStocksList.map((each, index) => (
                                        <tr className="datarow" scope="row">
                                            <td> {each.stockName}</td>
                                            <td> {each.unitPrice}</td>
                                            <td> NSE </td>
                                            <td> {each.rating   }</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                
            </div>
        )
    }
}

export default ListStocks
