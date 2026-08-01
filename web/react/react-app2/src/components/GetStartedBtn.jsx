import React from 'react'

const GetStartedBtn = (props) => {
  const { title, url, ...otherProps } = props
  return (
    <a { ...otherProps } className='get-started-btn' href={url}>
      { title }
    </a>
  )
}

export default GetStartedBtn