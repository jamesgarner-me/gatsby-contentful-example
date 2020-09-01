import React from 'react'
// import Img from 'gatsby-image'
import styles from './two-columns.css'

/* TODO investigate Gatsby Img class 'fluid' queries */

export default ({ data }) => (
  
  <div className="two-component-row">
    <div className="two-component-col-left">
      <img
        //className={styles.TODO}
        alt={data.media.description}
        src={data.media.file.url}
      />
    </div>
    <div className="two-component-col-right">
      <div className="two-component-col-right-content">
      <h3>{data.title}</h3>
      </div>
      <div className="two-component-col-right-content">
        <p>{data.shortText}</p>
      </div>
      <div className="two-component-col-right-content">
        {/* TODO make link below a button */}
        <a 
          //className={styles.TODO}
          href="https://www.w3docs.com/learn-html/html-button-tag.html">
            {data.button}
        </a>
      </div>
    </div>
</div>
)