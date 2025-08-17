import React, { useEffect, useState } from 'react'

const test = () => {
    const [dropDown,setDropDown] = useState('');
    const [city,setCity]= useState();
    const dummyData = [
  { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
  { name: 'Pak', value: 'PK', cities: ['Lahore', 'Karachi'] },
  { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] }
];
const handleClick = (e)=>{
   const selected = dummyData.find(country => country.value === e);
   setCity(selected ? selected.cities : []);
}

return (
     <div>
             <select
                 className='w-40 h-10 border border-gray-300 rounded-md p-2'
                onChange={(e)=>handleClick(e.target.value)}
             >
                     <option value="">Select Country</option>
                     {dropDown &&
                         dropDown.map((data) => (
                             <option key={data.value} value={data.value}>
                                 {data.name}
                             </option>
                         ))}
             </select>
             <select className='w-40 h-10 border border-gray-300 rounded-md p-2' disabled={!city || city.length === 0}>
                 <option value="">Select City</option>
                 {city &&
                     city.map((cityName, idx) => (
                         <option key={idx} value={cityName}>
                             {cityName}
                         </option>
                     ))}
             </select>
     </div>
)
}

export default test