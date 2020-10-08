import React, {Component} from 'react';

class Footer extends Component{

    state = {
        name: "Shahed",
        age: 15
    }

    change = (evt) =>{
        // console.log(this.state.name)
         console.log('Changed',evt.target.value)
         this.setState({name: evt.target.value})
    }

    componentDidMount(){
        this.setState({name: 'Talukder'})
    }

    CreateAlert(){
        alert("This is not gonna be me");
    }

    

    render(){

        const names = ['shahed', 'ashik', 'azad', 'razib']
        return(
            <React.Fragment>
                <h1 onClick={this.CreateAlert}>This is our {this.props.info}</h1>
                <h2>This is our {this.props.take}</h2>
                <p onClick={this.props.myAlert}>Click Here</p>
                <input value={this.state.name} type="text" onChange={this.change}/>
                {names.map(name => {
                    return(
                        <div key={name}>
                            <h1>{name}</h1>
                        </div>
                    ) 
                })}
            </React.Fragment>
        )
    }
}

class ShowMessage extends Component{

    state = {
        age: 15
    }

    render(){
        if(this.props.toShow){
            return (
                <React.Fragment>
                {this.state.age === 15 ? (
                    <h2>His age is {this.state.age}</h2>
                ) : (
                    <h2>His age is {"Above 15"}</h2>
                )}
                <h1>Hello this function exist</h1>
                </React.Fragment>
            );
        }else{
            return <h2>This function doesn't exists</h2>
        }

    }
}

export {Footer, ShowMessage};