import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


const NewImage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        forGet()
    }, [])

    const forGet = async () => {
        try {
            const data = await axios.get('http://localhost:8084/')
            setData(data.data)
            console.log(data.data);
        } catch (error) {

        }
    }
    return (
        <>
            {
                data.map((data) => {
                    return (
                        <div key={data._id}>
                            <img src={`http://localhost:8084/${data.File}`} alt="" />
                        </div>
                    )
                })
            }
        </>
    )
}

export default NewImage