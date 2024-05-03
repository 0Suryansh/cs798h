import React from 'react'
import MovieBox from '../components/MovieBox/MoviewBox.jsx'
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Link } from 'react-router-dom';
import './button-24.css'
const WatchParty = () => {
    return (
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
            <div style={{ width: "66%" }}>
                <MovieBox />
            </div>
            <div style={{ width: "34%" }}>
                <div style={{borderBottom: '3px solid rgba(255, 255, 255, 0.1)'}}>
                    <div style={{ display: "flex", width: "100%", backgroundColor: "#202125" }}>
                        <div style={{ fontSize: 28, width: "50%", padding: 8, textAlign: "center", cursor: "pointer", borderBottom: '6px solid rgba(255, 255, 255, 0.5)' }}>Invite</div>
                        <div style={{ fontSize: 28, width: "50%", padding: 8, textAlign: "center", cursor: "pointer" }}>
                            <Link to="/chats">Chat</Link>    
                        </div>
                    </div>
                    <div style={{ padding: 16 }}>
                        <p style={{ fontSize: 20, fontWeight: 600 }}>Invite your friends</p>
                        <p style={{ fontSize: 16 }}>
                            Share the link with your friends and watch and enjoy together with them 🍿🍿.
                        </p>
                        <div style={{ marginTop: 16, fontSize: 20, fontWeight: 600 }}>Link:</div>
                        <span>https://xyz.abc</span>
                        <div style={{ marginTop: 16, textAlign: "center" }}>
                            <Button variant="outlined" startIcon={<ContentCopyIcon />} sx={{
                                marginRight: 6
                            }}>
                                Copy Link
                            </Button>
                            <Button variant="contained" startIcon={<ShareIcon />}>
                                Share
                            </Button>
                        </div>
                        <div style={{marginTop: 16, fontSize: 20, fontWeight: 600}}>
                            <p>Search by username</p>
                            <TextField
                                id="input-with-icon-textfield"
                                label="Search"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonSearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                            />
                            <Button variant="contained" startIcon={<PersonAddAltOutlinedIcon />} sx={{marginLeft: 4}}>
                                Add
                            </Button>
                        </div>
                    </div>
                </div>
                <div style={{padding: 16}}>
                    <h3>Watch Party</h3>
                    <p>3 persons joined the watch party.</p>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop: 12}}>
                        <span style={{fontSize: 16, fontWeight: 600}}>User</span>
                        <span style={{fontSize: 16, fontWeight: 600}}>Accept request</span>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop: 12, alignItems:"center"}}>
                        <span>arjun211</span>
                        <span>
                            <CancelOutlinedIcon sx={{marginRight: 4}}/>
                            <CheckCircleOutlinedIcon />
                        </span>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop: 12, alignItems:"center"}}>
                        <span>arjun211</span>
                        <span>
                            <CancelOutlinedIcon sx={{marginRight: 4}}/>
                            <CheckCircleOutlinedIcon />
                        </span>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop: 12, alignItems:"center"}}>
                        <span>arjun211</span>
                        <span>
                            <CancelOutlinedIcon sx={{marginRight: 4}}/>
                            <CheckCircleOutlinedIcon />
                        </span>
                    </div>

                    <div style={{marginTop: 16, textAlign:"center"}}>
                        <button className="button-24" role="button">End Watch Party</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default WatchParty
