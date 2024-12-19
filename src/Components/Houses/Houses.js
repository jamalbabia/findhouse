import 'bootstrap/dist/css/bootstrap.min.css';
import'./Houses.css'
import React, { useEffect,useState } from "react";  
import { useDispatch, useSelector } from "react-redux";
import { deleteHouse, decrementerDay, incrementerDay, viderHouse,viewHouse,hideHouse, fetchHouse } from '../../redux/actions';
import AddHouse from '../AddHouse/AddHouse';
export default function Home() {
    const myHouses = useSelector(state => state.houses);
    const session = useSelector(state => state.user);
    const viewedHouse = useSelector(state => state.viewedHouse);
    const[id,setId]=useState(0)
    const[title,setTitle]=useState("")
    const [photos, setPhotos] = useState([])
    const[prix,setPrix]=useState(0)
    const[day,setDay]=useState(0)
    const dispatch=useDispatch()

    const picsrc="/houses/"

    useEffect(() => {
        dispatch(fetchHouse());
    }, []);

    return (
        <div className='containerx mx-5'>
                  <div className='row row-cols-md-4 g-4' >
            {myHouses.map((house, index) => (
                <div className='col  mb-3' style={{cursor:'pointer'}} onClick={()=>dispatch(viewHouse(id,title,photos,prix,day))}>
                <div className="cards " key={index}>
                    <div className='carousel slide'>
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="1" class="active"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators"></button>
                        </div>
                        <div className='carousel-inner'>
                            <div className='carousel-item d-block w-100'>
                                <img src={picsrc+house.photo} className="rounded-4" width="100%" height="270"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev">
                          <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next">
                          <span class="carousel-control-next-icon"></span>
                        </button>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{house.location}</h5>
                        <p className="card-text">
                            Mountain views <br/>{house.day} nights.
                        </p>
                        <a href="#" className="card-link ">
                            MAD{house.prix} total before taxes
                        </a>
                        <i className={house.icon}>{house.detail}</i>
                    </div>
                </div>
                </div>
            ))}
        </div>                
        </div>
      );
}

