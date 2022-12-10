import "./styles.css";
import blogData from "./data";
import Main from "./components/Main"
import Header from "./components/Hdeader";
import Footer from "./components/Footer";

const blogPost = blogData.map((ele, idx)=>{
    return(
        <Main 
            key={idx}
            date={ele.date}
            title={ele.title}
            img={ele.img}
            blog={ele.blog}
        />
    )
})

export default function App () {
    return (
      <div className='...'>
        <Header />
        {blogPost}
        <Footer />
      </div>
    )
  }
  