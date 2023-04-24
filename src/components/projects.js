import React from 'react';
import Tech_Blog from './pictures/Tech Blog app.jpg'

const styles = {
    pics: {
        height: '300px',
        width: '400px'
    }
}

function Projects() {
    return (
        <div id='work' className='row pb-5'>
            <h2 className='text-center' >My Projects</h2>
            <div className='col-4 d-flex'>                
                <a href="https://glacial-headland-83578.herokuapp.com/home">
                    <h2>Tech Blog</h2>
                    <img style={styles.pics} src={Tech_Blog} alt='Tech Blog app' />
                </a>
            </div>
            <div className='col-4 d-flex'>                
                <a href="https://glacial-headland-83578.herokuapp.com/home">
                    <h2>Tech Blog</h2>
                    <img style={styles.pics} src={Tech_Blog} alt='Tech Blog app' />
                </a>
            </div>
            <div className='col-4 d-flex'>                
                <a href="https://glacial-headland-83578.herokuapp.com/home">
                    <h2>Tech Blog</h2>
                    <img style={styles.pics} src={Tech_Blog} alt='Tech Blog app' />
                </a>
            </div>
            <div className='col-4 d-flex'>                
                <a href="https://glacial-headland-83578.herokuapp.com/home">
                    <h2>Tech Blog</h2>
                    <img style={styles.pics} src={Tech_Blog} alt='Tech Blog app' />
                </a>
            </div>
            <div className='col-4 d-flex'>                
                <a href="https://glacial-headland-83578.herokuapp.com/home">
                    <h2>Tech Blog</h2>
                    <img style={styles.pics} src={Tech_Blog} alt='Tech Blog app' />
                </a>
            </div>
            <div className='col-4 d-flex'>                
                <a href="https://glacial-headland-83578.herokuapp.com/home">
                    <h2>Tech Blog</h2>
                    <img style={styles.pics} src={Tech_Blog} alt='Tech Blog app' />
                </a>
            </div>
        </div>
    )
};

export default Projects;