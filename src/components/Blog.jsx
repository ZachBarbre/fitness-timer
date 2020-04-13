import React from 'react';
import styled from 'styled-components';

const BlogWrapper = styled.div`
    border-left: 1px solid #706062;
    max-width: 520px;
    min-width: 320px;
    margin: 1% auto;
    padding: 0 2% 2% 2%;
`;

const Blog = () => (
    <BlogWrapper>
        <h2>Workout Name</h2>
        <p>Workout Descrption. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit corrupti laborum neque expedita quas quam. Assumenda ducimus dignissimos enim? Iste quos earum itaque harum! Repellat corporis tempore rerum quisquam.</p>
        <p>Rounds</p>
        <ul>
            <li>Do this </li>
            <li>Do that </li>
            <li>Do something </li>
            <li>Do the death thing </li>
        </ul>
    </BlogWrapper>
)

export default Blog;