import { useRouteError,Link } from 'react-router-dom'

export default function CareerError() {

const error = useRouteError()

return(

<div className="career-error">
<h1>Error</h1>
<p>{ error.message }</p>
<Link to="/">Go back to homepage</Link>
</div>


)


}