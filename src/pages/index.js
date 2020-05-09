import React,{useState, Fragment,useRef,useEffect} from "react"
import { Link, graphql } from "gatsby"
import Button from '@material-ui/core/Button';

import Layout from "../components/layout"
import SEO from "../components/seo"
import main from '../styles/main.module.css'

import SVG from '../components/svg'
const _ = require('lodash')


const DEST_POS = 316
const BASE_LINE = 80


function getDistance(currentPos) {
  return document.documentElement.offsetHeight - currentPos
}


const IndexPage = ({ data }) => {
  const [count, setCount] = useState(1)

    const countRef = useRef(1)
    const countOfInitialPost  = 9
  const allPosts = data.allMarkdownRemark.edges

    useEffect(() => {
      window.addEventListener(`scroll`, onScroll, { passive: false })
     

      return () => {
        window.removeEventListener(`scroll`, onScroll, { passive: false })
      
      }
  }, [])

  useEffect(() => {
    countRef.current = count
  })


  function toFit(
    cb,
    { dismissCondition = () => false, triggerCondition = () => true }
  ) {
    if (!cb) {
      throw Error('Invalid required arguments')
    }
    let tick = false
    return function () {
      if (tick) {
        return
      }

      tick = true
      return requestAnimationFrame(() => {
        if (dismissCondition()) {
          tick = false
          return
        }

        if (triggerCondition()) {
          tick = false
          return cb()
        }
      })
    }
  }
  const onScroll = () => {
    const currentPos = window.scrollY + window.innerHeight
    // console.log("===", currentPos)

    const isTriggerPos = () => getDistance(currentPos) < BASE_LINE
    const doesNeedMore = () => 
      allPosts.length > countRef.current * countOfInitialPost
    return toFit(() => setCount(prev => prev + 1), {
      dismissCondition: () => !isTriggerPos(),
      triggerCondition: () => isTriggerPos() && doesNeedMore(),
    })()
  }

  

    // const emptyQuery = ""
    // const [state, setState] = useState({
    //   filteredData: [],
    //   query: emptyQuery,
    // })
    



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
  const renderPost = allPosts.slice(0, count * countOfInitialPost)
  return (
      <Layout>
          <SEO 
            title="Runchi-Home" 
          />

        <h2 className={main.main_title}>
          최신 글
        </h2>

        <span className={main.main_postcnt}>({allPosts.length} Posts)</span>
      

          {/* <input
              type="text"
              placeholder="검색해보세요!"
              onChange={handleInputChange}
          /> */}

      
        <div className={main.main_post_container} >
        {renderPost.map(({ node }) => (
             
        <div className={main.main_post_section} key={node.id} >
              <Link className={main.main_post_link} to={node.fields.slug}>
                <div className={main.main_post_overflow}>
                  <h2 className={main.main_post_title}>
                    {node.frontmatter.title}
                    
                    <div className={main.main_post_date}>
                      {node.frontmatter.category.map((category_item)=>(
                        <span key={category_item} className={_.capitalize(category_item)}>{_.capitalize(category_item)}</span>
                      ))}
                      
                      <SVG name="edit" width="20px" height="20px" color="#aaa" ></SVG> {node.frontmatter.date}
                    </div>
                  </h2>

                  <div className={main.main_post_content} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
  allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}}},sort: {order: [DESC,DESC] fields: [frontmatter___date,frontmatter___title]}) {
    totalCount
    edges {
      node {
        id
        excerpt( pruneLength: 200)
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
