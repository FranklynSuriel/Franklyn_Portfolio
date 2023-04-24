import React from 'react';
import Tech_Blog from './pictures/Tech Blog app.jpg'

const styles = {
    pics: {
        height: '400px',
        width: '90%'
    }
}

function Projects() {
    return (
        <div id='work' className='row pb-5'>
            <h2 className='text-center' >My Projects</h2>
            <div className='d-flex flex-wrap justify-content-center'>
                <div className='col-12 col-md-6 col-lg-3'>                    
                    <div class="card d-flex">
                        <div class="card-body ">
                            <h5 class="card-title">Tech_Blog</h5>
                            <p class="card-text">A CMS-style blog where you can publish articles, blog post, comment other user post, update or delete your post and more.</p>
                            <img className='shadow m-3 object-fit-contain' style={styles.pics} src={Tech_Blog} alt='Tech Blog app' />
                            <a href="https://glacial-headland-83578.herokuapp.com/" class="card-link">Deployed link</a>
                            <a href="https://github.com/FranklynSuriel/Tech_Blog" class="card-link">GitHub link</a>
                        </div>
                    </div>
                </div>
                {/* <div className='col-4 d-flex'>
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
                </div> */}
            </div>
        </div>
    )
};

export default Projects;