

function NewsItem(props){
    
        let {Title, Description, ImageUrl, NewsUrl,date} = props;
        let gmtDate = new Date (date);
        let Gmt = gmtDate.toGMTString();
        

        return(
            <>
            <div className="my-4">
                <div className="card" style={{width: "18rem"}}>
                    <img src={ImageUrl} className="card-img-top" alt="..." style={{height:"214px"}}/>
                        <div className="card-body">
                        <span class="badge badge-pill badge-dark">Dark</span>
                        
                            <h5 className="card-title" style={{height:"71px"}}>{Title}</h5>
                            
                            <p className="card-text" style={{height:"96px"}}>{Description}<span class="badge badge-pill badge-dark">Dark</span></p>
                            
                            <p class="card-text"><small class="text-muted">{Gmt}</small></p>
                            <a href={NewsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                        </div>
                    </div>
            </div>
            </>
        );
    
}
export default NewsItem