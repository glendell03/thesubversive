import React from "react";

import MenuItem from "../menu-item/menu-item";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "caps",
          imageUrl:
            "https://cdn.iamtoro.shop/wp-content/uploads/2019/07/cap-icon-black-model-01-1.jpg",
          id: 1,
          linkUrl: 'caps'
        },
        {
          title: "jackets",
          imageUrl:
            "https://ae01.alicdn.com/kf/HTB1pAIcdbsTMeJjSszgq6ycpFXa3/Women-Winter-Coat-Stand-Collar-Ultra-Light-White-Duck-Down-Jacket-Slim-Women-Puffer-Jacket-Portable.jpg",
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: "shirts",
          imageUrl:
            "https://image.uniqlo.com/UQ/ST3/us/imagesother/home/L3/200408-L3-pc-m-tshirts.jpg",
          id: 3,
          linkUrl: 'shirts'
        },
        {
          title: "womens",
          imageUrl:
            "https://www.boardsportsource.com/wp-content/uploads/2018/07/Nikita.jpg",
          id: 4,
          linkUrl: 'womens'
        },
        {
          title: "mens",
          imageUrl: "https://i.dmarge.com/2019/06/cool-grey-hoodie-920x556.jpg",
          id: 5,
          linkUrl: 'mens'
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, ...otherSectionProps }) => (
          <MenuItem key={id} title={title.toUpperCase()} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;
