import React from 'react'
import MovieBox from '../components/MovieBox/MoviewBox.jsx'
import { Link } from 'react-router-dom'

import './WatchPartyChat.css'

const WatchParty = () => {
    return (
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
            <div style={{ width: "66%" }}>
                <MovieBox />
            </div>
            <div style={{ width: "34%" }}>
                <div style={{ borderBottom: '3px solid rgba(255, 255, 255, 0.1)' }}>
                    <div style={{ display: "flex", width: "100%", backgroundColor: "#202125" }}>
                        <div style={{ fontSize: 28, width: "50%", padding: 8, textAlign: "center", cursor: "pointer" }}>
                            <Link to="/">Invite</Link>
                            </div>
                        <div style={{ fontSize: 28, width: "50%", padding: 8, textAlign: "center", cursor: "pointer", borderBottom: '6px solid rgba(255, 255, 255, 0.5)' }}>Chat</div>
                    </div>
                </div>
                <div style={{ padding: 0 }}>
                    <div>
                        <section className="msger">
                            <main className="msger-chat">
                                <div className="msg left-msg">

                                    <div className="msg-bubble">
                                        <div className="msg-info">
                                            <div className="msg-info-name">user A</div>
                                            <div className="msg-info-time">12:45</div>
                                        </div>

                                        <div className="msg-text">
                                            Hi, what you guys want to watch ? 😄
                                        </div>
                                    </div>
                                </div>

                                <div className="msg right-msg">

                                    <div className="msg-bubble">
                                        <div className="msg-info">
                                            <div className="msg-info-name">user B</div>
                                            <div className="msg-info-time">12:46</div>
                                        </div>

                                        <div className="msg-text">
                                            Anything involving lot of action and thrill!
                                        </div>
                                    </div>
                                </div>

                                <div className="msg left-msg">

                                    <div className="msg-bubble">
                                        <div className="msg-info">
                                            <div className="msg-info-name">user A</div>
                                            <div className="msg-info-time">12:45</div>
                                        </div>

                                        <div className="msg-text">
                                            Alright, here we go!
                                        </div>
                                    </div>
                                </div>
                            </main>

                            <form className="msger-inputarea">
                                <input type="text" className="msger-input" placeholder="Enter your message..." />
                                <button type="submit" className="msger-send-btn">Send</button>
                            </form>
                        </section>

                    </div>
                    <div style={{ display: "flex", height: "30vh" }}>
                        <div style={{ width: "50%", position: "relative" }}>
                            <div style={{ position: "absolute", top: 2, left: 2, zIndex: 5, background: "#202125", padding: "5px", borderRadius: 8 }}>
                                User A
                            </div>
                            <img src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="" style={{ width: "100%", height: "30vh" }} />
                        </div>

                        <div style={{ width: "50%" }}>
                            <div style={{ backgroundColor: "orange", height: "15vh", position: "relative" }}>
                                <div style={{ position: "absolute", top: 2, left: 2, zIndex: 5, background: "#202125", padding: "5px", borderRadius: 8 }}>
                                    User B
                                </div>
                                <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="" style={{ width: "100%", height: "15vh" }} />
                            </div>
                            <div style={{ backgroundColor: "pink", height: "15vh", position: "relative" }}>
                                <div style={{ position: "absolute", top: 2, left: 2, zIndex: 5, background: "#202125", padding: "5px", borderRadius: 8 }}>
                                    User C
                                </div>
                                <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="" style={{ width: "100%", height: "15vh" }} />
                            </div>
                        </div>
                    </div>
                    <div style={{ position: "fixed", bottom: 0 }}>
                        <img src="https://i.ibb.co/CwBrVYR/image.png" alt="" style={{ width: "100%" }} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WatchParty
