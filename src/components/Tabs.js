import React , {useState} from "react";

function Tabs({tabs})
{
    const[tab,setTab] = useState(null)
    function handleClick(index)
    {
        if(index){
        setTab(t.content)
        }
    }

    return(
        <>
        <ul>
            {
            tabs.map((t,i)=>(
          <li key={i} onClick={() => handleClick(i)}>{t.title}</li>
            ))
}
        </ul>
            <p>This is the content for {tab}</p>
        </>
    )


}
export default Tabs