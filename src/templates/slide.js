import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default ({ data, transition }) => {
  const body = data.mdx.body;

  return (
    <div style={{ width: '100%' }}>
      <div style={transition && transition.style}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
      }
      body
    }
  }
`;
