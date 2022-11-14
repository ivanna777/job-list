import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export default function JobList(){
    const [jobList, setJobList] = useState([]);

    const photo = "https://picsum.photos/200/300?random=1";
useEffect(()=> {
    axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu').then((response)=>{
        setJobList(response.data)
        // console.log(response.data);
    })
}, [])
    return(
        <div>
            <h1>JobList</h1>
            <ul>
                {jobList.map(({title,id, name, updatedAt, createdAt })=>(
                    <li key={id}>
                        <img src={photo} alt='pictures'/>
                        <div>
                            <NavLink to={ `/detailed/${id}`}>{title}</NavLink>
                        <span>Department name</span>
                        <p>{name}</p>
                        
                        </div>
                        <div>
                            <p>range</p>
                            <p>Posted {createdAt} days ago</p>
                        </div>
                        
                    </li>
))}
            </ul>           

        </div>
    )
}

