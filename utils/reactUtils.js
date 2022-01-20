import React, {cloneElement, Children} from "react";

function childrenWithProps(children,props) {
    return Children.map(props.children, 
        child => cloneElement(child, {...props}))
}

export {childrenWithProps}