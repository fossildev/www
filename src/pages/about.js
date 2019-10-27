import React from 'react'
// import Link from 'gatsby-link'
import Layout from '../components/indexLayout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const AboutPage = props => (
  <Layout>
    <div className="page white-bg">
      <div className="container">
        <section className="hero-section">
          <div className="hero-texts">
            <Img
              fluid={props.data.imageFirst.childImageSharp.fluid}
              className="fossil-logo"
              alt="fossil logo"
            />
            <p className="fossil-header">
              Free Open Source Software Interest League
            </p>
            <p>
            FOSSIL (Free Open Source Software Interest League) adalah sebuah komunitas Open Source yang berada di Universitas AMIKOM Yogyakarta. Komunitas ini berdiri atas kesadaran sekumpulan mahasiswa akan pentingnya kontribusi serta kebutuhan Proyek Open Source dilingkungan kampus dan masyarakat. Maka dari itu, FOSSIL hadir untuk menjadi wadah untuk keresahan tersebut. <br></br><br></br>
            Kegiatan kami meliputi sharing session, bootcamp, riset, dan pengabdian masyarakat. untuk info lebih lanjut bisa hubungi <a href="mailto:fossil@amikom.ac.id">fossil@amikom.ac.id</a> 
            </p>
           
          </div>
          <div>
            <Img
              fluid={props.data.imageOne.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
        </section>
      </div>
    
    </div>
  </Layout>
)

export const aboutImages = graphql`
  fragment aboutImages on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageFirst: file(relativePath: { eq: "images/logo_grad.png" }) {
      ...aboutImages
    }
    imageOne: file(relativePath: { eq: "images/hero_main.png" }) {
      ...aboutImages
    }
    imageTwo: file(relativePath: { eq: "images/hero_clubs.png" }) {
      ...aboutImages
    }
    imageThree: file(relativePath: { eq: "images/hero_github.png" }) {
      ...aboutImages
    }
    imageFour: file(relativePath: { eq: "images/friend.png" }) {
      ...aboutImages
    }
  }
`

export default AboutPage
