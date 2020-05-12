import React from 'react'
import Daters from "./Hello.js"

function Aside(props) {
	console.log(props);
	const { handleUpdate, handleDelete, daters } = props;
    return (
      <aside>
        <Daters
       	daters={daters}
       	handleDelete={handleDelete}
       	handleUpdate={handleUpdate}
       	/>
      </aside>
    );
}

export default Aside;