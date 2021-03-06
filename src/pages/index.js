import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    

    return (
      <Layout>
        <section className="mega__title">
          <div className="wrapper">
            <h1>Hey, I'm Joel &mdash; I'm a front-end web developer at <a href="http://chriate.com.au" target="_blank">Studio Chriate</a>.</h1>
            <p>I'm passionate about all things web and currently enjoy my days building bespoke WordPress websites.</p>
          </div>
        </section>
        <section className="section_posts">
          <div className="wrapper">
          <div className="home__heading">
            <h2>Latest Posts</h2>
            <Link to="/blog" className="button">See All Posts</Link>
          </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content post-card"
                  key={post.id}
                >
                  <div className="post-card_title">
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </div>
                  <div className="post-card_date">{post.frontmatter.date}</div>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
