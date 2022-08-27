import React from 'react';

function List({ dataSource, callback, children }) {
    return (
        <>
            {children}
            <ul>
                {dataSource.map((d) => {
                    callback(d.id);
                    return (
                        <li key={d.id}>{d.name}</li>)
                }
                )}
            </ul>
        </>
    );
}

export default List;