import React, { useEffect, useState } from 'react';
const User  = (props) => {
    //console.log(props.person);
     const [data,setData]=useState([])
     console.log(data);
    const handleDelete = (index) => {
        setData(data.filter((x) => x.id !== index));
      };
useEffect(() => {
setData(props.person)
}, [props.person])
    // const data=props.person
    return (
        <>
            {/* <h1>{props.person.map((item)=>{
return item.id
})}</h1> */}

            <table class="table table-sm">
            <thead>
                <tr>
             <th scope="col">Id</th>
             <th scope="col">title</th>
             <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {data.map((x) => {
            return (
              <tr key={x.id} onClick={() => handleDelete(x.id)}>
                  <td>{x.id}</td>
                <td>{x.title}</td>
                <td><button class="btn btn-primary">Delete</button></td>
              </tr>
            );
          })}
                </tbody>
            </table>

        </>
    )
}
export default User