import React, { Component } from 'react'
import url from '../../config.json'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Trending.css'
export class Trending extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allStocksList: [{
                stockName: 'Reliance Industries Ltd',
                crisilRating: 10
            },
            {
                stockName: "Bajaj Auto Ltd",
                crisilRating: 9
            },
            {
                stockName: "Dr.Reddy's Laboratories Ltd",
                crisilRating: 8
            },
            {
                stockName: "Bharat Heavy Electricals Ltd",
                crisilRating: 7
            },
            {
                stockName: "State Bank Of India",
                crisilRating: 6

            }
            ]
        }
    }
    componentDidMount() {
        axios.get(`${url.urlCharan}/getTrending`)
            .then(res => {
                console.log("res inside component did mount get all stocks", res)
                if (res.status === 200 && res.data.status === "SUCCESS") {
                    console.log("inside success")
                    this.setState({
                        allStocksList: res.data.data
                    }, () => {
                        console.log("all stock after set state", this.state.allStocksList)
                    });
                } else {

                }
            })
    }
    render() {
        return (
            <div>
                <h2>Trending Stocks</h2>
                <table className="breachtable">
                    <thead className="tableheading">
                        <tr>
                            <th scope="col">Stock Name</th>
                            <th scope="col">CRISIL Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.allStocksList.map((each, index) => (
                                <tr className="datarow" scope="row">
                                    <td> {each.stockName}</td>
                                    <td> {each.crisilRating}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

                <br></br>
                <div className="chart">
                <BarChart width={600} height={300} data={this.state.allStocksList}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="stockName" />
                    <YAxis dataKey="crisilRating" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="crisilRating" stackId="a" fill="#8884d8" />
                    {/* <Bar dataKey="crisilRating" stackId="a" fill="#ffffff" /> */}
                   
                </BarChart>
                </div>
                

            </div>

        )
    }
}

export default Trending
