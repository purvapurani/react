import React from 'react'

const Ninjas = ({ ninjas, deleteNinja }) => {

  // const { ninjas } = this.props;
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <section className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete {ninja.name}</button>
      </section>
    ) : null ;
  });

  return (
    <div className="ninja-list">
      {ninjaList}
    </div>
  );
}

export default Ninjas;