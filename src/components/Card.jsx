import React from 'react'

function Card({ img }) {
    return (
        <div className='card'>
            <img src={img} alt="img" />
            <div className='downloadContainer'>
                <a href={img} className='downloadBtn' download> <svg width="32" height="32" viewBox="0 0 24 24" stroke="white" fill="none" stroke-linejoin="round" stroke-width="1.125" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M17 9C18.1046 9 19 9.89543 19 11V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V11C5 9.89543 5.89543 9 7 9M12 3L12.0001 15M12.0001 15L9 12.1364M12.0001 15L15 12.1364"></path></svg> </a>
            </div>
        </div>
    )
}

export default Card