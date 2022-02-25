function CoffeeCard({url, name, description}) {
    return (
        <div className="card">
            <div className="header">
                <img src={url} />
            </div>
            <div className="card-body">
                <div className="title">{name}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    );
}

export default CoffeeCard;