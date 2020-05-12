
import React from 'react'
import Daters from "./Hello.js"

function Nav(props) {
	console.log(props);
	const { handleUpdate, handleDelete, daters } = props;
    return (
      <nav>
        <Daters
       	daters={daters}
       	handleDelete={handleDelete}
       	handleUpdate={handleUpdate}
       	/>
      </nav>
    );
}

export default Nav