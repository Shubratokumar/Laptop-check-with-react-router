import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='qa-container'>
            <h2 className='title'>Question and Answer :</h2>
            <div className='blogs-container'>
                <div className='blog-container'>
                    <h4 className='question'>Q - 01: What is Context API ?</h4>
                    <p><span className='answer'>Answer : </span>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
                <div className='blog-container'>
                <h4 className='question'>Q - 02: What is Semantic tag ?</h4>
                    <p><span className='answer'>Answer : </span>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.Elements such as header, footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. It is much easier to read. The easier it is to read and understand the code, the easier it makes your job. It has greater accessibility. Search engines and assistive technologies (like screen readers for users with a sight impairment) are also able to better understand the context and content of your website, meaning a better experience for your users. In HTML there are some semantic elements that can be used to define different parts of a web page: article, aside, details, footer, header, main, nav, section etc.
                    </p>
                </div>
                <div className='blog-container'>
                <h4 className='question'>Q - 03: Difference between inline, block and inline-block elements.</h4>
                    <p><span className='answer'>Answer : </span>
                    Inline Element : Displays an element as an inline element. Any height and width properties will have no effect. The display property specifics the display behavior of an element. It’s a must know for controlling the layout of an element. Here are a few elements that have a default inline property: span, a, img; <br /> <br />
                    Block Element : Block element check the length of the string. It is just opposite of inline element. Inline elements appears on the same line but the Block elements starts on a new line and takes up the full width available. Here are a few elements that have a default block property: div, li, p, section, h1; <br /> <br/>
                    Inline-Block Element : Inline-Block element displays an element as an inline-level block container. We can set set height and width values.  It’s essentially the same thing as inline, except that we can set height and width values.                    
                    </p>
                </div>
            </div>
        </div>
        
    );
};

export default Blogs;