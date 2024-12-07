import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { withAuth } from '../utils/withAuth';
import { IconButton,Button,TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import "../styles/ghar.css"

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
const {addToUserHistory}=useContext(AuthContext)

  

    let handleJoinVideoCall = async () => {
   
        navigate(`/${meetingCode}`)
    }

    return (
        <div className='mainbox'>

            <div className="navBar">

                <div>

                    <h2 className='heading'>Connect</h2>
                </div>

                <div >
                  

                    <Button className='logout' onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}>
                        Logout
                    </Button>
                </div>


            </div>


            <div className="maincontainer">
                <div className="left">
                  
                        <h2 className='connect'>Connect with your World,anytime,anywhere.......</h2>

                      

                           <div className="info">
                          <input type="text"  onChange={e => setMeetingCode(e.target.value)} id="outlined-basic"  placeholder='Enter Meeting Code'/>
                            <Button className='join' onClick={handleJoinVideoCall} variant='contained' >Join</Button>

                           </div>
                        </div>
                   
               
                <div className='right'>
                   <img className='image' src="logo3 (1).png" alt="" />
                </div>
                </div>
        </div>
    )
}


export default withAuth(HomeComponent)