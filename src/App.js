import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state={
      isData:false,
      quote:'',
      author:'',
      ColorHolder : '#FFA500'
    }
  }

  componentDidMount(){
    this.getQuote();
  }  

  getQuote= ()=>{
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res=>res.json())
    .then(res=>{
      let data = res.quotes
      let quoteNum = Math.floor(Math.random() * data.length) 
      let randomQuote = data[quoteNum] 
      this.setState({
        quote:randomQuote['quote'],
        author:randomQuote['author'],
        isData:true
      })

      var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 
      this.setState({
      
        ColorHolder : ColorCode
      
      })
    })
  }

  render(){
    const {quote,author}=this.state;
    return (
      <div id='wrapper'>
            <h1 className='title'>Random Quote App</h1>

            <div id='quote-box' style={{color:this.state.ColorHolder, borderColor:this.state.ColorHolder}}>
                <i class="fas fa-quote-left"></i><div id='text'><p>{quote}</p></div>
               <div id='author'>-{author}</div>

               <div id='buttons'>
                  <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote} ${author}`} target='_blank' title="Post this quote on twitter!">
                     <span>
                        <i className="fab fa-twitter twitter-icon" /> 
                     </span>
                  </a>
                  <button id='new-quote' style={{backgroundColor:this.state.ColorHolder}} className='buttons' onClick={this.getQuote}>New Quote</button>
               </div>
            </div>
         </div>
    );
  }
  
}

export default App;
