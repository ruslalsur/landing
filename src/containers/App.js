import React from 'react'
import { Header } from '../components/Header'
import { AppOne } from '../components/AppOne'
import data from '../assets/json/data'

export const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <div className='apps'>
          {data.map((item, index) => (
            <AppOne key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
