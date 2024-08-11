import { NavLink, Outlet } from 'react-router-dom'


export default function HelpLayout() {
    return (
<div className="help-layout">

<h1>Website Help</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumenda, itaque</p>

<nav>
<NavLink to="faq">View the FAQ</NavLink>
<NavLink to="contact">Contact Us</NavLink>
</nav>

<Outlet/>

</div>
        
    )
}