import { KeyframeOptions } from "framer-motion";

export interface navigationLinkProps {
    label : string ;
    href : string ;
}

export interface totalProps {
    from : number ;
    to : number ;
    title : string ;
}

export interface CounterProps  {
    from: number;
    to: number;
    animationOptions?: KeyframeOptions;
    className : string
};

export interface wikiunerlineProps {
    title : string ;
    size : string
    className : string ;
}

export interface serviceProps {
    image : string ;
    content : string;
}

export interface blogProps {
    title : string ;
    description : string;
    image : string ;
    badge : string; 
    href : string
}