import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'

function Icon({name}){
    if (name == "circle"){
        return <FaRegCircle size={70}/>
    } else if(name == "cross"){
        return <FaTimes size={70}/>
    } else{
        return <FaPen size={30}/>
    }
}

export default Icon;