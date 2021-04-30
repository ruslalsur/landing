import React from 'react'

export const AppOne = ({ item }) => {
  return (
    <div className='app'>
      <img
        className='app__img'
        src={'/images/' + item.img}
        alt='Воспоминания'
      />
      <div className='app__title'>
        <span className='app__title_accent'>проект </span>
        {item.title}
      </div>
      <div className='app__desc'>
        {item.desc.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className='app__action'>
        <a className='app__btn app__btn_site' href={item.site} target='_blank'>
          Сайт
        </a>
        <a className='app__btn app__btn_code' href={item.code} target='_blank'>
          Код
        </a>
      </div>
    </div>
  )
}
