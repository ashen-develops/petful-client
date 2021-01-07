import React from 'react';

class Adopted extends React.Component {
  render() {
    const { imgSrc, name, owner } = this.props;
    return (<>
      <img src={imgSrc} alt='pet' />
      <p>Name: {name}</p>
      <p>Owner: {owner}</p>
    </>
    );
  }
}

export default Adopted;