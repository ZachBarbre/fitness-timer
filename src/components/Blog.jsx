import React from 'react';
import styled from 'styled-components';

const BlogWrapper = styled.div`
    border-left: 1px solid #706062;
    max-width: 520px;
    min-width: 300px;
    margin: 1% auto;
    padding: 0 2% 2% 2%;
`;

const Blog = ({ workoutData }) => {
    const { workoutName, workoutDescription, workout } = workoutData;
    return (
        <BlogWrapper>
            <h2>{workoutName}</h2>
            <p>{workoutDescription}</p>
            <ul>
                {workout.map((exercise, index) => (
                    <li key={`${exercise}-${index}`}>{exercise}</li>
                ))}
            </ul>
        </BlogWrapper>
    )
}

export default Blog;