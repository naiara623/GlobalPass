import Modal from '../components/Modal';
import './Navbar.css'

function Navbar() {
  return (
    <div>
       <div className='inicio-navebar'>
  <div className="inicio-shine">GLOBAL PASS</div>
  <div className='inicio-divisão'></div>
  <div className='inicio-div-modal'>
    <Modal/>
   </div>
      </div>
    </div>
  )
}

export default Navbar