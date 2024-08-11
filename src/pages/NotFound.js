import { Link } from 'react-router-dom'


export default function NotFound() {

return(
<div className="not-found">

    <h1>Page not found</h1>
    <p>Please go back to the <Link to="/">Hompage</Link> </p>
</div>

)


}