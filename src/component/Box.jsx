import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Box.css';

export default function Box() {
    const [background, setBackground] = useState('white');
    const dispatch = useDispatch();

    let className;
    if (background === 'white') {
        className = " white";
    } else if (background === 'black') {
        className = " black";
    }

    

    function changeColor() {
        if (background === 'white') {
            setBackground('black');
            dispatch({type: "ADD"});
        } else {
            setBackground('white');
            dispatch({type: "MINUS"});
        }
    }

    return (<div className={"box" + className}
        onClick={changeColor}>
    </div>);
}