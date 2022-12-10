import Nav from "./Nav"

export default function Header(props){
    return(
        <header>
            <h1 id="site-title">Sartre's List</h1>
            <h2 class="sub-heading">Better-Dressed People</h2>
            <Nav />
        </header>
    )
}