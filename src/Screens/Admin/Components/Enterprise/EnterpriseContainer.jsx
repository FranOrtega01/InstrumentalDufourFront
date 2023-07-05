import React, { useState, useEffect } from 'react'
import { EnterpriseList } from './EnterpriseList.jsx'

export const EnterpriseContainer = () => {

  const [enterprise, setEnterprise] = useState([])
  const [error, setError] = useState(false)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://carmine-bat-cap.cyclic.app/api/admin/enterprise');
        const json = await response.json();
        const jsonContacts = await json.enterprises

        // Asignar los contactos 
        setEnterprise(jsonContacts);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className='contactBody'>
        <header className='shadow'>
          <h2>Enterprise <span>({enterprise?.length || 0})</span></h2>
        </header>
        {error ? <p>Error fetching enterprises</p> : (
          <>
            <form method="get" className="searchCont p-0">
              <div>
                <input className="form-control my-4  px-3" name="query" placeholder="Search..." type="text" />
                <select className="form-select mx-4" name="sort">
                  <option selected disabled>Sort by</option>
                  <option value="desc">Newer</option>
                  <option value="asc">Older</option>
                </select>
                <select className="form-select" name="limit">
                  <option selected disabled>Limit</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </div>
              <div className='formBtn'>
                <a className="btn btn-secondary" href="/admin/contact">Borrar filtros</a>
              </div>
            </form>
            <EnterpriseList enterprise={enterprise} />
          </>
        )
        }
      </section>
    </>
  )
}
