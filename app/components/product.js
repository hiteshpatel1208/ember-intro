import Component from '@glimmer/component';

export default class ProductComponent extends Component {
  productImage = this.args.productInfo.colors[0].image;
}
