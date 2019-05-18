import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/indexLayout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const IndexPage = props => (
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
            Sebuah komunitas yang digerakkan oleh para penggemar teknologi dan kontributor open-source, untuk membantu mahasiswa menjadi bagian dari ekosistem open-source dengan menyediakan pelatihan dan pengembangan keterampilan.
            </p>
            <a
              href="about"
              className="btn-hero-foss"
            >
              Tentang FOSSIL
            </a>
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
      <div className="container">
        <section className="hero-section2 ">
        <div className="hero-texts">
            <p className="hero-header">Divisi Server</p>
            <div className="dash" />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
           
          </div>
          <div className="hero-texts">
            <p className="hero-header">Divisi Fundamental</p>
            <div className="dash" />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
           
          </div>
        </section>
      </div>

      <div className="container">
        <section className="hero-section3">
          <div className="hero-texts">
            <p className="hero-header">Berlatih dan Belajar Bersama</p>
            <div className="dash" />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <Img
            fluid={props.data.imageThree.childImageSharp.fluid}
            className="hero-image"
            alt="hero image"
          />
        </section>
      </div>
      <div className="container">
        <section className="hero-section4">
          <div>
            <Img
              fluid={props.data.imageFour.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
          <div className="hero-texts">
            <p className="hero-header">Bergabung dengan Kami !</p>
            <div className="dash" />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

            </p>
            <Link to="#" className="btn-hero-foss">
              Daftar
            </Link>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export const firstSiteImages = graphql`
  fragment firstSiteImages on File {
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
      ...firstSiteImages
    }
    imageOne: file(relativePath: { eq: "images/hero_main.png" }) {
      ...firstSiteImages
    }
    imageTwo: file(relativePath: { eq: "images/hero_clubs.png" }) {
      ...firstSiteImages
    }
    imageThree: file(relativePath: { eq: "images/hero_github.png" }) {
      ...firstSiteImages
    }
    imageFour: file(relativePath: { eq: "images/friend.png" }) {
      ...firstSiteImages
    }
  }
`

export default IndexPage
