import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import TitleComponent from '../components/title'
import FourColumnComponent from '../components/four-columns'
import TwoColumnComponent from '../components/two-columns'
// import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component { 
  render() {
    // Retrieve content for title
    const serivcesLanding = get(this, 'props.data.allContentfulServicesLandingPage.nodes')
    const services = get(this, 'props.data.allContentfulService.nodes') 
    const workWithUs = get(this, 'props.data.allContentfulWorkWithUsComponent.nodes')
    
    // TODO: fix clunky array referencing
    const titleComponentContent = {
      media: serivcesLanding[0].servicesLandingPageMedia,
      title: serivcesLanding[0].servicesLandingPageTitle,
      shortText: serivcesLanding[0].servicesLandingPageShortText
    }

    // TODO: think about how the 'four column component' data can be set (this is an array, not just single object)
    
    // TODO: fix clunky array referencing
    const twoColumnComponentContent = {
      media: workWithUs[0].workWithUsComponentMedia,
      title: workWithUs[0].workWithUsComponentTitle,
      shortText: workWithUs[0].workWithUsComponentShortText,
      button: workWithUs[0].workWithUsComponentButton,
      buttonUrl: workWithUs[0].workWithUsComponentButtonUrl
    }
    
    return (
      <div style={{ background: '#fff' }}>
        <TitleComponent data={titleComponentContent} />
        <FourColumnComponent data={services} />
        <TwoColumnComponent data={twoColumnComponentContent} />
      </div>  
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
query Services {
  allContentfulServicesLandingPage {
    nodes {
      servicesLandingPageTitle
      servicesLandingPageShortText
      servicesLandingPageMedia {
        file {
          url
          fileName
          contentType
          details {
            size
            image {
              height
              width
            }
          }
        }
      }
    }
  }
  allContentfulService {
    nodes {
      serviceLandingPageButton
      serviceLandingPageShortText
      serviceLandingPageTitle
      serviceLandingPageMedia {
        title
        description
        file {
          contentType
          fileName
          url
          details {
            image {
              width
              height
            }
            size
          }
        }
      }
    }
  }
  allContentfulWorkWithUsComponent {
    nodes {
      workWithUsComponentTitle
      workWithUsComponentShortText
      workWithUsComponentButton
      workWithUsComponentMedia {
        title
        description
        file {
          fileName
          url
          contentType
          details {
            size
            image {
              width
              height
            }
          }
        }
      }
    }
  }
}
`
