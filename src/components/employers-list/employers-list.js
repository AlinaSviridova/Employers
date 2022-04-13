import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({data, onDelete, onToggleProp}) => {

    // map = method kotorii perebiraet elements
    // item = each element in array
    const elements = data.map (item => {

        // вытаскиваем в переменную id с помощью синтаксиса деструктуризации по остаточному принципу
        // только айдишник и вставим его значение в kеу
        const {id, ...itemProps} = item;

        return(
            // <EmployersListItem name={item.name} salary={item.salary}/>

            // Or we can use object spread operator  Kotorii razvorachivaet object
            <EmployersListItem 
                key={id} 
                {...itemProps}
                onDelete = {() => onDelete(id)}
                onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} 
                />
        )
    })

    return (
        <ul className="applist list-group">
             {elements}
        </ul>
    )
}

export default EmployersList;