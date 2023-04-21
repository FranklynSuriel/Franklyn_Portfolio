import React from 'react';

const styles = {
    header: {    
        display: 'flex',
        justifyContent: 'space between',         
        color: 'black',
        padding: '24px 0'
        // marginBottom: '24px'
    },
    /* set spacing for the navigation area */
    nav: {   
        margin: '0 20px'
    //     padding-top: 24px;
    },
    /* set style for the header list and footer list */
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: '1.4rem',
        // list-style-type: none; /*set the navegation list style to none*/
        padding: 0
    },
    /* set spacing for the list element */
    li: { 
        margin: '0 20px'        
    },
    /* set color for the anchor element */
    a: {
        color: 'black'
    }
}

function Heather() {
    return (
        <header style={styles.header}>
            <img scr='./assets/Franklyn Suriel logo' alt='FranklynSurielLogo' ></img>
            <nav style={styles.nav}>
                <ul style={styles.list}>
                    {/* link to About me section */}
                    <li style={styles.li}>
                        <a style={styles.a} href="#aboutMe">About Me</a>
                    </li>
                    {/* link to Work section */}
                    <li style={styles.li}>
                        <a style={styles.a} href="#work">Work</a>
                    </li>
                    {/* link to Contact me section */}
                    <li style={styles.li}>
                        <a style={styles.a} href="#contactMe">Contact Me</a>
                    </li>
                    {/* link to Linkedin webpage */}
                    <li style={styles.li}>
                        <a style={styles.a} href="https://www.linkedin.com/in/franklynsuriel/">Linkedin</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Heather;