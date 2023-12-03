import Cards from "./Cards"

const CardItems = ({list}) => {
    return (
        <div className='flex flex-wrap gap-10 flex-col md:flex-row'>
            {list.map((l) => {
                return <Cards key={l.id} title={l.title} content={l.content} type={l.type} id={l.id} />
            })}
        </div>
    )
}

export default CardItems
