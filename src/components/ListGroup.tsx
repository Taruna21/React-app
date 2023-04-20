
import { useState } from "react";
function ListGroup(){
    let items = ["India", "New-York", "Tokyo","France"];
  
    
    const [selectedIndex , setselectedIndex] = useState(-1);
   

    const handleClick = (event: MouseEvent) => console.log(event);

    return (
    <>
        <h1>List</h1>
        {   items.length ===0 ? <p>no item found</p> : null }
        {items.length ===0 && <p>No item found </p>}
        <ul className= 'list-group'>
            {items.map((item, index) => ( 
                <li className={selectedIndex === index 
                    ? 'list-group-item active '
                    : 'list-group-item'}
                key={item} 
                onClick={() => {setselectedIndex(index) ;}} 
                >{item}</li>
        ))}
    </ul>
    </>
    )
}
export default ListGroup;