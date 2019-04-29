import React, { Component } from 'react'
import { FlatList,View} from 'react-native';
import Header from '../Header/Header'
import StyleSheet from './ContactsStyle'
import { ListItem } from 'react-native-elements'
import Contact from './Contact/Contact'
import DataContact from '../helpers/Contact/ContactData'
import Footer from '../Footer/Footer'
export default class Contacts extends Component {
    // state = {
    //     search: '',
    //   };
    
    //   updateSearch = search => {
    //     this.setState({ search });
    //   };
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       contact: undefined,
  //     }
  //   }
  //   componentDidMount() {
  //       this.setState({
  //         contact: data,
  //       })
      
  //   } 
  //   _displayContact() {
  //     if (this.state.contact != undefined) {
  //       return (
  //         <View>
  //             <Header title='Contacts'/>
  //             <FlatList
  //             data={DataContact}
  //             keyExtractor={(item) => item.id.toString()}
  //             renderItem={({item}) => <Contact contact={item} />}
  //             />
  //             <Footer/>
  //         </View>
  // )
  //     }
  //   }
  render() {
    // const { search } = this.state.search
    return (
            <View>
                <Header title='Contacts'/>
                <View style={StyleSheet.global}>
                  <FlatList
                  data={DataContact}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => <Contact contact={item} />}
                  />
                </View>
              <Footer/>
            </View>
    )
  }
}