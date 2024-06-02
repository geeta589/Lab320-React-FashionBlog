function FashionListItem({data}){
    return(
        <div>
            <h2>{data.date}</h2>
            <h2>{data.title}</h2>
            <img src={data.image} alt="" />
            <h2>{data.content}</h2>
        </div>
    ) 
    

}
export default FashionListItem