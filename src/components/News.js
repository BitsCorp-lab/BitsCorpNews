import { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import PropTypes from "prop-types"

class News extends Component{

    
    
     capitalizeFirstLetter=(string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    


    constructor(props){
        super(props);
        this.state={
          dataNews:[],
          loding: false,
          page: 1,
          
        }
      }
      async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=20`;
        this.setState({
          loding:true
        });
        let data = await fetch(url);
        let prasedData = await data.json();
        this.setState({dataNews: prasedData.articles, totalResults:prasedData.totalResults})
        this.setState({
          loding:false
        });
      }
      handleNextClick = async()=>{
          if(this.state.page >= Math.ceil(this.state.totalResults/20)){

          }else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1 }&pageSize=20`;
            this.setState({
              loding:true
            })
            let data = await fetch(url);
            let prasedData = await data.json();
            this.setState
            ({dataNews: prasedData.articles,
            page: this.state.page+1,
            loding:false})
          }
        
       
        
      }
      handlePrevClick = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1 }&pageSize=20`;
        this.setState({loding:true})
        let data = await fetch(url);
        let prasedData = await data.json();
        this.setState
        ({dataNews: prasedData.articles,
        page: this.state.page-1,
        loding:false})
      }


  
    render(){
        
        return(
          
            <div className="container">
              
                <h2 className="text-center">BitsCorp - News - Top Headlines - {this.capitalizeFirstLetter(this.props.category)}</h2>
                {this.state.loding && <Spinner/>}
                <div className="row">
                
                   {
                       !this.state.loding && this.state.dataNews.map((elements)=> {
                        return(
                            <div className="col-md-3">
                            
                            <NewsItem Title={elements.title?elements.title.slice(0,45):""} Description={elements.description?elements.description.slice(0,88):""} ImageUrl={elements.urlToImage} NewsUrl={elements.url} date={elements.publishedAt}/>
                            </div> 
                        );
                            
                            

                    })}  ;
                     
                    
                    
                </div>
                <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
                <button disabled={this.state.page >= Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                
                </div>
            </div>
        )
    }
}
export default News;