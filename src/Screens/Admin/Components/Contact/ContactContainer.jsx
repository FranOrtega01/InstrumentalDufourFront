import React, { useState, useEffect, useContext } from 'react'
import { ContactList } from './ContactList'
import { EnterpriseList } from '../Enterprise/EnterpriseList'
import { useLocation } from 'react-router-dom'
import config from '../../../../config/config'
import { Loading } from '../../../../Components/Loading/Loading'
import { AdminHeader } from '../AdminHeader'
import { AuthContext } from '../../../../Context/authContext'

export const ContactContainer = ({ update, contacts, ContactContainer }) => {

    const resetParams = () => {
        setSort('');
        setInputSort('');
        setQuery('');
        setInputQuery('');
        setLimit('5');
        setInputLimit('5');
        setPage(1);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
        setInputSort(e.target.value);
    };

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
        setInputQuery(e.target.value);
    };

    const handleLimitChange = (e) => {
        setLimit(e.target.value);
        setInputLimit(e.target.value);
    };

    const [filteredContacts, setFilteredContacts] = useState([])
    const [error, setError] = useState(false)

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const [sort, setSort] = useState('')
    const [query, setQuery] = useState('')
    const [limit, setLimit] = useState('')
    const [page, setPage] = useState(1)

    const [inputSort, setInputSort] = useState('');
    const [inputQuery, setInputQuery] = useState('');
    const [inputLimit, setInputLimit] = useState('5');

    const location = useLocation();

    

    const { checkIsLogged } = useContext(AuthContext)

    useEffect(() => {
        checkIsLogged()
    }, []);

    useEffect(() => {
        resetParams();
    }, [location.pathname]);

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

                const response = await fetch(`${config.backURL}/api${location.pathname}?${params.toString()}`, {
                    credentials: 'include'

                });
                const json = await response.json();
                const jsonContacts = await json.payload
                // Asignar los contactos 
                setFilteredContacts(jsonContacts);
                setData(json)
            } catch (error) {
                setError(true);
            }
            finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [location, sort, query, limit, page, contacts]);

    return (
        <>
            <section className='body contactBody'>
                <AdminHeader><h2>{ContactContainer ? 'Contacts' : 'Enterprises'} <span>({data?.totalDocs})</span></h2></AdminHeader>

                <div className="searchCont p-0">
                    <div>
                        <input
                            onChange={handleQueryChange}
                            value={inputQuery}
                            className="form-control my-4  px-3"
                            name="query"
                            placeholder="Search..."
                            type="text"
                        />
                        <select onChange={handleSortChange} value={inputSort} className="form-select mx-4" name="sort">
                            <option value=''>Sort by</option>
                            <option value="desc">Newer</option>
                            <option value="asc">Older</option>
                        </select>
                        <select onChange={handleLimitChange} value={inputLimit} className="form-select" name="limit">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                </div>
                {loading ? <Loading />
                    :
                    error ? <p>Something went wrong while fetching contacts.</p> : filteredContacts?.length === 0 ?
                        <p className='text-center'>No contacts found</p> :
                        (
                            <>
                                {ContactContainer ? <ContactList contacts={filteredContacts} update={update} /> : <EnterpriseList update={update} enterprise={filteredContacts} />}
                                <div className="paginateBtn">
                                    {data.hasPrevPage && <span onClick={() => setPage(page - 1)}>{data.prevPage}</span>}
                                    <span style={styles.page}>{page}</span>
                                    {data.hasNextPage && <span onClick={() => setPage(page + 1)}>{data.nextPage}</span>}
                                </div>
                            </>
                        )}
            </section>
        </>
    )
}
const styles = {
    page: {
        fontSize: 28,
        color: '#4e4e4e',
        cursor: 'auto'
    }
}