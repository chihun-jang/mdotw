import React from "react"
import { useStaticQuery,Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import category from '../styles/category.module.css'

const CategoryPage = () => {


    const categories = useStaticQuery(graphql`
        {
            allMarkdownRemark {
                group(field: frontmatter___category) {
                    fieldValue
                    totalCount
                }
            }
        }
    `)


    return (
        <Layout>
            <SEO 
                title="Category"
                description="주제별 카테고리 확인" />
            <h1 className={category.category_title}>Category</h1>
            <section className={category.category_section}>

                {categories.allMarkdownRemark.group.map(item => (
                    <Link to={item.fieldValue}>
                        <div className={category.category_item }>
                            <div className={item.fieldValue}>{item.fieldValue}</div>{' '}
                            <span className={item.fieldValue}>{item.totalCount}</span>
                        </div>
                    </Link>
                ))}

            </section>

        </Layout>
    )
  
}

// 여기는 댓글플러그인을 구현하기 위한 Script코드
{/* <script src="https://utteranc.es/client.js"
    repo="chihun-jang/runchi"
    issue-term="title"
    label="Comment"
    theme="photon-dark"
    crossorigin="anonymous"
    async>
</script> */}

export default CategoryPage
