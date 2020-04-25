import React from "react"
import { useStaticQuery,Link,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import category from '../styles/category.module.css'

import PropTypes from 'prop-types'

import kebabCase from 'lodash/kebabCase'


// 여기는 Category List를 보여주는 Page 입니다.
const CategoryList = (
    // {
    //     data: {
    //         allMarkdownRemark: { group },
    //         site: {
    //             siteMetadata: { title },
    //         },
    //     },
    // }
) => {


    const categories = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            allMarkdownRemark(limit: 2000) {
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
                    <Link to={`/category/${kebabCase(item.fieldValue)}/`} key={item.fieldValue}>
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


CategoryList.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
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

export default CategoryList
