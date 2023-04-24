import React from 'react';
import Tech_Blog from './pictures/Tech Blog app.jpg'
import NeoPlants from './pictures/Neo Plants.jpg'
import movieBattle from './pictures/Movie_Battle.jpg'
import noteTaker from './pictures/Note_Taker.jpg'
import scheduler from './pictures/Work-day-Scheduler.jpg'

const styles = {
    card: {
        height: '550px'
    },
    pics: {
        height: '300px',
        width: '90%',
        objectFit: 'contain'
    }
}

function Projects() {
    return (
        <div id='work' className='row my-5'>
            <h2 className='text-center' >Portfolio</h2>
            <div className='d-flex flex-wrap justify-content-center p-5'>
                <div className='col-12 col-md-6 col-lg-4 p-4'>                    
                    <div className="card  "  >
                        <div className="card-body" style={styles.card}>
                            <h5 className="card-title">NeoPlants</h5>
                            <p className="card-text">An interactive game app where you can grow you plant on the screen</p>
                            <img className='shadow m-3' style={styles.pics} src={NeoPlants} alt='NeoPlant game' />
                            <a href="https://grey-stones.herokuapp.com/" className="card-link">Deployed link</a>
                            <a href="https://github.com/alexander1262/NeoPlants-Interactive-Web-Game" class="card-link">GitHub link</a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 p-4'>                    
                    <div className="card d-flex ">
                        <div className="card-body" style={styles.card}>
                            <h5 className="card-title">Movie Battle</h5>
                            <p className="card-text">Movie Battle is a fun app that lets two people play a trivia game to decide what movie to watch.</p>
                            <img className='shadow m-3 object-fit-contain' style={styles.pics} src={movieBattle} alt='Tech Blog app' />
                            <a href="https://franklynsuriel.github.io/movie-battle/" className="card-link">Deployed link</a>
                            <a href="https://github.com/FranklynSuriel/movie-battle" className="card-link">GitHub link</a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 p-4'>                    
                    <div className="card d-flex">
                        <div className="card-body" style={styles.card}>
                            <h5 className="card-title">Note Taker</h5>
                            <p className="card-text">A note taker application to keep your notes save and easy organized.</p>
                            <img className='shadow m-3 object-fit-contain' style={styles.pics} src={noteTaker} alt='Tech Blog app' />
                            <a href="https://thawing-everglades-51813.herokuapp.com/" className="card-link">Deployed link</a>
                            <a href="https://github.com/FranklynSuriel/Note_Taker" className="card-link">GitHub link</a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 p-4'>                    
                    <div className="card d-flex">
                        <div className="card-body" style={styles.card}>
                            <h5 className="card-title">Tech_Blog</h5>
                            <p className="card-text">A CMS-style blog where you can publish articles, blog post, comment other user post, update or delete your post and more.</p>
                            <img className='shadow m-3 object-fit-contain' style={styles.pics} src={Tech_Blog} alt='Tech Blog app' />
                            <a href="https://glacial-headland-83578.herokuapp.com/" className="card-link">Deployed link</a>
                            <a href="https://github.com/FranklynSuriel/Tech_Blog" className="card-link">GitHub link</a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 p-4'>                    
                    <div className="card d-flex">
                        <div className="card-body" style={styles.card}>
                            <h5 className="card-title">Work_Day_Scheduler</h5>
                            <p className="card-text">Simple calendar application that allows a user to save events for each hour of the day.</p>
                            <img className='shadow m-3 object-fit-contain' style={styles.pics} src={scheduler} alt='Tech Blog app' />
                            <a href="https://franklynsuriel.github.io/Work_Day_Scheduler/" className="card-link">Deployed link</a>
                            <a href="https://github.com/FranklynSuriel/Work_Day_Scheduler" className="card-link">GitHub link</a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 p-4'>                    
                    <div className="card d-flex">
                        <div className="card-body" style={styles.card}>
                            <h5 className="card-title">Password Generator</h5>
                            <p className="card-text">A CMS-style blog where you can publish articles, blog post, comment other user post, update or delete your post and more.</p>
                            <img className='shadow m-3 object-fit-contain' style={styles.pics} src={Tech_Blog} alt='Tech Blog app' />
                            <a href="https://franklynsuriel.github.io/Password_Generator/" className="card-link">Deployed link</a>
                            <a href="https://github.com/FranklynSuriel/Password_Generator" className="card-link">GitHub link</a>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
};

export default Projects;