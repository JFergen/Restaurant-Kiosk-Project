import React from 'react'
import { View,Text } from 'react-native'
import {Card,CardSection,Input,Button} from '../common'
import Tables from '../Tables'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:false
        }
    }
    render(){
        if(this.state.isLogin){
            return (
                <Tables/>
            )
        }else{
            return (
                <View  >
                    <View style={{marginTop:250}}>
                    <Card>
                        <CardSection>
                            <Input label='Username' placeholder='@user1234'/>
                        </CardSection>
    
                        <CardSection>
                            <Input label='Password' placeholder='password'/>
                        </CardSection>
    
                        <CardSection>
                            <Button onPress={()=>this.setState({isLogin:true})}>Login</Button>
                        </CardSection>
                    </Card>
                    </View>
                </View>
            )
        }
    }
}

export default Login