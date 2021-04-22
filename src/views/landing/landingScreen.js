import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import styles from './landingScreen.style';
import {connect} from 'react-redux';
import {Add, Remove} from './../../actions/actions';
import {Button, Icon, Input} from 'react-native-elements';
import Modal from 'react-native-modal';

class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false,
      modalTambah: false,
      edit: false,
      hapus: false,
      tambah: false,
      name: '',
      nameBook: '',
      create: '',
      publish: '',
      key: 'ISBN:9780980200447',
      status: '',
      weight: '',
      image: 'https://covers.openlibrary.org/b/id/5546156-S.jpg',
      grid: false,
      myList: [],
      listAkun: [],
      index: 0,
      routes: [
        {key: 'first', title: 'List Book'},
        {key: 'second', title: 'Konser Saya'},
      ],
      tabHeader: [
        {
          name: 'List Book',
        },
        {
          name: 'Konser Saya',
        },
      ],
      eventList: [
        {
          name: 'Slow Reading',
          create: 'by John Miedema.',
          publish: 'First published in 2009',
          key: 'ISBN:9780980200447',
          weight: '1 grams',
          image: 'https://covers.openlibrary.org/b/id/5546156-S.jpg',
        },
        {
          name: 'Concrete mathematics',
          create: 'Ronald L. Graham, Donald E. Knuth, Oren Patashnik.',
          publish: 'First published in 2009',
          key: 'ISBN:0201558025',
          weight: '1 grams',
          image: 'https://covers.openlibrary.org/b/id/135182-S.jpg',
        },
        {
          name: 'The adventures of Tom Sawyer',
          create: 'Mark Twain ; with an introduction by Robert S. Tilton.',
          publish: 'First published in 1997',
          key: 'ISBN:0451526538',
          weight: '1 grams',
          image: 'https://covers.openlibrary.org/b/id/295577-S.jpg',
        },
        {
          name: 'Slow Reading',
          create: 'by John Miedema.',
          publish: 'First published in 2009',
          key: 'ISBN:9780980200447',
          weight: '1 grams',
          image: 'https://covers.openlibrary.org/b/id/5546156-S.jpg',
        },
        {
          name: 'Slow Reading',
          create: 'by John Miedema.',
          publish: 'First published in 2009',
          key: 'ISBN:9780980200447',
          weight: '1 grams',
          image: 'https://covers.openlibrary.org/b/id/5546156-S.jpg',
        },
        
      ],
    };
    const {params} = this.props.navigation.state;
    const nameLogin = params ? params.nameLogin : null;
    this.state.name = nameLogin;
  }
  componentDidMount() {
    if (this.props.bookList != null) {
      this.setState({eventList: this.props.bookList});
      for (let i = 0; this.props.bookList.length > i; i++) {
        if (this.props.bookList[i].name === this.state.name) {
          this.setState({myList: this.props.bookList[i].array});
        }
      }
    }
  }

  pressIcon() {
    if (this.state.grid) {
      this.setState({grid: !this.state.grid});
    } else {
      this.setState({grid: !this.state.grid});
    }
  }

  async pressEvent(item, value) {
    this.setState({modalEdit: true, index: item, nameBook: value.name, create: value.create, image: value.image, publish: value.publish});
    // const data = this.state.listAkun;
    // const test = data.find((data) => data.name === this.state.name);
    // if (test != undefined) {
    //   const newData = data.map((obj) => {
    //     if (obj.name === this.state.name)
    //       return {
    //         ...obj,
    //         name: this.state.name,
    //         array: obj.array.concat(item),
    //       };
    //     return obj;
    //   });
    //   await this.props.Add(newData);
    //   const {categoryListId} = this.props;

    //   this.componentDidMount();
    //   alert('Data Telah ditambahkan');
    // } else {
    //   const data = {
    //     name: this.state.name,
    //     array: [item],
    //   };
    //   const array = this.state.listAkun.concat(data);
    //   await this.props.Add(array);
    //   const {categoryListId} = this.props;
    //   for (let i = 0; categoryListId.length > i; i++) {
    //     if (categoryListId[i].name === this.state.name) {
    //       this.setState({
    //         eventList: categoryListId[i].array,
    //       });
    //       this.componentDidMount();
    //       alert('Data Telah ditambahkan');
    //     }
    //   }
    // }
  }
  pressDetail(item) {
    this.props.navigation.navigate('DetailScreen', {item: item});
  }

  async _eventEdit (){
    let list = this.state.eventList;
    list[this.state.index].name = this.state.nameBook
    list[this.state.index].create = this.state.create
    list[this.state.index].publish = this.state.publish
    await this.props.Add(list);
    this.setState({ modalEdit: false })
  }

  async _eventTambah (){
    const data = {
      name : this.state.nameBook,
      create : this.state.create,
      publish : this.state.publish,
      key: 'ISBN:9780980200447',
      weight: '1 grams',
      image: 'https://covers.openlibrary.org/b/id/5546156-S.jpg',
    }
    this.props.Add(this.state.eventList.concat(data))
    this.setState({ modalTambah: false, eventList: this.state.eventList.concat(data)  })
  }

  async deleteList(index) {
    let list = this.state.eventList;
    const iList = list.findIndex((item, i) => {
      return i === index;
    });
    list.splice(iList, 1);
    let data = this.state.eventList;
    const newData = data.map((obj) => {
      if (obj.name === this.state.name)
        return {
          ...obj,
          name: this.state.name,
          array: list,
        };
      return obj;
    });
    await this.props.Add(newData);
  }

  handleIndexChange = async (index) => {
    this.setState({index});
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Modal
          backdropOpacity={0.2}
          isVisible={this.state.modalTambah}
          style={styles.bottomModal}>
          <View
            style={{
              width: 250,
              flexDirection: 'column',
              backgroundColor: 'white',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 20,
              paddingBottom: 20,
              borderRadius: 6,
            }}>
            <View
              style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
              <Input
                placeholder="Title"
                value={this.state.nameBook}
                onChangeText={(value) => this.setState({nameBook: value})}
              />
              <Input
                placeholder="Create"
                value={this.state.create}
                onChangeText={(value) => this.setState({create: value})}
              />
              <Input
                placeholder="Publish Date"
                value={this.state.publish}
                onChangeText={(value) => this.setState({publish: value})}
              />
              <Button
            onPress={() => this._eventTambah()}
            title="Save"
            buttonStyle={{marginRight: 10, backgroundColor: '#27AE60'}}
          />
            </View>
          </View>
        </Modal>
        <Modal
          backdropOpacity={0.2}
          isVisible={this.state.modalEdit}
          style={styles.bottomModal}>
          <View
            style={{
              width: 250,
              flexDirection: 'column',
              backgroundColor: 'white',
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 20,
              paddingBottom: 20,
              borderRadius: 6,
            }}>
            <View
              style={{flex: 0, alignItems: 'center', justifyContent: 'center'}}>
              <Input
                placeholder="Title"
                value={this.state.nameBook}
                onChangeText={(value) => this.setState({nameBook: value})}
              />
              <Input
                placeholder="Create"
                value={this.state.create}
                onChangeText={(value) => this.setState({create: value})}
              />
              <Input
                placeholder="Publish Date"
                value={this.state.publish}
                onChangeText={(value) => this.setState({publish: value})}
              />
              <Button
            onPress={() => this._eventEdit()}
            title="Save"
            buttonStyle={{marginRight: 10, backgroundColor: '#27AE60'}}
          />
            </View>
          </View>
        </Modal>
        <View style={{flex: 0, alignItems: 'center'}}>
          <Icon
            raised
            name="user"
            type="font-awesome"
            color="#f50"
            onPress={() => console.log('hello')}
          />
          <Text style={{fontWeight: 'bold', fontSize: 14}}>
            Welcome {this.state.name}
          </Text>
        </View>
        {this._renderHeader()}
        {this.state.grid ? this._renderFlatlist() : this._renderFlat()}
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 20,
            backgroundColor: '#ffffff',
          }}>
          
        </View>
      </SafeAreaView>
    );
  }
  _renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
          marginTop: 10,
        }}>
        {this.state.name === 'Admin' || this.state.name === 'admin' ? (
          <Button
            onPress={() =>
              this.setState({
                hapus: this.state.hapus === true ? false : true,
                edit: false,
              })
            }
            title="Hapus"
            buttonStyle={{marginRight: 10, backgroundColor: '#27AE60'}}
          />
        ) : null}
        {this.state.name === 'Admin' || this.state.name === 'admin' ? (
          <Button
            onPress={() =>
              this.setState({
                edit: this.state.edit === true ? false : true,
                hapus: false,
              })
            }
            title="Edit"
            buttonStyle={{marginRight: 10, backgroundColor: '#EB5757'}}
          />
        ) : null}
        {this.state.name === 'Admin' || this.state.name === 'admin' ? (
          <Button
            onPress={() =>
              this.setState({modalTambah: true, nameBook: '', publish: '', create: ''})
            }
            title="Tambah"
            buttonStyle={{marginRight: 10, backgroundColor: '#ffd500'}}
          />
        ) : null}
        <Button
          title="Logout"
          buttonStyle={{marginRight: 10}}
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
      </View>
    );
  }

  _renderFlatlist() {
    return (
      <FlatList
        data={this.state.eventList}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.cardList}
            onPress={() => this.pressDetail(item)}>
            <Image source={{uri: item.image}} style={styles.imageSize} />
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            <Text>( {item.create} )</Text>
            <Text
              style={
                item.status === 'paid entry'
                  ? {color: '#EB5757', fontWeight: 'bold'}
                  : {color: '#2F80ED', fontWeight: 'bold'}
              }>
              {item.publish}
            </Text>
            {this.state.edit ? (
              <TouchableOpacity
                style={styles.buttonEdit}
                onPress={() => this.pressEvent(index, item)}>
                <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
                  {'Edit'}
                </Text>
              </TouchableOpacity>
            ) : null}
            {this.state.hapus ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.deleteList(index)}>
                <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
                  {'Hapus'}
                </Text>
              </TouchableOpacity>
            ) : null}
          </TouchableOpacity>
        )}
        key={'#'}
        numColumns={2}
        keyExtractor={(item, index) => '#' + index.toString()}
      />
    );
  }

  _renderFlat() {
    return (
      <FlatList
        data={this.state.eventList}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.cardList}
            onPress={() => this.pressDetail(item)}>
            <Image source={{uri: item.image}} style={styles.imageSize} />
            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
            <Text> ( {item.create} )</Text>
            <Text
              style={
                item.status === 'paid entry'
                  ? {color: '#EB5757', fontWeight: 'bold'}
                  : {color: '#2F80ED', fontWeight: 'bold'}
              }>
              {item.publish}
            </Text>
            <Text style={{ marginBottom: 10 }}> ( Book {index+1} )</Text>
            {this.state.edit ? (
              <TouchableOpacity
                style={styles.buttonEdit}
                onPress={() => this.pressEvent(index, item)}>
                <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
                  {'Edit'}
                </Text>
              </TouchableOpacity>
            ) : null}
            {this.state.hapus ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.deleteList(index)}>
                <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
                  {'Hapus'}
                </Text>
              </TouchableOpacity>
            ) : null}
          </TouchableOpacity>
        )}
        key={'_'}
        numColumns={1}
        extraData={this.state.eventList}
        ListFooterComponent={this.renderFooter.bind(this)}
        keyExtractor={(item, index) => '_' + index.toString()}
      />
    );
  }

  renderFooter() {
    return (
        <View style={styles.footer}>
            {this.renderButtonLoadMore()}
        </View>
    );
}
renderButtonLoadMore() {
          return (
              <Button
              title="Show More"
              onPress={() => this._loadMore()}
              buttonStyle={{marginRight: 10, marginLeft: 10, backgroundColor: '#27AE60'}} 
              />
          );
}
_loadMore(){
  this.setState({ eventList: this.state.eventList.concat(this.state.eventList) })
}
}

const mapStateToProps = ({landing}) => {
  const {bookList} = landing;
  return {
    bookList,
  };
};

export default connect(mapStateToProps, {Add, Remove})(LandingScreen);
