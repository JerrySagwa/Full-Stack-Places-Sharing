import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ id, name, placeCount, image }) => {
  return (
      <Link to={`/places/${id}`}>
        <div className='btn-press-ani grid grid-cols-3 gap-x-2 px-3 py-2 bg-slate-600 rounded-lg shadow-lg cursor-pointer group hover:bg-yellow-400'>
          <div className='overflow-hidden flex items-center'>
            <img src={image} alt={name} className=''/>
          </div>
          <div className='col-span-2 flex flex-col justify-center items-center gap-y-1'>
            <div className='text-yellow-400 text-xl group-hover:text-white'>
              {name}
            </div>
            <div className='font-bold'>
              {placeCount} {placeCount <= 1 ? 'Place' : 'Places'}
            </div>
          </div>
        </div>
      </Link>
  );
};

export default UserItem;
