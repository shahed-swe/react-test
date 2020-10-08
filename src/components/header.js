import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// import {Navbar,NavDropdown,Nav,Form,Button,FormControl} from 'react-bootstrap'
import {CtxConsumer} from '../index'

class Header extends Component{
    render(){
        return(
            <CtxConsumer>
                {(context) => (
                    <div>
                        {context.students.map(student => {
                            return (
                                <div key={student}>
                                    <h1>{student}</h1>
                                </div>
                            )
                        })}
                    </div>
                )}
            </CtxConsumer>
        )
    }
}

export default Header;