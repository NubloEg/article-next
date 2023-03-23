import Link from "next/link"
import style from "../../styles/Post.module.css"

export default function Post({userId,id,title,body}){

    const filterData=(n)=>{
        let day=n
        let mounth=['may','june','july',"august"]
        let i=0;
        if (n>31 &&n<=61) {
            day-=31
            i=1
            
        }else if(n>61 &&n<=92){
            day-=61
            i=2
            
        }else if(n>92){
            day-=92
            i=3
            
        }
        

        return `on ${day} ${mounth[i]} 2023`
    }
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
            <div className={style.main__data}>{filterData(id)}</div>
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




