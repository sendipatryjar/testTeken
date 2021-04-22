import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import styles from './detailScreen.style';
import {connect} from 'react-redux';
import {Add, Remove, GetBook} from '../../actions/actions';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      key: 'ISBN:9780980200447',
    };
    const {params} = this.props.navigation.state;
    const item = params ? params.item : null;
    this.state.item = item.key;
  }

  async componentDidMount() {
    await this.props.GetBook(this.state.item);
   
  }
  pressIcon() {
    this.props.navigation.goBack();
  }

  render() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffd500'}}>
            <View style={styles.headerTitle}>
              <Text style={styles.sectionTitle}>Detail Book</Text>
              {this.props.loading === true ? (
                <ActivityIndicator
                  style={{marginTop: 20}}
                  size="large"
                  color={'blue'}
                />
              ) : (
              
                this._renderDetail()
               
              )}
            </View>
   
        </SafeAreaView>
     
    );
  }
  _renderDetail() {
    if (this.props.detailBook != undefined || this.props.detailBook != null) {
      return (
        <ScrollView style={{ flex: 0, paddingBottom: 20, marginLeft: 20, marginRight: 20}}  showsVerticalScrollIndicator={true}>
          <View style={{alignItems: 'center', flex: 1}}>
            <Image
              source={{uri: this.props.detailBook.thumbnail_url}}
              style={styles.imageSize}
            />
            <Text
              style={styles.sectionTitle}>
              {this.props.detailBook.details.title}
            </Text>
            
            <Text style={styles.sectionDesc}>{this.props.detailBook.details.description}</Text>
            <Text>{this.state.item.location}</Text>
            <Text>{this.props.detailBook.details.number_of_pages} pages</Text>
            <Text>Weight : ({this.props.detailBook.details.weight})</Text>
            <Text>({this.props.detailBook.details.physical_dimensions})</Text>
            
            <Text
              style={
                this.state.item.status === 'paid entry'
                  ? {color: '#EB5757', fontWeight: 'bold'}
                  : {color: '#2F80ED', fontWeight: 'bold'}
              }>
              {this.props.detailBook.details.by_statement}
            </Text>
          </View>
         </ScrollView>
      );
    }
  }
}

const mapStateToProps = ({landing}) => {
  const {detailBook, loading} = landing;
  return {
    detailBook,
    loading,
  };
};

export default connect(mapStateToProps, {Add, Remove, GetBook})(DetailScreen);
