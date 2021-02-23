import React from 'react';


// Demo Data to display
const data=[
  {id:1,name:'Facebook',value:20000},
  {id:2,name:'Twitter',value:15000},
  {id:3,name:'Instagram',value:30000},
  {id:4,name:'Telegram',value:35000},
];

// List Item To display Function
const ListItem=()=>{

  return(
    <>
          {
        data.map((item,i)=>(
            <dl>
         <dt>ID-{item.id}</dt>
        <dd>Name- {item.name}</dd>
        <dd>Value- {item.value}</dd>

          </dl>

)
  )
    }


    </>
  )
}

export default ListItem;
