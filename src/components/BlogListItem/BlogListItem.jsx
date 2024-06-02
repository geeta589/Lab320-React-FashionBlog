function BlogListItem({blog, id}) {
    // console.log(props);
    
    //   const { blog, id } = props;
      
      console.log(id);
    
      return (
        <>
          <h4>{blog.publicationDate}</h4>
          <h3>{blog.title}</h3>
          <h4>By: {blog.author}</h4>
    
          <p>{blog.content}</p>
    
          <hr />
        </>
      );
    }
    
    export default BlogListItem;