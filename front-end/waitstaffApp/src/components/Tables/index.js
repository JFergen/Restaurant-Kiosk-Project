import React from 'react'
import { View,Text,ScrollView,FlatList } from 'react-native'
import {Card,CardSection,Input,Button,Header} from '../common'


class Tables extends React.Component{
    render(){
        return(
            <ScrollView>
                <Header headerText='Orders'/>
                <Card>
                    <CardSection>
                        <View style={{flexDirection:"row",justifyContent:'space-between',flex:1}}>
                        <View style={{borderWidth:1,padding:50}}>
                            <Text >Table 01</Text>
                            <Text style={{alignSelf:"flex-end",color:"red",backgroundColor:"red",borderRadius:15,fontSize:20}}>red</Text>
                        </View>
                        <View style={{borderWidth:1,padding:50}}>
                            <Text>Table 02</Text>
                            <Text style={{alignSelf:"flex-end",marginTop:5,color:"blue",borderWidth:1,padding:3}}>Refill</Text>
                        </View>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={{flexDirection:"row",justifyContent:'space-between',flex:1}}>
                        <View style={{borderWidth:1,padding:50}}>
                            <Text >Table 03</Text>
                        </View>
                        <View style={{borderWidth:1,padding:50}}>
                            <Text>Table 04</Text>
                        </View>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={{flexDirection:"row",justifyContent:'space-between',flex:1}}>
                        <View style={{borderWidth:1,padding:50}}>
                            <Text >Table 05</Text>
                        </View>
                        <View style={{borderWidth:1,padding:50}}>
                            <Text>Table 06</Text>
                        </View>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={{flexDirection:"row",justifyContent:'space-between',flex:1}}>
                        <View style={{borderWidth:1,padding:50}}>
                            <Text >Table 07</Text>
                        </View>
                        <View style={{borderWidth:1,padding:50}}>
                            <Text>Table 08</Text>
                        </View>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={{flexDirection:"row",justifyContent:'space-between',flex:1}}>
                        <View style={{borderWidth:1,padding:50}}>
                            <Text >Table 09</Text>
                        </View>
                        <View style={{borderWidth:1,padding:50}}>
                            <Text>Table 10</Text>
                        </View>
                        </View>
                    </CardSection>
                </Card>
            </ScrollView>
        )
    }
}

export default Tables