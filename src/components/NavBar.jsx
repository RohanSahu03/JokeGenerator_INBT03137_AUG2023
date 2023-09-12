import React from 'react'
import style from '../css/navbar.module.css'
import { FaLaughBeam } from 'react-icons/fa'

function NavBar() {
  return (
    <div>
          <section id={style.nav}>
              <article>
                  <FaLaughBeam style={{marginRight:"30px"}} id={style.smiley}/>
                <h6>Joke Generator</h6>
          <FaLaughBeam style={{ marginLeft: "30px" }} id={style.smiley} />
              </article>

          </section>
    </div>
  )
}

export default NavBar