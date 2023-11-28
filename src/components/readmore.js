"use client"
import React, {useState, useEffect} from "react"
export function ReadMore({fullparagraph}){
    const [text, setText] = useState('');
    const [more, setmore] = useState(true);
    useState(()=>{
        setText(fullparagraph.substring(0, 300))
    }

    )
    const full = ()=>{
        setmore(false)
        setText(fullparagraph)
    }
    const less =  ()=>{        
        setmore(true)
        setText(fullparagraph.substring(0, 300))

    }
    return(
        <div>
            <p>
                {text}
                {more?(
                    <a onClick={full} className=" cursor-pointer">
                         Read more
                    </a>
                ):(
                    <a onClick={less} className=" cursor-pointer">
                         Read Less
                    </a>
                )}
            </p>
        </div>
    )
}