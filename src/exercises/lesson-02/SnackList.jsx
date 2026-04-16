// Default export a component that **contains** an array of snack objects 
// (each with `name` and `rank`, where `1` = favorite).

export default function SnackList(){
    const snackList = [
        {name: "Doritos", rank: 5},
        {name: "Oreos", rank: 4},
        {name: "M&Ms", rank: 3},
        {name: "Takis", rank: 2},
        {name: "KitKat", rank: 1}
    ];

    const sortedSnackList = snackList.toSorted((a, b) => (a.rank - b.rank));

    return (
        <div>
            <ol>{sortedSnackList.map((item) => (<li key={item.name}>{item.name}</li>))}</ol>
        </div>
    );
};