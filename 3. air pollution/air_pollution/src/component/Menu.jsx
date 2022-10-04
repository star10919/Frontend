import { useEffect, useState } from 'react';
import { TiThMenuOutline } from 'react-icons/ti';

export default function Menu() {

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    console.log(1111111111)
  }, [])

  useEffect(() => {
    document.querySelector(".menu")
  }, [menu])

  return (
    <>
      <div onClick={() => {setMenu(!menu)}} style={{fontSize : '25', display : 'inline-block', backgroundColor: 'green'}}><TiThMenuOutline /></div>
      {menu ? <div style={{display: 'inline-block'}}>드롭다운 True</div> : <div style={{display: 'inline-block'}}>드롭다운 false</div>}
    </>
  )
}