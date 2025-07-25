import React from 'react'

const Javascript = () => {
    let name = "sunil"
    let age = 22
    let qualification = "B.COM"
    return (
        <>
            <div>
                <h1>Welcome to JSX</h1>
            </div>
            <hr />
            <div>
                <h1>My name is {name}</h1>
                <h1>My age is {age}</h1>
                <h1>My qualification is {qualification}</h1>
            </div>
            <hr />
        </>
    )
}

export default Javascript
