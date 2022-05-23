import React from 'react';
import {useState, useEffect} from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    console.log(tools);

    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div className='h-20'>
            <h2 className='text-center'>Our all Kitchen Tools</h2>
            <div>
                {
                    tools.slice(-6).reverse().map(tool => <Tool tool={tool} key={tool._id}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;