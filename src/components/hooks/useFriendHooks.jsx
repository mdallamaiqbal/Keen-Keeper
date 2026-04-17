import React, { useEffect, useState } from 'react';

const useFriendHooks = () => {
     const [cards,setCards] = useState([]);
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
       const fetchData =async ()=>{
       const res = await fetch('/data.json');
       const data = await res.json();
       setTimeout(()=>{
         setCards(data);
         setLoading(false)
       },300)}
       fetchData()
    },[])
    return {cards,loading}
};

export default useFriendHooks;