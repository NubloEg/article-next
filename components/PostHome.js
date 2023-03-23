import style from "../styles/Home.module.css"
import Link from "next/link";

function PostHome({user,title,description,id}){

    const filterData=(n)=>{
        let day=n
        let mounth=['MAY','JUNE','JULY',"AUGUST"]
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
        

        return `${day} ${mounth[i]}`
    }

    return ( <Link href={`/posts/${id}`} className={style.post} >
        <div className={style.post__left} >
            <div className={style.post__data} >{filterData(id)}</div>
            <div className={style.post__user} >{`@user${user}`}</div>
        </div>
        <div className={style.post__container} >
            <div className={style.post__title} >{title}</div>
            <div className={style.post__description} >{description}</div>
        </div>
    </Link>)
}



export default PostHome





