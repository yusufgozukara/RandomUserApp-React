import './Card.css';
import emaillogo from '../assets/email.svg';
import phonelogo from '../assets/phone.svg';
import adreslogo from '../assets/location.svg';


const Card = () => {
  return (
    <div className="bigContainer">

    <div className='cardContainer'>
        <div><img src="" alt="" />img</div>
        <div>name</div>
        <div> <img style={{width:'40px'}} src={emaillogo} alt="" /></div>
        <div>email</div>
        <div> <img style={{width:'40px'}} src={phonelogo} alt="" /></div>
        <div>phone</div>
        <div> <img style={{width:'40px'}} src={adreslogo} alt="" /></div>
        <div>adres</div>
        <div className='block'>yas</div>
        <div className='block'>register</div>
    </div>
    <button className='btn'>Random User</button>
    </div>
  )
}

export default Card