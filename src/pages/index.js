import React, { useState } from 'react'
import Link from 'gatsby-link'
import Layout from '../components/indexLayout'

import Img from 'gatsby-image'
import Modal from 'react-responsive-modal'

import { graphql } from 'gatsby'

const IndexPage = props => {
  const [isModal, setModal] = useState(false)

  return (
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
                Sebuah UKM Universitas AMIKOM Yogyakarta yang digerakkan oleh
                para penggemar teknologi dan kontributor open-source, untuk
                membantu mahasiswa menjadi bagian dari ekosistem open-source
                dengan menyediakan pelatihan dan pengembangan keterampilan.
              </p>
              <a href="about" className="btn-hero-foss">
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
              <p className="hero-header">Linux Server</p>
              <div className="dash" />
              <p>
                Divisi yang berfokus mempelajari kegunaan dan manfaat open
                source (Linux) dibidang server, mempelajari web server.
              </p>
            </div>
            <div className="hero-texts">
              <p className="hero-header">Linux Scripting</p>
              <div className="dash" />
              <p>
                Divisi yang berfokus mempelajari fundamental dari sistem operasi
                linux dan juga mempelajari shell scripting.
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
                Pelatihan diadakan setiap minggu dan dipandu oleh teman-teman
                dari pengurus FOSSIL. Pantau sosial media FOSSIL untuk info
                lebih lanjut.
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
                Ayoo bergabung dengan kami dan belajar bersama tentang
                open-source di FOSSIL. Pendaftaran dibuka saat EXPO Universitas
                AMIKOM Yogyakarta 2020.
              </p>
              <Link
                onClick={e => {
                  e.preventDefault()
                  setModal(true)
                }}
                className="btn-hero-foss"
              >
                Daftar
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Modal open={isModal} onClose={() => setModal(false)}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScE377OaS_J8d3ltEpC7cRkZm0OiZeBt0YjvmRfKlvWViUgIQ/viewform?embedded=true"
          frameborder="0"
          style={{
            minWidth: '640px',
            minHeight: '500px',
            maxWidth: '768px',
            maxHeight: '640px',
          }}
        >
          Memuat…
        </iframe>
      </Modal>
    </Layout>
  )
}

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
