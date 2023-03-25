import Link from "next/link"
import style from "../styles/Home.module.css"
import PostHome from "../components/PostHome.js"
import React from "react";

export default function Home(posts){

    const [hidden,setHidden]=React.useState(false)
    const [value,setValue]=React.useState('')

    const filterPost=posts.posts.filter(post=>{
        return post.title.toLowerCase().includes(value.toLowerCase())
    })

    const toggleHidden=()=>{
        setHidden(!hidden)
        setValue('')
    }

    return<>
         <div className={style.wrapper}>
        <nav className={style.navigation}>
            <div className={style.navigation__container}>
                <div className={`${style.logo} `}>
                    <div onClick={toggleHidden} className={` ${style.search}`}>
                        <img className={` ${style.img}`}  src="/search.svg" alt="search"/>
                        <div>Поиск</div>
                    </div>
                    <input onChange={e => setValue(e.target.value)} value={value} className={hidden?`${style.search__input} ${style.search__active}`:style.search__input} placeholder={'Поиск...'}/>
                </div>
                <Link className={`${style.logo}`} href={"/"}>
                    <img className={style.img}  src="/logo.png" alt="logo"/>

                </Link>
                <Link className={`${style.logo} `} href={"/create"}>
                   <div className={`${style.create}`}>  
                   <img className={`${style.img}`}  src="/add_circle.svg" alt="create"/>
                    <div> Создать</div></div>
                 
                </Link>
            </div>
        </nav>
        <main className={style.main}>
            <div className={style.articles}>
                {
                    filterPost.map((el,i)=><PostHome id={el.id} user={el.userId} title={el.title} description={el.body} key={i}/>)
                }
            </div>
        </main>
    </div>
    </>
}
export async function getStaticProps(context){
    const response=await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts=await response.json()

    return{
        props:{posts},
    }
}