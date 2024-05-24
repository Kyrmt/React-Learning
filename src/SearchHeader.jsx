import React from 'react';
import { useState } from 'react';
import './css/Header.css'

function SearchHeader({search}){
        
        const [value, setvalue] = useState('');
        const handlechange = (event)=> {
            setvalue(event.target.value)
        }
        const onhandlesubmit = (event)=>{
            event.preventDefault();
            search(value)
        }
        return (
            <div className='search'>
                <form onSubmit={onhandlesubmit}>
                    <label >What are you searching?</label>
                    <br />
                    <input className='searchbar' value={value} onChange={handlechange}/>
                </form>
            </div>
        );
    
    
}


export default SearchHeader;
