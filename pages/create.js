import style from "@/styles/Create.module.css";
import Link from "next/link";
import React from "react";


export default function Create(){

    const [newTitle,setTitle]=React.useState('')
    const [newBody,setBody]=React.useState('')



    const post=()=>{

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: `${newTitle}`,
                body: `${newBody}`,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        alert(`${newTitle},${newBody}`)
        setTitle('')
        setBody('')

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
                <form className={style.main__container}  autoComplete='off'>

                        <h1 className={style.h1}>Создание поста</h1>
                        <input value={newTitle} onChange={e =>setTitle(e.target.value) } placeholder={'Название поста'} className={style.title} type={'text'} required={false}/>
                        <textarea value={newBody} onChange={e => setBody(e.target.value)} placeholder={'Описание'} className={style.description} type={'text'} required={false}/>
                        <input onClick={post} className={style.btn} type={'button'} value={'Опубликовать'}/>

                </form>
            </main>
        </div>

    </>

}



