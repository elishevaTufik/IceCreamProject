import MessageClient from "./messageClient";
import useAuth from "../../hooks/useAuth";
import Galery from "../Sweets/Galery";

function Messege() {
  const {_id,username, permission, name, email, phone, isAdmin, isClient,isWorker,isShiftManager}=useAuth()
    return (
      <div className="Messege">
        Messege
        <br/>
        {/* {permission=='client'?<MessageClient />:<Galery/>} */}
        {permission=='client'?<MessageClient id={_id}/>:<Galery/>}
      </div>
    );
  }
  
  export default Messege;
