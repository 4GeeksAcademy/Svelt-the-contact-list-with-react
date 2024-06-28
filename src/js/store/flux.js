const getState = ({ getStore, getActions, setStore }) => {
	let apiUrl = "https://playground.4geeks.com/contact/";
	return {
	  store: {
		contacts: [],
	  },
	  actions: {
		createContactList: () => {},
		getContacts: () => {
			fetch(apiUrl+"agendas/chaolinespo/contacts")
			.then(resp=>resp.json())
			.then(data=>setStore({contacts:data.contacts}))
			.catch(error=>console.log(error))
		},
		addContact: () => {},
		editContact: () => {},
		deleteContact: () => {},
	  },
	};
  };
  
  export default getState;
  