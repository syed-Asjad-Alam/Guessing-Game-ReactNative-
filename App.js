import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EndScreen = (props) => {
  return(
    <View style={styles.mainscreen}>
      <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold',color:'green',padding:15}}>Score:{props.getmainscreenprops[0]}</Text>
      <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold',color:'green',padding:15}}>Actual Number:{props.getmainscreenprops[1]}</Text>
      <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold',color:'green',padding:15}}>Number of Hints:{props.getmainscreenprops[2]}</Text>
      <View style={styles.threebuttons}>
        <TouchableOpacity style={styles.guesshint} onPress={() => props.call(1)}><Text style={styles.maintext}>Play Again</Text></TouchableOpacity>
        <TouchableOpacity style={styles.guesshint} onPress={() => props.call(0)}><Text style={styles.maintext}>Finish</Text></TouchableOpacity>
      </View> 
    </View>

  )
}

const MainScreen = (props) => {
  const [attempts,setattempts] = React.useState(5)
  const [score,setscore] = React.useState(0)
  const [uinput,setuinput] = React.useState(0)
  const [rnumber,setrnumber] = React.useState(Math.floor(Math.random() * 101))
  const [hcount,sethcount] = React.useState(0)

  // React.useEffect(() => {
  //   if (uinput >= 0 && uinput <= 100) {
  //     setuinput(uinput)
  //   }
  // })
 
  const update = (num) => {
  
    
      uinput == 0 ? setuinput(num) : setuinput(uinput.toString() + num)
    
      
    
  }

  



  
  
  const  checknum = () => {
    if (uinput == rnumber){
      setscore(score - 2)
      sethcount(hcount + 1)
      alert("You guess is the right number")
    }
    else if (uinput > rnumber) {
      sethcount(hcount + 1)
      setscore(score - 2)
      alert("Your Guess is larger than the actual number")
    }
    else if (uinput < rnumber) {
      sethcount(hcount + 1)
      setscore(score - 2)
      alert("Your Guess is smaller than the actual number")
    }

  }
  const passinfo = (score, rnumber, hcount) => {
    let a = []
    a[0] = score
    a[1] = rnumber
    a[2] = hcount
    props.setmainscreenprops(a)

  }
  const guessbuttonpressed = () => {

    if (attempts != 0) {
      if (uinput == rnumber) {
        setscore(score + 10)
        setattempts(attempts-1)
      }
      else {
        setattempts(attempts - 1)
      }
    }
    else {
      passinfo(score,rnumber,hcount)
      props.call(2)
    }
  }
  return(
    <View style={styles.mainscreen}>
      <View style={styles.threebuttons}>
        <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold',color:'green',padding:15}}>Attempts:{attempts}</Text>
        <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold',color:'green',padding:15}}>Score:{score}</Text>
      </View>
      <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold',color:'green',padding:20}}>{uinput}</Text>
      <View style={styles.threebuttons}>
        <TouchableOpacity style={styles.maintouchable} onPress = {() => update(1)}><Text style={styles.maintext}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.maintouchable} onPress = {() => update(2)}><Text style={styles.maintext}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.maintouchable} onPress = {() => update(3)}><Text style={styles.maintext}>3</Text></TouchableOpacity>
      </View>
      <View style={styles.threebuttons}>
        <TouchableOpacity style={styles.maintouchable} onPress = {() => update(4)}><Text style={styles.maintext}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.maintouchable} onPress = {() => update(5)}><Text style={styles.maintext}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.maintouchable} onPress = {() => update(6)}><Text style={styles.maintext}>6</Text></TouchableOpacity>
      </View>
      <View style={styles.threebuttons}>
        <TouchableOpacity style={styles.maintouchable} onPress = {() => update(7)}><Text style={styles.maintext}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.maintouchable} onPress = {() => update(8)}><Text style={styles.maintext}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.maintouchable} onPress = {() => update(9)}><Text style={styles.maintext}>9</Text></TouchableOpacity>
      </View>
      <View style={styles.threebuttons}>
        <TouchableOpacity style={styles.maintouchable}  onPress = {() => setuinput(Math.floor(uinput/10))}><Text style={styles.maintext}>X</Text></TouchableOpacity>
        <TouchableOpacity style={styles.maintouchable}  onPress = {() => update(0)}><Text style={styles.maintext}>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.maintouchable}  onPress = {() => setuinput(0)}><Text style={styles.maintext}>C</Text></TouchableOpacity>
      </View>
      <View style={styles.threebuttons}>
        <TouchableOpacity style={styles.guesshint} onPress={() => guessbuttonpressed()}><Text style={styles.maintext}>Guess</Text></TouchableOpacity>
        <TouchableOpacity style={styles.guesshint} onPress={() => checknum()}><Text style={styles.maintext}>Hint</Text></TouchableOpacity>
      </View>
      
    
    </View>
  )
}

const StartScreen = (props) => {
  return (
    <View style={styles.startscreen}>
      <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold',color:'green',padding:20}}>Welcome to the guessing App</Text>
      <TouchableOpacity style={styles.starttouchable} onPress={() => props.call(1)}><Text style={{fontSize:22,textAlign:'center',fontWeight:'bold',color:'white'}}>Start</Text></TouchableOpacity>
    </View>
  )

}

const App = () => {
  const [isStartscreen,setStartscreen] = React.useState(0)
  const [isMainscreen,setMainscreen] = React.useState(0)
  const [isEndscreen,setEndscreen] = React.useState(0)
  const [getmainscreenprops,setmainscreenprops] = React.useState([])

  const updatescreens = (num) => {
    if (num == 0) {
      setStartscreen(0)
      setMainscreen(0)
      setEndscreen(0)
    }
    else if (num == 1) {
      setStartscreen(0)
      setMainscreen(1)
      setEndscreen(0)
    }
    else if (num == 2) {
      setStartscreen(0)
      setMainscreen(1)
      setEndscreen(2)
    }
  }
  return (
    <View style={styles.forallscreens}>
      {isStartscreen == 0 && isMainscreen == 0 && isEndscreen == 0 && <StartScreen call ={updatescreens}/>}
      {isStartscreen == 0 && isMainscreen == 1 && isEndscreen == 0 && <MainScreen setmainscreenprops={setmainscreenprops}  call = {updatescreens}/>}
      {isStartscreen == 0 && isMainscreen == 1 && isEndscreen == 2 && <EndScreen getmainscreenprops={getmainscreenprops} call = {updatescreens} />}
      
    </View>
  )
}

const styles = StyleSheet.create({
  forallscreens:{
    flex: 1,
    justifyContent: 'center'
  },
  startscreen:{
    justifyContent:'center',
    flex:1,
    textAlign:'center'
  },
  mainscreen:{
    justifyContent:'center',
    flex:1,
    textAlign:'center',
    alignItems:'center'
  },
  starttouchable:{
    backgroundColor:'green',
    width:'50%',
    marginLeft:'25%',
    borderWidth:4,
    borderRadius:5,
    borderColor:'#3CB82F',
    padding:10
  },
  threebuttons:{
    flexDirection:'row',
    alignItems:'center'


  },
  maintouchable:{
    backgroundColor:'#3CB82F',
    borderRadius:100,
    width:50,
    height:50,
    elevation:10,
    textAlign:'center',
    borderColor:'#3CB82F',
    margin:10,
    paddingTop:12
  },
  maintext:{
    textAlign:'center',
    fontWeight:'bold',
    alignItems:'center',
    fontSize:18,
    color:'white'
  },
  guesshint:{
    backgroundColor:'green',
    borderRadius:5,
    width:100,
    height:50,
    elevation:10,
    textAlign:'center',
    borderColor:'green',
    margin:10,
    marginTop:80,
    paddingTop:12
  }

})

export default App
