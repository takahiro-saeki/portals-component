import { Component } from 'react';
import { createPortal } from 'react-dom';
import { string, element } from 'prop-types';

class PortalsComponent extends Component {
  static defaultProps = {
    el: '',
    children: null,
    dom: 'div'
  };

  static propTypes = {
    el: string,
    children: element,
    dom: string
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
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}

export default PortalsComponent;
