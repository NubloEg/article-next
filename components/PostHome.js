import style from "../styles/Home.module.css"
import Link from "next/link";

function PostHome({user,title,description,id}){

    return ( <Link href={`/posts/${id}`} className={style.post} >
        <div className={style.post__left} >
            <div className={style.post__data} >27 MAY</div>
            <div className={style.post__user} >{`@user${user}`}</div>
        </div>
        <div className={style.post__container} >
            <div className={style.post__title} >{title}</div>
            <div className={style.post__description} >{description}</div>
        </div>
    </Link>)
}



export default PostHome





