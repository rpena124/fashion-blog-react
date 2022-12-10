

export default function Main(props){
    return(
        <main>
            <article>
                <time >{props.date}</time>
                <h2 className="blog-title">{props.title}</h2>
                <img src={props.img} alt="" />
                <p>{props.blog}</p>
                <a href="..." class="continue-link">Continue ...</a>
            </article>
        </main>
    )
}