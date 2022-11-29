import React from "react";
import { Rating } from 'semantic-ui-react'
const Uicard=(props)=>{
    return (
        <>
        <div className='ui comments grid card container very relaxed'>
            <div  className="container">
            <div className="image" class="left floated">
<img src={props.children.props.picture}  alt='profile'></img> 
</div>
                <div className="header">{props.children.props.name}</div>
                <div className="description">
                    {props.children.props.text}
                    <Rating icon='star' defaultRating={1} maxRating={5} />
                    </div>
                <div class="extra content">
      <span class="left floated">Rs:
      {props.children.props.price}
      </span>
    </div>
     </div>
    <div className="ui button button">
    <i className="add icon"></i>add ToCart
    </div>
    </div>
    </>
    )
}
export default Uicard