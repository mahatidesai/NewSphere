import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import {DotLoader} from 'react-spinners';
import { Categories } from "./Categories";
import { useParams } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

export const News = (props) => {

    const {categoryName} = useParams();
    
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setResults] = useState(null)
    const [nextDisabled, setnextDisabled] = useState(false)
    
    const {BgColor, textColor} = useContext(ThemeContext);

    const category = categoryName || "general";
    //     If categoryName is truthy (a valid non-empty string), use that. If categoryName is falsy (like undefined, null, "", etc.), fall back to "general"

    useEffect(()=> {
        setLoading(true);
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=${props.pageSize}`)
        .then((res)=>{
            setData(res.data.articles);
            setLoading(false);
            setResults(res.data.totalResults);
        })
        .catch((err)=> {
            setError(err.message)
            console.log(error)
            setLoading(false);
        })
    },
    [page, category, props.pageSize, error])

    function handlePreviousClick(){
        if (page > 1){ setPage(page-1) }
        setnextDisabled(false)
    }

    function handleNextClick(){
        console.log(totalResults)
        if (page+1 <= Math.ceil(totalResults/props.pageSize)){
            setPage(page + 1)
            setnextDisabled(page +1 >= Math.ceil(totalResults/props.pageSize));
        }
    }



    return(
        <>
        <Categories />
        <div className='NewsPage'>
        
            <div className='NewsComponent' style={{backgroundColor: BgColor}}>
                {
                    
                    isLoading ? <div className='Loading'><DotLoader size={45} color="red"/></div>: 
                    data?.map((_, i)=> {
                        return(
                        <div className='NewsItem' key={i}>
                            <img src={data[i]?.urlToImage} alt='NewsImage'/>
                            
                            <div className='NewsTop'>
                                <div className='newsName'>{data[i].source?.name || "Unknown Source"}</div>
                                <div className="time">
                                {`${Math.floor((new Date() - new Date(data[i]?.publishedAt)) / (1000 * 60*60))} minutes ago`}
                                </div>
                            </div>

                            <div className="NewsTitle" style={{color: textColor}}>{data[i].title || "No title available"}</div>
                            <div className='newsAuthor'>
                                By: {data[i]?.author || 'Unkown'}
                            </div>
                            
                            
                            
                            <a href={data[i]?.url} 
                            className='seeMore'>Read More..</a>
                        </div>
                        )
                    })
                }  
            </div>

            <div className='pageButtons' style={{backgroundColor: BgColor}}>
                <button disabled={page<=1} type="button" className="btn btn-danger btn-lg button" onClick={handlePreviousClick}>&larr; Previous </button>
                <button disabled={nextDisabled} type="button"  className="btn btn-danger btn-lg button" onClick={handleNextClick}>Next &rarr;</button> 
            </div>
        </div>
        </>
    );
}