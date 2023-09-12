import React, { useEffect, useState } from 'react'
import style from '../css/jokeGenerator.module.css'
import axios from 'axios'
import { BiMenu } from 'react-icons/bi'
function JokeGenerator() {
    const [joke, setJoke] = useState({})
    const [isActive,setIsActive]=useState(false)
   function showMenu(){
       setIsActive(current => !current)
   }
    
    async function jokeFetcher(){

        await axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then(resp=>{
        setJoke(resp.data)
        console.log(resp);
    })
    .catch(err=>alert(err))
}

    async function getCategorywise(category) {

        await axios.get(`https://v2.jokeapi.dev/joke/${category}`)
            .then(resp => {
                setJoke(resp.data)
                console.log(resp);
            })
            .catch(err => alert(err))
            
    }


  return (
   <>
   <section className={style.section}>
    <article className={style.article}>
                  
        <div className={style.quote}>
            <p>Get your joke in one click.</p>
        </div>
        <div className={style.jokeBody}>

                      <div className={style.categoryIcon}>
                          <BiMenu style={{float:'left',marginLeft:'4px',fontSize:'25px'}} onClick={showMenu}/>
                        </div>
                     
            <div id={style.category}>
                          <div className={style.categorybtn}>
                            Categories
                          </div>
                          <div className={style.listOfCategory} style={{
                            display:isActive? 'block':''
                          }}>
                             <ul>
                                  <li onClick={() => { getCategorywise('programming') }}>Programming</li>
                                  <li onClick={() => { getCategorywise('Miscellaneous') }}>Miscellaneous</li>
                                  <li onClick={() => { getCategorywise('Christmas') }}>Christmas</li>
                                  <li onClick={() => { getCategorywise('Spooky') }}>Spooky</li>
                                  <li onClick={() => { getCategorywise('Pun') }}>Pun</li>
                             </ul>
                          </div>
                         
            </div>
            <div id={style.bodyCard}>
                          
                   {
                    joke.type === 'twopart' ?(
                                  <div className={style.card}>
                                      <p>{joke.setup}</p> 
                                      <p>{joke.delivery}</p> 
                                      <p>category :{joke.category}</p>
                                      
                                  </div>
                    ):(
                                      <div className={style.card}>
                                          <p>{joke.joke}</p>
                                          <p>category :{joke.category}</p>
                                      </div>
                    )
                    
                   }
                          <button onClick={jokeFetcher} id={style.btn}>Generate</button>  
            </div>

        </div>
    </article>

   </section>
   </>
  )
}

export default JokeGenerator