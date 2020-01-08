const path = require('path');
const _ = require('lodash');

// Remove trailing slash
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise((resolve, reject) => {
    // Remove trailing slash
    const newPage = Object.assign({}, page, {
      path: page.path === `/` ? page.path : page.path.replace(/\/$/, ``),
    });

    if (newPage.path !== page.path) {
      // Remove the old page
      deletePage(page);
      // Add the new page
      createPage(newPage);
    }

    resolve();
  });
};

// Create pages from markdown nodes
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  console.log(result);
  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }
  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    actions.createPage({
      path: '/' + post.frontmatter.slug,
      component: require.resolve('./src/templates/slide.js'),
      context: {
        slug: `${post.frontmatter.slug}`,
      },
    });
  });
};
