import {format,formatDistanceToNow} from 'date-fns';
import {ptBR} from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import {Comment} from './Comment'
import { Avatar } from './Avatar';
import { ChangeEvent, FormEvent, InvalidEvent, useState, } from 'react';

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}
interface Content{
    type: string;
    content:string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}


export function Post({author,publishedAt,content}:PostProps){

    const publishedDateFormatTed = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h' ",{
        locale:ptBR,
    })

    //Data de publicação relativa a data atual
    const publishedDateRelativeToNow= formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true
    })

    const [comments,setComments]= useState([
        'Post muito bacana'
    
    ], );
    const [newCommentText,setNewCommentText]=useState('');


    //Armazena os comentários
    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    //Armazena o conteudo da textarea
    function handleNewCommentChange(event : ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);


    }
    function deleteComment(commentToDelete: string){
       const commentsWithoutDeleteOne = comments.filter (comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    }
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório')

    }

    const isNewCommentEmpty = newCommentText.length===0;

    return(
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                    </div>


                   <time title={publishedDateFormatTed} dateTime={publishedAt.toISOString()}>
                       {publishedDateRelativeToNow}
                    </time>

                 
            </header>

            <div className={styles.content}>
            {content.map(line=>{
                if(line.type === 'paragraph'){
                    return <p key={line.content}>{line.content}{line.content}</p>;
                }
                else if(line.type === 'link'){
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
            })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                name='comment'
                placeholder='Deixe seu comentário'
                value={newCommentText}//A textarea vai sempre refletir o valor dessa variável
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
                 
            </form>
            <div className={styles.commentList}>
            {comments.map(comment=>{
                return(
                    <Comment 
                        key={comment} 
                        onDeleteComment={deleteComment} 
                        content={comment}
                    />
                )
            })
            }
            </div>
        </article>
    );
}