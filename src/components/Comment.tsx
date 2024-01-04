import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content:string;
    onDeleteComment: (comment:string)=> void
}

export function Comment({content, onDeleteComment}:CommentProps){
    function  handleDeleteCommment(){
        onDeleteComment(content)//O melhor seria passar o id
    } 
    const [likeCount,setLikeCount]=useState(0);

    function handleLikeComment (){
        setLikeCount(likeCount + 1)

    }

    return(
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/LUCIANOGFORTES02.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='11 de Maio às 12:12h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás </time>

                        </div>
                        <button onClick={handleDeleteCommment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>

                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>

        </div>

    );

}