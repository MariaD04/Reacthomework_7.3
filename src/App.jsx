import React from 'react';
import './App.css'
import MonthTable from './components/MonthTable';
import SortTable from './components/SortTable';
import YearTable from './components/YearTable';
import withAgregateList from './components/withAgregateList';

const apiUrl = import.meta.env.VITE_APP_API_URL
const MonthTableComponent = withAgregateList(MonthTable, 'month')
const SortTableComponent = withAgregateList(SortTable, 'sort')
const YearTableComponent = withAgregateList(YearTable, 'year')

export default class App extends React.Component {
    state = {
      list: []
    }
    
    loadData = () => {
      fetch(apiUrl)
      .then(response => response.json()) 
      .then(data => { 
        this.setState({ list: data.list })
      })
    }

    componentDidMount() {
      this.loadData()
    }

    render() {
        const {list} = this.state;
      
        return (
            <div id="app">
                <MonthTableComponent list={list} />
                <YearTableComponent list={list} />
                <SortTableComponent list={list} />
            </div>
        );
    }
}

