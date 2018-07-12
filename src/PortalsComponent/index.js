import { Component } from 'react';
import { createPortal } from 'react-dom';
import { string, element } from 'prop-types';

class PortalsComponent extends Component {
  static propTypes = {
    el: string,
    children: element,
    dom: string
  };

  static defaultProps = {
    el: '',
    children: null,
    dom: 'div'
  };

  constructor(props) {
    super(props);
    this.el = document.createElement(props.dom);
    this.portalDom = document.querySelector(props.el);
  }

  componentDidMount() {
    if (!this.portalDom) {
      const { el } = this.props;
      // eslint-disable-next-line no-console
      console.warn(`there is no ${el}. please check your implementation.`);
      return false;
    }
    this.portalDom.appendChild(this.el);
  }

  render() {
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}

export default PortalsComponent;
