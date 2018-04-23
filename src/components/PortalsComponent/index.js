import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class PortalsComponent extends React.Component {
  static defaultProps = {
    el: '',
    children: null,
    dom: 'div'
  };

  static propTypes = {
    el: PropTypes.string,
    children: PropTypes.element,
    dom: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.el = document.createElement(this.props.dom);
    this.portalDom = document.querySelector(this.props.el);
  }

  componentDidMount() {
    this.portalDom.appendChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default PortalsComponent;
