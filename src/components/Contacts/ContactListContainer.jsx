import React, {useState, useEffect} from "react"

export const ContactListContainer = () => {

    const [contacts, setContacts] = useState([])
  
    useEffect(() => {
  
      fetch('http://127.0.0.1:8080/api/admin/contact')
        .then(data => data.json())
        .then(data => {
          setContacts(data.contacts)
          console.log(contacts);
        })      
      }, [])
    
    return (
      <>
          {contacts.map(contact => <h2>{contact.name}</h2> )}
        {/* <div class="row justify-content-center">
      <div class="row col-11">
          
          <form method="get" class="searchCont p-0">
              <div>
                  <input class="form-control my-4  px-3" name="query" placeholder="Search..." type="text">
                  <select class="form-select mx-4" name="sort">
                      <option selected disabled>Sort by</option>
                      <option value="desc">Newer</option>
                      <option value="asc">Older</option>
                  </select>
                  <select class="form-select" name="limit">
                      <option selected disabled>Limit</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                  </select>
              </div>
              <div>
                  <a class="btn btn-secondary mr-3" href="/admin/contact">Borrar filtros</a>
                  <button type="submit" class="btn btn-dark">Buscar</button>
              </div>
          </form>
          {{#if data.docs}}
              {{#each data.docs}}
              <div id="contactsViewCard" class="col-12">
                  <div class="contactsView-name">Name: {{this.name}}</div>
                  <div class="contactsView-enterprise">Enterprise: {{this.enterprise}}</div>
                  <div class="contactsView-email">Email: <span>{{this.email}}</span></div>
                  <div class="contactsView-callSign">Call Sign: {{this.callSign}}</div>
                  <div class="contactsView-flag">Flag: {{this.flag}}</div>
                  <div class="contactsView-btn">
                      <i data-toggle="modal" data-target="#updateContactModal" data-id={{_id}} class="fa-solid fa-pen"></i>
                      <i data-id={{this._id}} class="fa-solid fa-trash-can"></i>
                  </div>
              </div>
              {{/each}}
          {{else}}
              <p>Contact not found</p>
          {{/if}}
      </div>
  </div> */}
      </>
    );
  }
  
 