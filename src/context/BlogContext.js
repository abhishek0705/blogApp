import React, { useReducer } from 'react';
import createDataContext from './createDataContext'; 
import jsonServer from '../api/jsonServer'
const blogReducer = (state,action) => {
    switch (action.type){
        case 'get_blogposts':
            return action.payload;
        
        case 'edit_blogpost' : 
            return state.map(blogPost=>{
                return blogPost.id === action.payload.id ? action.payload : blogPost
                
            });
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        
        default:
            return state;
    }
}
const getBlogPost = (dispatch) =>{
    return async () =>{
        const response = await jsonServer.get('/blogposts');
        dispatch({type:'get_blogposts', payload:response.data});
    }
}
const addBlogPost = (dispatch) =>{
    return async(title,content,callback) =>{
        await jsonServer.post('/blogposts',{title,content})
        
        if(callback) {callback()}  
    }
}
const deleteBlogPost = (dispatch) =>{
    return async (id) =>{
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type:'delete_blogpost',payload:id});   
    }
}
const editBlogPost = (dispatch) =>{
    return async (id,title,content,callback) =>{
        await jsonServer.put(`/blogposts/${id}`,{title,content});
        dispatch({type:'edit_blogpost',payload:{id,title,content}});  
        if(callback) {callback()}  
    }
}
export const { Context, Provider} = createDataContext(blogReducer,
    {addBlogPost ,deleteBlogPost, editBlogPost, getBlogPost},
    []
);
// import React, { useState } from 'react';
// const BlogContext = React.createContext();

// export const BlogProvider = ({ children }) => {
//     const [blogPosts,setBlogPosts] = useState([]);
//     const addBlogPost = () => {
//         setBlogPosts([
//             ...blogPosts, 
//             { title:`Blog Post #${blogPosts.length+1}` } 
//         ]);
//     }
//      return (
//         <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
//             {children}
//         </BlogContext.Provider>
//     );
//  };
// export default BlogContext;