import React from 'react';
const List = ({ colors }) => {
  return (
    <>
      {colors.map((elem) => {
        const { id, color } = elem;
        const bg = {
          backgroundColor: color, 
        };
        return (
          <div key={id} className='box' style={bg} onClick={()=>{
            console.log(bg);
            document.querySelector("#container").style.backgroundColor = color;
            document.querySelector("#display").textContent = color;
          }}></div>
        );
      })}
    </>
  );
}
export default List;