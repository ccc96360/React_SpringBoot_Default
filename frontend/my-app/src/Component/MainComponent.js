import React, {Component, useEffect, useState} from "react";
import axios from "axios"
import { withRouter } from "react-router";

function MainComponent(props){
    const [message, setmessage] = useState("초기")

    useEffect(() => {
        axios.get("http://localhost:8080/api/hello")
        .then(res => {
            console.log(res);
            setmessage(res.data.message);            
        })
    }, [])

    return(
        <div>
            Main페이지
            <br/>
            {message}
        </div>
    )
}

export default withRouter(MainComponent)