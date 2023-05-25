import {useState,useEffect} from 'react';

const useOnline = () => {
    
    const [isOnline,setIsOnline] = useState(true);
    
    useEffect(() => {
        const handleOnline = ()=>{
            setIsOnline(true);
        }
        const handleOffline = ()=>{
            setIsOnline(false);
        };
        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);

        //need to clean when we leave this component
        return () => {
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        };
    },[]);
    /*
    window.addEventListener("online",() => {
        //whenever we will go online this code will be triggered
        //we want this to run one time when page is loaded so we will write in useEffect
    });
    */
    return isOnline;
}
export default useOnline;