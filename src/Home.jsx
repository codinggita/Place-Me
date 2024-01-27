import { useState } from 'react'
import './Home.css'
import gifhome from './assets/homegif.mp4'
// import graph from './graph.jsx'

function home() {
    // const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='landingPage'>
        <div className='Home'>
          <div className='righthome'>
          <div className='headname'>
            <p>Placement Tracker</p>
          </div>
          <div className='headbody'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Quae laborum reprehenderit commodi tempore iusto nesciunt quis molestias, 
             unde omnis dolor error earum sunt quia nostrum, dolores repellat ducimus inventore ea.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quos natus fugiat dolor, 
             veniam ducimus architecto repudiandae, ullam minima eum veritatis. Magnam quos iste qui sapiente
              commodi nostrum cupiditate sint nemo harum reprehenderit, quisquam aspernatur veritatis delectus
               fugit mollitia minima ex quibusdam unde magni enim odio dolores dolor tenetur! Nesciunt, nemo 
               quidem vero rerum vitae molestias aperiam corrupti voluptas obcaecati tenetur numquam ea quod 
               
          </div>
          <div className='headlink'>
          
            <a href="#" previewlistener="true">
				<span>See your Achievement</span> 
				<svg height="10px" viewBox="0 0 13 10" width="13px"> <path d="M1,5 L11,5"></path> <polyline points="8 1 12 5 8 9"></polyline> </svg> 
			</a>
            <div className='circ'>

            </div>
          
            
          </div>
          </div>
          <div className='lefthome'>
          <video autoplay="" loop="" muted="" playsinline="" id="solution-banner-video">
					<source src={gifhome} type="video/mp4"></source>
				</video>
        </div>
        </div>


        <div className='MidPage'>

        <div className='rightshadow'>

        </div>

        <div className='MidPageCont'>
        <span>
        Placement Tracker gives you three Major Features:
        </span>
        </div>
        <div className='box'>
          <div>
          <span>Feature 1</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolorem laudantium doloremque sunt sint totam sed sapiente deleniti explicabo culpa tempora aspernatur tempore non delectus ut perspiciatis saepe placeat nesciunt. Voluptate deserunt ullam autem!</p>
          </div>
          <div>
          <span>Feature 2</span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, facilis? Sequi dicta natus facilis soluta dolorum molestias ullam aspernatur, maiores laboriosam. Itaque magnam nisi repellat repudiandae maxime. Ducimus error, voluptatem pariatur harum iste quo.</p>
          </div>
          <div>
          <span>Feature 3</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, earum? Fugiat eos ad facere eum nihil officia modi cumque? Voluptates corrupti at neque eaque a velit laboriosam vero numquam, doloribus, omnis architecto maiores quo!</p>
          </div>
        </div>
        
        </div>
        <div className='trackpage'>
          <div className='trackpagecont'>
          <p>Your Progress !</p>
          <div id='graph1'>
            {/* <graph>

            </graph> */}
          </div>
          </div>
        </div>
        </div>
      </>
    )
  }
  
  export default home