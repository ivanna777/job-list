import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';

export default function JobDetailed(){
    const {id} = useParams()
    console.log(id)
    const [jobList, setJobList] = useState([])

    useEffect(()=>{
        axios.get('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu').then((response)=>{
        setJobList(response.data)
        console.log(response.data);
    })
    }, [])

    const jobDetails = jobList.find(job => job.id === id)
    console.log(jobDetails.name)

    return(
        <div>
            <div>
                <h1>Job Details</h1>
                <div>
                    <span><svg></svg>Save to my list</span>
                    <span><svg></svg>Share</span>
                </div>
            </div>
            <button>Apply now</button>




            {/* <button className="back-button" type="button" onClick={() => this.props.history.push(backPath)}>Go back</button> */}
        </div>
    )
}