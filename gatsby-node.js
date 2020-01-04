/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const TeamMemberTemplate = path.resolve("./src/templates/TeamMember.js")
  const PageTemplate = path.resolve("./src/templates/Page.js")
  const CategoryTemplate = path.resolve("./src/templates/Category.js")
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressWpTeamMember {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
    const BlogPosts = result.data.allWordpressPost.edges
        BlogPosts.forEach(post => {
          createPage({
                path: `/post/${post.node.slug}`,
                component: BlogPostTemplate,
                context: {
                id: post.node.wordpress_id,
                },
            })
        })
    const Pages = result.data.allWordpressPage.edges
        Pages.forEach(page => {
            createPage({
                path: `/${page.node.slug}`,
                component: PageTemplate,
                context: {
                id: page.node.wordpress_id,
                },
            })
        })
    const TeamMembers = result.data.allWordpressWpTeamMember.edges
        TeamMembers.forEach(member => {
            createPage({
                path: `/team-member/${member.node.slug}`,
                component: TeamMemberTemplate,
                context: {
                id: member.node.wordpress_id,
                },
            })
        })
    const Categories = result.data.allWordpressCategory.edges
        Categories.forEach(category => {
            createPage({
                path: `/category/${category.node.slug}`,
                component: CategoryTemplate,
                context: {
                id: category.node.wordpress_id,
                },
            })
        })
}
