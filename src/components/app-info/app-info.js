import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return(
        <div className="app-info">
            <h1>Ychet sotrudnikov</h1>
            <h2>Chislo sotrudnikov:  {employees} </h2>
            <h2>Premiu poluchat: {increased}</h2>
        </div> 
    )
}

export default AppInfo;