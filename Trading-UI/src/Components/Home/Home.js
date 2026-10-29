import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Purchase from '../Purchase/Purchase';
import ListStocks from '../ListStocks/ListStocks';
import Trending from '../Trending/Trending';
import StockHistory from '../StockHistory/StockHistory';

export class Home extends Component {
    render() {
        return (
            <div>
                <Tabs >
                    <TabList>
                       
                        <Tab>List Of Stocks</Tab>
                        <Tab>Purchase Stocks</Tab>
                        <Tab>My Stock History</Tab>
                        <Tab>Trending Stocks</Tab>
                    </TabList>

                    <TabPanel>
                         <ListStocks></ListStocks>
                    </TabPanel>
                    <TabPanel>
                        <Purchase></Purchase>                        
                    </TabPanel>
                    <TabPanel>
                        <StockHistory></StockHistory>
                    </TabPanel>
                    <TabPanel>
                        <Trending></Trending>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default Home
