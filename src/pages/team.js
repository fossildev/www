import React from 'react'
import { graphql } from 'gatsby'
import GatsbyConfig from '../../gatsby-config'
import CustomHelmet from '../components/CustomHelmet';
import Layout from '../components/indexLayout'
import MemberCard from '../components/member_card'

function getMembers(data) {
  let members = []

  let memberList = data.allMarkdownRemark.edges

  memberList.map(element => {
    return members.push(
      <MemberCard
        username={element.node.frontmatter.username}
        full_name={element.node.frontmatter.name}
        designation={element.node.frontmatter.designation}
      />
    )
  })

  return members
}

const TeamsPage = ({ data }) => (
  <Layout>
    <CustomHelmet page={GatsbyConfig.siteMetadata.team} />
    <div className="page">
      <div className="container">
      <div className="title-page">Kepengurusan FOSSIL 2018/2019</div>
        {/* Pengurus Inti */}
        <h2>Pengurus Inti</h2>
        <div className="team-section">
          <MemberCard
            username="restuhaqza"
            full_name="Restu Haqza"
            designation="Ketua"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Wakil Ketua"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Bendahara 1"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Bendahara 2"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Sekretaris 1"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Sekretaris 2"
          />
        </div>
         {/* Keilmuan */}
         <h2>Keilmuan</h2>
         <div className="team-section">
          <MemberCard
            username="restuhaqza"
            full_name="Restu Haqza"
            designation="Ketua"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Keilmuan"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Keilmuan"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Keilmuan"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Keilmuan"
          />
        </div>
         {/* RnD */}
         <h2>Research &amp; Development</h2>
         <div className="team-section">
          <MemberCard
            username="restuhaqza"
            full_name="Restu Haqza"
            designation="Ketua"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota RnD"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota RnD"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota RnD"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota RnD"
          />
        </div>
          {/* Humas */}
         <h2>Humas</h2>
         <div className="team-section">
         <MemberCard
            username="restuhaqza"
            full_name="Restu Haqza"
            designation="Ketua"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Humas"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Humas"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Humas"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Humas"
          />
        </div>
          {/* Keorganisasian */}
         <h2>Keorganisasian</h2>
         <div className="team-section">
         <MemberCard
            username="restuhaqza"
            full_name="Restu Haqza"
            designation="Ketua"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Keorganisasian"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Keorganisasian"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Keorganisasian"
          />
          <MemberCard
            username="edytk"
            full_name="Nama Anggota"
            designation="Anggota Keorganisasian"
          />
        </div>

        {/* <h2>-</h2>
        <div className="team-section">{getMembers(data)}</div> */}
      </div>
    </div>
  </Layout>
)

export default TeamsPage



export const teamQuery = graphql`
  query membersQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___designation], order: ASC }
      filter: { fileAbsolutePath: { regex: "/members/.*md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            username
            name
            designation
          }
        }
      }
    }
    imageCoord1: file(relativePath: { eq: "images/prakhyath_rai.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }

`


