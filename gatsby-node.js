exports.onCreateNode = ({ node }) => {
    if (node.internal.type === `MarkdownRemark`) {   
  	 const fileNode = getNode(node.parent)   
  	 console.log(`\n`, fileNode.relativePath)
    }
}
