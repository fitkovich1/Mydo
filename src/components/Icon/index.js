import React from 'react';
import { Image } from "./styles";

const Icon = (props) => {

    const {src, alt} = props;

    return <Image src={src} alt={alt}/>
};

export default Icon;