import React,{Component} from 'react';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            item:"",
            todoitems:[]
        }

    }
    onChangeHandler =(event)=>{
        const inputValue= event.target.value;
        this.setState({
            item:inputValue
        })
    }
    addItems=()=>{
        const inputValue= this.state.item;
        const itemInstance = this.state.todoitems;
        itemInstance.push(inputValue);
        this.setState({
            todoitems:itemInstance,
            item:""


        })

    }
    delete=(event)=>{
        const id=event.target.id;
        const itemInstance= this.state.todoitems;
        itemInstance.splice(id,1);
        this.setState({
            todoitems:itemInstance
        })
        // console.log(id);
    }

    render(){
        const itemList=this.state.todoitems.map((event,index)=>
            <li key={index}>{event}<span id={index} onClick={this.delete}>X</span></li>
        )
        return(
            <div>
                <div className="header">React js Todo App</div>
                <div className="body">
                    <ul>
                        {itemList}
                    </ul>
                </div>
                <div className="footer">
                    <input type="text" value={this.state.item}  onChange={this.onChangeHandler}></input>
                    
                    <button onClick={this.addItems}>+</button> 
                </div>
            </div>
        )
    }
}
export default Todo;