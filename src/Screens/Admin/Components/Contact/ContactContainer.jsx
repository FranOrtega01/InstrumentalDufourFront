import React, { useState, useEffect } from 'react'
import { ContactList } from './ContactList'
import { EnterpriseList } from '../Enterprise/EnterpriseList'
import { Link, useLocation } from 'react-router-dom'


export const ContactContainer = ({ contact }) => {

    const [contacts, setContacts] = useState([])
    const [error, setError] = useState(false)

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const [sort, setSort] = useState('')
    const [query, setQuery] = useState('')
    const [limit, setLimit] = useState('')
    const [page, setPage] = useState(1)

    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                // Construir los parámetros de búsqueda
                const params = new URLSearchParams()
                if (query) params.append('query', query)
                if (sort) params.append('sort', sort)
                if (limit) params.append('limit', limit)
                if (page) params.append('page', page)

                console.log(params);
                const response = await fetch(`https://carmine-bat-cap.cyclic.app${location.pathname}?${params.toString()}`);
                const json = await response.json();
                const jsonContacts = await json.payload
                // Asignar los contactos 
                setContacts(jsonContacts);
                setData(json)
                console.log(json);
            } catch (error) {
                console.log(error);
                setError(true);
            }
            finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [location, sort, query, limit, page]);

    return (
        <>
            <section className='contactBody'>
                <header className='shadow'>
                    <h2>{contact ? 'Contacts' : 'Enterprises'} <span>({data.totalDocs})</span></h2>
                </header>
                <div className="searchCont p-0">
                    <div>
                        <input onChange={(e) => setQuery(e.target.value)} className="form-control my-4  px-3" name="query" placeholder="Search..." type="text" />
                        <select onChange={(e) => setSort(e.target.value)} className="form-select mx-4" name="sort">
                            <option selected disabled>Sort by</option>
                            <option value="desc">Newer</option>
                            <option value="asc">Older</option>
                        </select>
                        <select onChange={(e) => setLimit(e.target.value)} className="form-select" name="limit">
                            <option selected disabled>Limit</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className='formBtn'>
                        <a className="btn btn-secondary" href="/admin/contact">Borrar filtros</a>
                    </div>
                </div>
                {loading ? <p>loading...</p> : error ? <p>Something went wrong while fetching contacts.</p> : (
                    <>
                        {contact ? <ContactList contacts={contacts} /> : <EnterpriseList enterprise={contacts} />}
                        <div className="paginateBtn">
                            {data.hasPrevPage && <span onClick={() => setPage(page - 1)}>{data.prevPage}</span>}
                            {data.hasNextPage && <span onClick={() => setPage(page + 1)}>{data.nextPage}</span>}
                        </div>
                    </>
                )}
            </section>
        </>
    )
}
