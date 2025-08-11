function List(){

    const buah = [{id: 1, name:"apel", jumlah: 10}, {id: 2,name:"pisang", jumlah:8}, {id: 3,name:"jeruk", jumlah: 15}];

    // buah.sort((a,b) => a.name.localeCompare(b.name));
    buah.sort((a,b) => b.name.localeCompare(a.name));

    const listitem = buah.map(buah => <li key={buah.id}>{buah.name}: &nbsp; <b>{buah.jumlah}</b></li>);

    return(<ol>{listitem}</ol>);
}

export default List