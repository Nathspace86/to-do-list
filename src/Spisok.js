import { Component } from "react";


export class Spisok extends Component {

state = {

    userInput: "",
    spisokDel: []
}

onChangeEvent(e){
   this.setState({userInput: e})
}

addItem(item){
    if (item === "") {
        alert ("Пожалуйста добавьте в список!")
    } 
    else {
    let listArray = this.state.spisokDel;
    listArray.push(item);
    this.setState({spisokDel: listArray, userInput: ""})
}
}
crossedWord(event){
    const li = event.target;
    li.classList.toggle("crossed");
}

deleteItem () {
    let listArray = this.state.spisokDel;
    listArray = [];
    this.setState({spisokDel: listArray})
}

onFormSubmit(e) {
e.preventDefault();
}

render () {
    return (
        <div>
            <form onSubmit={this.onFormSubmit}>
        <div>
            <input className="list" 
            type="text" 
            placeholder="Добавьте дело в список..."
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
        </div>
        <div className="cta">
            <button className="btn" onClick={() => this.addItem(this.state.userInput)}>Добавить</button>
        </div>
        <ul>
            {this.state.spisokDel.map((item, index) => (
            <li onClick={this.crossedWord} key={index}>
             
            ✓   {item}</li>
            ))
        }
        </ul>
        <div className="ctaTwo">
        <button className="btnTwo" onClick={() => this.deleteItem ()}>Удалить весь список дел</button>
        </div>
        </form>
        </div>
    )
}


}