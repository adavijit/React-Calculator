import React, { Component } from 'react';
class Buttons extends Component {
state = {
    display: '',
    temp : '',
    result : 0
}
handleClick = e => {
  //  this.state.display = .
console.log(e.target.value);
this.setState({
    display : this.state.display + e.target.value
})
}
handleBack =() =>{
    let shortenedString = this.state.display.substr(0,(this.state.display.length -1));
    this.setState({
        display: shortenedString
    })
}
handleDelete =() =>{
    this.setState({
        temp : this.state.display,
        display: '',
    })
}
handleOperation=()=>{
    console.log("asd");
    try {
        if( this.isInt( eval( this.state.display )) )
        {
            if(( eval(this.state.display) || "" ) + "" =='')
            {
            this.setState({
                display: 0
            })
            }
            else{
                this.setState({
                    display: ( eval(this.state.display) || "" ) + ""
                })
            }
        }
        else{
            if(( eval(this.state.display) || "" ) + "" ==''){
            this.setState({
                display: 0.00
            })
            }
            else{
                this.setState({
                    display: ( eval(this.state.display).toFixed(2) || "" ) + ""
                })
            }
        }
        
    } catch (e) {
        this.setState({
            display: "error"
        })

    }
}
reset = () =>{
    if(this.state.temp!='')
    this.setState({
        display : this.state.temp
    })
}
isInt= n =>{
    return Number(n) === n && n % 1 === 0;
}




render(){
    return(
    <div className="container">

     
    <div className="calc-body">
    <div className="calc-screen">
        <div className="calc-operation">{this.state.temp}</div>
         <div className="calc-typed">{this.state.display}<span className="blink-me">_</span></div>
    </div>
    
                <div className="calc-button-row">
                <input className="button"  type="button" name="bttn7" value="7" onClick={this.handleClick}/>
                <input className="button" type="button" name="bttn8" value="8"  onClick={this.handleClick} />
                <input className="button" type="button" name="bttn9" value="9" onClick={this.handleClick}/>
                <input className="button l" type="button" name="bttnplus" value="+" onClick={this.handleClick}/>
                </div>
                <div className="calc-button-row">
                <input className="button" type="button" name="bttn4" value="4" onClick={this.handleClick}/>
                <input className="button" type="button" name="bttn5" value="5" onClick={this.handleClick}/>
                <input className="button" type="button" name="bttn6" value="6" onClick={this.handleClick}/>
                <input className="button l" type="button" name="bttnminus" value="-" onClick={this.handleClick}/>
                </div>
                <div className="calc-button-row">
                <input className="button" type="button" name="bttn1" value="1" onClick={this.handleClick}/>
                <input className="button" type="button" name="bttn2" value="2" onClick={this.handleClick}/>
                <input className="button" type="button" name="bttn3" value="3" onClick={this.handleClick}/>
                <input className="button l" type="button" name="bttnmulti" value="*" onClick={this.handleClick}/>
                </div>
                <div className="calc-button-row">
                <input className="button" type="button" name="bttndot" value="." onClick={this.handleClick}/>
                <input className="button" type="button" name="bttn0" value="0" onClick={this.handleClick}/>
                <input className="button l" type="button" name="bttnmod" value="%" onClick={this.handleClick}/>
                <input className="button l" type="button" name="bttndiv" value="/" onClick={this.handleClick}/><br/>
                </div>
                <div className="calc-button-row">
                <input className="button" type="button" name="bttnclear" onClick={this.reset} value="Re" />
                <input className="button c" type="button" name="bttnclear" onClick={this.handleDelete} value="CE" />
                <input className="button l" type="button" name="bttnclear" onClick={this.handleBack} value=" < " />

                <input className="button l" type="button" name="bttnEQL" value="="  onClick={this.handleOperation}/>
                </div>
     </div>

    
</div>
    );
}
}
export default Buttons;