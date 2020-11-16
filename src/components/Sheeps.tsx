import React from 'react'
import '../styles/style.css';

function Sheeps(props: any) {
    const {name, gendar, brandable } = props.item;
    return (
        <>
            <tr className={brandable ? "brandSheep": "unbrandSheep"}>
                <td>{name}</td>
                <td>{gendar}</td>
            </tr>
        </>
    )
}

export default Sheeps
