import React , {useState} from "react"
import { useDispatch } from "react-redux"
import { addHouse } from "../../redux/actions"

export default function AddHouse(){
    const[id,setId]=useState(0)
    const[title,setTitle]=useState("")
    const [photos, setPhotos] = useState([])
    const[prix,setPrix]=useState(0)
    const[day,setDay]=useState(0)
    const dispatch=useDispatch()
    
    return(
        <div>
            Add House<br/>
            <label className="col-1 text-center text-info">Id</label> <input type="text" onChange={(ev)=>setId(parseInt(ev.target.value))} /> <br/>
            <label className="col-1 text-center text-info">Title</label> <input type="text" onChange={(ev)=>setTitle(ev.target.value)} /> <br/>
            <label className="col-1 text-center text-info">Prix</label> <input type="text" onChange={(ev)=>setPrix(parseFloat(ev.target.value))} /> <br/>
            <label className="col-1 text-center text-info">Day</label> <input type="text" onChange={(ev)=>setDay(parseInt(ev.target.value))} /> <br/>
            <button className="btn btn-success" onClick={()=>dispatch(addHouse(id,title,photos,prix,day))} >Ajouter</button>
        </div>
    )
}
