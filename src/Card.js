import React from 'react';

const Card= ({name,email,id})=>
{
return(
  <div className='bg-light-green tc dib pa3 br3 ma2 bw2 shadow-5 grow'>
    <img src={`https://robohash.org/${id}?200*200`} alt='robota'></img>
    <div>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>

  </div>

);
}
export default Card;
