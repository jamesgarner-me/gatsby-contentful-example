import React from 'react'
// import Img from 'gatsby-image'
// import styles

/* TODO investigate Gatsby Img class 'fluid' queries */

export default ({ data }) => (
  <div>
    <img
      //class={styles.TODO}
      alt={data.media.description}
      src={data.media.file.url}
    />
    <div>
      <h3>{data.title}</h3>
      <p>{data.shortText}</p>
    </div>
  </div>
)
