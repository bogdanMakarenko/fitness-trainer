import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Aims, MeasuredData, ErrorLoadingData } from 'Components';
import { Contraindications, FullName } from 'Containers';
import { connect } from 'react-redux';
import { aboutUsGetData, closeErrorMessage } from '../../redux/actions';
import { Card, Icon, Image, Button, Header, Loader, Dimmer } from 'semantic-ui-react'
import './AboutUs.scss';

class AboutUs extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.object,
    errorMessage: PropTypes.bool,
    aboutUsGetData: PropTypes.func,
    aboutUsGetDataEnd: PropTypes.func,
    closeErrorMessage: PropTypes.func,
  };

  componentDidMount() {
    this.props.aboutUsGetData();
  };

  render() {
    return (this.props.data
      ? <div className='about-us'>
        <div className='columns-wrap'>
          <FullName
              fields={this.props.data.fullNameFields}
              path={this.props.data.fullNameAvatar}
              formData={this.props.data.formData}
          />
          <MeasuredData dataFields={this.props.data.dataFields} />
        </div>
        <div className='add-info-wrap'>
          <Aims aimsFormData={this.props.data.aimsFormData} />
          <Contraindications />
        </div>
        {this.props.errorMessage ?
          <ErrorLoadingData closeMessage={this.props.closeErrorMessage} /> : null}
      </div>
      : <Dimmer active inverted>
          <Loader inverted content='Загрузка' />
        </Dimmer>
    );
  }
}

const mapStateToProps = state => ({
  data: state.aboutUsGetData.data,
  errorMessage: state.aboutUsSendDataForm.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  aboutUsGetData: () => dispatch(aboutUsGetData()),
  closeErrorMessage: data => dispatch(closeErrorMessage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
