import Link from "next/link"
import style from "../../styles/Post.module.css"

export default function Post({userId,id,title,body}){
    return<>
         <div className={style.wrapper}>
         <Link className={style.navigation} href="/">
         <nav >
            <div className={style.navigation__container}>                
                <img className={`${style.logo} ${style.back}`} src="/back.svg" alt="logo"/>
            </div>
        </nav>
         </Link>
        
       <main className={style.main}>
        <div className={style.main__container}>
            <div className={style.main__title}>{title}</div>
            <div className={style.main__user}>{`written by @user${userId} `}</div>
            <div className={style.main__data}>{`on ${id} may 2023`}</div>
            <div className={style.main__description}>{`${body}  `}</div>
        </div>
    </main>
    </div>
    </>
}

export async function getServerSideProps(context){

    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post=await response.json()

    return{
        props:{...post},
    }
}




