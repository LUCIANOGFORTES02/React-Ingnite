import {  } from 'react'
import { Post } from './components/Post'

import { Header } from './components/Header'
import {Sidebar} from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

//author {avartarURL:"" ,name:"",role:"" }
//publishedAt: Date
//Content: String

const posts=[
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/LUCIANOGFORTES02.png',
      name: 'Luciano Guimarães Fortes',
      role:'FullStack'
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋,'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt:new Date("2023-01-01T12:34:56")
  },
  {
  id:2,
  author:{
    avatarUrl: 'https://github.com/maykbrito.png',
    name: 'Mayk Brito',
    role:'FullStack'
  },
  content:[
    {type: 'paragraph', content:'Fala galeraa 👋,'},
    {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content:'jane.design/doctorcare'},
  ],
  publishedAt: new Date("2023-01-01T12:34:56")
}
]





function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {posts.map(post=>{
          return(
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />  
          )
        })}
                
        </main>
      </div>
    </div>
    )
}

export default App
