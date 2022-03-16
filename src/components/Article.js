function Article({title,date='January 1, 1970',preview,minutes}){
    let str='';
    let num=minutes;
    if(minutes<30){
        
            num=parseInt(num/5) ;
           for(let i=0;i<num;i++){
               str+='☕️'
           }
        
    }else{
            str='🍱'
            num=parseInt(num/10)
            for(let i=0;i<num;i++){
                str+='🍱 '
            }
            
        
    }

    return <article>
        <h3>{title}</h3>
        <small>{date+' '+str+minutes+' min read'}</small>

        <p>{preview}</p>
    </article>
}

export default Article;