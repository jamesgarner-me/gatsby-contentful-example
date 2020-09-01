import React from 'react'
//import Img from 'gatsby-image'
import styles from './four-columns.css'

/* TODO Gatsby Img class 'fluid' queries */

export default ({ data }) => (
  <div className="four-columns-row">
    {data.map( node => {
      return (
        <div className="four-columns-col">
          <img
            //className={styles.TODO}
            alt={node.serviceLandingPageMedia.description}
            src={node.serviceLandingPageMedia.file.url}
          />
          <h3 className={styles.heroHeadline}>{node.serviceLandingPageTitle}</h3>
          <p>{node.serviceLandingPageShortText}</p>
          {/* TODO make link below a button */}
          <a 
            //className={styles.TODO}
            href="https://www.w3docs.com/learn-html/html-button-tag.html">
              {node.serviceLandingPageButton}
          </a>
        </div>
      )
    })}
  </div>
)