import CoffeeCard from "./CoffeeCard.js";

function CoffeeList() {

    const coffeeList = [
        { id: 1, name: "Arabica Coffee", url: "https://picsum.photos/id/237/300/200" },
        { id: 2, name: "Sagada Coffee", url: "https://picsum.photos/id/238/300/200" },
        { id: 3, name: "Hazelnut Coffee", url: "https://picsum.photos/id/239/300/200"},
        { id: 4, name: "Barako Coffee", url: "https://picsum.photos/id/240/300/200" },
        { id: 5, name: "Robusta Coffee", url: "https://picsum.photos/id/241/300/200" },
    ];

    return(
        <>
            <div>CoffeeList</div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: '24px',
                rowGap: '24px',
                margin: '48px 0',
            }} >
                {
                    coffeeList &&
                    coffeeList.map(coffee => (
                        <CoffeeCard url={coffee.url} name={coffee.name} description={coffee.url} key={coffee.id} />
                    ))
                }
            </div>
        </>
    );
}

export default CoffeeList;