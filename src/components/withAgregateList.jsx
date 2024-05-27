import React from 'react'

export const withAgregateList = (Component, propsName) => {
  return (props) => {
    let resultList = []
    if (propsName == 'sort') {
        resultList = [...props.list].sort((a, b) => new Date(a.date) - new Date(b.date))
    } else if (propsName == 'month') {
        resultList = [...props.list].map(item => ({
            month: new Date(item.date).toLocaleString('en', { month: 'short' }),
            amount: item.amount
          }))
    } else if ((propsName == 'year')) {
        resultList = [...props.list].map(item => ({
            year: new Date(item.date).getFullYear(),
            amount: item.amount
          }))
    }
    
    return <Component list={resultList} />
  }
}

export default withAgregateList