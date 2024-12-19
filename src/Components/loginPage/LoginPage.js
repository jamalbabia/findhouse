import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginPage.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function LoginPage(){
    const login = [{continueWith:"Continue with Facebook" , icon:"bi bi-facebook"},
                    {continueWith:"Continue with Google", icon:"bi bi-google"},
                    {continueWith:"Continue with Apple", icon:"bi bi-apple"},
                    {continueWith:"Continue with Email", icon:"bi bi-envelope"}]
    return (
    <div className="card col-5 mx-auto my-5 border-2
     rounded-3 bg-light">
            <div className='card-header text-center'>
                Log in or sign up
            </div>
        <div className='CartLogin p-5' >
            <h4>Welcome to FindHouse</h4>
            <div class="form-floating">
            <select className='form-select' >
                <option selected>Select your Contry</option>
                <option>Morocco (+212)</option>
                </select><br/>
            <label>Contry / Region</label>
            </div>
            <div className='input-group mb-3'>
            <i class="input-group-text bi bi-phone"></i>
            <input className='form-control' type="text" placeholder="Phone number"/>
            </div>
            <h6>We’ll call or text you to confirm your number. </h6>
            <div className="d-grid gap-2">
                <button className='btn btn-danger rounded-3' >Continue</button><br/>
            </div>
            <span className='or d-grid  text-center '>Or</span>
            <div className='grid gap-3'>
                {login.map((web,index)=>{return(
                <div className='input-group mb-3' key={index}>
                    <div className="form-floating d-grid gap-2">
                    <button className='btn btn-primary   rounded-3' >
                    <i className={web.icon} ></i>{web.continueWith}
                        </button> </div> <br/></div>)})}

            </div>
        </div>
        <div className="d-grid gap-2">
            <button className='btn btn-primary form-control  rounded-3' >
                <i className="bi bi-facebook" ></i>
            </button> </div>
    </div>
    )       
}