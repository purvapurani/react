import React from 'react';
import WrapperComponent from '../Common/WrapperComponent';

const Contacts = (props) =>{
    //console.log(props);

    setTimeout(() => {
        //props.history.push("/about");
    },2000);

    return(
        <div className="container">
            <h1 className="center">Contacts</h1>
            <p>Libero similique quos molestiae dicta rem enim magnam cupiditate est recusandae minus atque odit a eligendi eaque expedita mollitia, officia labore officiis!</p>
            <p>Hic tempore quis alias molestias debitis laudantium quaerat, enim laborum quia saepe voluptate ea sapiente perferendis eligendi dolore quod, nobis nostrum consequuntur deleniti. Soluta quod minima ratione magnam maiores beatae cupiditate, fuga illum repellat? Ullam iure, sit autem libero repellendus aperiam dignissimos consequuntur dolore a minima iste repellat excepturi placeat quam pariatur nisi sapiente sunt deleniti tempore explicabo unde aliquam dicta. Necessitatibus, dicta.</p>
        </div>
    )
}
export default WrapperComponent(Contacts);