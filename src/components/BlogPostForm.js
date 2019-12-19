import React, { useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';
const BlogPostForm = ({onSubmit, initialValues}) => {
    // const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id') );
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style = {styles.label}>Enter Title</Text>
            <TextInput 
                value = {title}
                onChangeText = {(newTitle)=>setTitle(newTitle)}
                style = {styles.input}
            />
            <Text style = {styles.label}>Enter Content</Text>
            <TextInput 
                value = {content}
                onChangeText = {(newContent)=>setContent(newContent)}
                style = {styles.input}
            />  
            <Button 
                title="Save Blog Post" 
                onPress={()=> onSubmit(title,content)}
            /> 
        </View>
    );
}
BlogPostForm.defaultProps = {
    initialValues : {
        title : '',
        content: '',
    }
}

const styles = StyleSheet.create({
    
});
export default BlogPostForm;