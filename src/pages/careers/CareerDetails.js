import { useParams, useLoaderData } from "react-router-dom"

export default function CareerDetails() {

    const { id } = useParams()

    const careerDetails = useLoaderData()

return(

    <div className="career-details">

    <h2>Career Details for { careerDetails.title }</h2>
<p>Starting Price: { careerDetails.salary }</p>
<p>Location: { careerDetails.location }</p>

    </div>

)

}




//Loader Function


export const careerDetailsLoader = async( { params } )=> {

const { id } = params

const res = await fetch ('http://localhost:8000/careers/' + id)

if(!res.ok) {

    throw Error('Data cannot be fetched')
}


return res.json()


}