import React, { Component } from 'react';
import Link from 'next/link';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import CreateItemStyles from './styles/CreateItemStyles';
import Form from './styles/Form';
import Btn from './styles/Btn';
import Icon from '../elements/Icon';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $department: String!
    $barcode: String
    $brand: String
    $title: String
    $location: String
    $casesAvailable: Int!
    $buyingLimit: Int
    $casesPerSkid: Int
    $casesPerRow: Int
    $unitsPerCase: Float
    $size: Float
    $uom: String
    $price: Int!
    $discountPrice: Int
    $discountQty: Int
    # $createdAt: DateTime!
    # $updatedAt: DateTime!
    $expDate: String
    $comments: String
    $image: String
    $largeImage: String
  ) {
    createProduct(
      data: {
        barcode: $barcode
        brand: $brand
        title: $title
        department: $department
        unitsPerCase: $unitsPerCase
        size: $size
        uom: $uom
        price: $price
        discountPrice: $discountPrice
        discountQty: $discountQty
        location: $location
        casesAvailable: $casesAvailable
        buyingLimit: $buyingLimit
        casesPerRow: $casesPerRow
        casesPerSkid: $casesPerSkid
        expDate: $expDate
        comments: $comments
        image: $image
        largeImage: $largeImage
        status: "ACTIVE"
      }
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    barcode: '044397265',
    brand: 'Kraft',
    title: 'Macaroni & Cheese Triple Cheese',
    department: 'Dry-Groceries',
    unitsPerCase: 6,
    size: 4,
    uom: 'ct.',
    price: 4.25,
    discountPrice: 3.5,
    discountQty: 100,
    expDate: '',
    location: '138B',
    casesAvailable: 500,
    buyingLimit: 250,
    casesPerRow: 15,
    casesPerSkid: 150,
    comments: 'This mac and cheese is the bees knees',
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  resetInitialState = () => {
    this.setState({
      barcode: '',
      brand: '',
      title: '',
      department: '',
      unitsPerCase: '',
      size: '',
      uom: '',
      price: '',
      discountPrice: '',
      discountQty: '',
      expDate: '',
      location: '',
      casesAvailable: '',
      buyingLimit: '',
      casesPerRow: '',
      casesPerSkid: '',
      comments: '',
    });

    window.scrollTo(0, 0);
  };

  // formats money before it goes into the database
  formatNewMoney = () => {
    const price = this.state.price * 100;
    const discountPrice = this.state.discountPrice * 100;
    this.setState({ price, discountPrice });
  };

  render() {
    return (
      <CreateItemStyles>
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
          {(createProduct, { loading, error }) => (
            <Form
              className="new-wholesale-item-form"
              autoComplete="off"
              onSubmit={async e => {
                e.preventDefault();

                await this.formatNewMoney();
                const res = await createProduct();

                this.resetInitialState();
                document.querySelector('#barcode').focus();
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h4>Add New Product</h4>
                <div className="form-row whs info">
                  <div className="row-fourth">
                    <label htmlFor="barcode">
                      <h6>Barcode</h6>
                    </label>
                    <input
                      type="text"
                      id="barcode"
                      name="barcode"
                      className="whs-field"
                      value={this.state.barcode}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="brand">
                      <h6>Brand</h6>
                    </label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      className="whs-field"
                      value={this.state.brand}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row-half">
                    <label htmlFor="title">
                      <h6>
                        Description <span className="asterisk">*</span>
                      </h6>
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="whs-field required"
                      value={this.state.title}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row whs info">
                  <div className="row-fourth">
                    <label htmlFor="department">
                      <h6>
                        Department <span className="asterisk">*</span>
                      </h6>
                    </label>
                    <div className="select-menu">
                      <select
                        id="department"
                        name="department"
                        className="whs-field"
                        value={this.state.department}
                        onChange={this.handleChange}
                        required
                      >
                        <option value="Dry-Groceries">Dry Groceries</option>
                        <option value="Frozen">Frozen</option>
                      </select>
                    </div>
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="unitsPerCase">
                      <h6>
                        Units <span className="asterisk">*</span>
                      </h6>
                    </label>
                    <input
                      type="number"
                      id="unitsPerCase"
                      name="unitsPerCase"
                      className="whs-field required"
                      value={this.state.unitsPerCase}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="size">
                      <h6>
                        Size <span className="asterisk">*</span>
                      </h6>
                    </label>
                    <input
                      type="number"
                      id="size"
                      name="size"
                      className="whs-field required"
                      value={this.state.size}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="uom">
                      <h6>
                        UOM <span className="asterisk">*</span>
                      </h6>
                    </label>
                    <div className="select-menu">
                      <select
                        className="whs-field"
                        name="uom"
                        id="uom"
                        value={this.state.uom}
                        onChange={this.handleChange}
                        required
                      >
                        <option value="oz.">oz.</option>
                        <option value="ct.">ct.</option>
                      </select>
                    </div>
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="price">
                      <h6>
                        Price <span className="asterisk">*</span>
                      </h6>
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      className="whs-field required"
                      value={this.state.price}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="discountPrice">
                      <h6>Discount</h6>
                    </label>
                    <input
                      type="number"
                      id="discountPrice"
                      name="discountPrice"
                      className="whs-field"
                      value={this.state.discountPrice}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="discountQty">
                      <h6>Discount Qty</h6>
                    </label>
                    <input
                      type="number"
                      id="discountQty"
                      name="discountQty"
                      className="whs-field"
                      value={this.state.discountQty}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-row whs info">
                  <div className="row-fourth">
                    <label htmlFor="expDate">
                      <h6>Exp. Date</h6>
                    </label>
                    <DayPickerInput
                      value={this.state.expDate}
                      formatDate={formatDate}
                      parseDate={parseDate}
                      placeholder=""
                      onDayChange={day => this.setState({ expDate: day })}
                    />
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="location">
                      <h6>Location</h6>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="whs-field"
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="casesAvailable">
                      <h6>
                        Cases <span className="asterisk">*</span>
                      </h6>
                    </label>
                    <input
                      type="number"
                      name="casesAvailable"
                      id="casesAvailable"
                      className="whs-field required"
                      required
                      value={this.state.casesAvailable}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="buyingLimit">
                      <h6>Buying Limit</h6>
                    </label>
                    <input
                      type="number"
                      id="buyingLimit"
                      name="buyingLimit"
                      className="whs-field required"
                      value={this.state.buyingLimit}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="casesPerRow">
                      <h6>Cases / Row</h6>
                    </label>
                    <input
                      type="number"
                      id="casesPerRow"
                      name="casesPerRow"
                      className="whs-field"
                      value={this.state.casesPerRow}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row-fourth">
                    <label htmlFor="casesPerSkid">
                      <h6>Cases / Skid</h6>
                    </label>
                    <input
                      type="number"
                      id="casesPerSkid"
                      name="casesPerSkid"
                      className="whs-field"
                      value={this.state.casesPerSkid}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-row whs info">
                  <div className="row-full">
                    <label htmlFor="comments">
                      <h6>Comments</h6>
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows="2"
                      className="whs-row whs-field"
                      value={this.state.comments}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="form-footer">
                  <div className="image-area">
                    <Icon name="camera" />
                    <img id="new-whs-img-holder" src="" />
                    <input type="file" name="new_image" id="new-whs-img" />
                  </div>
                  <div className="form-btns">
                    <div id="submit-new-batch-container" />
                    <Btn type="submit" id="submit" name="submit">
                      Add Item
                    </Btn>
                    <Btn
                      type="cancel"
                      onClick={e => {
                        e.preventDefault();
                        this.resetInitialState();
                      }}
                    >
                      Cancel
                    </Btn>
                  </div>
                </div>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </CreateItemStyles>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
