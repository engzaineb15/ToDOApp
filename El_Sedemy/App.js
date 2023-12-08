import axios from 'axios'
import * as React from 'react'
 import { Text, View, StatusBar, TouchableOpacity, Modal, TextInput, ScrollView, ActivityIndicator, Image} from 'react-native'

 
 export default class App extends React.Component {

    constructor(props) {
      super(props)
  
      this.state = {
        
        arr: [
          // {
          //   New_item: 'November Retail Sales and Manufacturing Declines Point to Slowing Economy - The Wall Street Journal',
          //   desc:"-used ROS project."
          // }, {
          //   New_item: 'shahen',
          //   desc: "hoppers spent less in November on holiday-related items and autos as Fed continued raising rates"
          // }, {
          //   New_item: 'Benz',
          //   desc: 50000
          // },

          // {
          //   New_item: 'Benz',
          //   desc: 50000
          // },
          // {
          //   New_item: 'Benz',
          //   desc: 50000
          // },

        ],
        modalData: {
          item_Name: '',
          item_desc: ''
        },
        
        modalVis: false,

        // open_index: -1,
     
        // newName_inp: '',
        // newPriceInp: ''

      }
  
  
    }



getData(){

 axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2e2cae69481e45e3b7ce6efc95065776").then(res=>{
  
 if(res.status == 200){
 console.log(res.data)
}

 })


}

     render() {

        return (
            <>
      <View
      
      style={{
        backgroundColor: '#342b4a',
        width: '100%',
        height: '100%',
      }}>
         <Text
                          
                          style={{
                    
                          fontSize: 25,
                         fontWeight:'600',
                          color: '#ddd',
                    paddingLeft:130,
                    paddingTop:30
                    
                    
                      }}>Michael,</Text>



<Text

style={{

fontSize: 23,
fontWeight:'400',
color: '#ddd',
// textAlign : 'right',
paddingLeft:130,
paddingTop:7

}}>Welcome back!</Text>

<View
       style={{
                            backgroundColor: '#ddd',
                            marginTop: -83,
                          width: 10,
                         height: 55,
                            borderColor: '#DDD',
                        //   borderRadius :15,
                            borderWidth:50,
                            borderRightWidth:50,
                         marginLeft:10,
                        
                         borderTopLeftRadius:60,
                         borderTopRightRadius:60,
                         borderBottomRightRadius:60,
                         borderBottomLeftRadius:60

                        }}>

   </View>

              
</View>


        <View


       style={{
                            backgroundColor: '#ddd',
                            marginTop: -600,
  
                          width: 400,
                         height: 600,
                       
                        
                          borderTopLeftRadius:60,
                        borderTopRightRadius:60,
                       
              
              
              }}>
                <Text
                     style={{

                         fontSize: 25,
                        fontWeight:'800',
                         color: '#565264',
                   marginTop :30,
                   marginLeft:40
                     }}>latest news</Text>


                
                <View

              style={{
                                   backgroundColor: '#7184fe',
                                  marginVertical:10,
                              alignSelf:'center',
                             
                                 width: 360,
                                height: 220,
                              borderTopLeftRadius:40,
                             borderTopRightRadius:40,
                               borderBottomRightRadius:40,
                                borderBottomLeftRadius:40
   
                     }}><Text
                     style={{

                         fontSize: 20,
                        fontWeight:'600',
                         color: '#ddd',
                   marginTop :25,
                   marginLeft:40
                     }}>Top business in the US</Text>

<Text
                     style={{

                         fontSize: 19,
                        fontWeight:'400',
                         color: '#ddd',
                   marginTop :30,
                   marginLeft:40
                     }}>author            Jeanne Sahadi </Text>

<Text
                     style={{

                         fontSize: 32,
                        fontWeight:'700',
                         color: '#ddd',
                   marginTop :30,
                   marginLeft:40
                     }}
                 >$1500</Text>





</View>




<View
style={{

  marginVertical:10,
   alignSelf:"flex-start",
   paddingHorizontal:10,
//backgroundColor:"#09f"
  
 }}
>
<Text
                     style={{

                      fontSize: 25,
                      fontWeight:'700',
                         color: '#000',
                        textAlign : 'left',
                  
                     }}>All news</Text>

</View>







<ScrollView  showsVerticalScrollIndicator={false}>
  <View
  
style={{

  marginVertical:10,

 //backgroundColor:"#00f",
 paddingHorizontal:10,

 
}} > 

                   {this.state.arr.map((itemm,indexx)=>
                       <>


<View

style={{

  marginTop:10,
  flexDirection:"row",
  //backgroundColor:"#0f0",
  height:130
 
}}>


<View

style={{
                                   backgroundColor: '#000',
                               width: 100,
                                height: 100,
                              borderTopLeftRadius:20,
                             borderTopRightRadius:20,
                               borderBottomRightRadius:20,
                                borderBottomLeftRadius:20,

                                
                }}/>


<View

style={{

  marginLeft:10,
//  backgroundColor:"#00f",
  height:130
 
}}>

<Text
                     style={{

                      width:260,
                      fontSize: 13,
                      fontWeight:'700',
                         color: '#000',
                        textAlign : 'left',
      
                     }}>{itemm.New_item}</Text>
<View
style={{

  
  //backgroundColor:"#ff0",
  height:80
 
}}>

<Text
                     style={{

                      width:200,
            
                      fontSize: 11,
                      fontWeight:'300',
                         color: '#000',
                        textAlign : 'left',
                       marginTop: 8,
  
                     }}>{itemm.desc}</Text>


</View>
</View>
</View>


              </>
              )}



</View>
</ScrollView>


<Modal
visible={this.state.modalVis}
onRequestClose={() => {
  this.setState({ modalVis: false })
}} >



<View
      
      style={{
        backgroundColor: '#342b4a',
      flex:1
      }}>

  <View
  
  
  >



  </View>



</View>


</Modal>

          

                     
                    

</View>
</>
);

}}