import React,{useState, Fragment} from "react"
import { Link, graphql } from "gatsby"
import Button from '@material-ui/core/Button';

import Layout from "../components/layout"
import SEO from "../components/seo"
import main from '../styles/main.module.css'

import SVG from '../components/svg'
const _ = require('lodash')

const IndexPage = ({ data }) => {
    // const emptyQuery = ""
    // const [state, setState] = useState({
    //   filteredData: [],
    //   query: emptyQuery,
    // })
    
    const allPosts = data.allMarkdownRemark.edges
    // const { filteredData, query } = state

    // const hasSearchResults = filteredData && query !== emptyQuery

    // const posts = hasSearchResults ? filteredData : allPosts

    
    // const handleInputChange = event => {
    //     const query = event.target.value
    //     const posts = data.allMarkdownRemark.edges || []
    //     const filteredData = posts.filter(post => {
    //         // destructure data from post frontmatter
    //         const {title, category } = post.node.frontmatter
    //         return (
              
    //             title.toLowerCase().includes(query.toLowerCase()) ||
    //             category.toLowerCase().includes(query.toLowerCase()) 
    //             // (tags &&
    //             //     tags
    //             //         .join('') // convert tags from an array to string
    //             //         .toLowerCase()
    //             //         .includes(query.toLowerCase()))
    //         )
    //     })
    //     setState({
    //         query, 
    //         filteredData, 
    //     })
    // }

  return (
      <Layout>
          <SEO 
            title="Runchi-Home" 
          />

        <h2 className={main.main_title}>
        모든 글
        </h2>
        <span className={main.main_postcnt}>({allPosts.length} Posts)</span>
      

          {/* <input
              type="text"
              placeholder="검색해보세요!"
              onChange={handleInputChange}
          /> */}

      
        <div className={main.main_post_container} >
      {allPosts.map(({ node }) => (
             
          <div className={main.main_post_section} key={node.id}>
              <Link className={main.main_post_link} to={node.fields.slug}>

                <div className={main.main_post_overflow}>

                      <h2 className={main.main_post_title}>
                        {node.frontmatter.title}
                       
                        <div className={main.main_post_date}>
                          <span className={_.capitalize(node.frontmatter.category)}>{_.capitalize(node.frontmatter.category)}</span>
                          <SVG name="edit" width="20px" height="20px" color="#aaa" ></SVG> {node.frontmatter.date}
                        </div>
                      </h2>

                      

                    
                    
                      <div className={main.main_post_content} dangerouslySetInnerHTML={{ __html: node.html }} />
                </div>    
              </Link>  
          </div>
              
          ))}
        </div>
      </Layout>
  )
}
  
   

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}}},sort: {order: DESC, fields: frontmatter___date}) {
    totalCount
    edges {
      node {
        id
        excerpt
        html
        frontmatter {
          title
          date
          category
        }
          fields {
            slug
          }
      }
    }
  }
}
`

export default IndexPage
